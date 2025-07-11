const prompt=  require("prompt-sync")();
const COP = prompt("Ingrese monto en COP: ")
const monedaDestino = prompt("Ingrese moneda de destino: ")
function convertirMoneda(monto, monedaDestino) {
    if (monedaDestino == "EUR") {
        monedaDestino = monto/4600
        return "Euros: ", monedaDestino
    } else if (monedaDestino == "USD"){
        monedaDestino = monto/4000
        return "Dolares: ", monedaDestino
    } else {
        return "Datos mal ingresados"
    }
    
}
console.log(convertirMoneda(COP, monedaDestino))