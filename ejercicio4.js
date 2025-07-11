function calcularPromedio(notas){
    let sumatoria = 0 
    for (let i = 0; i <= notas.length; i++){
        sumatoria += notas[i];
    }
    let resultado = sumatoria/notas.length
    return sumatoria/notas.length.toFixed(2)
}
notas = [1,2,3,4,5]
console.log(calcularPromedio(notas)) 