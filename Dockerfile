FROM node:18-alpine

WORKDIR /app

# Копируем файлы из корневой директории
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

CMD ["npm", "start"]
