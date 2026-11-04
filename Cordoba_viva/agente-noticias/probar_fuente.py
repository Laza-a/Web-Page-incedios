import feedparser
from urllib.parse import quote

busqueda = "incendios OR fauna OR flora Córdoba Argentina"
url = (
    "https://news.google.com/rss/search?q="
    + quote(busqueda)
    + "&hl=es-419&gl=AR&ceid=AR:es-419"
)

feed = feedparser.parse(url)

print("Estado:", feed.get("status"))
print("Error:", feed.bozo)
print("Noticias encontradas:", len(feed.entries))

for noticia in feed.entries[:10]:
    print("\nTítulo:", noticia.get("title"))
    print("Enlace:", noticia.get("link"))
    print("Fecha:", noticia.get("published"))