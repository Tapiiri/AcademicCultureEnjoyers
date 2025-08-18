export function isSignupOpen(opens: string, now: Date = new Date()): boolean {
  if (!opens) return false;
  return now.getTime() >= new Date(opens).getTime();
}
