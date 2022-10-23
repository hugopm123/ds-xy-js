function fila() {
  this.tp = []
  this.max = 5
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

let cola = new fila();

cola.enqueue(1)
cola.enqueue(2)
cola.enqueue(3)
cola.enqueue(4)
cola.enqueue(5)
console.log(cola.show())
cola.enqueue(6)
cola.dequeue()
console.log(cola.show())
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()