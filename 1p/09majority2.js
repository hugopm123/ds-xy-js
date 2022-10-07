//más de ⌊n/2⌋ veces, ordenados

console.time("Tiempo")
let array = [],
    g = 0,
    num = 0,
    nveces = 1,
    k = 0,
    p = 0;

for (let i = 0; i < 5; i++) {
    array[i] = Math.floor(Math.random() * (5 - 1) + 1)
    k++
}
console.log("Numeros desordenados")
console.log(array);
console.log("Numeros ordenados")
array.sort()
console.log(array)
majority = Math.floor(array.length / 2)

do {
    for (i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            nveces++
            g = nveces
            num = array[i]
        } else {
            nveces = 1
            if (g > nveces) {
                p = g
                k++
            }
            k++
        }
        k++
    }
    k++
} while (p < g)

if (g > majority) {
    console.log(num + " es el numero mayoritario")
    k++
} else {
    console.log("No hay numero mayoritario")
    k++
}
console.timeEnd("Tiempo")
console.log("Pasos :", +k)