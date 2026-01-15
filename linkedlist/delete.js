//How to an element from linked list
class Node{
constructor(data){
    this.data=data;
    this.next=null;
}
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0

    }
    isEmpty(){
        return this.size===0
    }

    append(value){
        const node= new Node(value);
        if(this.isEmpty()){
            this.head=node;

        }else{
            let current=this.head;
            while(current.next!==null){
                current=current.next;
            }
            current.next=node;
        }this.size++
    }

    remove(value){
        if(this.isEmpty()){
            console.log("List is empty");
            return;
        }
        if(this.head.data===value){
            this.head=this.head.next;
            this.size--;
            return
        }

        // remove middle or last
        let prev = this.head;
        while (prev.next !== null && prev.next.data !== value) {
            prev = prev.next;
        }

        if (prev.next === null) {
            console.log("Value not found");
            return;
        }

        prev.next = prev.next.next;
        this.size--;
    }
    

    print(){
        let current=this.head;
        let result="";
        while(current!==null){
result+=current.data+"->";
current=current.next;
        }
        console.log(result+"null")
    }
}
const list=new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
list.remove(20);
list.print();
