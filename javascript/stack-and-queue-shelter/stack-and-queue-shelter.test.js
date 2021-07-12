'use strict';

const Animal=require('./stack-and queue-shelter');

describe('test animal shelter',()=>{
    it('if it empty',()=>{
        const newAnimal=new Animal();
        expect(newAnimal.dog).toEqual([]);
        expect(newAnimal.cat).toEqual([]);

    })

    it('add dog and cat',()=>{
        const newAnimal=new Animal();
        newAnimal.enqueue('dog')
        newAnimal.enqueue('dog')
        newAnimal.enqueue('cat')
        newAnimal.enqueue('cat')
        expect(newAnimal.dog.length).toEqual(2)
        expect(newAnimal.cat.length).toEqual(2)
    })

    it('delete dog and cat',()=>{
        const newAnimal=new Animal();
        newAnimal.enqueue('dog')
        newAnimal.enqueue('dog')
        newAnimal.enqueue('cat')
        newAnimal.enqueue('cat')
        newAnimal.dequeue('cat')
        newAnimal.dequeue('dog')
        expect(newAnimal.dog.length).toEqual(1)
        expect(newAnimal.dequeue('cat')).toEqual('cat');
        expect(newAnimal.dequeue('dog')).toEqual('dog');
    })
})

