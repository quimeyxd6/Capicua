'use strict'

function almacenarPalabra() {
    var palabra = document.getElementById('palabra').value.toLowerCase().replace(/[^a-z]/g);
    var longitud = palabra.length;

        if(palabra == '') {
            document.getElementById("palabraAlmacenada").textContent = 'Falta ingresar palabra';
        } else {
            var esCapicúa = true;
            for (var i = 0; i < Math.floor(longitud / 2); i++) {
                if (palabra[i] !== palabra[longitud - 1 - i]) {
                    esCapicúa = false;
                    break;
                }
            }
        
            if (esCapicúa) {
                document.getElementById("palabraAlmacenada").textContent = `${palabra} es Capicua`;
            } else {
                document.getElementById("palabraAlmacenada").textContent = `${palabra} no es Capicua`;
            }
        }
    }

//Funcion que permite ejecutar el codigo presionando Enter
document.addEventListener("keyup", function(event) {
    var palabra = document.getElementById('palabra').value.toLowerCase().replace(/[^a-z]/g);
    if (event.key === 'Enter' && palabra !== '') {
       almacenarPalabra();
    }
});