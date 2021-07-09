'use strict';

class Node{
    constructor(val,next){
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
        let newPop=this.top;
        this.top=this.top.next;
        newPop.pointer(null);
        // return this;  

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