removeDuplicates() {
    if (this.isEmpty()) return;

    const seen = new Set();
    let current = this.head;
    let prev = null;

    while (current !== null) {
        if (seen.has(current.data)) {
            // duplicate found → remove node
            prev.next = current.next;
            this.size--;
        } else {
            seen.add(current.data);
            prev = current;
        }
        current = current.next;
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
