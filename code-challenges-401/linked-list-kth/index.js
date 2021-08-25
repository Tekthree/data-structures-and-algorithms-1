"use strict";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add to the tail
  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    if (!this.head) {
      return null;
    } else {
      let deletedHead = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return deletedHead;
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      let deletedTail = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return deletedTail.value;
    }
  }

  search(value) {
    let current = this.oldHead;

    while (current) {
      if (currentNode.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  kFromTheEnd(k) {
    if (k <= 0) {
      console.log("k is not positive👻");
      return;
    }

    var pointerOne = this.head;
    var pointerTwo = this.head;

    for (var i = 0; i < k - 1; i++) {
      if (!pointerTwo) {
        console.log("K is larger than the linked list💪");
        return;
      }
      pointerTwo = pointerTwo.next;
    }

    if (!pointerTwo) {
      console.log("k matches the size of the linked list😁");
      return;
    }

    while (pointerTwo.next) {
      pointerOne = pointerOne.next;
      pointerTwo = pointerTwo.next;
    }

    return pointerOne.data;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }

}

var L1 = new LinkedList();

// Create a linked list with six elements
var testData = [5, 6, 7, 8, 9, 10];
testData.forEach((el) => L1.append(el));
console.log(L1);
