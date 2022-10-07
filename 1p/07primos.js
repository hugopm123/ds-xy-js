//imprime los 11 primeros números primos

let num, np, primo;
num = 11
np = 0
//
while (num > 0) {
    np++
    i = 1
    primo = 0
    while (i <= np) {
        if (np % i == 0) {
            primo++
        }
        i++
    }
    if (primo == 2) {
        num--
      console.log(np)
    }
}
