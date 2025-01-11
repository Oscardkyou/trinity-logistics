# Используем базовый образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем все остальные файлы проекта в контейнер
COPY . .

# Собираем проект (если требуется)
RUN npm run build

# Устанавливаем переменные среды
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Открываем порт
EXPOSE 3000

# Устанавливаем команду для запуска приложения
CMD ["npm", "start"]
