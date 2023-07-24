FROM node:18.17.0 AS builder

COPY . /app
WORKDIR /app

COPY package*.json ./

RUN npm ci --ingore-scripts

COPY . .

RUN npm run build
RUN npm prune --production

FROM node:18.17.0

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

CMD ["npm", "start"]
