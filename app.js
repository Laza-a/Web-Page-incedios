// ============================================
// BASE DE DATOS DE ANIMALES DE CÓRDOBA
// ============================================

const animales = [
    {
        id: 1,
        nombre: "Aguará guazú",
        cientifico: "Chrysocyon brachyurus",
        descripcion: "El mayor cánido silvestre de América del Sur, también conocido como lobo de crin.",
        poblacion: "Estimación no confiable para Córdoba específicamente. Presente pero muy escaso.",
        estado: "Amenazado",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Chrysocyon_brachyurus_%28Maned_Wolf%29.jpg/800px-Chrysocyon_brachyurus_%28Maned_Wolf%29.jpg",
        detalles: {
            caracteristicas: "Mide entre 150-190 cm de largo (sin cola) y pesa 20-25 kg. Pelaje rojizo-dorado con el dorso negro. Patas largas y delgadas. Orejas grandes y erectas.",
            habitat: "Sabanas, pastizales y bosques abiertos de Córdoba. Prefiere áreas con agua cercana.",
            alimentacion: "Omnívoro. Se alimenta de mamíferos pequeños, aves, insectos, frutas y caña de azúcar.",
            distribucion: "En Argentina habita la provincia de Misiones principalmente. Avistamientos esporádicos en norte de Córdoba.",
            presenciaCordoba: "Presente pero con poblaciones muy reducidas. Avistamientos documentados en Serranías del norte cordobés.",
            amenazas: "Pérdida de hábitat por deforestación, caza, atropellos en rutas, conflictos con ganadería.",
            conservacion: "Listado como Especie Amenazada en Argentina. Protegido por ley nacional.",
            curiosidad: "El Aguará guazú tiene patas especialmente largas que le permiten caminar sobre hierbas acuáticas sin hundirse en el agua."
        }
    },
    {
        id: 2,
        nombre: "Yaguareté",
        cientifico: "Panthera onca",
        descripcion: "El felino más grande de América, símbolo de la vida silvestre de Córdoba.",
        poblacion: "Prácticamente extinto en Córdoba. Poblaciones viables en Misiones y Chaco.",
        estado: "En Peligro Crítico",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Panthera_onca_%28Jaguar%29.jpg/800px-Panthera_onca_%28Jaguar%29.jpg",
        detalles: {
            caracteristicas: "Gato manchado más grande del mundo. Pesa 100-250 kg. Pelaje amarillento con manchas negras en roseta. Cuerpo musculoso y poderoso.",
            habitat: "Selvas, bosques húmedos y cerrados con agua abundante.",
            alimentacion: "Carnívoro. Caza capibaras, ciervos, caimanes, pecaríes y otros mamíferos.",
            distribucion: "Prácticamente desaparecido de Córdoba. Últimas poblaciones viables en Misiones y reservas del Chaco.",
            presenciaCordoba: "Funcionalmente extinto. No hay registro de poblaciones estables en Córdoba.",
            amenazas: "Caza furtiva, pérdida de hábitat, fragmentación de bosques, conflictos con humanos.",
            conservacion: "En Peligro Crítico a nivel mundial. Es símbolo de conservación en Sudamérica.",
            curiosidad: "El yaguareté puede atravesar el río Paraná nadando. Es un cazador nocturno extraordinario capaz de derribar presas mucho más grandes."
        }
    },
    {
        id: 3,
        nombre: "Puma",
        cientifico: "Puma concolor",
        descripcion: "Felino silvestre de tamaño grande, presente en la región serrana de Córdoba.",
        poblacion: "Estimación no confiable. Poblaciones muy reducidas y dispersas.",
        estado: "Vulnerable",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Puma_concolor_2.jpg/800px-Puma_concolor_2.jpg",
        detalles: {
            caracteristicas: "Felino de tamaño grande que pesa 53-100 kg. Pelaje uniforme marrón-grisáceo. Cabeza pequeña, orejas puntiagudas, cola larga.",
            habitat: "Sierras, montañas, bosques densos y zonas rocosas de Córdoba.",
            alimentacion: "Carnívoro. Cazador solitario que deprede ciervos, armadillos, aves y roedores.",
            distribucion: "Presente en las serranías de Córdoba, especialmente en el norte.",
            presenciaCordoba: "Habita las sierras de Córdoba pero con poblaciones muy reducidas. Avistamientos confirmados en zonas de Sierra Grande.",
            amenazas: "Caza de represalia por conflictos con ganadería, pérdida de presas, fragmentación de hábitat.",
            conservacion: "Protegido por leyes provinciales y nacionales. Incluido en programas de investigación.",
            curiosidad: "El puma puede saltar hasta 6 metros de altura en vertical. Tienen un rango de hogar muy grande (20-200 km²) que depende de la disponibilidad de presas."
        }
    },
    {
        id: 4,
        nombre: "Pecarí de collar",
        cientifico: "Dicotyles tajacu",
        descripcion: "Pequeño jabalí silvestre que habita las regiones boscosas del norte de Córdoba.",
        poblacion: "Estimación no confiable. Poblaciones reducidas en zonas boscosas.",
        estado: "Vulnerable",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pecari_collare.jpg/800px-Pecari_collare.jpg",
        detalles: {
            caracteristicas: "Jabalí pequeño que pesa 15-30 kg. Pelaje gris oscuro con una banda de pelo claro en el cuello (collar). Colmillos pequeños.",
            habitat: "Bosques densos, sabanas arboladas y zonas boscosas de Córdoba.",
            alimentacion: "Omnívoro. Come raíces, tubérculos, insectos, carroña, frutos y pequeños animales.",
            distribucion: "En Córdoba habita principalmente en zonas boscosas del norte provincial.",
            presenciaCordoba: "Presente en bosques del norte de Córdoba, especialmente en áreas protegidas.",
            amenazas: "Caza furtiva, pérdida de hábitat por deforestación, perros asilvestrados.",
            conservacion: "Poblaciones crecientes en algunas áreas protegidas de Córdoba.",
            curiosidad: "El pecarí de collar vive en grupos de 5-15 individuos muy cohesionados. Pueden correr a 40 km/h cuando sienten amenaza."
        }
    },
    {
        id: 5,
        nombre: "Ñandú",
        cientifico: "Rhea americana",
        descripcion: "Ave no voladora más grande de América, en situación vulnerable en Córdoba.",
        poblacion: "Poblaciones fragmentadas. Estimación: cientos de individuos en la provincia.",
        estado: "Vulnerable",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Rhea_americana_%28Ema%29.jpg/800px-Rhea_americana_%28Ema%29.jpg",
        detalles: {
            caracteristicas: "Ave corredora de 1.4-1.8 metros de altura que pesa 20-40 kg. Plumaje gris parduzco. Patas largas y musculosas. Cuello largo y desnudo.",
            habitat: "Pastizales, sabanas y llanuras de Córdoba.",
            alimentacion: "Herbívoro y omnívoro. Come pastos, semillas, frutas, insectos y pequeños animales.",
            distribucion: "Ampliamente distribuido en la provincia de Córdoba.",
            presenciaCordoba: "Presente en zonas de pastizales y llanuras de la región central y sur de Córdoba.",
            amenazas: "Caza furtiva, pérdida de hábitat, atropellos en rutas, introducción de ganado exótico.",
            conservacion: "Protegido por leyes provinciales. En peligro en áreas con alta actividad ganadera.",
            curiosidad: "El ñandú puede correr a 60 km/h. El macho es quien incuba los huevos de múltiples hembras y cuida a los polluelos."
        }
    },
    {
        id: 6,
        nombre: "Venado de las Pampas",
        cientifico: "Ozotoceros bezoarticus",
        descripcion: "Pequeño venado que habita los pastizales de Córdoba, en grave peligro de extinción.",
        poblacion: "Menos de 200 individuos estimados en toda la provincia.",
        estado: "En Peligro",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ozotoceros_bezoarticus.jpg/800px-Ozotoceros_bezoarticus.jpg",
        detalles: {
            caracteristicas: "Pequeño venado que pesa 20-35 kg. Pelaje rojizo en dorso, blanco en vientre. Pequeñas astas en machos. Orejas grandes.",
            habitat: "Pastizales pampeanos y sabanas abiertas de Córdoba.",
            alimentacion: "Herbívoro. Come pastos, hierbas y malezas.",
            distribucion: "Anteriormente ampliamente distribuido. Ahora solo en fragmentos de pastizal de Córdoba.",
            presenciaCordoba: "Poblaciones muy reducidas en enclaves de pastizal natural. Presente en áreas como Estancia Isabel.",
            amenazas: "Conversión de pastizales a agricultura, persecución por perros, perros ferales, vehículos.",
            conservacion: "Una de las especies más amenazadas de Córdoba. Esfuerzos de reproducción en cautividad.",
            curiosidad: "El venado de las pampas tiene un comportamiento de congelamiento - permanece inmóvil para evitar depredadores."
        }
    },
    {
        id: 7,
        nombre: "Loro Choclero",
        cientifico: "Amazona viridis",
        descripcion: "Loro de tamaño mediano que habita en los bosques serranos de Córdoba.",
        poblacion: "Poblaciones reducidas pero estables en bosques serranos.",
        estado: "Vulnerable",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Amazona_viridis.jpg/800px-Amazona_viridis.jpg",
        detalles: {
            caracteristicas: "Loro de 25-28 cm de largo. Plumaje verde, alas con manchas amarillas. Cabeza verde con parches amarillos. Pico gris.",
            habitat: "Bosques serranos, especialmente bosque de transición entre selva y cerrado.",
            alimentacion: "Frutas, semillas, flores y brotes de árboles.",
            distribucion: "Córdoba, sur de Brasil, norte de Argentina.",
            presenciaCordoba: "Habita los bosques serranos, particularmente en zonas altas del norte provincial.",
            amenazas: "Captura para el tráfico ilegal de fauna, pérdida de hábitat, deforestación.",
            conservacion: "Incluido en Apéndice II de CITES. Protegido por leyes nacionales.",
            curiosidad: "El loro choclero es muy social y vive en grupos de hasta 50 individuos. Puede vivir más de 50 años en cautividad."
        }
    },
    {
        id: 8,
        nombre: "Coati",
        cientifico: "Nasua nasua",
        descripcion: "Mamífero pequeño de los bosques, reconocible por su larga cola anillada.",
        poblacion: "Poblaciones relativamente estables en áreas boscosas.",
        estado: "Vulnerable",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nasua_nasua_-_Coati.jpg/800px-Nasua_nasua_-_Coati.jpg",
        detalles: {
            caracteristicas: "Mamífero de 40-65 cm de largo, cola de 40-56 cm. Pelaje marrón-grisáceo. Hocico alargado. Cola anillada con bandas negras.",
            habitat: "Bosques, selvas, zonas boscosas de Córdoba.",
            alimentacion: "Omnívoro. Come frutas, invertebrados, pequeños vertebrados, huevos.",
            distribucion: "Presente en bosques de Córdoba, desde sierra a zonas boscosas.",
            presenciaCordoba: "Habita bosques del norte y centro de la provincia.",
            amenazas: "Caza, pérdida de hábitat, atropellos, perros ferales.",
            conservacion: "Poblaciones más saludables que otros carnívoros de Córdoba.",
            curiosidad: "El coatí utiliza su hocico móvil como herramienta para excavar y hurgar. Las hembras son territoriales pero los machos solitarios."
        }
    }
];

