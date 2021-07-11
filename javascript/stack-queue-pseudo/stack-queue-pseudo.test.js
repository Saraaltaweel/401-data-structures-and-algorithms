'use strict';
 const Pseudo=require('./stack-queue-pseudo');

describe('testing pseudo ', () => {
  const queue = new Pseudo();
  let val1=1;
  let val2=2;
  let val3=3;

  queue.enqueue(val1);
  queue.enqueue(val2);
  queue.enqueue(val3);

  it ('should insert value into the pseudo first', () => {
    expect(queue.insertIn.value).toEqual(1);
  });

  it ('should insert value into the empty pseudo', () => {

    const empty = new Pseudo();
    const newNode = new Pseudo.node(5);

    empty.enqueue(newNode);
  });

  it ('should output value of last node in pseudo', () => {
    queue.dequeue();

    expect(queue.dequeue().value).toEqual(3);
  });
});

