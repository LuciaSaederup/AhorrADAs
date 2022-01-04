const verBalances = document.getElementById("ver-balance");
const verCategorias = document.getElementById("ver-categorias");
const verReportes = document.getElementById("ver-reportes");
const seccionBalances = document.getElementById("seccion-balances");
const seccionCategorias = document.getElementById("seccion-categorias");
const seccionReportes = document.getElementById("seccion-reportes");
const seccionNuevaOperacion = document.getElementById("seccion-agregar-operacion");
const sinReportes = document.getElementById("sin-reportes");
const conReportes = document.getElementById("con-reportes");




//categorias//
const categoriasInput = document.getElementById("categorias-input");
const botonAgregarCategoria = document.getElementById("boton-agregar-categoria");
const listadoCategorias = document.querySelector("#listado-categorias");

// No es necesario declarar el evento en esta funcion, ni en 
// todas las demas. A menos que usen explicitamente la e, 
// no deberia estar
verCategorias.addEventListener("click", (e) => {
    seccionCategorias.classList.remove("is-hidden");
    seccionBalances.classList.add("is-hidden");
    seccionReportes.classList.add("is-hidden");
    boxOperaciones.classList.add("is-hidden")
});
verBalances.addEventListener("click", (e) => {
    seccionBalances.classList.remove("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionReportes.classList.add("is-hidden");
    boxOperaciones.classList.add("is-hidden")

});
verReportes.addEventListener("click", (e) => {
    seccionBalances.classList.add("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionReportes.classList.remove("is-hidden");
    seccionNuevaOperacion.classList.add("is-hidden");
    boxOperaciones.classList.add("is-hidden")

});



const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const seccionAgregarOperacion = document.getElementById("seccion-agregar-operacion");
const formNuevaOperacion = document.getElementById("formulario-nueva-operacion")


botonNuevaOperacion.addEventListener("click", (e) => {
    seccionBalances.classList.add("is-hidden");
    seccionAgregarOperacion.classList.remove("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionReportes.classList.add("is-hidden");
    formNuevaOperacion.classList.remove("is-hidden")

})

//---------------------------CREAR NUEVA OPERACION-------------------
const descripcionNuevaOperacion = document.getElementById("input-descripcion-nueva-operacion");
const montoNuevaOperacion = document.getElementById("monto-nueva-operacion");
const tipoNuevaOperacion = document.getElementById("tipo-nueva-operacion");
const categoriaNuevaOperacion = document.getElementById("categoria-nueva-operacion");
const fechaNuevaOperacion = document.getElementById("fecha-nueva-operacion");
const botonAgregarNuevaOperacion = document.getElementById("boton-agregar-operacion")
// Nunca usan esta variable, mejor borrarla
const formularioOperacion = document.getElementById('formulario-operacion')
const boxOperaciones = document.getElementById("operaciones-realizadas");

// --------------------array de objetos(operaciones)----------------
let arrayDeOperaciones = []
// No dejen console log en una entrega. Esto les bajaria muchisimos puntos en un challenge. 
console.log(arrayDeOperaciones)

// No entiendo el sentido de dejar ninguna de estas funciones en el codigo entregado
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

// Por que declaran esta funcion aqui, que es igual a arrayDeOperaciones?? Nunca la usan
const copiaArrayDeOperaciones = [...arrayDeOperaciones]

const mostrarOperacionesEnHTML = (array) => {
    // Si no van a interpolar variables, usen comillas simples: ""
    let acc = ``
    // Si estan usando una acumuladora, por que no usar un reduce?
    array.map((elemento) => {
        // falta un let o const para dateArray y fechaIntefaz, aqui y en varios lugares mas
        // atencion a fechaIntefaz, supongo que quisieron decir fechaInterfaz
        dateArray = elemento.fecha.split("-")
        fechaIntefaz = dateArray[2] + "-" + dateArray[1] + '-' + dateArray[0]
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


// boxOperaciones.innerHTML = mostrarOperacionesEnHTML(arrayDeOperaciones)
const boxSinOperaciones = document.getElementById("sin-operaciones")
const boxConOperaciones = document.getElementById('titulos-operaciones')

botonAgregarNuevaOperacion.onclick = () => {
    // arrayDeOperaciones es una variable que ustedes declaran acá en js, que se vuelve a ejecutar
    // cada vez que recargamos la pagina. Como se vuelve a ejecutar, queda vacia en cada recarga
    // No sirve de nada guardar las operaciones en local storage si no *leen* esas operaciones del local 
    // storage para mostrarlas en html: eso es lo que deberian estar haciendo aqui
    boxOperaciones.innerHTML = mostrarOperacionesEnHTML(arrayDeOperaciones)
    seccionBalances.classList.remove("is-hidden");
    seccionAgregarOperacion.classList.add("is-hidden");
    seccionCategorias.classList.add("is-hidden");
    seccionReportes.classList.add("is-hidden");
    boxSinOperaciones.classList.add("is-hidden");
    boxConOperaciones.classList.remove("is-hidden")
    // No dejen codigo comentado en una entrega
        // arrayConvertidoAJSON = JSON.stringify(arrayDeOperaciones, 'arrayDeOperaciones');
        // localStorage.setItem('arrayDeOperaciones', arrayDeOperaciones)
    localStorage.setItem('arrayDeOperaciones', JSON.stringify(arrayDeOperaciones, 'arrayDeOperaciones'));
}



//----------------------Función ocultar o mostrar filtros------------------------

// Escriban un let por cada una de las variables. >
let ocultarFiltro = document.getElementById('click-filtros'),
    boxFiltro = document.getElementById('despliege-filtro'),
    contador = 0;

    // No usen la sintaxis vieja de funciones sin un buen motivo
function cambio() {
    // No es necesario tener este contador aqui, piensen otra manera mas clara de saber si hay que
    // mostrar u ocultar los filtros. Seria mejor un booleano, ya que es mas claro:
    // let mostrarFiltro = true, por ejemplo
    if (contador == 0) {
        ocultarFiltro.innerText = 'Mostrar filtros'
        boxFiltro.classList.add('is-hidden')
        contador = 1;
    } else {
        ocultarFiltro.innerText = 'Ocultar filtros'
        boxFiltro.classList.remove('is-hidden')
        contador = 0;
    }
}
// Ese tercer parametro true no hace nada
ocultarFiltro.addEventListener('click', cambio, true)

/***********************************************************************************/

/*---------------------------Elementos del DOM-------------------------------------*/
const filtroTipo = document.getElementById("filtro-tipo")
const filtroCategoria = document.getElementById("filtro-categoria")


const filtroFecha = document.getElementById("filtro-fecha")

const ordenar = document.getElementById("filtro-ordenar")


/*------------------------Aplicación de filtros según elección---------------------*/

const aplicarFiltros = () => {
    const tipo = filtroTipo.value
    const filtradoPorTipo = arrayDeOperaciones.filter((elemento) => {
        if (tipo === "todos") {
            return elemento
        }
        return elemento.tipo === tipo
    })

    const categoria = filtroCategoria.value
    const filtradoPorCategoria = filtradoPorTipo.filter((elemento) => {
        if (categoria === "todos") {
            return elemento
        }
        return elemento.categoria === categoria
    })

    const fechaDesde = filtroFecha.value
    // falta un const o let para filtradoPorFecha
    filtradoPorFecha = filtradoPorCategoria.filter((elemento) => {

            if (fechaDesde === 0) {
                return elemento
            }
            return elemento.fecha >= fechaDesde
        })
        /*------------------------------Agregado Ordenamiento-----------------------------------*/
    console.log(ordenar.value)
    switch (ordenar.value) {
        case 'recientes':
            // Necesito que me den una explicacion creíble de por qué esta sección está tan parecida 
            // al código de Ada que hasta tienen el mismo error de ortografía en el nombre de la función
            // (ordernar en lugar de ordenar)
            filtradoPorFecha = ordernarPorFecha(filtradoPorFecha, 'DESC')
            break
        case 'antiguas':
            filtradoPorFecha = ordernarPorFecha(filtradoPorFecha, 'ASC')
            break
        case 'monto_mayor':
            filtradoPorFecha = ordernarPorMonto(filtradoPorFecha, 'DESC')
            break
        case 'monto_menor':
            filtradoPorFecha = ordernarPorMonto(filtradoPorFecha, 'ASC')
            break
        case 'A/Z':
            filtradoPorFecha = ordernarPorDescripcion(filtradoPorFecha, 'ASC')
            break
        case 'Z/A':
            filtradoPorFecha = ordernarPorDescripcion(filtradoPorFecha, 'DESC')
            break
            // No dejen un default vacio
        default:
    }

    return filtradoPorFecha

}

/*----------------aplicar método sort() para orden del (array) ----------------------------*/

// Ni considero esta sección para la nota final: es literal una copia del código de Ada
// No les sirve de nada escribir código que no entienden. Ustedes no aprenden. Preferiría aquí un honesto intento 
// de hacer el sorting, aunque no les saliera. O que no estuviera en absoluto. Cualquier cosa menos copiar código que
// no entienden y malgastar la oportunidad de aprenderlo. 
const ordernarPorFecha = (arrayVariable, ordenar) => {
    console.log(arrayVariable)
    return [...arrayVariable].sort((a, b) => {
        const fechaA = new Date(a.fecha)
        const fechaB = new Date(b.fecha)
        return ordenar === 'ASC' ?
            fechaA.getTime() - fechaB.getTime() :
            fechaB.getTime() - fechaA.getTime()
    })
}

const ordernarPorMonto = (arrayVariable, ordenar) => {
    return [...arrayVariable].sort((a, b) => {
        return ordenar === 'ASC' ? a.monto - b.monto : b.monto - a.monto
    })
}

const ordernarPorDescripcion = (arrayVariable, ordenar) => {
    if (ordenar === 'ASC') {
        return [...arrayVariable].sort((a, b) => {
            if (a.descripcion.toLowerCase() < b.descripcion.toLowerCase()) {
                return -1
            }
            if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase()) {
                return 1
            }
            return 0
        })
    } else {
        return [...arrayVariable].sort((a, b) => {
            if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase()) {
                return -1
            }
            if (a.descripcion.toLowerCase() < b.descripcion.toLowerCase()) {
                return 1
            }
            return 0
        })
    }

}

/*---------------------------Eventos para el filtro----------------------------------------*/

filtroTipo.onchange = () => {
    const arrayFiltrado = aplicarFiltros()
    boxOperaciones.innerHTML = mostrarOperacionesEnHTML(arrayFiltrado)
}

filtroCategoria.onchange = () => {
    const arrayFiltrado = aplicarFiltros()
    boxOperaciones.innerHTML = mostrarOperacionesEnHTML(arrayFiltrado)
}
filtroFecha.onchange = () => {
        const arrayFiltrado = aplicarFiltros()
        boxOperaciones.innerHTML = mostrarOperacionesEnHTML(arrayFiltrado)
    }
    /*********************************************************************************************/
ordenar.onchange = () => {
        const arrayFiltrado = aplicarFiltros()
        boxOperaciones.innerHTML = mostrarOperacionesEnHTML(arrayFiltrado)
    }
    /******************************************************************************************** */

//Si el usuario elige ver fechas (Mas recientes) se aplica sort (b-a)
//Si el usuario elige ver fechas (Menos recientes) se aplica sort (a-b)
//Esto mismo se puede aplicar a monto mayor y menor  



// // -----------------CONVERTIR A JSON-----------
//  const ConvertirAJSON = JSON.stringify(arrayDeOperaciones, 'operaciones');


// // ---------GUARDAR EN LOCAL STORAGE--------
//  localStorage.setItem('operaciones', personaConvertidoAJSON)

// //---------------OBTENER INFO DEL LOCAL STOGARE------------------
// const infoGuardada = localStorage.getItem('operaciones');

// //-----------CONVERTIR DE JSON A JS-------------------
//  const infoGuardadaEnJS = JSON.parse(infoGuardada)


const operaciones = [{
        descripción: "asdasd",
        tipo: "gasto",
        monto: 500,
        categoria: "comida",
    },

    {
        descripción: "asdasd",
        tipo: "ganancia",
        monto: 700,
        categoria: "comida",
    },

    {
        descripción: "asdasd",
        tipo: "ganancia",
        monto: 7090,
        categoria: "comida",
    },


    {
        descripción: "asdasd",
        tipo: "gasto",
        monto: 508880,
        categoria: "comida",
    },

]


console.log(operaciones)

const verificarOperacionesEnReportes = () => {
    const operacionVerificada = operaciones.map((elemento, index) => {

        if (index > 1) {
            conReportes.classList.remove("is-hidden");
            sinReportes.classList.add("is-hidden");

        } else {
            conReportes.classList.add("is-hidden");
            sinReportes.classList.remove("is-hidden");
        }

    })
    return operacionVerificada

}

verificarOperacionesEnReportes()


const mayorGananciaTotal = document.getElementById("mayor-ganancia-total")
const mayorGastoTotal = document.getElementById("mayor-gasto-total")
// Nunca usan esta variable
const mayorBalanceTotal = document.getElementById("mayor-balance-total")



// reportes: categoria con mayor ganancia

const arrayFiltrado = (array, tipo) => {

    const arrayFilter = array.filter((elemento) => {
        return elemento.tipo === tipo
    })
    return arrayFilter
}

const categoriaMayorGanancia = (array) => {
    const arraySort = array.sort((a, b) => {
        return b.monto - a.monto
    }, 0)

    let acc = ""
    for (let i = 0; i < 1; i++) {
        return acc += ` <div class="column is-8 has-text-weight-medium has-text-left">Categoría con mayor ganancia</div>
         <div class="column is-1 tag is-primary is-light has-text-left p-4">${arraySort[0].categoria}</div>
         <div class="column is-3 has-text-weight-bold has-text-success has-text-right"> +$ ${arraySort[0].monto}</div>`
    }
}

const categoriaMayorGasto = (array) => {
    const arraySort = array.sort((a, b) => {
        return b.monto - a.monto

    }, 0)

    let acc = ""
    for (let i = 0; i < 1; i++) {
        return acc += `<div class="column is-8 has-text-weight-medium has-text-left">Categoría con mayor gasto</div>
         <div class="column is-1 tag is-primary is-light has-text-left p-4">${arraySort[0].categoria}</div>
         <div class="column is-3 has-text-weight-bold has-text-danger has-text-right"> -$ ${arraySort[0].monto}</div>`

    }
}

// La logica de estas funciones está bien, pero estan sacando los datos del array de operaciones que 
// tienen declarado mas arriba, no de las operaciones que efectivamente agregó el usuario!! Esto nunca va a funcionar!
mayorGananciaTotal.innerHTML = categoriaMayorGanancia(arrayFiltrado(operaciones, "ganancia"))
mayorGastoTotal.innerHTML = categoriaMayorGasto(arrayFiltrado(operaciones, "gasto"))

//CATEGORIAS//
let categorias = [
    "Comidas",
    "Servicios",
    "Salidas",
    "Educación",
    "Transporte",
    "Trabajo",
    "Salud",
];

// este nombre no es bueno para la funcion. no queda claro qué hace.
const estructuraHtml = (array) => {
    let acc = ``
    // mejor un reduce que un map aqui
    array.map((elemento) => {
        acc = acc + `<div class="columns" >
            <div class="column">
               <div class="columns is-vcentered is-mobile mt-4">
                 <div class="column is-9">
                   <p class="tag is-primary is-light">${elemento}</p>
                 </div>
                 <div class="column is-3">
                   <div class="columns is-justify-content-flex-end is-mobile">
                     <button class="button is-ghost is-small">Editar</button>
                     <button class="button is-ghost is-small">Eliminar</button>
                   </div>
                </div>
              </div>
             </div>
          </div>`


    })
    return acc
}

listadoCategorias.innerHTML = estructuraHtml(categorias);

// para que necesitan esta funcion?
categoriasInput.onchange = () => {
    console.log(categoriasInput.value)
}
botonAgregarCategoria.onclick = () => {

    categorias.unshift(categoriasInput.value)
    console.log(categorias)
    listadoCategorias.innerHTML = estructuraHtml(categorias);

    const categoriasAJSON = JSON.stringify('categorias', categorias);
    localStorage.setItem("categorias", categoriasAJSON);
    listadoCategorias.innerHTML = estructuraHtml(categorias);

    // agregarCategoriasAlABMDeCategorias();
};

botonAgregarCategoria.addEventListener('click', () => {})

// Nunca ejecutan esta funcion, para que la tienen aqui?
const obtenerCategorias = () => {
    const categoriasGuardadasEnElLocalStorage =
        localStorage.getItem("categorias");
    const categoriasGuardadasJSONaJS = JSON.parse(categoriasGuardadasEnElLocalStorage);
    if (categoriasGuardadasEnElLocalStorage === null) {
        return categorias;
    } else {
        return categoriasGuardadasJSONaJS;
    }
};


//inicialización


// const recuperoValores = () => {
//     const infoGuardada = localStorage.getItem('arrayDeOperaciones');
//     const infoAJS = JSON.parse(infoGuardada)
//     return infoAJS
// }
// const inicializacion = () => {
//     boxOperaciones.innerHTML = mostrarOperacionesEnHTML(recuperoValores)
// }

// document.addEventListener("DOMContentLoaded", inicializacion());
document.onload = () => {
    const infoGuardada = localStorage.getItem('arrayDeOperaciones');
    const infoAJS = JSON.parse(infoGuardada)
    boxOperaciones.innerHTML = mostrarOperacionesEnHTML(infoAJS)
}

// no dejen codigo coemntado en una entrega
// inicializacion()
// window.onload = inicializacion();
// const recuperoValores=()=> {
//     const infoGuardada = localStorage.getItem('arrayDeOperaciones');
//     return JSON.parse(infoGuardada)
//   }
// document.addEventListener("DOMContentLoaded", recuperoValores);
// const agregarCategoriasAlABMDeCategorias = (array) => {
// const categorias = obtenerCategorias();
//     const estructuraHtml = categorias.reduce((acc, elemento) => {
//         return (
//             acc +
//             
//           <div class="columns" >
//             <div class="column">
//               <div class="columns is-vcentered is-mobile mt-4">
//                 <div class="column is-9">
//                   <p class="tag is-primary is-light">${elemento}</p>
//                 </div>
//                 <div class="column is-3">
//                   <div class="columns is-justify-content-flex-end is-mobile">
//                     <button class="button is-ghost is-small">Editar</button>
//                     <button class="button is-ghost is-small">Eliminar</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         `
//         );
//     }, ``);
//     
// };
// agregarCategoriasAlABMDeCategorias();