// ============================================
// INFORMACIÓN SOBRE RECICLAJE
// ============================================

const recyclingInfo = {
    papel: {
        titulo: "📄 PAPEL",
        contenido: `
            <h3>Cómo separar papel correctamente</h3>
            <h4>¿Qué sí puedes reciclar?</h4>
            <ul>
                <li>Periódicos y revistas</li>
                <li>Papel de impresora (blanco o de color)</li>
                <li>Cajas y cartón ondulado</li>
                <li>Papel de envases</li>
                <li>Bolsas de papel</li>
            </ul>
            <h4>¿Qué NO puedes reciclar?</h4>
            <ul>
                <li>Papel mojado o sucia con comida</li>
                <li>Servilletas usadas</li>
                <li>Papel de baño</li>
                <li>Papel plastificado</li>
            </ul>
            <p><strong>Consejo:</strong> Mantén el papel seco. Si está mojado o sucio, contamina el resto de papel reciclable.</p>
        `
    },
    plastico: {
        titulo: "🧴 PLÁSTICO",
        contenido: `
            <h3>Cómo separar plástico correctamente</h3>
            <h4>¿Qué sí puedes reciclar?</h4>
            <ul>
                <li>Botellas y envases de bebidas</li>
                <li>Envases de alimentos y higiene</li>
                <li>Bolsas de plástico (en contenedor especial)</li>
                <li>Tapas y corcholatas</li>
                <li>Juguetes de plástico</li>
            </ul>
            <h4>¿Qué NO puedes reciclar?</h4>
            <ul>
                <li>Plástico sucio o con restos de comida</li>
                <li>Plásticos muy sucios (como bandejas de carne)</li>
                <li>Bolsas de plástico con ruedas de mercado</li>
                <li>Plástico quemado o dañado</li>
            </ul>
            <p><strong>Consejo:</strong> Enjuaga los envases antes de colocarlos en reciclaje. Los restos de comida dañan el proceso.</p>
        `
    },
    vidrio: {
        titulo: "🍾 VIDRIO",
        contenido: `
            <h3>Cómo separar vidrio correctamente</h3>
            <h4>¿Qué sí puedes reciclar?</h4>
            <ul>
                <li>Botellas de bebidas</li>
                <li>Frascos de alimentos</li>
                <li>Botellas de vino y cerveza</li>
                <li>Frascos de conservas</li>
                <li>Vidrio transparente y de color</li>
            </ul>
            <h4>¿Qué NO puedes reciclar?</h4>
            <ul>
                <li>Vidrios de ventanas</li>
                <li>Espejos</li>
                <li>Bombillas y tubos fluorescentes</li>
                <li>Vidrio refractario o templado</li>
                <li>Vidrio sucio con químicos</li>
            </ul>
            <p><strong>Consejo:</strong> El vidrio se puede reciclar infinitamente sin perder calidad. Enjuaga los envases para evitar malos olores.</p>
        `
    },
    metal: {
        titulo: "🥫 METAL",
        contenido: `
            <h3>Cómo separar metal correctamente</h3>
            <h4>¿Qué sí puedes reciclar?</h4>
            <ul>
                <li>Latas de bebidas y alimentos</li>
                <li>Tapas metálicas</li>
                <li>Ollas y sartenes viejos</li>
                <li>Electrodomésticos pequeños</li>
                <li>Cables y tuberías de metal</li>
            </ul>
            <h4>¿Qué NO puedes reciclar?</h4>
            <ul>
                <li>Metales oxidados gravemente</li>
                <li>Aerosoles no vaciados</li>
                <li>Tuberías con amianto</li>
                <li>Metales pegados a plástico fuertemente</li>
            </ul>
            <p><strong>Consejo:</strong> Los metales se reciclan sin límite de veces. El reciclaje de metal ahorra 95% de energía respecto a producir nuevo metal.</p>
        `
    },
    organico: {
        titulo: "🌱 ORGÁNICO",
        contenido: `
            <h3>Cómo separar residuos orgánicos correctamente</h3>
            <h4>¿Qué sí puedes compostar?</h4>
            <ul>
                <li>Restos de frutas y verduras</li>
                <li>Cáscaras de huevo</li>
                <li>Posos de café y bolsitas de té</li>
                <li>Hojas y ramas pequeñas</li>
                <li>Aserrín y maderas naturales</li>
                <li>Papeles y cartones sin químicos</li>
            </ul>
            <h4>¿Qué NO puedes compostar?</h4>
            <ul>
                <li>Carne, pescado y huesos</li>
                <li>Lácteos y aceites</li>
                <li>Plantas tratadas con químicos</li>
                <li>Plagas de insectos</li>
            </ul>
            <p><strong>Consejo:</strong> El compost genera abono para plantas. En Córdoba, muchas municipalidades recolectan residuos orgánicos para compostar.</p>
        `
    }
};

