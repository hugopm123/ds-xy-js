//imprime los 11 primeros elementos de la sucesión de Fibonacci

var fibo = [];
fibo[0] = 1;
fibo[1] = 1;
for (var i = 2; i < 11; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
}
console.log(fibo);