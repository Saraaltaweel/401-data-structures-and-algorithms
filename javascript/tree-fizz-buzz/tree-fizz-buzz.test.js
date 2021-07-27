'use strict';

const Tree=require('./tree-fizz-buzz').Tree;
const Node=require('./tree-fizz-buzz').Node;

const fizzBuzzTree=require('./tree-fizz-buzz').fizzBuzzTree;

describe('Binary Tree', () => {
    let kAry;
    kAry = new Tree();
    kAry.createNode(7);
    kAry.createNode(20);
    kAry.createNode(5);
    kAry.createNode(6);
    kAry.createNode(15);
    kAry.createNode(60);
    kAry.createNode(6);
    console.log(kAry);
   
    it('If the value is divisible by 3, replace the value with “Fizz”', () => {
      const expected = fizzBuzzTree(kAry);
      expect(expected.arr[2].val).toEqual('Fizz');
    });
    it('If the value is divisible by 5, replace the value with “Buzz”', () => {
      const expected = fizzBuzzTree(kAry);
      expect(expected.arr[1].val).toEqual('Buzz');
    });
    it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”', () => {
      const expected = fizzBuzzTree(kAry);
      expect(expected.arr[4].val).toEqual('Fizz');
      expect(expected.arr[5].val).toEqual('Fizz');
    });
    it('If the value is not divisible by 3 or 5, simply turn the number into a String', () => {
      expect(typeof fizzBuzzTree(kAry).arr[0].val).toEqual('string');  
      expect(typeof fizzBuzzTree(kAry).arr[5].val).toEqual('string');
    });
  });