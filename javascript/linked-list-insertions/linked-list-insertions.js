'use strict';

class Node {
    constructor(value){
        this .value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
append(value){
   let node=new Node(value);
   if(!this.head){
       this.head=node;
   }
   else{
       let current=this.head;
       while(current.next){
           current=current.next;
       }
       current.next=node;
   }

}

insertBefore(value,newValue){
    let node = new Node(newValue);
    let current=this.head;
    while(current){
        if(current.value===value){
            let currentValue=current.value
            current.value=node.value;
            current.next={
                value:currentValue,
                next:current.next,
            };
            break;
        }
        current=current.next;
    }
}

insertAfter(value,newValue){
    let node=new Node(newValue);
    let current=this.head;
    while(current.next){
        if(current.value===value){
            current.next={
                value:node.value,
                next:current.next,
            };
            break;
        }
        current=current.next;
    }

}

toString(){
    let current=this.head;
    let string=`{${current.value}}`;
    while(current.next){
        current=current.next;
        string+=`{${current.value}}`;
        if(current.next===null){
            string+=`{${current.next}}`;

        }
    }
    return string;
}
}    




module.exports = LinkedList;