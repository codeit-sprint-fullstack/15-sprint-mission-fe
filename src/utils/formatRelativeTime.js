const formatter = new Intl.RelativeTimeFormat("ko-KR", {
  numeric: "auto",
});

export const formatRelativeTime = (commentTime, now) => {
  const date = new Date(commentTime);
  const elapsed = now - date.getTime();
  // minutes 단위
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (elapsed < minute) {
    return "방금 전";
  }

  if (elapsed < hour) {
    return formatter.format(-Math.floor(elapsed / minute), "minute");
  }

  if (elapsed < day) {
    return formatter.format(-Math.floor(elapsed / hour), "hour");
  }

  if (elapsed < 7 * day) {
    return formatter.format(-Math.floor(elapsed / day), "day");
  }
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
