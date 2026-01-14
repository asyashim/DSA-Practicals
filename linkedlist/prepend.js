class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null; 
        this.size=0 
    }
    prepend(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            
            this.head=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.size++;
    }
        print(){
            let current=this.head;
            while(current){
                console.log(current.value);
                current=current.next;  
            } 
            
} 
getSize(){
    return this.size;
}
isEmpty(){
    return this.size === 0;
}
}
const list= new LinkedList();
console.log(`Is list empty? ${list.isEmpty()}`);
list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log("List size:",list.getSize());