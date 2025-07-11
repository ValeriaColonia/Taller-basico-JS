// EJERCICIO 6
// -Editor de texto.
// Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por
// espacios)
function contarPalabras(texto) {
  const palabras = texto.split(" "); // /\s+/ ----   s: espacio en blanco    +: contar ma de una vez el caracter
  return palabras.filter(palabra => palabra !== "").length;
}
console.log(contarPalabras("Crea una función contarPalabras(texto)"))