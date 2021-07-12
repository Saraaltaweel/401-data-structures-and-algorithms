'use strict';

class Animal{
    constructor(type){
        this.type=type;
    }
}

class AnimalShelter{
    constructor(){
        this.dog=[];
        this.cat=[];
        
    }

    enqueue(type){
        const obj=new Animal(type);
        if(obj.type==='dog'){
            return this.dog.push(obj.type);
        }
        else if(obj.type==='cat'){
            return this.cat.push(obj.type);
        }
        else{
            return 'null';
        }
    }

    dequeue(pref){
        if(pref==='dog'){
            if(this.dog.length !=0){
                return this.dog.shift();
            }
            return 'null';
        }
        else if(pref==='cat'){
            if(this.cat.length !=0){
                return this.cat.shift();
            }
            return 'null';
        }
        else{
            return 'null';
        }
    }
}

module.exports=AnimalShelter;