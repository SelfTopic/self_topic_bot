
FROM node:24-alpine

RUN apk add --no-cache python3 make g++ postgresql-client

WORKDIR /app

COPY package*.json ./
COPY drizzle.config.ts ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npx", "ts-node", "src/bot/index.ts"]