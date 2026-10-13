// 댓글 API가 준비되기 전까지 사용하는 목업 데이터
// 실제 API 응답과 같은 모양({ list, nextCursor })으로 맞춰두어서
// 나중에 getMockComments → 실제 API 함수로 교체만 하면 되도록 만들었습니다.

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// 지금 시각을 기준으로 "얼마 전"인지 만들어주는 헬퍼
// (고정 날짜를 쓰면 시간이 지날수록 전부 "n일 전"이 되어버리기 때문)
function ago(ms) {
  return new Date(Date.now() - ms).toISOString();
}

const MOCK_COMMENTS = [
  {
    id: 1,
    content: "혹시 사용기간이 어떻게 되실까요?",
    createdAt: ago(30 * 1000), // 방금 전
    updatedAt: ago(30 * 1000),
    writer: { id: 101, nickname: "똑똑한판다", image: null },
  },
  {
    id: 2,
    content: "배터리 사이클 수도 알려주실 수 있나요?",
    createdAt: ago(15 * MINUTE), // 15분 전
    updatedAt: ago(15 * MINUTE),
    writer: { id: 102, nickname: "궁금한판다", image: null },
  },
  {
    id: 3,
    content:
      "저도 같은 모델 쓰고 있는데 1테라면 상태 좋을 때 시세가 꽤 괜찮아요.\n박스랑 충전기까지 있으면 더 받을 수 있을 거예요!",
    createdAt: ago(1 * HOUR), // 1시간 전
    updatedAt: ago(1 * HOUR),
    writer: { id: 103, nickname: "친절한판다", image: null },
  },
  {
    id: 4,
    content: "직거래 가능하신가요?",
    createdAt: ago(3 * DAY), // 3일 전
    updatedAt: ago(3 * DAY),
    writer: { id: 104, nickname: "부지런한판다", image: null },
  },
  {
    id: 5,
    content: "아직 판매 중이신가요?",
    createdAt: ago(10 * DAY), // 10일 전 (일주일이 넘으면 날짜로 보여주기 연습용)
    updatedAt: ago(10 * DAY),
    writer: { id: 105, nickname: "느긋한판다", image: null },
  },
];

// 실제 API 함수(getArticles, getArticle)와 같은 모양의 async 함수
// 나중에 src/lib/api.js에 getComments(articleId)를 만들면 이 함수만 바꿔 끼우면 됩니다.
export async function getMockComments(_articleId) {
  return { list: MOCK_COMMENTS, nextCursor: null };
}
