const HEART_PATH =
  "M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z";

export function HeartIcon({ filled = false, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {filled ? (
        <path d={HEART_PATH} fill="#FF68CC" />
      ) : (
        <path d={HEART_PATH} stroke="#6B7280" strokeWidth="1.6" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function KebabIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12.5" cy="6.5" r="1.5" fill="#9CA3AF" />
      <circle cx="12.5" cy="11.5" r="1.5" fill="#9CA3AF" />
      <circle cx="12.5" cy="16.5" r="1.5" fill="#9CA3AF" />
    </svg>
  );
}

export function SearchIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="#9CA3AF" strokeWidth="1.6" />
      <path d="M16 16L20 20" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SortIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H12M4 12H9M4 17H7" stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M17 6V18M17 18L13.5 14.5M17 18L20.5 14.5"
        stroke="#1F2937"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CaretDownIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 9H19L12 17L5 9Z" fill="#1F2937" />
    </svg>
  );
}

export function ChevronIcon({ direction = "right", size = 16 }) {
  const d = direction === "left" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13";
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={d} stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}