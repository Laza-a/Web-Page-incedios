
import feedparser
import json
from datetime import datetime, timedelta, timezone
from pathlib import Path

CARPETA = Path(__file__).parent
ARCHIVO_FUENTES = CARPETA / "fuentes.json"
ARCHIVO_NOTICIAS = CARPETA / "noticias.json"

PALABRAS_CLAVE = [
    "incendio", "incendios", "fuego",
    "fauna", "flora", "bosque", "monte",
    "animales", "especies", "ambiente",
    "medioambiente", "conservacion",
    "cordoba", "córdoba"
]

def cargar_fuentes():
    with open(ARCHIVO_FUENTES, "r", encoding="utf-8") as archivo:
        return json.load(archivo)["fuentes"]

def noticia_valida(titulo, resumen):
    texto = (titulo + " " + resumen).lower()
    return any(palabra in texto for palabra in PALABRAS_CLAVE)

def obtener_fecha(noticia):
    if noticia.get("published_parsed"):
        from time import mktime
        fecha = datetime.fromtimestamp(
            mktime(noticia.published_parsed),
            tz=timezone.utc
        )
        return fecha

    return None

def buscar_noticias():
    noticias = []
    limite = datetime.now(timezone.utc) - timedelta(days=7)

    for fuente in cargar_fuentes():
        if not fuente["activa"] or not fuente["url"]:
            continue

        print("Consultando:", fuente["nombre"])

        feed = feedparser.parse(fuente["url"])

        if feed.bozo:
            print("No se pudo leer correctamente esta fuente.")
            continue

        for entrada in feed.entries:
            titulo = entrada.get("title", "")
            resumen = entrada.get("summary", "")
            enlace = entrada.get("link", "")
            fecha = obtener_fecha(entrada)

            if not fecha or not enlace:
                continue

            if fecha < limite or fecha > datetime.now(timezone.utc):
                continue

            if noticia_valida(titulo, resumen):
                noticias.append({
                    "titulo": titulo,
                    "resumen": resumen,
                    "enlace": enlace,
                    "fuente": fuente["nombre"],
                    "fecha": fecha.isoformat(),
                    "nuevo": True
                })

    with open(ARCHIVO_NOTICIAS, "w", encoding="utf-8") as archivo:
        json.dump(noticias, archivo, ensure_ascii=False, indent=4)

    print("Búsqueda terminada.")
    print("Noticias encontradas:", len(noticias))

if __name__ == "__main__":
    buscar_noticias()
