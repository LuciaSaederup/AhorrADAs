const verBalances = document.getElementById("ver-balance");
const verCategorias = document.getElementById("ver-categorias");
const verReportes = document.getElementById("ver-reportes");
const seccionBalances = document.getElementById("seccion-balances");
const seccionCategorias = document.getElementById("seccion-categorias");
const seccionReportes = document.getElementById("seccion-reportes");


verCategorias.addEventListener("click", (e) => {
    seccionCategorias.classList.remove("is-hidden");
    seccionBalances.classList.add("is-hidden");
    seccionReportes.classList.add("is-hidden");
});
verBalances.addEventListener("click", (e) => {
    seccionBalances.classList.remove("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionReportes.classList.add("is-hidden");
});
verReportes.addEventListener("click", (e) => {
    seccionBalances.classList.add("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionReportes.classList.remove("is-hidden");
});