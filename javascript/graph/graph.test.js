'use strict';

const graph=require('./graph');

describe('Testing graph methods', () => {
    let test = new graph.Graph();
    it('Node can be successfully added to the graph', () => {  
      const one = new graph.Vertex('one');
      test.addVertex(one);
  
      expect(test.adjacencyList).toBeTruthy();
      expect(test.adjacencyList.get(one)).toEqual([]);
    });
    
    it('Neighbors are returned with the weight between nodes included ', () => {
      const one = new graph.Vertex('one');
      const two = new graph.Vertex('two');
      const three = new graph.Vertex('three');
      test.addVertex(one);
      test.addVertex(two);
      test.addVertex(three);
      test.addEdge(one, two);
      test.addEdge(one, three);
      const testValue = test.getNeighbors(one);
      const testWeight = testValue[0]['weight'];
      const testWeightTwo = testValue[1]['weight'];
      
  
      expect(testWeight).toEqual(0);
      expect(testWeightTwo).toEqual(0);
    });
  
    it('The proper size is returned, representing the number of nodes in the graph  ', () => {
      const one = new graph.Vertex('one');
      const two = new graph.Vertex('two');
      test.addVertex(one);
      test.addVertex(two);
      test.addEdge(one, two);
  
      expect(test.size(one)).toEqual(2);
    });
  
    it('A graph with only one node and edge can be properly returned ', () => {
      const one = new graph.Vertex('one');
      test.addVertex(one);
      test.addEdge(one);
      const testValue = test.adjacencyList.get(one);
      const expectedValue = [{ 'vertex': undefined, 'weight': 0 }];
  
  
      expect(testValue).toEqual(expectedValue);
    });
  
    it('An empty graph properly returns null', () => {
      let testValue = test.adjacencyList.values();
  
      expect(testValue).not.toBeUndefined();
    });
  });