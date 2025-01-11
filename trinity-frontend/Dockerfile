FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json из trinity-frontend
COPY trinity-frontend/package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем все файлы из trinity-frontend
COPY trinity-frontend/ ./

# Собираем приложение
RUN npm run build

# Устанавливаем переменные окружения
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
