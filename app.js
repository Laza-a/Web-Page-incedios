// Variables globales
let historialPaginas = [];
let posicionHistorial = -1;
let favoritos = [
    { nombre: "Google", url: "https://www.google.com" },
    { nombre: "Wikipedia", url: "https://www.wikipedia.org" },
    { nombre: "GitHub", url: "https://www.github.com" },
    { nombre: "Stack Overflow", url: "https://www.stackoverflow.com" }
];

// Función para cargar una página
function cargarPagina() {
    let url = document.getElementById('url-input').value;
    
    // Agregar protocolo si no lo tiene
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    document.getElementById('url-input').value = url;
    agregarAlHistorial(url);
    actualizarInfo(url);
    
    // Intentar cargar en iframe
    document.getElementById('contenedor-pagina').src = url;
    document.getElementById('estado').textContent = 'Cargando...';
}

// Función para ir atrás en el historial
function atras() {
    if (posicionHistorial > 0) {
        posicionHistorial--;
        let url = historialPaginas[posicionHistorial];
        document.getElementById('url-input').value = url;
        actualizarInfo(url);
        document.getElementById('contenedor-pagina').src = url;
    } else {
        alert('No hay páginas anteriores en el historial');
    }
}

// Función para ir adelante en el historial
function adelante() {
    if (posicionHistorial < historialPaginas.length - 1) {
        posicionHistorial++;
        let url = historialPaginas[posicionHistorial];
        document.getElementById('url-input').value = url;
        actualizarInfo(url);
        document.getElementById('contenedor-pagina').src = url;
    } else {
        alert('No hay páginas posteriores en el historial');
    }
}

// Función para recargar la página actual
function recargar() {
    let url = document.getElementById('url-input').value;
    document.getElementById('estado').textContent = 'Recargando...';
    
    // Forzar recarga del iframe
    document.getElementById('contenedor-pagina').src = '';
    setTimeout(function() {
        document.getElementById('contenedor-pagina').src = url;
        document.getElementById('estado').textContent = 'Cargado';
    }, 500);
}

// Función para agregar una página al historial
function agregarAlHistorial(url) {
    // Si no estamos al final del historial, eliminar las páginas posteriores
    if (posicionHistorial < historialPaginas.length - 1) {
        historialPaginas = historialPaginas.slice(0, posicionHistorial + 1);
    }
    
    // Agregar la nueva página
    historialPaginas.push(url);
    posicionHistorial = historialPaginas.length - 1;
    
    actualizarSelectHistorial();
}

// Función para actualizar el select del historial
function actualizarSelectHistorial() {
    let select = document.getElementById('historial-select');
    select.innerHTML = '';
    
    if (historialPaginas.length === 0) {
        select.innerHTML = '<option value="">-- Historial vacío --</option>';
    } else {
        historialPaginas.forEach(function(url, index) {
            let option = document.createElement('option');
            option.value = url;
            option.textContent = url;
            if (index === posicionHistorial) {
                option.selected = true;
            }
            select.appendChild(option);
        });
    }
}

// Función para ir a una página del historial
function irAlHistorial() {
    let url = document.getElementById('historial-select').value;
    if (url) {
        // Buscar la posición en el historial
        posicionHistorial = historialPaginas.indexOf(url);
        document.getElementById('url-input').value = url;
        actualizarInfo(url);
        document.getElementById('contenedor-pagina').src = url;
    } else {
        alert('Selecciona una página del historial');
    }
}

// Función para limpiar el historial
function limpiarHistorial() {
    if (confirm('¿Estás seguro de que deseas limpiar el historial?')) {
        historialPaginas = [];
        posicionHistorial = -1;
        actualizarSelectHistorial();
        document.getElementById('estado').textContent = 'Historial limpio';
    }
}

// Función para ir a un favorito
function irAFavorito() {
    let url = document.getElementById('favoritos-select').value;
    if (url) {
        document.getElementById('url-input').value = url;
        cargarPagina();
    } else {
        alert('Selecciona un favorito');
    }
}

// Función para agregar un favorito
function agregarFavorito() {
    let url = document.getElementById('url-input').value;
    if (url) {
        let nombre = prompt('¿Cuál es el nombre para este favorito?');
        if (nombre) {
            let select = document.getElementById('favoritos-select');
            let option = document.createElement('option');
            option.value = url;
            option.textContent = nombre;
            select.appendChild(option);
            
            // Agregar a la lista de favoritos
            favoritos.push({ nombre: nombre, url: url });
            
            // Guardar en localStorage
            guardarFavoritos();
            
            alert('Favorito agregado correctamente');
        }
    } else {
        alert('Carga una página primero');
    }
}

// Función para guardar favoritos en localStorage
function guardarFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Función para cargar favoritos desde localStorage
function cargarFavoritos() {
    let favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
        favoritos = JSON.parse(favoritosGuardados);
        actualizarSelectFavoritos();
    }
}

// Función para actualizar el select de favoritos
function actualizarSelectFavoritos() {
    let select = document.getElementById('favoritos-select');
    select.innerHTML = '<option value="">-- Selecciona un favorito --</option>';
    
    favoritos.forEach(function(fav) {
        let option = document.createElement('option');
        option.value = fav.url;
        option.textContent = fav.nombre;
        select.appendChild(option);
    });
}

// Función para realizar una búsqueda
function buscar() {
    let termino = document.getElementById('busqueda-input').value;
    if (termino) {
        let url = 'https://www.google.com/search?q=' + encodeURIComponent(termino);
        document.getElementById('url-input').value = url;
        cargarPagina();
    } else {
        alert('Ingresa un término de búsqueda');
    }
}

// Función para actualizar la información de la página
function actualizarInfo(url) {
    document.getElementById('url-actual').textContent = url;
    document.getElementById('titulo-actual').textContent = 'Cargando...';
    document.getElementById('estado').textContent = 'Cargando...';
    
    // Simular carga completada después de 1.5 segundos
    setTimeout(function() {
        document.getElementById('estado').textContent = 'Cargado';
        
        // Intentar obtener el título de la página (puede no funcionar por CORS)
        try {
            let iframe = document.getElementById('contenedor-pagina');
            if (iframe.contentDocument) {
                let titulo = iframe.contentDocument.title;
                document.getElementById('titulo-actual').textContent = titulo || 'Sin título';
            }
        } catch (e) {
            document.getElementById('titulo-actual').textContent = 'No disponible (CORS)';
        }
    }, 1500);
}

// Función para permitir cargar con Enter
document.addEventListener('DOMContentLoaded', function() {
    // Cargar favoritos guardados
    cargarFavoritos();
    
    // Permitir cargar página presionando Enter en el input de URL
    document.getElementById('url-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            cargarPagina();
        }
    });
    
    // Permitir buscar presionando Enter en el input de búsqueda
    document.getElementById('busqueda-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            buscar();
        }
    });
    
    // Actualizar cuando se carga el iframe
    document.getElementById('contenedor-pagina').addEventListener('load', function() {
        document.getElementById('estado').textContent = 'Cargado';
    });
    
    // Error al cargar iframe
    document.getElementById('contenedor-pagina').addEventListener('error', function() {
        document.getElementById('estado').textContent = 'Error al cargar';
    });
});