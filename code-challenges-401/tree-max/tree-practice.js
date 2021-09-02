'use strict';

function Node(data){
  this.data = data;
  this.children = [];
}

class Tree{
  constructor(){
    this.root= null

  }

  add(data, toNodeData){
    const node = new Node(data)

    const parent = toNodeData ? this.findBFD(toNodeData) : null;

    if(parent){
      parent.children.push(node)
    }else{
      if(!this.root){
        this.root = node
      }else{
        return
      }
    }
  }


  
}