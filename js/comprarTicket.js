

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");



// Defino porcentajes de descuento según categoría
let descuentoTotal      =100;
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Defino valor de ticket
const valorTicket = 200;



// Cálculo total a pagar
function total_a_pagar() {
   
    // Multiplico cantidad de tickets por el valor
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    // Aplico descuentos según categoría
    if (categoria.value == 'categoria') {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 'estudiante') {
        totalValorTickets = (totalValorTickets * (descuentoTotal - descuentoEstudiante))/descuentoTotal;
    }
    if (categoria.value == 'trainee') {
        totalValorTickets = (totalValorTickets * (descuentoTotal - descuentoTrainee))/descuentoTotal;
    }
    if (categoria.value == 'junior') {
        totalValorTickets = (totalValorTickets * (descuentoTotal - descuentoJunior ))/descuentoTotal;
    }
    // Inserto el valor en el HTML
    totalPago.innerHTML = totalValorTickets;
}



// Función para el botón Borrar para que borre el valor
function reset_total_a_pagar() {
    totalPago.innerHTML = "";
    quitarClaseError();
    
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', total_a_pagar);
// Botón Borrar recibe un escuchador y la funcion del reset
btnBorrar.addEventListener('click', reset_total_a_pagar);