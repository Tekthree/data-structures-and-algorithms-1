"use strict";


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(5);
// const f = new Node(6);
// const g = new Node(7);
// const h = new Node(8);
// const i = new Node(9)

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.right = g;
f.right = h;
g.right = i;

//          1a
//         /\
//        2b  3c
//        /\   \
//      4d 5e   6f
//          \     \
//           8g    7h
//           \
//            9i

// function longestPath(root) {
//   // If root is null means there
//   // is no binary tree so
//   // return a empty vector
//   if (root == null) {
//     let output = [];
//     return output;
//   }
//   let counter = 0;

//   // Recursive call on root.right
//   let right = longestPath(root.right);

//   // Recursive call on root.left
//   let left = longestPath(root.left);

//   // Compare the size of the two ArrayList
//   // and insert current node accordingly
//   if (right.length < left.length) {
//     left.push(root);
//   } else {
//     right.push(root);
//   }

//   let longPathArr = left.length > right.length ? left : right;

//   // Return the appropriate ArrayList
//   return longPathArr;
// }

let maxLevel = -1;
let res = -1;

// maxLevel : keeps track of maximum level seen so far.
// res : Value of deepest node so far.
// level : Level of root
function find(root, level) {

  if (root != null) {
    find(root.left, level++);

    // Update level and resue
    if (level > maxLevel) {
      res = root;
      maxLevel = level;
    }

    find(root.right, level);
  }
}

// Returns value of deepest node
function deepestNode(root) {
  // Initialize result and max level
  /* int res = -1;
        int maxLevel = -1; */

  // Updates value "res" and "maxLevel"
  // Note that res and maxLen are passed
  // by reference.
  find(root, 0);
  return res;
}

// console.log(JSON.stringify(a));
console.log(deepestNode(a));
