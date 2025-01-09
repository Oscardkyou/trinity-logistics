import requests
from typing import List, Dict, Any
import os

class ExternalAPIService:
    def __init__(self):
        self.news_api_key = os.getenv("NEWS_API_KEY", "5c3a76637b06453d998f834b418d02b5")
        self.news_api_url = "https://newsapi.org/v2/everything"
        self.unsplash_access_key = "5L137rNJtJBEupU8-FX6M_Ph_xWtnfI6KmKw7QkbLg"
        self.unsplash_api_url = "https://api.unsplash.com/search/photos"
        
    def get_logistics_image(self) -> str:
        """
        Получить изображение по теме логистики из Unsplash
        """
        try:
            headers = {
                "Authorization": f"Client-ID {self.unsplash_access_key}"
            }
            params = {
                "query": "logistics warehouse shipping container",
                "orientation": "landscape",
                "per_page": 1
            }
            
            response = requests.get(self.unsplash_api_url, headers=headers, params=params)
            if response.status_code != 200:
                print(f"Unsplash API error: {response.text}")
                return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80"
                
            data = response.json()
            if data.get("results") and len(data["results"]) > 0:
                return data["results"][0]["urls"]["regular"]
            return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80"
            
        except Exception as e:
            print(f"Error fetching image: {str(e)}")
            return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80"
        
    def is_logistics_related(self, text: str) -> bool:
        """
        Проверяет, относится ли текст к логистике
        """
        # Основные ключевые слова логистики
        logistics_keywords = [
            'логистик',
            'грузоперевозк',
            'транспорт',
            'доставк',
            'морск',
            'порт',
            'груз'
        ]
        
        # Стоп-слова (исключаем военные новости)
        stop_words = [
            'боеприпас',
            'военн',
            'вс рф',
            'всу',
            'армия',
            'войск',
            'оруж',
            'бомб',
            'атак',
            'уничтож'
        ]
        
        text = text.lower()
        
        # Проверяем стоп-слова
        if any(word in text for word in stop_words):
            return False
            
        # Проверяем наличие ключевых слов логистики
        return any(keyword in text for keyword in logistics_keywords)
        
    def get_logistics_news(self, page: int = 1, page_size: int = 4) -> List[Dict[str, Any]]:
        """
        Получить новости о логистике
        """
        try:
            params = {
                "apiKey": self.news_api_key,
                "q": "(логистика OR грузоперевозки OR транспорт OR доставка OR морской порт) -военный -армия -боеприпасы -атака",
                "language": "ru",
                "sortBy": "publishedAt",
                "page": page,
                "pageSize": 100  # Запрашиваем много новостей для лучшей фильтрации
            }
            
            response = requests.get(self.news_api_url, params=params)
            response.raise_for_status()
            
            data = response.json()
            articles = data.get("articles", [])
            
            # Фильтруем только новости о логистике
            logistics_articles = []
            for article in articles:
                title = article["title"]
                description = article["description"] or ""
                
                if self.is_logistics_related(title + " " + description):
                    # Заменяем изображение на тематическое
                    article["urlToImage"] = self.get_logistics_image()
                    logistics_articles.append(article)
                    
                    # Если у нас достаточно новостей, прекращаем
                    if len(logistics_articles) >= page_size:
                        break
            
            # Возвращаем только первые page_size новостей
            return logistics_articles[:page_size]
            
        except Exception as e:
            print(f"Error fetching news: {str(e)}")
            return []
