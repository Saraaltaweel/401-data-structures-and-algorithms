'use strict';

const { expect, describe, it } = require('@jest/globals');
const { Node, BinaryTree, BinarySearchTree } = require('./tree-max');


// describe('test binary trees and binary search trees', () => {
//     const tree = new trees.BinaryTree();

//   it ('Can successfully instantiate a tree with a single root node', () => {
//     tree.root = new trees.node(1);

//     expect(tree.root.val).toEqual(1);
//   });
//   it ('Can successfully return a collection from a preorder traversal', () => {
//     tree.root = new trees.node(1);
//     tree.root.left = new trees.node(2);
//     tree.root.right = new trees.node(3);
//     const testArray = tree.preOrder();

//     expect(testArray).toEqual([1,2,3]);
//   });

//   it ('Can successfully return a collection from an inorder traversal', () => {
//     tree.root = new trees.node(1);
//     tree.root.left = new trees.node(2);
//     tree.root.right = new trees.node(3);
//     const testArray = tree.inOrder();

//     expect(testArray).toEqual([2,1,3]);
//   });

//   it ('Can successfully return a collection from a postorder traversal', () => {
//     tree.root = new trees.node(1);
//     tree.root.left = new trees.node(2);
//     tree.root.right = new trees.node(3);
//     const testArray = tree.postOrder();

//     expect(testArray).toEqual([2,3,1]);
//   });

//   it('return maximum value',()=>{
//             tree.root=new trees.node(2);
//             tree.root.left=new trees.node(7);
//             tree.root.right=new trees.node(5);
//             const testArray = tree.maximum();

//             expect(testArray).toEqual(7);
        
//             root.right.right=new trees.node(9);
//             root.left.left=new trees.node(2);
//             root.left.right=new trees.node(6);
//             root.left.right.right=new trees.node(11);
//             root.left.right.left=new trees.node(5);
    
//             expect(testArray).toEqual(11);
            
//         })
    

// });



let tree = null;

describe('Tree', () => {
    beforeAll(() => {
        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        const nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });

    it('Happy Path : should return the maximum value in a binary tree', () => {
        let expected = 9;
        let Maximum = tree.maximum();
        expect(Maximum).toBe(expected);
    });

    it('should return an error', () => {
        let tree = new BinaryTree();

        expect(tree.Maximum).toThrowError;
    });

  


});
