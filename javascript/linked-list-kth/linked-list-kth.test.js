'use strict';

const linkedList=require('./linked-list-kth');

let val1=1;
let val2=2;
let val3=3;
let val4=4;
let newll= new linkedList();
describe('test the linked list',()=>{
    it('Where k is greater than the length of the linked list',()=>{
        newll.append(val1);
        newll.append(val2);
        newll.append(val3);
        newll.append(val4);
        expect(newll.kthFromEnd(5)).toEqual('exception');
    })

    it('Where k and the length of the list are the same',()=>{
        expect(newll.kthFromEnd(4)).toEqual('exception');
    })

    it('Where k is not a positive integer',()=>{
        expect(newll.kthFromEnd(-2)).toEqual('exception');

    })
    it('Where the linked list is of a size 1',()=>{
        let newll2= new linkedList();
        newll.append(7);
        expect(newll2.kthFromEnd(2)).toEqual('exception');
        expect(newll2.kthFromEnd(1)).toEqual('exception');
        expect(newll2.kthFromEnd(0)).toEqual(7);

    })
    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
        let newll= new linkedList();
        newll.append(val1);
        newll.append(val2);
        newll.append(val3);
        newll.append(val4);
        let val5=5;
        newll.append(val5);
        expect(newll.kthFromEnd(3)).toEqual('Happy Path');


    })
})

    