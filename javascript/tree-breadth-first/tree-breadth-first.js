'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
  
    preOrder() {
        let results = [];
        let traverse = (node) => {
            results.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }
   
    inOrder() {
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            results.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }

    postOrder() {
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            results.push(node.value);
        }
        traverse(this.root);
        return results;
    }
   
    breadthFirst() {

        const output = [];
        const roots = [];
        if (this.root == null) {

            return 'Error The Tree is empty'
        }
        else {

            roots.push(this.root);
            while (roots.length) {
                const node = roots.shift();
              if (node.left) {
                  roots.push(node.left);
              }
              if (node.right) {
                 roots.push(node.right);
              }
              output.push(node.value);
          }
      }
      return output;
  
}}
  



module.exports = {
    Node: Node,
    BinaryTree: BinaryTree,
  };