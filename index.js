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

/*---------------------------Elementos del DOM-------------------------------------*/
const filtroTipo = document.getElementById("filtro-tipo")
const filtroCategoria = document.getElementById("filtro-categoria")


const filtroFecha = document.getElementById("filtro-fecha")

const ordenar = document.getElementById("filtro-ordenar")


/*------------------------Aplicación de filtros según elección---------------------*/

const aplicarFiltros = () => {
    const tipo = filtroTipo.value
    const filtradoPorTipo = arrayDeOperaciones.filter((elemento) => {
        if(tipo === "todos"){
            return elemento
        }
        return elemento.tipo === tipo
    })

    const categoria = filtroCategoria.value
    const filtradoPorCategoria = filtradoPorTipo.filter((elemento) => {
        if(categoria === "todos"){
            return elemento
        }
        return elemento.categoria === categoria
    })

    const fechaDesde = filtroFecha.value
    filtradoPorFecha = filtradoPorCategoria.filter((elemento) => {
        
        if(fechaDesde === 0){
            return elemento
        }
        return elemento.fecha >= fechaDesde
    })
/*------------------------------Agregado Ordenamiento-----------------------------------*/
    console.log(ordenar.value)
    switch (ordenar.value) {
        case 'recientes':
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
        default:
    }

  return filtradoPorFecha 

}

/*----------------aplicar método sort() para orden del (array) ----------------------------*/

  const ordernarPorFecha = (arrayVariable, ordenar) => {
    console.log(arrayVariable)
    return [...arrayVariable].sort((a, b) => {
      const fechaA = new Date(a.fecha)
      const fechaB = new Date(b.fecha)
      return ordenar === 'ASC'
        ? fechaA.getTime() - fechaB.getTime()
        : fechaB.getTime() - fechaA.getTime()
    })
  }
  
  const ordernarPorMonto = (arrayVariable, ordenar) => {
    return [...arrayVariable].sort((a, b) => {
      return ordenar === 'ASC' ? a.monto - b.monto : b.monto - a.monto
    })
  }
  
  const ordernarPorDescripcion = (arrayVariable, ordenar) => {
    if(ordenar === 'ASC'){  
        return [...arrayVariable].sort((a, b) => {            
            if(a.descripcion.toLowerCase() < b.descripcion.toLowerCase())
            {
                return -1
            }
            if(a.descripcion.toLowerCase() > b.descripcion.toLowerCase())
            {
                return 1
            }
            return 0
        })
    }else{
        return [...arrayVariable].sort((a, b) => {
            if(a.descripcion.toLowerCase() > b.descripcion.toLowerCase())
            {
                return -1
            }
            if(a.descripcion.toLowerCase() < b.descripcion.toLowerCase())
            {
                return 1
            }
            return 0
        })
    }
    
}







// // -----------------CONVERTIR A JSON-----------
//  const ConvertirAJSON = JSON.stringify(arrayDeOperaciones, 'operaciones');


// // ---------GUARDAR EN LOCAL STORAGE--------
//  localStorage.setItem('operaciones', personaConvertidoAJSON)

// //---------------OBTENER INFO DEL LOCAL STOGARE------------------
// const infoGuardada = localStorage.getItem('operaciones');

// //-----------CONVERTIR DE JSON A JS-------------------
//  const infoGuardadaEnJS = JSON.parse(infoGuardada)