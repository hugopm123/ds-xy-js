export { Linked, Node }
import Node from './node.js'
function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}


function getHead() {
  return this.head
}
function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v) {
  let c = this.head
  let bus = "";
  while (c) {//exists
    if (v == c.data) {
      bus = c.data
    }
    c = c.next
  }
  console.log(bus)

}
function getTail() {
  let c = this.head
  var colita
  while (c) {
    colita = c.data
    c = c.next
  }
  console.log(colita)
}

function InsertAfter(x, v) {
  let c = this.head
  let des, aux;
  while (c) {//exists
    if (v == c.data) {
      des = c.next
      c.next = x
      x.next = aux
    }
    c = c.next
  }
}

function InsertBefore(x, v) {
  let c = this.head
  let ant, list
  if (c.next == null) {
    this.prepend(x)
  } else {
    if (v != this.head.data) {
      while (c) {//exists
        if (v != c.data) {
          ant = c
        } else {
          list = ant.next
          ant.next = x
          x.next = list
        }
        c = c.next
      }
    } else {
      this.prepend(x)
    }
  }
}