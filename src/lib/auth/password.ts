import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

/**
 * Password hashing with scrypt (built into Node, no extra service or package).
 * Stored format: scrypt$N$r$p$salt$hash (base64url). Parameters are stored so they can be raised later.
 */
const scrypt = promisify(scryptCallback) as (password: string, salt: Buffer, keylen: number, options: object) => Promise<Buffer>;

const N = 16384;
const R = 8;
const P = 1;
const KEY_LENGTH = 32;

export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 100;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const hash = await scrypt(password, salt, KEY_LENGTH, { N, r: R, p: P, maxmem: 64 * 1024 * 1024 });
  return ["scrypt", N, R, P, salt.toString("base64url"), hash.toString("base64url")].join("$");
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [kind, n, r, p, saltText, hashText] = stored.split("$");
  if (kind !== "scrypt" || !n || !r || !p || !saltText || !hashText) return false;
  const expected = Buffer.from(hashText, "base64url");
  const actual = await scrypt(password, Buffer.from(saltText, "base64url"), expected.length, {
    N: Number(n),
    r: Number(r),
    p: Number(p),
    maxmem: 64 * 1024 * 1024,
  });
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

/** A readable temporary password for admin resets, e.g. "cedar-lamp-4821". */
export function temporaryPassword(): string {
  const words = ["cedar", "lamp", "scroll", "olive", "harp", "stone", "river", "manna", "cloak", "sling", "tent", "well"];
  const bytes = randomBytes(3);
  const pick = (b: number) => words[b % words.length]!;
  const number = 1000 + (randomBytes(2).readUInt16BE(0) % 9000);
  return `${pick(bytes[0]!)}-${pick(bytes[1]!)}-${number}`;
}

export function validatePassword(value: unknown): string | null {
  if (typeof value !== "string" || value.length < PASSWORD_MIN || value.length > PASSWORD_MAX) return null;
  return value;
}

/** Usernames: 3–24 characters, lower-case letters, digits, dot, dash or underscore. Case-insensitive. */
export function normalizeUsername(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const username = value.trim().toLowerCase();
  return /^[a-z0-9][a-z0-9._-]{2,23}$/.test(username) ? username : null;
}
