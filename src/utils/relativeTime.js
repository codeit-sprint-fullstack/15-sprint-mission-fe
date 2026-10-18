import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

// dayjs().fromNow(); 사용 예시
export function formatRelativeTime(time) {
  return dayjs(time).fromNow();
}
