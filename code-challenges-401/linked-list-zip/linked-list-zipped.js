"use strict";
class LinkedList{
  constructor(){
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

}

class LinkedListNode{
  constructor(value, next,){
    this.value = value;
    this.next = next || null;

  }

  addBack(value){
    if(!this.tail){
      this.head = this.tail = new Node(value)
    }else{
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
    }
  }

  addfront(value){
    if(!this.head){
      this.head = this.tail = new Node(value)
    } else{
      let oldHead = this.head
      this.head = new Node(value)
      this.head.next = oldHead
    }
  }
}


function merge(a, b) {
  var aCurrent = a
  var bCurrent = b;
  var aNext = null;
  var bNext = null;

  while (aCurrent != null && bCurrent != null) {
    aNext = aCurrent.next;
    bNext = bCurrent.next;

    bCurrent.next = aNext;
    aCurrent.next = bCurrent;

    aCurrent = aNext;
    bCurrent = bNext;
  }

  b = bCurrent;
  return b;
}
