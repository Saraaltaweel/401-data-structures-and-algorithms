'use strict'

const Hash=require('./hashtable');

describe('test hashTable',()=>{
    const table=new Hash.HashTable(100);

    it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
        table.add('sara','altaweel');
        expect(table.contains('sara')).toEqual(true);
    })
    it('Retrieving based on a key returns the value stored',()=>{
        table.add('sara','altaweel');
        expect(table.get('sara')).toEqual('altaweel');

    })
    it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
        table.add('sara','altaweel');
        expect(table.add('sara','dana')).toEqual(undefined);

    })
    it('Successfully handle a collision within the hashtable',()=>{
        table.add('sara','altaweel');
        expect(table.contains('dana')).toEqual(false);
    })
})