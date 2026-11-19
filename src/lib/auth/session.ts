/**
 * Signed session tokens for the player login and the admin page.
 *
 * Uses only Web Crypto, so the same code runs in the proxy, route handlers and tests.
 * Token format: base64url(JSON payload) + "." + base64url(HMAC-SHA256(payload)).
 * Secrets never live in this repository: they come from Vercel environment variables.
 */
import { z } from "zod";

export const PLAYER_COOKIE = "aq_session";
export const ADMIN_COOKIE = "aq_admin";
export const PLAYER_SESSION_DAYS = 30;
export const ADMIN_SESSION_HOURS = 12;

const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}' .-]*$/u;
export const NAME_MAX = 40;

export const playerSessionSchema = z.object({
  kind: z.literal("player"),
  firstName: z.string().min(1).max(NAME_MAX),
  lastName: z.string().min(1).max(NAME_MAX),
  /** Random per-login id, so separate sittings can be told apart in the log. */
  sid: z.string().min(8).max(64),
  iat: z.number().int(),
  exp: z.number().int(),
});
export type PlayerSession = z.infer<typeof playerSessionSchema>;

export const adminSessionSchema = z.object({
  kind: z.literal("admin"),
  iat: z.number().int(),
  exp: z.number().int(),
});
export type AdminSession = z.infer<typeof adminSessionSchema>;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(text: string): Uint8Array | null {
  if (!/^[A-Za-z0-9_-]*$/.test(text)) return null;
  try {
    const binary = atob(text.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (text.length % 4)) % 4));
    return Uint8Array.from(binary, (c) => c.charCodeAt(0));
  } catch {
    return null;
  }
}

async function hmac(secret: string, data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
  ]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(data)));
}

function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
  return diff === 0;
}

/** Compares two secrets without leaking their length or content through timing. */
export async function secretsMatch(given: string, expected: string): Promise<boolean> {
  if (!expected) return false;
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(given)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  return constantTimeEqual(new Uint8Array(a), new Uint8Array(b));
}

export async function signToken(payload: PlayerSession | AdminSession, secret: string): Promise<string> {
  const body = toBase64Url(encoder.encode(JSON.stringify(payload)));
  const signature = toBase64Url(await hmac(secret, body));
  return `${body}.${signature}`;
}

async function verify<T>(token: string | undefined, secret: string, schema: z.ZodType<T>, now: number): Promise<T | null> {
  if (!token || !secret || token.length > 2048) return null;
  const [body, signature, extra] = token.split(".");
  if (!body || !signature || extra !== undefined) return null;
  const given = fromBase64Url(signature);
  if (!given || !constantTimeEqual(given, await hmac(secret, body))) return null;
  const raw = fromBase64Url(body);
  if (!raw) return null;
  try {
    const parsed = schema.safeParse(JSON.parse(decoder.decode(raw)));
    if (!parsed.success) return null;
    const { exp } = parsed.data as { exp: number };
    return exp > Math.floor(now / 1000) ? parsed.data : null;
  } catch {
    return null;
  }
}

export function verifyPlayerToken(token: string | undefined, secret: string, now = Date.now()) {
  return verify(token, secret, playerSessionSchema, now);
}

export function verifyAdminToken(token: string | undefined, secret: string, now = Date.now()) {
  return verify(token, secret, adminSessionSchema, now);
}

export function newPlayerSession(firstName: string, lastName: string, now = Date.now()): PlayerSession {
  const iat = Math.floor(now / 1000);
  const sid = toBase64Url(crypto.getRandomValues(new Uint8Array(12)));
  return { kind: "player", firstName, lastName, sid, iat, exp: iat + PLAYER_SESSION_DAYS * 86_400 };
}

export function newAdminSession(now = Date.now()): AdminSession {
  const iat = Math.floor(now / 1000);
  return { kind: "admin", iat, exp: iat + ADMIN_SESSION_HOURS * 3_600 };
}

/** Trims, collapses inner spaces and validates a typed name. Returns null when unusable. */
export function normalizeName(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const name = value.normalize("NFC").trim().replace(/\s+/g, " ");
  if (name.length < 1 || name.length > NAME_MAX || !NAME_PATTERN.test(name)) return null;
  return name;
}

/** Only allow same-site relative redirects after login ("/play/x/1"), never "//evil.com" or absolute URLs. */
export function safeNextPath(value: unknown, fallback = "/"): string {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) {
    return fallback;
  }
  if (value.startsWith("/login") || value.startsWith("/api/")) return fallback;
  return value.length > 512 ? fallback : value;
}
