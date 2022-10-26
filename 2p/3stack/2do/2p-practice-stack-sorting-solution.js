var total = []
var total2 = []
function pila(tope) {
  this.tp = []
  this.max = tope
  this.full = full
  this.empty = empty
  this.push = push
  this.pop = pop
  this.show = show
  this.peek = peek
}

function push(element) {
  if (this.full()) {
    console.log("La pila esta llena")
  } else {
    this.tp.unshift(element)
  }
}

function pop() {
  if (this.empty()) {
    console.log("La pila esta vacia")
  }
  else {
    return this.tp.shift()
  }
}
function full() {
  if (this.tp.length === this.max)
    return true
  else
    return false
}

function empty() {
  if (this.tp.length === 0)
    return true
  else
    return false
}

function show() {
  let show = ""
  for (let i = 0; i < this.tp.length; ++i) {
    show += this.tp[i] + "\n"
  }
  return show
}
function peek() {
  return this.tp[0]
}

function ord_pila(x) {
  let pas = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()

    let stack = new pila(x);
    let p = new pila(x);
    let n, r;
    let i = 1;

    n = Math.floor(Math.random() * (x - 1) + 1)

    stack.push(n)

    while (i < x) {
      while (p.empty() != true) {
        stack.push(p.pop())
        pas++
      }
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (r <= stack.peek() && stack.empty() != true) {
        p.push(stack.pop())
        pas++
      }
      if (r >= stack.peek() || stack.empty()) {
        stack.push(r)
        pas++
      }
      i++
    }
    while (!p.empty()) {
      stack.push(p.pop())
    }

    total[j - 1] = pas;
    console.log(stack.show())

    console.log("pasos: " + pas)
    var end = Date.now()
    total2[j - 1] = end - start

    console.log("tiempo: " + total2[j - 1] + "s")

    pas = 0
  }
}
ord_pila(10)
total[5] = (total[0] + total[1] + total[2] + total[3] + total[4])
total[6] = (total[5]) / (5)
total2[5] = (total2[0] + total2[1] + total2[2] + total2[3] + total2[4])
total2[6] = (total2[5]) / (5)
console.log("Total pasos: " + total[5])
console.log("Promedio de Pasos: " + total[6])
console.log("Total Tiempo: " + total2[5] + "s")
console.log("Promedio de tiempo: " + total2[6] + "s")
ord_pila(100)
total[5] = (total[0] + total[1] + total[2] + total[3] + total[4])
total[6] = (total[5]) / (5)
total2[5] = (total2[0] + total2[1] + total2[2] + total2[3] + total2[4])
total2[6] = (total2[5]) / (5)
console.log("Total pasos: " + total[5])
console.log("Promedio de Pasos: " + total[6])
console.log("Total Tiempo: " + total2[5] + "s")
console.log("Promedio de tiempo: " + total2[6] + "s")
ord_pila(1000)
total[5] = (total[0] + total[1] + total[2] + total[3] + total[4])
total[6] = (total[5]) / (5)
total2[5] = (total2[0] + total2[1] + total2[2] + total2[3] + total2[4])
total2[6] = (total2[5]) / (5)
console.log("Total pasos: " + total[5])
console.log("Promedio de Pasos: " + total[6])
console.log("Total Tiempo: " + total2[5] + "s")
console.log("Promedio de tiempo: " + total2[6] + "s")