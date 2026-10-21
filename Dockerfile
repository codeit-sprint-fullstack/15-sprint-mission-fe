# Cloud Run 프론트엔드 이미지 — Next.js 16 standalone (Node 26)
FROM node:26-slim AS builder
WORKDIR /app

RUN npm install -g pnpm@11.24.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# NEXT_PUBLIC_* 값은 빌드 타임에 번들로 굳어집니다.
# 클라우드 빌드에서 .env 파일 전달이 누락될 수 있어 여기에 직접 넣습니다.
# (백엔드 배포 주소가 바뀌면 이 값도 함께 다시 배포해 주세요)
ENV NEXT_PUBLIC_API_BASE_URL="https://panda-backend-1009854540156.asia-northeast3.run.app/api"

COPY . .
RUN pnpm build

FROM node:26-slim
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 8080
CMD ["node", "server.js"]
