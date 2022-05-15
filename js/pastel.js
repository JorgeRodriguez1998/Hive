// Obtener una referencia al elemento canvas del DOM
const $grafica2 = document.querySelector("#grafica2");
// Las etiquetas son las porciones de la gráfica
const etiquetas2 = ["Oncología", "Pediatría", "Urgencias", "Neonatales", "Otras"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [15, 10, 35, 10, 30 ], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(163,221,203,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(230,181,102,0.2)',
        'rgba(229,112,126,0.2)',
    ],// Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ],// Color del borde
    borderWidth: 3,// Ancho del borde
};
new Chart($grafica2, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas2,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});