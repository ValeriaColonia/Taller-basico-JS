const prompt=  require("prompt-sync")();
const saldo = prompt("Ingrese saldo: ")
const monto = prompt("Ingrese monto a retirar: ")
function retirarDinero(saldo, monto) {
    if (monto <= saldo) {
        saldoActual = saldo - monto
        return `Saldo actual: ${saldoActual}`
        
    } else {
        return "Fondos insuficientes!"
    }
}
console.log(retirarDinero(saldo, monto))