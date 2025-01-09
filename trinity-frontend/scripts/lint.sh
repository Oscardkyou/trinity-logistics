#!/bin/bash

# Запускаем ESLint
echo "Running ESLint..."
npx eslint . --ext .ts,.tsx

# Запускаем Ruff
echo "Running Ruff..."
ruff check .

# Проверяем типы с помощью TypeScript
echo "Running TypeScript type check..."
npx tsc --noEmit
