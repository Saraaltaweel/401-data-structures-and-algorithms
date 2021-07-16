'use strict';

const validateBrackets=require('./stack-queue-brackets');

describe('bracket validation',()=>{
    it('[]',()=>{
        expect(validateBrackets('[]')).toBeTruthy();
    })
    it('{}(){}',()=>{
        expect(validateBrackets('{}(){}')).toBeTruthy();
    })
    it('()[[Extra Characters]]',()=>{
        expect(validateBrackets('()[[Extra Characters]]')).toBeTruthy();
    })
    it('(){}[[]]',()=>{
        expect(validateBrackets('(){}[[]]')).toBeTruthy();
    })
    it('{}{Code}[Fellows](())	',()=>{
        expect(validateBrackets('{}{Code}[Fellows](())')).toBeTruthy();
    })
    it('[({}]',()=>{
        expect(validateBrackets('[({}]')).toBeFalsy();
    })
    it('(](',()=>{
        expect(validateBrackets('(](')).toBeFalsy();
    })
    it('{(})',()=>{
        expect(validateBrackets('{(})')).toBeFalsy();
    })
})