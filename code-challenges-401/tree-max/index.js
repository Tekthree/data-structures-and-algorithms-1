"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BT {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;

    while (curr) {
      if (value === curr.value) {
        return;
      }
      if (value < curr.value) {
        if (curr.left === null) {
          curr.left = newNode;
          return;
        }
        curr = curr.left;
      } else {
        if (curr.right === null) {
          curr.right = newNode;
          return;
        }
        curr = curr.right;
      }
    }
  }

  findMax(node) {
    if (node == null) return;

    let res = node.data;
    let leftRes = findMax(node.left);
    let rightRes = findMax(node.right);

    if (leftRes > res) res = leftRes;
    if (rightRes > res) res = rightRes;
    return res;
  }
}

let newBT = new BT(15);

newBT.insert(14);
newBT.insert(8);
newBT.insert(10);
newBT.insert(28);
newBT.insert(88);
newBT.insert(100);

console.log(newBT.findMax(this.root));

console.log(newBT);
