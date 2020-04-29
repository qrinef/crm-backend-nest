FROM node:13-alpine as builder

RUN apk add --no-cache python make g++

COPY package*.json ./
RUN npm ci
RUN npm run build


FROM node:13-alpine

ENV NODE_ENV=production

WORKDIR /app
COPY --from=builder node_modules node_modules
COPY --from=builder dist dist

COPY . .

CMD npm run start:prod
