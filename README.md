# 판다마켓 프론트엔드 (Panda Market Frontend)

> **한줄 압축**: Next.js 16(App Router) + vanilla-extract + TanStack Query 로 만든 판다마켓 웹 클라이언트 — 로그인(이메일·구글), 상품·게시글 CRUD, 좋아요, 이미지 업로드, 댓글/문의까지 미션 7·8·9를 누적한 결과물이에요.

이 문서는 **실행 방법**과 **폴더 구조**를 한 곳에 모아 둔 안내서예요. 리뷰하시는 분은 [2. 빠른 시작](#sec-2)과 [4. 프로젝트 구조](#sec-4)만 보셔도 됩니다.

## 목차

- [1. 기술 스택](#sec-1)
- [2. 빠른 시작 (설치·실행)](#sec-2)
- [3. 환경변수](#sec-3)
- [4. 프로젝트 구조](#sec-4)
- [5. 아키텍처 노트](#sec-5)
- [6. 참고 자료](#sec-6)

<a id="sec-1"></a>
## 1. 기술 스택

| 구분 | 사용 기술 |
|---|---|
| 런타임 | Node.js 24+ , ESM |
| 프레임워크 | Next.js 16.3.7 (App Router, React Compiler) |
| UI | React 19.3.0 |
| 스타일 | vanilla-extract 1.21.2 (`*.css.js`) + 디자인 토큰 |
| 서버 상태 | TanStack React Query 5 |
| HTTP | axios 1.20 (단일 인스턴스 + 인터셉터) |
| 폼 | react-hook-form 7 |
| 품질 | ESLint 9 (next/core-web-vitals) · Prettier 3 |
| 배포 | Vercel |

<a id="sec-2"></a>
## 2. 빠른 시작 (설치·실행)

```bash
# 1) 의존성 설치
pnpm install

# 2) 환경변수 준비 — .env.local.example 을 복사해 값을 채워 주세요
cp .env.local.example .env.local

# 3) 백엔드 먼저 실행 (기본 http://localhost:5001)
#    판다마켓 백엔드 저장소의 `pnpm dev` 로 띄웁니다.

# 4) 개발 서버 실행
pnpm dev        # http://localhost:3000
```

> [!NOTE]
> 이 앱은 백엔드 API(`NEXT_PUBLIC_API_BASE_URL`)에 붙어 동작해요. 백엔드를 켜지 않으면 목록·상세 화면이 비어 보일 수 있으니, 먼저 백엔드를 실행해 주세요.

### 확인하기

```bash
pnpm lint       # ESLint 검사 (오류 0 목표)
pnpm build      # 프로덕션 빌드
pnpm start      # 빌드 결과 실행
pnpm format     # Prettier 포맷 정리
```

<a id="sec-3"></a>
## 3. 환경변수

`.env.local` 에 아래 값을 넣어요(`.env.local.example` 참고).

| 변수 | 필수 | 설명 |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | ✅ | 백엔드 API 주소 (예: `http://localhost:5001/api`) |

> [!NOTE]
> 소셜 로그인(구글·카카오)은 **백엔드 콜백** 방식이라 프론트에는 provider 키가 필요 없어요.
> 클라이언트 ID·Secret은 백엔드 환경변수로만 관리합니다.

> [!IMPORTANT]
> `NEXT_PUBLIC_*` 값은 **빌드 시점에 코드로 굳어요.** 배포 환경(Vercel)에서는 값을 넣거나 바꾼 뒤 **다시 배포**해야 반영됩니다.

<a id="sec-4"></a>
## 4. 프로젝트 구조

```text
frontend/
├─ src/
│  ├─ app/                          # App Router 라우트 (페이지 조립만 담당)
│  │  ├─ layout.js                  # 공통 레이아웃 (Providers · 전역 스타일)
│  │  ├─ (auth)/                    # 인증 그룹: signin · signup
│  │  └─ (main)/                    # 서비스 그룹: 홈 · items · board · registration · addArticle
│  ├─ apis/                         # API 레이어 (여기서만 서버와 통신)
│  │  ├─ httpClient.js              # axios 인스턴스 + 토큰 주입 · 401 리프레시 인터셉터
│  │  ├─ authApi.js                 # 로그인 · 회원가입 · 구글 · 토큰 재발급
│  │  ├─ productsApi.js             # 상품 목록 · 상세 · 등록/수정 · 좋아요
│  │  ├─ articlesApi.js             # 게시글 목록 · 상세 · 등록/수정
│  │  ├─ commentsApi.js             # 게시글 댓글
│  │  └─ productCommentsApi.js      # 상품 문의
│  ├─ domains/                      # 도메인별 containers / components / hooks
│  │  ├─ auth/                      # 로그인 · 회원가입 · 인증 컨텍스트
│  │  ├─ market/                    # 상품 목록 · 상세 · 등록/수정 · 문의
│  │  ├─ board/                     # 게시판 목록
│  │  ├─ article/                   # 게시글 상세 · 에디터
│  │  └─ home/                      # 랜딩 홈
│  ├─ components/                   # 공용 컴포넌트 (NavBar · Modal · FormField · CharCount …)
│  ├─ hooks/                        # 공용 훅 (useBreakpoint · useMediaQuery …)
│  ├─ constants/                    # 상수 (limits.js 글자수 제한 등)
│  ├─ styles/                       # 디자인 토큰 · 공용 스타일 (focus.js 공통 포커스 링)
│  └─ utils/                        # 유틸 (format · dateUtils · token.js 토큰 저장)
├─ public/
│  ├─ images/                       # 상품 · 랜딩 샘플 이미지
│  └─ assets/                       # 아이콘 · 랜딩 일러스트
├─ next.config.mjs                  # vanilla-extract 플러그인 · /uploads 프록시 · 이미지 허용
└─ jsconfig.json                    # @/* 경로 별칭
```

**폴더별 설명**

| 경로 | 하는 일 |
|---|---|
| `src/app/` | URL 경로와 레이아웃만 담당해요. 화면 내용은 `domains/` 의 컨테이너를 불러와 조립합니다. |
| `src/apis/` | 서버와 통신하는 유일한 곳이에요. 컴포넌트가 직접 `fetch`/`axios` 를 쓰지 않고 항상 여기를 거칩니다. |
| `src/domains/` | 기능별 폴더예요. `containers`(데이터·상태) → `components`(화면) → `hooks`(React Query) 로 나뉩니다. |
| `src/components/` | 여러 도메인에서 함께 쓰는 공용 컴포넌트예요. 수정하면 여러 화면에 영향을 주니 조심해 주세요. |
| `src/styles/` | 색·간격 같은 디자인 토큰과 공용 스타일. `focus.js` 는 버튼·입력창 공통 포커스 링이에요. |
| `src/utils/` | 날짜 포맷·토큰 저장 같은 순수 함수 모음이에요. |
| `public/` | 이미지·아이콘 등 정적 파일이에요. |

<a id="sec-5"></a>
## 5. 아키텍처 노트

- **도메인 구조(2겹)**: 화면은 `containers → components` 로 나눠요. `containers` 는 서버 데이터와 상태를 다루고, `components` 는 받은 데이터를 그리기만 합니다.
- **API 레이어 단일화**: 모든 통신은 `src/apis/httpClient.js` 의 axios 인스턴스를 지나요. 여기서 토큰 주입과 **401 응답 시 리프레시 토큰 자동 재발급**(회전)을 처리합니다.
- **인증 흐름**: 로그인하면 access·refresh 토큰을 `utils/token.js` 로 저장해요. 만료된 access 로 요청하면 인터셉터가 refresh 로 한 번 갱신하고, 원래 요청을 다시 보냅니다.
- **구글 로그인(Authorization Code)**: `useGoogleLogin.js` 가 구글 화면으로 보내고, 돌아온 `code` 를 백엔드 `POST /auth/google` 로 전달해요. `redirect_uri` 는 구글 콘솔·이 앱·백엔드 **세 곳이 정확히 같아야** 합니다.
- **스타일 규칙**: vanilla-extract 의 `style()` 을 쓰고, `:hover`·`:focus`·`:disabled` 같은 단순 상태는 최상위 키로, `&:active:not(:disabled)` 처럼 복합 셀렉터만 `selectors` 로 씁니다.
- **업로드 이미지 표시**: 업로드한 이미지는 백엔드 `/uploads/*` 에 있어요. `next.config.mjs` 의 `rewrites` 가 이 경로를 백엔드로 프록시하고, `next/image` 의 `remotePatterns` 로 원격 이미지를 허용합니다.

<a id="sec-6"></a>
## 6. 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [vanilla-extract 문서](https://vanilla-extract.style/)
- [TanStack Query 문서](https://tanstack.com/query/latest)
- [axios 문서](https://axios-http.com/)
- [React Hook Form 문서](https://react-hook-form.com/)
- [Google OAuth 2.0 (웹 서버 앱)](https://developers.google.com/identity/protocols/oauth2/web-server)
