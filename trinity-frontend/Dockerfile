FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы из корневой директории
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Устанавливаем переменные окружения
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
