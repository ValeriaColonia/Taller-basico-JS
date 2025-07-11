const inventario = [
        { nombre: "Camisa", precio: 20 },
        { nombre: "Zapatos", precio: 50 }
    ];
function buscarProducto(nombre, inventario) {
    
    
    for (let i = 0 ; i < inventario.length; i ++ ) {
        if (inventario[i].nombre == nombre) {
            return "El producto existe"
        } else {
            return null
        }
    }
}
console.log(buscarProducto("X", inventario ))