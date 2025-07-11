// calculador propinas 
function calcularPropina(total, porcentaje){
    let propina = total * porcentaje/100; 
    return total + propina
}
console.log ("total a pagar: ", calcularPropina(500,5)) 



