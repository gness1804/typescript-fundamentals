interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }

  length = () => {
    return this.items.length;
  }

  push = (arg: T|Array<T>) => {
    if (!Array.isArray(arg)) {
      this.items.push(arg);
    } else {
      for (const a of arg) {
        this.items.push(a);
      }
    }
    return this;
  }

  pop = () => {
    return this.items.pop();
  }

  print = () => {
    console.log('Your items:', this.items);
  }
}