// ============================================
// FUNCIONES DEL CARRUSEL
// ============================================

let currentIndex = 0;
let cardsPerView = 3;

function initCarousel() {
    updateCardsPerView();
    renderCarousel();
    renderDots();
    addEventListeners();
}

function updateCardsPerView() {
    const width = window.innerWidth;
    if (width <= 480) {
        cardsPerView = 1;
    } else if (width <= 768) {
        cardsPerView = 2;
    } else if (width <= 1024) {
        cardsPerView = 2;
    } else {
        cardsPerView = 3;
    }
}

function renderCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    animales.forEach((animal, index) => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.imagen}" alt="${animal.nombre}">
            <h3>${animal.nombre}</h3>
            <p class="animal-scientific">${animal.cientifico}</p>
            <p class="animal-description">${animal.descripcion}</p>
            <div class="animal-info">
                <div class="animal-info-item">
                    <span class="animal-info-label">Población:</span> ${animal.poblacion}
                </div>
                <div class="animal-info-item">
                    <span class="animal-info-label">Estado:</span> ${animal.estado}
                </div>
            </div>
            <button class="btn-primary" onclick="openModal(${index})">Conocer más</button>
        `;
        carousel.appendChild(card);
    });

    updateCarouselPosition();
}

function updateCarouselPosition() {
    const carousel = document.getElementById('carousel');
    const cardWidth = 100 / cardsPerView;
    const offset = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextCarousel() {
    if (currentIndex < animales.length - cardsPerView) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarouselPosition();
    updateDots();
}

function prevCarousel() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = animales.length - cardsPerView;
    }
    updateCarouselPosition();
    updateDots();
}

function renderDots() {
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';
    
    const totalDots = Math.ceil(animales.length / cardsPerView);
    
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === Math.floor(currentIndex / cardsPerView)) {
            dot.classList.add('active');
        }
        dot.onclick = () => {
            currentIndex = i * cardsPerView;
            updateCarouselPosition();
            updateDots();
        };
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === Math.floor(currentIndex / cardsPerView)) {
            dot.classList.add('active');
        }
    });
}

// ============================================
// FUNCIONES DEL MODAL
// ============================================

function openModal(index) {
    const animal = animales[index];
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${animal.imagen}" alt="${animal.nombre}">
            <div class="modal-header-info">
                <h2>${animal.nombre}</h2>
                <p class="modal-scientific">${animal.cientifico}</p>
                <div class="modal-section">
                    <h3>Descripción general</h3>
                    <p>${animal.descripcion}</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Características</h3>
            <p>${animal.detalles.caracteristicas}</p>
        </div>

        <div class="modal-section">
            <h3>Hábitat</h3>
            <p>${animal.detalles.habitat}</p>
        </div>

        <div class="modal-section">
            <h3>Alimentación</h3>
            <p>${animal.detalles.alimentacion}</p>
        </div>

        <div class="modal-section">
            <h3>Distribución</h3>
            <p>${animal.detalles.distribucion}</p>
        </div>

        <div class="modal-section">
            <h3>Presencia en Córdoba</h3>
            <p>${animal.detalles.presenciaCordoba}</p>
        </div>

        <div class="modal-section">
            <h3>Amenazas</h3>
            <p>${animal.detalles.amenazas}</p>
        </div>

        <div class="modal-section">
            <h3>Estado de conservación</h3>
            <p><strong>${animal.estado}</strong> - ${animal.detalles.conservacion}</p>
        </div>

        <div class="modal-section">
            <h3>Población estimada</h3>
            <p>${animal.poblacion}</p>
        </div>

        <div class="modal-section">
            <h3>Curiosidad 🦁</h3>
            <p>${animal.detalles.curiosidad}</p>
        </div>
    `;

    const modal = document.getElementById('modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// FUNCIONES DEL MENÚ HAMBURGUESA
// ============================================

function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
}

