FROM node:13-alpine AS development

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build


FROM node:13-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /app/dist ./dist
COPY --from=development /app/ormconfig.json ./ormconfig.json

CMD npm run start:prod