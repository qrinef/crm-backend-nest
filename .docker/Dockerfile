FROM node:13-alpine as builder
RUN apk add --no-cache python make g++
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM node:13-alpine
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY --from=builder /app .
CMD npm run start:prod
