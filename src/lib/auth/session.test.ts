import { describe, expect, it } from "vitest";
import {
  newAdminSession,
  newPlayerSession,
  normalizeName,
  safeNextPath,
  secretsMatch,
  signToken,
  verifyAdminToken,
  verifyPlayerToken,
} from "./session";

const SECRET = "test-secret-that-is-at-least-32-characters-long";

describe("signed tokens", () => {
  it("round-trips a player session", async () => {
    const session = newPlayerSession("Dana", "Levi");
    const token = await signToken(session, SECRET);
    expect(await verifyPlayerToken(token, SECRET)).toEqual(session);
  });

  it("rejects a token signed with another secret", async () => {
    const token = await signToken(newPlayerSession("Dana", "Levi"), SECRET);
    expect(await verifyPlayerToken(token, `${SECRET}-other`)).toBeNull();
  });

  it("rejects a tampered payload", async () => {
    const token = await signToken(newPlayerSession("Dana", "Levi"), SECRET);
    const [, signature] = token.split(".");
    const forged = Buffer.from(JSON.stringify({ ...newPlayerSession("Eve", "Hacker") })).toString("base64url");
    expect(await verifyPlayerToken(`${forged}.${signature}`, SECRET)).toBeNull();
  });

  it("rejects expired, empty and malformed tokens", async () => {
    const past = Date.now() - 31 * 86_400_000;
    const expired = await signToken(newPlayerSession("Dana", "Levi", past), SECRET);
    expect(await verifyPlayerToken(expired, SECRET)).toBeNull();
    expect(await verifyPlayerToken(undefined, SECRET)).toBeNull();
    expect(await verifyPlayerToken("abc", SECRET)).toBeNull();
    expect(await verifyPlayerToken("a.b.c", SECRET)).toBeNull();
    expect(await verifyPlayerToken(await signToken(newPlayerSession("A", "B"), SECRET), "")).toBeNull();
  });

  it("keeps player and admin tokens apart", async () => {
    const player = await signToken(newPlayerSession("Dana", "Levi"), SECRET);
    const admin = await signToken(newAdminSession(), SECRET);
    expect(await verifyAdminToken(player, SECRET)).toBeNull();
    expect(await verifyPlayerToken(admin, SECRET)).toBeNull();
    expect(await verifyAdminToken(admin, SECRET)).not.toBeNull();
  });
});

describe("secretsMatch", () => {
  it("matches exactly and is case-sensitive", async () => {
    expect(await secretsMatch("Shepherd42", "Shepherd42")).toBe(true);
    expect(await secretsMatch("shepherd42", "Shepherd42")).toBe(false);
    expect(await secretsMatch("", "Shepherd42")).toBe(false);
    expect(await secretsMatch("anything", "")).toBe(false);
  });
});

describe("normalizeName", () => {
  it("trims and collapses spaces", () => {
    expect(normalizeName("  Mary   Ann ")).toBe("Mary Ann");
  });
  it("accepts accents, apostrophes and hyphens", () => {
    expect(normalizeName("Zoë")).toBe("Zoë");
    expect(normalizeName("O'Brien-Smith")).toBe("O'Brien-Smith");
    expect(normalizeName("דוד")).toBe("דוד");
  });
  it("rejects empty, too long, or markup-like input", () => {
    expect(normalizeName("")).toBeNull();
    expect(normalizeName("   ")).toBeNull();
    expect(normalizeName("x".repeat(41))).toBeNull();
    expect(normalizeName("<script>")).toBeNull();
    expect(normalizeName("-Dana")).toBeNull();
    expect(normalizeName(42)).toBeNull();
  });
});

describe("safeNextPath", () => {
  it("allows same-site paths", () => {
    expect(safeNextPath("/play/exodus/2")).toBe("/play/exodus/2");
    expect(safeNextPath("/about?x=1")).toBe("/about?x=1");
  });
  it("blocks open redirects and loops", () => {
    expect(safeNextPath("https://evil.com")).toBe("/");
    expect(safeNextPath("//evil.com")).toBe("/");
    expect(safeNextPath("/\\evil.com")).toBe("/");
    expect(safeNextPath("/login")).toBe("/");
    expect(safeNextPath("/api/events")).toBe("/");
    expect(safeNextPath(null)).toBe("/");
  });
});
