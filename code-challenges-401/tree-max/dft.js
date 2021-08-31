"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const depthFirstPrint = (root) => {
//   const stack = [ root ];

//   while (stack.length > 0){
//     const curr = stack.pop();
//     console.log(curr.value)

//     if(curr.left !== null){
//       stack.push(curr.left);
//     }

//     if(curr.right !== null){
//       stack.push(curr.right)
//     }

//   }

// };

// depthFirstPrint(a);

const depthFirstPrint = (root) => {
  if (root === null) return;

  console.log(root.value);

  depthFirstPrint(root.left);
  depthFirstPrint(root.right);
};

console.log(a)
