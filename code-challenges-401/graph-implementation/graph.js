'use strict'

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(value){
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, [])
  }

  addDirectedEdge(startVertex, endVertex, weight = 0){
    if(!this.adjacencyList.has(startVertex) && !this.adfacencyList.has(endVertex)){
      throw Error(
        'Invalid Vertices'
      );
    }

    let edges = this.adjacencyList.get(startVertex);
    edges.push(new Edge(endVertex, weight));
  }
}

const graph = new Graph();

const a = graph.addVertex('A');
const b = graph.addVertex('B');
const c = graph.addVertex('C');

graph.addDirectedEdge(a,c);
graph.addDirectedEdge(a, b);
graph.addDirectedEdge(c,b);

console.log(graph.adjacencyList)