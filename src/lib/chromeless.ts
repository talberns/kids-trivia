/** Pages that show no game top bar or bottom navigation: the login screens and the admin area. */
export function isChromeless(pathname: string): boolean {
  return pathname === "/login" || pathname === "/admin" || pathname.startsWith("/admin/");
}
