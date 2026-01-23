class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size===0
    }
    append(val){
        const node =new Node(val);
        if(this.isEmpty()){
            this.head=node
        }else{
            let current= this.head;
            while(current.next!==null){
                current=current.next;
                
            }current.next=node
        }this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }

           let  current=this.head;
            let result="";
            while(current!==null){
                result+=current.data+"->"
                current=current.next
            }
            console.log(result+"null")

        }
    }

const list=  new LinkedList()
console.log(list.isEmpty())
list.append(10);
list.append(20);
list.append(30)
console.log(list.isEmpty())
list.print()