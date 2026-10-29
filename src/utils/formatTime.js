const formatter = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function formatDate(isoString) {
  const date = new Date(isoString);

  if (Number.isNaN(date.getTime())) return "";

  const parts = formatter.formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;

  return `${get("year")}.${get("month")}.${get("day")}`;
}
