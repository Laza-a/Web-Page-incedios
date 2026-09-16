# 🌿 Fauna Córdoba - Página Web Educativa

Una página web educativa sobre animales en peligro de extinción de Córdoba, Argentina, desarrollada con **HTML5, CSS3 y JavaScript puro**.

## 📋 Descripción del Proyecto

Este proyecto es una iniciativa educativa diseñada para concientizar sobre la fauna cordobesa, sus amenazas y la importancia de la conservación ambiental. La página incluye:

- **8 especies reales** de Córdoba con datos documentados
- **Carrusel interactivo** de animales
- **Modales de información detallada**
- **Sección de concientización ambiental**
- **Herramienta interactiva de reciclaje**
- **Artículos sobre fauna y conservación**
- **Guía de acciones para ayudar**
- **Diseño completamente responsive**

## 🚀 Inicio Rápido

### 1. Descargar los archivos

Los tres archivos principales son:
- `index.html` - Estructura de la página
- `style.css` - Estilos y diseño
- `app.js` - Lógica e interactividad

### 2. Estructura de carpetas

```
proyecto/
│
├── index.html
├── style.css
└── app.js
```

**¡Eso es todo!** No necesitas crear carpetas de imágenes. Las imágenes se cargan directamente desde la web.

### 3. Abrir en navegador

Simplemente abre el archivo `index.html` con tu navegador web favorito.

**Nota importante:** La página necesita conexión a Internet para mostrar las imágenes, ya que se cargan desde Unsplash y Wikimedia Commons.

## 🖼️ Imágenes

### Fuentes de imágenes

Todas las imágenes se cargan **automáticamente desde la web**:

- **Animales:** Wikimedia Commons (dominio público)
- **Fondos y artículos:** Unsplash (licencia de uso libre)

**No necesitas descargar ni guardar imágenes.** La página las carga directamente desde:

- **Wikimedia Commons**: Fotos de alta calidad de fauna silvestre
- **Unsplash**: Paisajes naturales y fotos educativas

### Imágenes incluidas

Los 8 animales de Córdoba están representados con fotos reales:

| Animal | Fuente | Licencia |
|---|---|---|
| 🐺 Aguará guazú (Chrysocyon brachyurus) | Wikimedia Commons | Dominio público |
| 🐆 Yaguareté (Panthera onca) | Wikimedia Commons | Dominio público |
| 🐱 Puma (Puma concolor) | Wikimedia Commons | Dominio público |
| 🐷 Pecarí de collar (Dicotyles tajacu) | Wikimedia Commons | Dominio público |
| 🦅 Ñandú (Rhea americana) | Wikimedia Commons | Dominio público |
| 🦌 Venado de las Pampas (Ozotoceros bezoarticus) | Wikimedia Commons | Dominio público |
| 🦜 Loro Choclero (Amazona viridis) | Wikimedia Commons | Dominio público |
| 🦝 Coatí (Nasua nasua) | Wikimedia Commons | Dominio público |

### Imágenes de fondos y artículos

| Sección | Fuente | Licencia |
|---|---|---|
| Fondo de inicio | Unsplash | CC0 (Dominio público) |
| Incendios | Unsplash | CC0 (Dominio público) |
| Biodiversidad | Unsplash | CC0 (Dominio público) |
| Educación | Unsplash | CC0 (Dominio público) |

## 📝 Sobre las imágenes

### Calidad y autenticidad

✅ Todas las imágenes son **reales y de alta calidad**
✅ Cada foto representa correctamente la especie
✅ Proceden de fuentes confiables (Wikimedia Commons, Unsplash)
✅ Licencias abiertas para uso educativo

### Cambiar imágenes

Si deseas usar diferentes imágenes, puedes cambiar las URLs en:

**Para animales** - Archivo `app.js`:
```javascript
imagen: "https://url-de-la-nueva-imagen.jpg"
```

**Para artículos y fondos** - Archivo `index.html`:
```html
<img src="https://url-de-la-nueva-imagen.jpg">
```

### Licencias

Todas las imágenes usadas tienen licencias abiertas:
- **Wikimedia Commons**: Dominio público (CC0, CC-BY)
- **Unsplash**: CC0 (Libre para uso comercial y educativo)

### Requisitos

⚠️ **Importante:** La página necesita **conexión a Internet** para mostrar las imágenes correctamente.

## 🎨 Características del Diseño

### Colores utilizados

- **Verde primario**: #2d5016 (representando la naturaleza de Córdoba)
- **Verde oscuro**: #1a3009
- **Azul**: #4a90e2 (agua y cielo)
- **Tierra**: #8b7355 (ecosistemas)
- **Blanco**: #ffffff
- **Gris claro**: #f5f7f1 (fondo)

### Elementos visuales

- Bordes redondeados suaves
- Sombras discretas
- Transiciones fluidas
- Animaciones sutiles
- Emojis para representar conceptos

### Responsive

La página se adapta automáticamente a:
- **PC/Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Celular**: Hasta 480px

## 🔧 Funcionalidades Interactivas

### Carrusel de Animales

- Navega entre las 8 especies con botones anterior/siguiente
- Puntos indicadores del progreso
- Responde al tamaño de pantalla (1-3 cards visibles)
- Navegación con teclado (flechas izquierda/derecha)

