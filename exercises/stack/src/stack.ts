interface IStack<T> {
  push(item: T): IStack<T>;
  // push(items: T[]): IStack<T>;
  // pop(): T | undefined;
  length(): number;
  // print(): void;
}

export class Stack<T> implements IStack<T> {
  items: Array<T>;

  constructor() {
    this.items = [];
  }

  length = () => {
    return this.items.length;
  }

  push = (item: T) => {
    this.items.push(item);
    return this;
  }
}
