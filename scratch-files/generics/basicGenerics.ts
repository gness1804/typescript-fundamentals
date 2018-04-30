const gimmeFive = <T>(arg: T): T[] => {
  return [arg, arg, arg, arg, arg];
}

console.log(gimmeFive('Cairn Terrier'));

const players = [
  'Sidney Crosby',
  'Alex Ovechkin',
];

const upper = (arg: string[]): string[] => {
  return arg.map((a: string) => {
    return a.toUpperCase();
  });
}

console.log(upper(players));
