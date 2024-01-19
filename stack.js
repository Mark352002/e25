class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        document.write(`${element} added to ${this.count}<br>`);
        this.count += 1;
        return this.count - 1;
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if (this.count === 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        document.write(`${deleteItem} removed<br>`);
        return deleteItem;
    }

    // Check top element in stack
    peek() {
        document.write(`Top element is ${this.items[this.count - 1]}<br>`);
        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        document.write(this.count === 0 ? 'Stack is empty<br>' : 'Stack is NOT empty<br>');
        return this.count === 0;
    }

    // Check size of stack
    size() {
        document.write(`${this.count} elements in stack<br>`);
        return this.count;
    }

    // Print elements in stack
    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }

    // Clear stack
    clear() {
        this.items = [];
        this.count = 0;
        document.write('Stack cleared..<br>');
        return this.items;
    }
}

// Display the title
document.write('<h1>Stack Data Structure</h1>');

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);

stack.peek();

stack.push(300);

document.write(stack.print() + '<br>');

stack.pop();
stack.pop();

stack.clear();

document.write(stack.print() + '<br>');

stack.size();

stack.isEmpty();
