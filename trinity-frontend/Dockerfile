FROM node:18-alpine

WORKDIR /app

# Устанавливаем зависимости для сборки
RUN apk add --no-cache libc6-compat

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Экспортируем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
