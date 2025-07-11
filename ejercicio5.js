const usuarios = [{ nombre: "Ana", edad: 25 }, { nombre: "Pedro", edad: 20 },{ nombre: "Juan", edad: 30 },]
function filtrarUsuarios(usuarios, edadMinima) {
    
    for (let i = 0 ; i < usuarios.length; i ++ ) {
        if (usuarios[i].edad >= edadMinima) {
            console.log(usuarios[i])
        }
    }
}
console.log(filtrarUsuarios(usuarios,22))