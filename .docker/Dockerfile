FROM node:13-alpine as builder

RUN apk add --no-cache python make g++

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build


FROM node:13-alpine

ENV NODE_ENV=production

WORKDIR /app
COPY --from=builder . .

CMD npm run start:prod
