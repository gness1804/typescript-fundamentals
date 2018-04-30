function add(x: number, y: number): number;
function add(x: string, y: string): number;

const add = (x: number|string, y: number|string): number => {
  if (typeof x === 'string' && typeof y === 'string') {
    return parseInt(x, 10) + parseInt(y, 10);
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  return 0;
}

add('3', '15'); //works
add(3, 15); //work
// add(3, '15'); //nope!
