FROM node:18-alpine AS deps

WORKDIR /app

# Устанавливаем зависимости для сборки
RUN apk add --no-cache libc6-compat

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm install --production=false --legacy-peer-deps

# Копируем исходный код
COPY . .

# Экспортируем порт
EXPOSE 3000

# Запускаем приложение в dev режиме с увеличенным таймаутом
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]
