FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Проверяем файлы
RUN ls -la

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем исходный код
COPY . .

# Проверяем структуру проекта
RUN echo "Project structure:" && \
    ls -la && \
    echo "\nContents of app directory:" && \
    ls -la app || echo "No app directory" && \
    echo "\nContents of pages directory:" && \
    ls -la pages || echo "No pages directory"

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
