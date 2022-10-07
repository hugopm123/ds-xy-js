//10e3, 10e4, 10e5, ordenados, tomar/mostrar pasos

var v = [],
    x = 0,
    pasos = 0;

for (i = 0; i < 10e3; i++) {
    v[i] = (Math.floor(Math.random() * 10e3))
}

function up(a, b) {
    return a - b;
}

function BusquedaBinario(x, v) {
    v.sort(up);
    console.log(v)
    var low = 0,
        high = v.length - 1,
        mid, element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        element = v[mid]
        if (element < x) {
            low = mid + 1
        } else if (element > x) {
            high = mid - 1;
        } else {
            return "La posicion en el Arreglo es: " + mid;
        }
        pasos++
    }
    return "La posicion en el Arreglo es: " + -1
}

n = Math.floor(Math.random() * 10e3)
console.log("buscar: " + n)
console.log(BusquedaBinario(n, v))
console.log("Pasos: " + pasos)
pasos = 0

for (i = 0; i < 10e4; i++) {
    v[i] = (Math.floor(Math.random() * 10e4))
}

n = Math.floor(Math.random() * 10e4)
console.log("buscar: " + n)
console.log(BusquedaBinario(n, v))
console.log("Pasos: " + pasos)
pasos = 0

for (i = 0; i < 10e5; i++) {
    v[i] = (Math.floor(Math.random() * 10e5))
}

n = Math.floor(Math.random() * 10e5)
console.log("buscar: " + n)
console.log(BusquedaBinario(n, v))
console.log("Pasos: " + pasos)