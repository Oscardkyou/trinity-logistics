from typing import List
from fastapi import APIRouter, HTTPException
from datetime import datetime
from app.schemas.news import NewsResponse
from app.services.external_api import ExternalAPIService

router = APIRouter()
external_api = ExternalAPIService()

NEWS_API_KEY = "5c3a76637b06453d998f834b418d02b5"
NEWS_API_URL = "https://newsapi.org/v2/everything"

@router.get("", response_model=List[NewsResponse])
async def get_news(page: int = 1, limit: int = 10):
    """
    Получить новости из NewsAPI
    """
    try:
        articles = external_api.get_logistics_news(page=page, page_size=limit)
        
        # Преобразуем новости в нужный формат
        formatted_news = []
        for article in articles:
            news = NewsResponse(
                id=hash(article["url"]),  # Используем хеш URL как ID
                title=article["title"],
                content=article["description"] or "",
                image_url=article["urlToImage"],
                created_at=datetime.fromisoformat(article["publishedAt"].replace("Z", "+00:00"))
            )
            formatted_news.append(news)
        
        return formatted_news
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error fetching news: {str(e)}"
        )
