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

botonAgregarNuevaOperacion.addEventListener('click', () => {
    arrayDeOperaciones.push({
        monto: montoNuevaOperacion.value,
        tipo: tipoNuevaOperacion.value,
        categoria: categoriaNuevaOperacion.value,
        descripcion: descripcionNuevaOperacion.value,
        fecha: fechaNuevaOperacion.value
    })
    console.log(arrayDeOperaciones)

})

const copiaArrayDeOperaciones = [...arrayDeOperaciones]

const mostrarOperacionesEnHTML = (array) => {
    let acc = ``

    array.map((elemento) => {
        dateArray = elemento.fecha.split("-")
        fechaIntefaz = dateArray[2]+"-"+dateArray[1]+'-'+dateArray[0]
        acc = acc + `<div class="columns">
                        <div class="column is-3">
                            <h3 class="has-text-weight-bold">
                            ${elemento.descripcion}
                        </h3>
                    </div>
                    <div class="column is-3">
                        <span class="tag is-primary is-light">
                        ${elemento.categoria}
                        </span>
                    </div>
                    <div class="column has-text-grey">
                        ${fechaIntefaz}
                    </div>
                    <div class="column has-text-weight-bold">
                        ${elemento.monto}
                    </div>
                    <div class="column">
                        ${elemento.tipo}
                    </div>
                 </div>`

    })
    return acc
}
boxOperaciones.innerHTML = mostrarOperacionesEnHTML(arrayDeOperaciones)

botonAgregarNuevaOperacion.onclick = () => {
    boxOperaciones.innerHTML = mostrarOperacionesEnHTML(arrayDeOperaciones)

    seccionBalances.classList.remove("is-hidden");
    seccionAgregarOperacion.classList.add("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionReportes.classList.add("is-hidden");
}
//----------------------Función ocultar o mostrar filtros------------------------

let ocultarFiltro = document.getElementById('click-filtros'),
    boxFiltro = document.getElementById('despliege-filtro'),
    contador=0; 

function cambio()
{
    if(contador==0)
{
    ocultarFiltro.innerText = 'Mostrar filtros'
    boxFiltro.classList.add('is-hidden')
    contador=1;
}
    else{
    ocultarFiltro.innerText = 'Ocultar filtros'
    boxFiltro.classList.remove('is-hidden')
    contador=0;}
}
    ocultarFiltro.addEventListener('click',cambio,true)

/***********************************************************************************/






// // -----------------CONVERTIR A JSON-----------
//  const ConvertirAJSON = JSON.stringify(arrayDeOperaciones, 'operaciones');


// // ---------GUARDAR EN LOCAL STORAGE--------
//  localStorage.setItem('operaciones', personaConvertidoAJSON)

// //---------------OBTENER INFO DEL LOCAL STOGARE------------------
// const infoGuardada = localStorage.getItem('operaciones');

// //-----------CONVERTIR DE JSON A JS-------------------
//  const infoGuardadaEnJS = JSON.parse(infoGuardada)