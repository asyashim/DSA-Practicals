class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    
    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;   
            }
            current.next = node;
        }
        this.size++;
    }

    
    reverse() {
        let prev = null;
        let curr = this.head;

        while (curr !== null) {
            let next = curr.next; 
            curr.next = prev;     
            prev = curr;          
            curr = next;          
        }

        this.head = prev;
    }

    
    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.value + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print();     

list.reverse();

list.print();     
