'use strict';

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}



class BinaryTree {
    constructor(root) {
        this.root = root;
    }
    preOrder() {
        let results = [];
        let traverse = (node) => {
            results.push(node.val);
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
            results.push(node.val);
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
            results.push(node.val);
        }
        traverse(this.root);
        return results;
    }

    maximum(){
        if(!this.root){
            return 'is empty';
        }
            let max=0;
            let output=this.inOrder();
            for (let index = 0; index < output.length; index++) {
                if (max < output[index]) {
                    max = output[index];
                }
            }
            return max;

        
    }
   
}
class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    add(val) {
      let newNode = new Node(val);
      if(this.root === null){
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while(current){
        if(val=== current.val){
          return undefined;
        }
        if(val < current.val){
          if(current.left === null){
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if(current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    contains(val) {
      
      if(this.root === null) {
        return 'no nodes in tree';
      }
      let current = this.root;
      let found = false;
      while(current && !found){
        if(val < current.val){
          current = current.left;
        } else if (val > current.val){
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }


}
module.exports = {
    Node: Node,
    BinaryTree: BinaryTree,
    BinarySearchTree: BinarySearchTree,
  };