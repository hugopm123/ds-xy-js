//agregar 10e3 pares (llave:valor) a un objeto

//GGG

console.time("Tiempo")
let objnum = {},k =0 

for (x = 1; x <= 10e3; x++) {
    key = 'key:' + Math.floor(Math.random() * 10e3);
    objnum[key] = key;
  k++
}
console.log(objnum)
console.timeEnd("Tiempo")
console.log("Pasos :", + k)
