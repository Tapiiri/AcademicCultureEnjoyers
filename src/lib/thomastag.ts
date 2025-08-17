export const THOMASTAG_SIGNUP_OPENS = new Date('2025-08-22T09:00:00Z');

export function isThomastagSignupOpen(now: Date = new Date()): boolean {
  return now.getTime() >= THOMASTAG_SIGNUP_OPENS.getTime();
}

export const THOMASTAG_SIGNUP_OPENS_TEXT =
  '22 August 2025 at 12:00 (UTC+3)';
