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



const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const seccionAgregarOperacion = document.getElementById("seccion-agregar-operacion");

botonNuevaOperacion.addEventListener("click", (e) => {
    seccionBalances.classList.add("is-hidden");
    seccionAgregarOperacion.classList.remove("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionReportes.classList.add("is-hidden");

})

//---------------------------CREAR NUEVA OPERACION-------------------
const descripcionNuevaOperacion = document.getElementById("input-descripcion-nueva-operacion");
const montoNuevaOperacion = document.getElementById("monto-nueva-operacion");
const tipoNuevaOperacion = document.getElementById("tipo-nueva-operacion");
const categoriaNuevaOperacion = document.getElementById("categoria-nueva-operacion");
const fechaNuevaOperacion = document.getElementById("fecha-nueva-operacion");
const botonAgregarNuevaOperacion = document.getElementById("boton-agregar-operacion")
const formularioOperacion = document.getElementById('formulario-operacion')
const boxOperaciones = document.getElementById("operaciones-realizadas");

// --------------------array de objetos(operaciones)----------------
let arrayDeOperaciones = []
let nuevoObjeto = {}

console.log(arrayDeOperaciones)

montoNuevaOperacion.onchange = () => {
    console.log(montoNuevaOperacion.value)
}
tipoNuevaOperacion.onchange = (event) => {
    console.log(tipoNuevaOperacion.value)
}
categoriaNuevaOperacion.onchange = (event) => {
    console.log(categoriaNuevaOperacion.value)
}
descripcionNuevaOperacion.onchange = (event) => {
    console.log(descripcionNuevaOperacion.value)
}
fechaNuevaOperacion.oninput = () => {
    console.log(fechaNuevaOperacion.value)
}