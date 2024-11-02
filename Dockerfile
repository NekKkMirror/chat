# Base image
FROM node:alpine AS base

RUN corepack enable && corepack prepare yarn@4.5.1 --activate

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN chown -R appuser:appgroup /app
RUN chmod -R 755 /app

USER appuser

# Development image
FROM base AS development

WORKDIR /app

CMD ["yarn", "dev"]
