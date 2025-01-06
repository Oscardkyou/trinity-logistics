from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# Создаем движок SQLAlchemy
engine = create_engine(
    settings.SQLALCHEMY_DATABASE_URI,
    echo=True,  # Включаем вывод SQL-запросов в консоль
    connect_args={"check_same_thread": False},  # Только для SQLite
    pool_pre_ping=True
)

# Создаем фабрику сессий
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Функция-генератор для получения сессии базы данных
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
