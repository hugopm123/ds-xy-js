var total = []
var total2 = []
function fila(tope) {
  this.tp = []
  this.max = tope
  this.full = full
  this.empty = empty
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.show = show
  this.peek = peek
}
function enqueue(element) {
  if (this.full()) {
    console.log("Tu fila esta llena")
  } else {
    this.tp.push(element)
  }
}

function dequeue() {
  if (this.empty()) {
    console.log("Tu fila esta vacia")
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

function ord_fila(x) {
  let pas = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()

    let f = new fila(x);
    let q = new fila(x);

    let n, r;

    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    f.enqueue(n)

    while (i < x) {
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (f.empty() != true) {
        q.enqueue(f.dequeue())
        pas++
      }
      while (r > q.peek()) {
        f.enqueue(q.dequeue())
        pas++
      }
      if (q.empty()) {
        f.enqueue(r)
        pas++
      }
      if (r <= q.peek()) {
        f.enqueue(r)
        pas++
      }
      while (q.empty() != true) {
        f.enqueue(q.dequeue())
      }
      i++
    }
    total[j - 1] = pas;
    console.log(f.show())
    console.log("pasos: " + pas)
    var end = Date.now()

    total2[j - 1] = end - start
    console.log("tiempo: " + total2[j - 1] + "s")
    pas = 0
  }
}
ord_fila(10)
total[5] = (total[0] + total[1] + total[2] + total[3] + total[4])
total[6] = (total[5]) / (5)
total2[5] = (total2[0] + total2[1] + total2[2] + total2[3] + total2[4])
total2[6] = (total2[5]) / (5)
console.log("Promedio pasos: " + total[5])
console.log("Total de Pasos: " + total[6])
console.log("Promedio Tiempo: " + total2[5] + "s")
console.log("Total de tiempo: " + total2[6] + "s")
ord_fila(100)
total[5] = (total[0] + total[1] + total[2] + total[3] + total[4])
total[6] = (total[5]) / (5)
total2[5] = (total2[0] + total2[1] + total2[2] + total2[3] + total2[4])
total2[6] = (total2[5]) / (5)
console.log("Promedio pasos: " + total[5])
console.log("Total de Pasos: " + total[6])
console.log("Promedio Tiempo: " + total2[5] + "s")
console.log("Total de tiempo: " + total2[6] + "s")
ord_fila(1000)
total[5] = (total[0] + total[1] + total[2] + total[3] + total[4])
total[6] = (total[5]) / (5)
total2[5] = (total2[0] + total2[1] + total2[2] + total2[3] + total2[4])
total2[6] = (total2[5]) / (5)
console.log("Promedio pasos: " + total[5])
console.log("Total de Pasos: " + total[6])
console.log("Promedio Tiempo: " + total2[5] + "s")
console.log("Total de tiempo: " + total2[6] + "s")