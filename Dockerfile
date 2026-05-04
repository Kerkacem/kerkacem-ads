FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY server/package*.json ./server/
COPY shared/package*.json ./shared/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server/index.js"]
