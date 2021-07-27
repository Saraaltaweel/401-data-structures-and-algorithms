'use strict';

class Node {
    constructor(val) {
        this.val= val;
    }
}
class Tree {
    constructor() {
        this.root = null;
        this.arr = [];
    }
    createNode(val) {
       const node = new Node(val);
        if(this.root === null) {
          this.root = node;
        } else {
          this.arr.push(node);
        }
        return node;
      }
}

function fizzBuzzTree(kAry){
    if (kAry.root==null){
        return 'is empty';

    }
    for (let i=0;i<kAry.arr.length;i++){
        if(kAry.arr[i].val % 3 === 0) {
            kAry.arr[i].val ='Fizz';
        }
        else if(kAry.arr[i].val % 5 === 0) {
            kAry.arr[i].val ='Buzz';
        }
        else if(kAry.arr[i].val % 15=== 0){
            kAry.arr[i].val ='FizzBuzz';
        }
        else {
            kAry.arr[i].val = kAry.arr[i].val.toString();
        }
        
    }
    return kAry;
}

module.exports={
    Node:Node,
    Tree:Tree,
    fizzBuzzTree:fizzBuzzTree,
}
  
        
