FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Проверяем текущую директорию
RUN pwd && ls -la

# Копируем package.json и package-lock.json
COPY package*.json ./

# Проверяем после копирования
RUN ls -la

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем все файлы проекта
COPY . .

# Проверяем все файлы
RUN ls -la

# Устанавливаем переменные окружения для сборки
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=http://trinity-logistics.railway.internal

# Собираем приложение
RUN npm run build

# Устанавливаем переменные окружения для запуска
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
