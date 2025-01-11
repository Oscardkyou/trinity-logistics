FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json из trinity-frontend
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем все файлы проекта
COPY . ./

# Устанавливаем переменные окружения для сборки
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production

# Собираем приложение
RUN npm run build

# Устанавливаем переменные окружения для запуска
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
