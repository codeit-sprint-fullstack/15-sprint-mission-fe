# 판다마켓 - 중고마켓 페이지

## 실행 방법
```bash
npm install
npm run dev
```

## 폴더 구조
```
src/
  api/            서버와 통신하는 함수만 모아둠 (productApi.js)
  hooks/          데이터/반응형 로직을 담은 커스텀 훅
    useMediaQuery.js    특정 미디어쿼리를 만족하는지 boolean 반환
    useDeviceType.js    mobile/tablet/desktop 판별
    useProducts.js      전체 상품 목록 + 페이지네이션 + 정렬 + 검색
    useBestProducts.js  베스트 상품 목록
  components/     화면에 그려지는 조각들 (컴포넌트 + 같은 이름의 css)
  App.jsx         페이지 조립
  main.jsx        진입점
```

## 아이콘 / 이미지 자산
- `src/assets/icons/` : 로고, 하트, 검색, 정렬 화살표, 페이지네이션 화살표, SNS 아이콘 (svg)
- `public/images/sample-1.png ~ sample-14.png` : 제공받은 목업 사진.
  요구사항대로 상품 사진은 `/products` API의 `images[0]`을 기본으로 쓰고,
  그 URL이 깨졌을 때(onError)만 이 사진들 중 하나를 대신 보여주는 fallback 용도로 사용했습니다.

## 반응형 기준 (임의로 정한 값 - 필요시 조정)
- breakpoint: mobile < 768px, tablet 768~1199px, desktop >= 1200px
- 베스트 상품 pageSize: mobile 1 / tablet 2 / desktop 4
- 전체 상품 pageSize: mobile 4 / tablet 6 / desktop 10
