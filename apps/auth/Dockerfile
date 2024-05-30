# Stage 1: Development
FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

# Stage 2: Build
FROM development AS build
RUN pnpm run build

# Stage 3: Production
FROM node:alpine AS production

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod

COPY --from=build /usr/src/app/dist ./dist

ENV NODE_ENV=production
CMD ["node", "dist/apps/auth/main"]
