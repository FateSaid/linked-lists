import { Node } from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    const node = new Node(data);
    let head = this.head;
    if (head != null) {
      node.nextNode = head;
    }
    this.size++;
    this.head = node;
  }

  append(data) {
    const node = new Node(data);
    let head = this.head;
    if (head === null) {
      this.prepend(data);
    }
    while (head.nextNode !== null) {
      head = head.nextNode;
    }
    this.size++;
    head.nextNode = node;
  }
  heads() {
    return this.head;
  }
  tails() {
    let head = this.head;
    while (head.nextNode !== null) {
      head = head.nextNode;
    }
    return head;
  }
  at(size) {
    let count = 0;
    let head = this.head;
    while (size !== count) {
      count++;
      head = head.nextNode;
    }
    return head;
  }
  removeLast() {
    this.at(this.size - 2).nextNode = null;
    this.size--;
  }
  contains(value) {
    let head = this.head;
    function check(head, value) {
      if (Object.values(head).length === 0) {
        return false;
      } else {
        for (let key in head) {
          if (head[key] === value) {
            return true;
          }
          if (typeof head[key] === "object" && head[key] !== null) {
            return check(head[key], value);
          }
        }
        return false;
      }
    }
    return check(head, value);
  }
  find(value) {
    let head = this.head;
    function indexFind(head, value, count = 0) {
      if (Object.values(head).length === 0) {
        return undefined;
      } else {
        for (let key in head) {
          if (head[key] === value) {
            return count;
          }
          if (typeof head[key] === "object" && head[key] !== null) {
            return indexFind(head[key], value, count + 1);
          }
        }
      }
    }
    return indexFind(head, value);
  }
  toString() {
    let head = this.head;
    let char = "";
    for (let i = 0; i < this.size; i++) {
      char += `(${head.value}) -> `;
      head = head.nextNode;
    }
    return (char += null);
  }
}
const ll = new LinkedList();

ll.prepend(10);
ll.prepend(15);
ll.prepend(20);
ll.append(2);

console.log(ll);
console.log(ll.toString());
