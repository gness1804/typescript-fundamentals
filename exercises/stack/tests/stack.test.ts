import { Stack } from '../src/stack';

class President {
  name: string;
  order: number;

  constructor(name: string, order: number) {
    this.name = name;
    this.order = order;
  }
}

let exp = expect as jest.Expect;
if (Stack) {
test('Stack is available as a named export from ./src/stack.ts', () => {
  exp(Stack).toBeDefined();
});

test('new stack has size of 0', () => {
  let l = new Stack();
  exp(l.length()).toBe(0);
});

test('pushing an item to the stack increases its size by 1', () => {
  let l = new Stack<string>();
  l.push('abc');
  exp(l.length()).toBe(1);
});

test('pushing a few items to the stack (one-by-one) increases its size appropriately', () => {
  let l = new Stack<string>();
  l.push('abc');
  l.push('abc');
  l.push('abc');
  l.push('abc');
  exp(l.length()).toBe(4);
});

test('pushing a few items to the stack (at once) increases its size appropriately', () => {
  let l = new Stack<string>();
  l.push(['abc', 'def', 'ghi', 'jkl']);
  exp(l.length()).toBe(4);
});

test('pushing a few items to the stack (at once) increases its size appropriately', () => {
  let l = new Stack<string>();
  l.push(['abc', 'def', 'ghi', 'jkl']);
  exp(l.length()).toBe(4);
});

test('last items pushed on are the first to pop off', () => {
  let l = new Stack<string>();
  l.push(['abc', 'def', 'ghi', 'jkl']);
  let last = l.pop();
  exp(l.length()).toBe(3);
  exp(last).toBe('jkl');
});

test('pop() returns undefined if the list is empty', () => {
  let l = new Stack<string>();
  let last = l.pop();
  exp(last).toBeUndefined();
});

test('behavior of length should be the same with data types other than strings', () => {
  const l = new Stack<number>();
  exp(l.length()).toEqual(0);
  const m = new Stack<boolean>();
  exp(m.length()).toEqual(0);
  const n = new Stack<President>();
  exp(n.length()).toEqual(0);
});

test('behavior of push should be the same with data types other than strings', () => {
  const l = new Stack<number>();
  l.push(56);
  exp(l.length()).toEqual(1);
  const m = new Stack<boolean>();
  m.push(false);
  exp(m.length()).toEqual(1);
  const n = new Stack<President>();
  const georgeWBush = new President('George', 43);
  exp(n.length()).toEqual(0);
});
} else {
  describe('Instructions', () => {
    test('Please uncomment the Stack class in stack/src/stack.ts', () => {
      expect(true).toBeTruthy();
    });
  });
}
