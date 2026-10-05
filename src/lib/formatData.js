// lib/formatDate.js
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export function formatRelativeTime(dateString) {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true, locale: ko });
}