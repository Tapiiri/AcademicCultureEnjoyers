export const THOMASTAG_SIGNUP_OPENS = new Date('2025-08-23T09:00:00Z');
export const THOMASTAG_SIGNUP_CLOSES = new Date('2025-08-31T20:59:00Z');

export function isThomastagSignupOpen(now: Date = new Date()): boolean {
  return (
    now.getTime() >= THOMASTAG_SIGNUP_OPENS.getTime() &&
    now.getTime() <= THOMASTAG_SIGNUP_CLOSES.getTime()
  );
}

export const THOMASTAG_SIGNUP_OPENS_TEXT = '23 August 2025 at 12:00 (UTC+3)';
export const THOMASTAG_SIGNUP_CLOSES_TEXT = '31 August 2025 at 23:59 (UTC+3)';
