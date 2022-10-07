//10e3, 10e4, 10e5, sin ordenar, tomar/mostrar pasos

var v = [],
    n = 0,
    pasos = 0;

for (i = 0; i < 10e3; i++) {
    v[i] = (Math.floor(Math.random() * 10e3))
}

function BusquedaSecunecial(x, v) {
    console.log(v);
    for (var i in v) {
        if (v[i] == x) {
            return "La posicion en el Arreglo es: " + i;
        }
        pasos++
    }
    return "La posicion en el Arreglo es: " + -1;
}

n = Math.floor(Math.random() * 10e3)
console.log("buscar: " + n)
console.log(BusquedaSecunecial(n, v))
console.log("Pasos: " + pasos)
pasos = 0

for (i = 0; i < 10e4; i++) {
    v[i] = (Math.floor(Math.random() * 10e4))
}

n = Math.floor(Math.random() *10e4)
console.log("buscar: " + n)
console.log(BusquedaSecunecial(n, v))
console.log("Pasos: " + pasos)
pasos = 0

for (i = 0; i < 10e5; i++) {
    v[i] = (Math.floor(Math.random() * 10e5))
}

n = Math.floor(Math.random() * 10e5)
console.log("buscar: " + n)
console.log(BusquedaSecunecial(n, v))
console.log("Pasos: " + pasos)