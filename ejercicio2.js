// EJERCICIO 2

function validarContraseña(contraseña) {
    const tieneLongitud = contraseña.length >= 8;
    const tieneNumero = /\d/.test(contraseña);  // /\d/ recorre el string y evalua si contiene un numero entero
    const tieneMayuscula = /[A-Z]/.test(contraseña); // /[A-Z]/ recorre el string y evalua si contiene mayuscula
    return tieneLongitud && tieneNumero && tieneMayuscula;
}
console.log(validarContraseña("Papitas123"))