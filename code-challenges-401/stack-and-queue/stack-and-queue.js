"use strict";

// Stack //
const stack = [];

//push
stack.push("tek");
stack.push("is");
stack.push("🔥");

//pop
stack.pop();

//peek
stack[stack.length - 1];

// with a class

class StackTwo {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

const stackTwo = new StackTwo();
stackTwo.push("tek");
stackTwo.push("is");
stackTwo.push("🔥");

stackTwo.pop();

console.log(stackTwo.peek());

//queue

const queue = [];

queue.push("tek");
queue.push("is");
queue.push("lit");

queue.shift();

// ------------------- queue ------------------- //

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  }
}

const queueTwo = new Queue

queueTwo.enqueue("tek");
queueTwo.enqueue("is");
queueTwo.enqueue("lit");

queueTwo.dequeue()

queueTwo.enqueue('what')

queueTwo.dequeue()

queueTwo.enqueue('tood')

queueTwo.dequeue()

console.log('this is queue with class', queueTwo)
