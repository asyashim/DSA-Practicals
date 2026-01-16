class Node {
    constructor(data) {
        this.data = data;
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

    append(data) {
        const node = new Node(data);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    removeDuplicates() {
        if (this.isEmpty()) return;

        const seen = new Set();
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (seen.has(current.data)) {
                
                prev.next = current.next;
                this.size--;
            } else {
                seen.add(current.data);
                prev = current;
            }
            current = current.next;
        }
    }

    print() {
        let curr = this.head;
        let result = "";

        while (curr !== null) {
            result += curr.data + " -> ";
            curr = curr.next;
        }
        console.log(result + "null");
    }
}


const list = new LinkedList();
list.append(10);
list.append(20);
list.append(20);
list.append(30);
list.append(10);

list.print();            
list.removeDuplicates();
list.print();
