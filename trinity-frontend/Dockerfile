FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем исходный код
COPY . .

# Проверяем содержимое директории lib
RUN ls -la lib/

# Устанавливаем переменные окружения для сборки
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=http://localhost:3000

# Собираем приложение
RUN npm run build

# Устанавливаем переменные окружения для запуска
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
