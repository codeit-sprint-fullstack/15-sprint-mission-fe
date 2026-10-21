import { format } from "date-fns";
import { ko } from "date-fns/locale";

export function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return format(date, "yyyy. M. d.", { locale: ko });
}
