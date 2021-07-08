  
'use strict';

const LinkedList = require('./linked-list-zip');

const list1=new LinkedList();

// list1.head=new Node(1);
// list1.head.next=new Node(2);
// list1.head.next.next=new Node(3);
list1.insert(1)
list1.insert(2)
list1.insert(3)

const list2=new LinkedList();
list2.insert(4)
list2.insert(5)
list2.insert(6)

// list2.head=new Node(4);
// list2.head.next=new Node(5);
// list2.head.next.next=new Node(6);

let combain = LinkedList.zipLists(list1,list2);
const list3=new LinkedList();

describe('test the ziplist',()=>{
  it('the ziplist correct',()=>{
    expect(combain.toString()).toEqual(`{1}->{4}->{2}->{5}->{3}->{6}->{null}}`)
    expect(LinkedList.zipLists(list1,list3).toString()).toEqual(`{1}->{2}->{3}->{null}}`)

  })


})