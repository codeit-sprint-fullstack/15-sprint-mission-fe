export const queryKeys = {
  articles: {
    all: () => ['article'],
    bestArticles: () => ['article', 'list', 'best'],
    list: (queryParams) => ['article', 'list', queryParams],
    detail: (id) => ['article', 'detail', id],
  },
  replies: {
    all: () => ['reply'],
  },
};
