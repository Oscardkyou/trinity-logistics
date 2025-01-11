FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app/trinity-frontend

# Копируем все файлы для сборки
COPY . .

# Проверяем наличие файлов
RUN ls -la

# Устанавливаем зависимости
RUN npm install

# Собираем приложение
RUN npm run build

# Устанавливаем переменные окружения
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
