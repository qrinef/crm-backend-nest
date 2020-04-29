FROM node:13-alpine

RUN apk add --no-cache python make g++

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

CMD npm run start:prod
