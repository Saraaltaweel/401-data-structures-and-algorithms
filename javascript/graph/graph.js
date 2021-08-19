'use strict';

class Vertex{
    constructor(val){
        this.val=val;
    }
}

class Edge{
    constructor(vertex,weight){
        this.vertex=vertex;
        this.weight=weight;
    }
}

class Graph{
    constructor(){
        this.adjacencyList=new Map();

    }
    addVertex(vertex){
        this.adjacencyList.set(vertex,[]);

    }
    addDirectedEdge(start,end,weight){
        if(!this.adjacencyList.has(start)|| !this.adjacencyList.has(end)){
            return 'not exist';
        }
        const adjacencies=this.adjacencyList.get(weight);
        adjacencies.push(new Edge(end,weight));

    }
    size(vertex){
        const queue = [];
        const visited = new Set();
    
        queue.unshift(vertex);
        visited.add(vertex);
    
        while(queue.length) {
          const currentVertex = queue.pop();
          const neighbors = this.getNeighbors(currentVertex); 
    
          for (let neighbor of neighbors) {
            const neighborVertex = neighbor.vertex;
    
            if (visited.has(neighborVertex)){ 
              continue;
            } else { 
              visited.add(neighborVertex);
              queue.unshift(neighborVertex);
            }
          }
        }
        return visited.size;
      }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)){
          throw new Error('VERTEX DOES NOT EXIST');
        }
        return [...this.adjacencyList.get(vertex)]; 
      }
    addEdge(startVertex, endVertex, weight = 0) {
        if (!this.adjacencyList.has(startVertex)){
          throw new Error('Invalid start vertex');
        }
        
        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight)); 
      }
}

module.exports = {
    Vertex:Vertex,
    Edge:Edge,
    Graph:Graph
  };
