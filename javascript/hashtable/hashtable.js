'use strict'

class Node{
    constructor(val,next=null){
        this.val=val;
        this.next=next;

    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    insert(val){
        let node=new Node(val);
        if(!this.head){
            this.head=node;

        }
        else{
            node.next=this.head;
            this.head=node;
        }
    }    
}

class HashTable{
    constructor(size){
        this.size=size;
        this.bucket=new Array(size);
    }
    hash(key){
        let sum=key.split('').reduce((acc,char)=>{
            return acc+char.charCodeAt(0)
    },0);
    return (sum*599)%this.size;
   }
    add(key,val){
        let hash=this.hash(key);
        if(!this.bucket[hash]){
            this.bucket[hash]=new LinkedList();
        }
        let data={[key]:val};
        this.bucket[hash].insert(data);
    }
    contains(key){
        let hash=this.hash(key);
        if(this.bucket[hash]){
            return true;
        }
        else{
            return false;
        }
    }
    get(key){
        let hash=this.hash(key);
        let bucket=this.bucket[hash];
        let current=bucket.head;

        while(current){
            if(current.val[key]){
                return current.val[key];
            }
            else if(current.next===null){
                return null;
            }
            else{
                current=current.next;
            }
        }
    }

}
module.exports={
    Node:Node,
    LinkedList:LinkedList,
    HashTable:HashTable
};