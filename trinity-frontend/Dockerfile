FROM node:18-alpine

# Проверяем начальное состояние
RUN pwd && ls -la

# Устанавливаем рабочую директорию
WORKDIR /app

# Проверяем директорию после WORKDIR
RUN pwd && ls -la

# Копируем package.json и package-lock.json
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

# Проверяем файлы после копирования
RUN pwd && ls -la

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем исходный код
COPY . .

# Проверяем все файлы
RUN pwd && ls -la

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
