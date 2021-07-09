'use strict';

class Node{
    constructor(val,next=null){
        this.val=val;
        this.next=next;

    }

}

class Queue{
    constructor(){
        this.front=null;
    }

    enqueue(val){
        let node = new Node(val);
        if(this.isEmpty()){
            this.front=node;
        }
        else{
            this.front.next=node;
        }
        return this;
    }

    dequeue(){
        if(this.isEmpty()){
          return 'is empty';
        }
        const deleteItem =this.front.val;
        this.front=this.front.next;
        return deleteItem;
      }

    peek(){
        if(this.isEmpty()){
            return 'is empty';
        }
        else{
            return this.front.val;
        }
    }

    isEmpty(){
        if(this.front === null){

            return true;
         }
          else{
         return false;
       } 
    }
}

module.exports= Queue , Node;