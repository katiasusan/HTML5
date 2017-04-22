// Documento Javascript

// La funcion ejecuta
function ejecuta() {

    //obtenemos el primer <p> y cuando hagamos click ejecutará saludo
    //document.getElementsByTagName("p")[0].onclick=saludo;

    // for (var i = 0; i < 3; i++) {
    //     document.getElementsByTagName("p")[i].onclick=saludo;
    // }

    //document.getElementById("importante").onclick=saludo;

    // var z = document.getElementsByClassName("test")[0].onclick=saludo;


    // for (var i = 0; i < 2 ; i++) {
    //     var z = document.getElementsByClassName("test")[i].onclick=saludo;
    // }

    // devuelve el primer elemento con el selector de clase indicado
    //document.querySelector(".importante").onclick=saludo;

    //document.querySelector("#principal p:last-child").onclick=saludo;

    // EN el primer elemento dentro de nuestro div
    //var elementos = document.querySelectorAll("#principal p")[0].onclick=saludo;

    // var elementos = document.querySelectorAll("#principal p");
    // for (var i = 0; i < elementos.length; i++) {
    //     elementos[i].onclick=saludo;
    // }

    var elementos = document.querySelectorAll("#principal p");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].onclick=saludo;
    }
}

function saludo() {
    alert("Hola como estas? :D");
}

// al cargar el navegador se ejecutará la funcion
window.onload = ejecuta;
