'use strict';

const trees = require('./hashmap-tree-intersection');

describe('test binary trees and binary search trees', () => {
    const t1 = new trees.BinaryTree();
    it(' output like example', () => {
    t1.root = new trees.node(150);
    t1.root.left = new trees.node(100);
    t1.root.right = new trees.node(250);
    t1.root.left.left = new trees.node(75);
    t1.root.left.right = new trees.node(160);
    t1.root.left.right.left = new trees.node(125);
    t1.root.left.right.right = new trees.node(175);
    t1.root.right.left = new trees.node(200);
    t1.root.right.right = new trees.node(350);
    t1.root.right.right.left = new trees.node(300);
    t1.root.right.right.right = new trees.node(500);
  
    const t2 = new trees.BinaryTree();
    t2.root = new trees.node(42);
    t2.root.left = new trees.node(100);
    t2.root.right = new trees.node(600);
    t2.root.left.left = new trees.node(15);
    t2.root.left.right = new trees.node(160);
    t2.root.left.right.left = new trees.node(125);
    t2.root.left.right.right = new trees.node(175);
    t2.root.right.left = new trees.node(200);
    t2.root.right.right = new trees.node(350);
    t2.root.right.right.left = new trees.node(4);
    t2.root.right.right.right = new trees.node(500);
  
    let test = trees.treeIntersection(t1,t2);  
    expect(test).toEqual([100, 160, 125, 175, 200, 350, 500]);
    });
})