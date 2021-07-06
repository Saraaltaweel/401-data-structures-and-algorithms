'use strict';

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;

    }
    
    append(value){
        let current=this.head;

        while(current){
            if(current.next===null){
                current.next=new Node(value);
                return;
            }
            current=current.next;
        }
    } 

    insert(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;

        }
        else{
            node.next=this.head;
            this.head=node;
        }
    }

    include(value){
        let current=this.head;
        while(current){
            if(value===current.value){
                return true;

            }
            else if(current.next===null){
                return false;

            }
            else{
                current=current.next;
            }

            
        }
    }

    toString() {
        let current=this.head;
        let string='';
        while(current){
            let towString=current.value;
            current=current.next;
            string+=`{${towString}} ->`;

        }
            string+=`{null}`;
            return string;

    }

    zipLists(list1,list2){
        const zipList=new LinkedList();
        list1=this.head;
        list2=this.head;
        zipList.head=new Node(list1.value);
        list1=list1.next;

        while (list1 || list2) {
            if(list1 && list2){
                zipList.append(list2.value);
                zipList.append(list1.value);
                list2=list2.next;
                list1=list1.next;

            }
            else if(list1===null && list2){
                zipList.append(list2.value);
                list2=list2.next;
            }
            else if(list1 && list2===null){
                zipList.append(list1.value);
                list1=list1.next;  
            }
            else{
                return;
            }              
        }
        return zipList;


    }



        
    }