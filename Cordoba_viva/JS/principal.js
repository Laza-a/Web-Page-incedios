
const busqueda = document.querySelector("#busqueda");
const botonesFiltro = document.querySelectorAll("[data-filter]");
const tarjetas = document.querySelectorAll(".article-card");
const mensajeVacio = document.querySelector("#sin-resultados");

let filtroActual = "todos";

function filtrarArticulos() {
  const texto = (busqueda?.value || "").toLowerCase().trim();
  let cantidadVisible = 0;

  tarjetas.forEach((tarjeta) => {
    const categoria = tarjeta.dataset.category;
    const contenido = tarjeta.textContent.toLowerCase();

    const coincideCategoria =
      filtroActual === "todos" || categoria === filtroActual;

    const coincideTexto = contenido.includes(texto);
    const mostrar = coincideCategoria && coincideTexto;

    tarjeta.hidden = !mostrar;

    if (mostrar) cantidadVisible++;
  });

  if (mensajeVacio) {
    mensajeVacio.hidden = cantidadVisible > 0;
  }
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach((otro) => {
      otro.classList.remove("active");
    });

    boton.classList.add("active");
    filtroActual = boton.dataset.filter;
    filtrarArticulos();
  });
});

if (busqueda) {
  busqueda.addEventListener("input", filtrarArticulos);
}
