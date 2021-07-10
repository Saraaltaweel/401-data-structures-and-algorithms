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
        newTop.pointer=this.top;
        this.top=newTop;
      return this;  
    }

    pop(){
        if(this.isEmpty()){
            return 'Exception';
          }
          let deleteItem = this.top.value;
          this.top = this.top.next;
          return deleteItem;
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
module.exports= Stack , Node;