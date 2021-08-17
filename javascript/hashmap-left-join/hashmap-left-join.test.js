'use strict';

const Hash=require('./hashmap-left-join');

describe('testing ', () => {
  
  it(' join two hashmaps into a single data structure', () => {
    let h1 = new Hash.HashTable(1024);
    let h2 = new Hash.HashTable(1024);
    
    h1.add('fond', 'enamored');    
    h1.add('wrath', 'anger');
    h1.add('diligent', 'employed');
    h1.add('outfit', 'garb');
    h1.add('guide', 'usher');
    
    h2.add('fond', 'averse');
    h2.add('wrath', 'delight');
    h2.add('diligent', 'idle');
    h2.add('guide', 'follow');
    h2.add('flow', 'jam');

    expect(leftJoin(h1, h2)).toEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });

});



