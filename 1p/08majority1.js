//más de ⌊n/2⌋ veces, sin ordenar (fuerza bruta)

console.time("Tiempo")
let array = [],
    array2 = [],
    numeromayor = 0,
    contador = 0;
    k = 0 //steps

for (i = 0; i < 5; i++) {
    array[i] = Math.floor(Math.random() * (5 - 1) + 1)
    k++
}
console.log(array);

//ddjd
for (i = 0; i < 5; i++) {
    array2[i] = 0;
    k++
}
let num = 1;
do {
    for (i = 0; i < array.length; i++) {
        if (num == array[i]) {
            array2[num - 1] += 1
            k++
        }
        k++
    }
    num++;
} while (num < 5);
for (b = 0; b < array2.length; b++) {
    if (array2[b] >= contador) {
        contador = array2[b];
        numeromayor = b + 1;
        k++
    }
    k++
}
majority = Math.floor(array.length / 2)
if (contador > majority) {
    console.log(numeromayor + " es el numero mayoritario")
    k++
} else {
    console.log("No hay numero mayoritario")
    k++
}
console.timeEnd("Tiempo")
console.log("Pasos :", +k)