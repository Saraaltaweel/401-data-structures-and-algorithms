'use strict';

const trees = require('./trees');

describe('test binary trees and binary search trees', () => {
    const tree = new trees.BinaryTree();

  it ('Can successfully instantiate a tree with a single root node', () => {
    tree.root = new trees.node(1);

    expect(tree.root.val).toEqual(1);
  });
  it ('Can successfully return a collection from a preorder traversal', () => {
    tree.root = new trees.node(1);
    tree.root.left = new trees.node(2);
    tree.root.right = new trees.node(3);
    const testArray = tree.preOrder();

    expect(testArray).toEqual([1,2,3]);
  });

  it ('Can successfully return a collection from an inorder traversal', () => {
    tree.root = new trees.node(1);
    tree.root.left = new trees.node(2);
    tree.root.right = new trees.node(3);
    const testArray = tree.inOrder();

    expect(testArray).toEqual([2,1,3]);
  });

  it ('Can successfully return a collection from a postorder traversal', () => {
    tree.root = new trees.node(1);
    tree.root.left = new trees.node(2);
    tree.root.right = new trees.node(3);
    const testArray = tree.postOrder();

    expect(testArray).toEqual([2,3,1]);
  });

});
