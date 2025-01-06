# Trinity Website Project

## Overview
Trinity Website is a modern web application built with a React frontend and Django backend. The project aims to provide a seamless and interactive user experience while maintaining a robust and scalable backend architecture.

## Project Structure
The project is organized into two main directories:
- `trinity-frontend/` - React-based frontend application
- `trinity-backend/` - Django-based backend application

## Technologies Used
### Frontend
- React.js
- Material-UI
- React Router
- Axios for API calls
- CSS/SCSS for styling

### Backend
- Django
- Django REST Framework
- PostgreSQL
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- PostgreSQL
- pip (Python package manager)
- npm (Node package manager)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/trinity-website.git
cd trinity-website
```

2. Backend Setup
```bash
cd trinity-backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

3. Frontend Setup
```bash
cd trinity-frontend
npm install
npm start
```

## Features
- User authentication and authorization
- Responsive design
- Interactive UI components
- RESTful API integration
- Database management
- Cross-browser compatibility

## Contributing
We welcome contributions to the Trinity Website project! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Areas for Potential Contributions
- Enhanced UI/UX features
- Additional authentication methods
- Performance optimizations
- New API endpoints
- Mobile responsiveness improvements
- Unit and integration tests
- Documentation improvements
- Security enhancements
- Localization support
- Analytics integration
- SEO optimization

### Development Guidelines
- Follow the existing code style and conventions
- Write clear commit messages
- Add appropriate documentation for new features
- Ensure all tests pass before submitting PR
- Update README.md if necessary

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Contact
Project Link: [https://github.com/yourusername/trinity-website](https://github.com/yourusername/trinity-website)

## Acknowledgments
- Thanks to all contributors who participate in this project
- Special thanks to ITC Bootcamp for the initial development

## О проекте
LogiTrans - это современная платформа для организации грузоперевозок, предоставляющая быстрые и надежные автомобильные и железнодорожные перевозки.

## Основные возможности

- **Расчет стоимости перевозки** - Мгновенный расчет стоимости доставки груза
- **Отслеживание грузов** - Отслеживание местоположения и статуса груза в реальном времени
- **Личный кабинет** - Управление заказами и доступ к истории перевозок
- **Новости и акции** - Актуальная информация о новых маршрутах и специальных предложениях

## Преимущества

### Скорость
Мы гарантируем быструю доставку вашего груза в любую точку страны.

### Надежность
Ваш груз застрахован и находится под постоянным контролем.

### Выгодные цены
Мы предлагаем конкурентные цены и гибкую систему скидок.

## Последние новости

- **Открытие нового маршрута** - Запущен новый маршрут доставки между городами Москва и Владивосток
- **Обновление автопарка** - Приобретено 10 новых грузовых автомобилей для улучшения качества обслуживания

## Скриншоты

### Главная страница
![Главная страница](docs/images/main.png)
*Главная страница с калькулятором стоимости и основной информацией*

### Новости и акции
![Новости и акции](docs/images/news.png)
*Раздел с актуальными новостями и специальными предложениями*

## Технологии

- Frontend: React.js + Next.js
- Backend: Python + FastAPI
- База данных: PostgreSQL
- Контейнеризация: Docker

## Запуск проекта

1. Клонировать репозиторий:
```bash
git clone https://github.com/your-username/logitrans.git
```

2. Запустить с помощью Docker Compose:
```bash
docker-compose up -d
```

3. Открыть в браузере:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/docs

## Разработка

### Требования
- Docker
- Docker Compose
- Node.js 18+
- Python 3.9+

### Структура проекта
```
logitrans/
├── trinity-frontend/    # React + Next.js frontend
├── trinity-backend/     # FastAPI backend
├── docker-compose.yml   # Docker configuration
└── README.md           # This file
```

## Лицензия

MIT License
