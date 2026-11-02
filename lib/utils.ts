import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeTime(dateInput: string | number | Date): string {
  try {
    const timestamp = typeof dateInput === "string" || typeof dateInput === "number" 
      ? new Date(dateInput).getTime() 
      : dateInput.getTime();
    const diffSeconds = Math.floor((Date.now() - timestamp) / 1000);
    
    if (diffSeconds < 60) return "Just now";
    if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`;
    if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`;
    return `${Math.floor(diffSeconds / 86400)}d ago`;
  } catch {
    return "Recent";
  }
}
