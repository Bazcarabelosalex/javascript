

function resolve(p) {

    if (p == 1) {
        document.write("Medalla de ouro");
    } 
    else if (p == 2) {
        document.write("plata ");
    }

    else if (p == 3) {
        document.write("bronce ");
    }

}

var posicion;
posicion = prompt("En que posicion quedaste?   ");
resolve(posicion)