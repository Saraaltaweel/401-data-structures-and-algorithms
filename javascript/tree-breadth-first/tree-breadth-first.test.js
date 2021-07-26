'use strict';

const BinaryTree=require('./tree-breadth-first').BinaryTree;
const Node=require('./tree-breadth-first').Node;

describe('test breadth first',()=>{
    let trees=new BinaryTree();

it('should successfully return the Breadth first ', () => {
      trees.root = new Node(30);
      trees.root.left = new Node(2);
      trees.root.right = new Node(5);
      trees.root.right.right = new Node(7);
      trees.root.right.right.left = new Node(22);

      expect(trees.breadthFirst()).toEqual([30,2,5,7,22])
    });
});
