import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inpit: ClassValue[]) {
  return twMerge(clsx(...inpit));
}
