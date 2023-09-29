//alert("Hola este es mi Javascript");

let nombre = "Lourdes Agustina Lafuente";

console.log(nombre);

let contenidoTitulo = "Acerca de mi";

let titulo = document.querySelector(".logo .fuente-acento-oscuro");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Acerca de Mi") {
    titulo.innerHTML = "otro";
} else {
    console.log("no se cumple");
}
