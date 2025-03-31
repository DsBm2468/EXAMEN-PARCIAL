
//agregar  onclick="cambiarTexto()" y id="botonCambiar"  en el botón actúe para el cambio

let texto = document.getElementById("textoCambiar")

function cambiarTexto(){
    let frase = "Texto remplazado"
    texto.innerHTML = frase;
}
