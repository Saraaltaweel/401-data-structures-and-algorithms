'use strict';

class Node{
    constructor(val,next=null){
        this.val=val;
        this.next=next;

    }

    pointer(node){
        this.next=node;
    }

}

class Stack{
    constructor(){
        this.top=null;
    }

    isEmpty(){
        return this.top === null;
    }

    push(val){
        let newTop= new Node(val);
        newTop.pointer(this.top);
        this.top=newTop;
      return this;  
    }

    pop(){
        if(this.isEmpty()){
            return 'Exception';
          }
          else{
          let deleteItem = this.top.val;
          this.top = this.top.next;
          return deleteItem;
        }
    }
    peek(){
        if(this.isEmpty()){
            return 'is empty';
        }
        else{
            return this.top.val;
    }
}
}
class Pseudo{
    constructor(){
        this.insertIn= new Stack();
        this.deleteOf= new Stack();
    }

    enqueue(node){
        this.insertIn.push(node);
    }

    dequeue(){
        if (this.insertIn.isEmpty()){
            while(!this.deleteOf.isEmpty()){
                this.insertIn.push(this.insertIn.pop());
            }
        }
        return this.insertIn.pop().val;
    }
  
}
module.exports= Stack , Node , Pseudo;