# 판다마켓 (스프린트 미션 7 + 8)

Next.js 16(App Router) · vanilla-extract · TanStack React Query · axios · react-hook-form

## 실행

```bash
pnpm install
cp .env.local.example .env.local   # 필요 시 수정
pnpm dev                           # http://localhost:3000
```



## 폴더 구조

```
src/
  app/            라우트 (auth/signIn, auth/signUp, items, board, ...)
  apis/           API 레이어 (httpClient·authApi·productsApi·articlesApi·commentsApi)
  domains/        도메인별 containers/components/hooks
  components/     공용 컴포넌트 (NavBar, FormField, Skeleton, ...)
  hooks/          공용 훅
  constants/      상수
  styles/         글로벌 스타일
  utils/          유틸
public/
  images/         상품 샘플 이미지 + auth/GNB 아이콘
  assets/         아이콘·랜딩 이미지
```

