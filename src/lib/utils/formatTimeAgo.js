export function formatTimeAgo(isoString) {
  const createdAt = new Date(isoString).getTime();
  if (Number.isNaN(createdAt)) return "";

  const elapsedMs = Math.max(0, Date.now() - createdAt);
  const elapsedMinutes = Math.floor(elapsedMs / (60 * 1000));

  if (elapsedMinutes < 1) return "방금 전";
  if (elapsedMinutes < 60) return `${elapsedMinutes}분 전`;

  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) return `${elapsedHours}시간 전`;

  const elapsedDays = Math.floor(elapsedHours / 24);
  return `${elapsedDays}일 전`;
}
