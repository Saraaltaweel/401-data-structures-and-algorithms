'use strict';

const linkedList= require('../linked-list-insertions/linked-list-insertions');
const newll=new linkedList();


describe('test linked list',()=>{
    it('empty linked list',()=>{
        expect(newll.head).toBeNull();
    })
    it('insert in linked list',()=>{
        newll.append(1);
        expect(newll.head.value).toEqual(1);
    })
    it('insert more nodes',()=>{
        newll.append(2);
        newll.append(3);
        expect(newll.head.value).toEqual(1);
        // expect(newll.head.value).toEqual(2);
        expect(newll.head.next.value).toEqual(2);
        
    })
    it('insert before',()=>{
        let current=newll.head;
        newll.insertBefore(current.value,4);
        let string=newll.toString();
        expect(string).toEqual(`{${4}}{${1}}{${2}}{${3}}{null}`)
    })
   

})