function closeMenuOnClick() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
}

// ============================================
// FUNCIONES DE RECICLAJE
// ============================================

function initRecycling() {
    const recyclingBtns = document.querySelectorAll('.recycling-btn');
    
    // Mostrar primer categoria por defecto
    showRecyclingInfo('papel');
    document.querySelector('[data-category="papel"]').classList.add('active');
    
    recyclingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos
            recyclingBtns.forEach(b => b.classList.remove('active'));
            // Agregar a botón clickeado
            btn.classList.add('active');
            // Mostrar información
            showRecyclingInfo(btn.dataset.category);
        });
    });
}

function showRecyclingInfo(category) {
    const info = recyclingInfo[category];
    const infoContainer = document.getElementById('recyclingInfo');
    
    infoContainer.innerHTML = `
        <h3>${info.titulo}</h3>
        ${info.contenido}
    `;
}

// ============================================
// EVENT LISTENERS
// ============================================

function addEventListeners() {
    // Botones del carrusel
    document.getElementById('prevBtn').addEventListener('click', prevCarousel);
    document.getElementById('nextBtn').addEventListener('click', nextCarousel);
    
    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            closeModal();
        }
    });
    
    // Botón de ir a especies
    document.getElementById('btnEspecies').addEventListener('click', () => {
        document.getElementById('animales').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Menú hamburguesa
    document.getElementById('hamburger').addEventListener('click', toggleMenu);
}

// ============================================
// RESPONSIVO
// ============================================

window.addEventListener('resize', () => {
    updateCardsPerView();
    updateCarouselPosition();
    renderDots();
});

// ============================================
// NAVEGACIÓN SUAVE (ya está en CSS pero completamos)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INICIALIZACIÓN DEL DOCUMENTO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar carrusel
    initCarousel();
    
    // Inicializar reciclaje
    initRecycling();
    
    // Agregar event listeners
    addEventListeners();
    
    // Cerrar menú al hacer click en navegación
    closeMenuOnClick();
    
    console.log('✓ Página cargada correctamente');
    console.log('✓ ' + animales.length + ' especies de Córdoba cargadas');
});

// ============================================
// TECLAS DE TECLADO
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (e.key === 'ArrowRight') {
        nextCarousel();
    }
    if (e.key === 'ArrowLeft') {
        prevCarousel();
    }
});
