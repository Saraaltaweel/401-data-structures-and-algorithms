const linkedList=require('../javascript/Linked_list/LinkedList');

describe('Linked list',()=>{
    it('should instantiate',()=>{
        const ll= new linkedList();
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();

    })
})

describe('insert to head',()=>{
    it('should add to empty list',()=>{
    const ll=new linkedList();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');

})
     it('the head point in the first node',()=>{
         expect(ll.head.value).toEqual('a');
     })
     it('insert more than one node',()=>{
         ll.insert('b');
         ll.insert('c');
         expect(ll.head.value).toEqual('b');
         expect(ll.head.value).toEqual('c');

     })
    
    });
