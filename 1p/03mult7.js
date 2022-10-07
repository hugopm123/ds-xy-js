//imprime la multiplicatoria de los múltiplos de 7 en el rango [200-300]

var i, multi = 1;
for (var i=200;i<=300; i++){
       if (i % 7 ==0){
        multi*=i
    }
}
console.log(multi);