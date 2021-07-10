const Queue = require('./queue');

describe('queue',()=>{

     let queue=new Queue();


  it('return null on empty queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBeTruthy();
    });

    describe('peek', () => {
       
      it('return last item added on the queue', () => {
        queue.enqueue(1);
        expect(queue.peek()).toEqual(1);
        queue.enqueue(2);
        expect(queue.peek()).toEqual(1);
      });
      it('does not alter the queue', () => {
        queue.enqueue(1);
        expect(queue.peek()).toEqual(1);
    
      });
  });
    describe('pop', () => {
       it('add items to the top of the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();

        expect(queue.peek()).toEqual('is empty');
    });
   }); 
});