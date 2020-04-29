FROM node:13-alpine

RUN apk add --no-cache python make g++

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

CMD npm run start:prod
