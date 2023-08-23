'use strict'

function almacenarPalabra() {
    var palabra = document.getElementById('palabra').value.toLowerCase();
    palabra = palabra.replace(/[^a-z0-9]/g, "");
    var longitud = palabra.length;
    var esCapicúa = true;

    console.log(palabra);
    console.log(longitud);
    for (var i = 0; i < Math.floor(longitud / 2); i++) {
        if (palabra[i] !== palabra[longitud - 1 - i]) {
            esCapicúa = false;
            break;
        }
    }
    if (esCapicúa) {
        document.getElementById("palabraAlmacenada").textContent = 'Es Capicúa';
    } else {
        document.getElementById("palabraAlmacenada").textContent = 'No es Capicúa';
    }
}