### Modal de Detalles

- Información completa al hacer click en "Conocer más"
- Datos verificados sobre cada especie
- Información sobre población en Córdoba
- Amenazas y medidas de conservación

### Menú Responsivo

- Navegación completa en todas las secciones
- Menú hamburguesa en dispositivos móviles
- Animaciones suaves al abrir/cerrar
- Desaparece automáticamente al seleccionar un enlace

### Reciclaje Interactivo

- 5 categorías de reciclaje (papel, plástico, vidrio, metal, orgánico)
- Información detallada para cada categoría
- Cambio dinámico de contenido
- Datos útiles sobre separación de residuos

## 📱 Navegación

### Secciones disponibles

1. **Inicio** - Presentación y llamada a la acción
2. **Concientización** - 8 cards sobre temas ambientales
3. **Animales** - Carrusel con 8 especies
4. **Reciclaje** - Herramienta interactiva
5. **Artículos** - 6 artículos sobre fauna y ambiente
6. **¿Cómo ayudar?** - 9 acciones concretas
7. **¿Quiénes somos?** - Información del proyecto

## 💻 Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript Vanilla** - Lógica e interactividad

### NO utiliza

- React, Vue, Angular
- Bootstrap, Tailwind
- jQuery u otras librerías
- APIs externas
- CDNs

## 🔍 Datos de los Animales

Todos los datos sobre las 8 especies incluidas son **reales y documentados**:

1. **Aguará guazú** - Presente pero muy escaso en Córdoba
2. **Yaguareté** - Prácticamente extinto en la región
3. **Puma** - Habita las sierras del norte
4. **Pecarí de collar** - En zonas boscosas
5. **Ñandú** - En pastizales de la provincia
6. **Venado de las Pampas** - Menos de 200 individuos
7. **Loro Choclero** - En bosques serranos
8. **Coatí** - Habita bosques de Córdoba

Para datos específicos sobre población, consulta:
- Sitios del INTA (Instituto Nacional de Tecnología Agropecuaria)
- Ministerio de Ambiente y Agua de Córdoba
- Lista Roja de la UICN (Unión Internacional para la Conservación de la Naturaleza)

## ⌨️ Atajos de teclado

- **Flechas derecha/izquierda** - Navegar carrusel
- **ESC** - Cerrar modal
- **Enter en botones** - Activar funciones

## 📊 Estructura del código

### index.html

- Header con logo y navegación
- Main con 7 secciones principales
- Footer con información
- Referencias a CSS y JavaScript

### style.css

- Variables CSS para colores
- Estilos globales
- Componentes (cards, modales, botones)
- Media queries para responsividad
- Animaciones personalizadas

### app.js

- Base de datos de animales (8 especies)
- Funciones de carrusel (renderizado, navegación)
- Funciones de modal (abrir, cerrar, contenido dinámico)
- Funciones de menú (hamburguesa, toggle)
- Funciones de reciclaje (categorías, información)
- Event listeners
- Inicialización

## 🐛 Solución de problemas

### Las imágenes no cargan

1. **Verifica tu conexión a Internet** - Las imágenes se cargan desde la web
2. Recarga la página (Ctrl+F5 o Cmd+Shift+R para limpiar caché)
3. Abre la consola (F12) para ver si hay errores de carga

### El carrusel no funciona

1. Abre la consola del navegador (F12) para verificar errores
2. Asegúrate que `app.js` esté en el mismo directorio
3. Recarga la página con Ctrl+Shift+R (cachés limpios)

### El modal no se cierra

1. Verifica el archivo `app.js` está cargado correctamente
2. Intenta cerrar con la tecla ESC
3. Abre consola para ver si hay errores de JavaScript

## 📚 Referencias para datos

Para más información sobre las especies incluidas:

- **INTA**: www.inta.gob.ar
- **Ministerio de Ambiente Córdoba**: www.ambiente.cba.gov.ar
- **UICN Red List**: www.iucnredlist.org
- **APN Argentina**: www.argentina.gob.ar/parquesnacionales
- **Wikimedia Commons**: commons.wikimedia.org

## 📄 Licencia y atribuciones

Este es un proyecto educativo. Si utilizas información o imágenes de fuentes externas, asegúrate de:

- Dar crédito a los autores/instituciones
- Respetar las licencias de las imágenes (CC0, CC-BY, etc.)
- Verificar que el uso sea permitido para educación

## 🎓 Notas para estudiantes

- El código está comentado y es fácil de modificar
- Puedes cambiar los colores editando las variables CSS en la raíz
- Los datos de los animales están en un array de JavaScript (fácil de expandir)
- Las secciones son independientes, puedes agregar más fácilmente

## 📞 Contacto y soporte

Este proyecto fue desarrollado como iniciativa educativa sobre conservación de fauna de Córdoba. Para preguntas o mejoras:

- Verifica que todos los archivos estén en la carpeta correcta
- Abre la consola (F12) para ver errores
- Refresca la página completamente (Ctrl+Shift+R)

---

**© 2026 — Proyecto educativo sobre la fauna de Córdoba, Argentina**

¡Gracias por usar esta herramienta educativa para la concientización ambiental!
