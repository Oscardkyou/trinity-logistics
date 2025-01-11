FROM node:18-alpine

WORKDIR /app

# Копируем все файлы проекта
COPY . .

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

CMD ["npm", "start"]
