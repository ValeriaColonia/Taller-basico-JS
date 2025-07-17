const prompt = require("prompt-sync")();

let notas = prompt("Ingrese sus notas separadas por coma: ")
            .split(",")
            .map(Number);

function calcularPromedio(notas) {
    let sumatoria = 0;
    for (let i = 0; i < notas.length; i++) {
        sumatoria += notas[i];
    }
    return (sumatoria / notas.length).toFixed(2);
}

console.log("El promedio es:", calcularPromedio(notas));