// makeNotAthlete() fails because 'isAthlete' is readonly
class Player {
  public name: string;
  private team: string;
  protected age: number;
  readonly isAthlete: boolean;
  static counter:number = 0;

  constructor(name: string, team: string, age: number) {
    this.name = name;
    this.team = team;
    this.age = age;
    this.isAthlete = true;
  }

  static augmentCounter(): void {
    this.counter++;
  }

  // makeNotAthlete() {
  //   this.isAthlete = false;
  // }
}

// setTeam fails with error, because 'team' is only accessible on the Player class
// setName, however, works because 'name' is public
class HockeyPlayer extends Player {
  // setTeam() {
  //   this.team = 'Montreal Canadiens';
  // }
  setName(newName: string): void {
    this.name = newName;
  }
  augmentAge(): void {
    this.age++;
  }
}

const bradMarchand = new HockeyPlayer('Brad Marchand', 'Boston Bruins', 29);
console.log('bradMarchand.name:', bradMarchand.name);
bradMarchand.setName('Phil Marchand');
console.log('bradMarchand.name:', bradMarchand.name);
bradMarchand.augmentAge();
console.log('bradMarchand.isAthlete:', bradMarchand.isAthlete);
Player.augmentCounter();
console.log('Player.counter:', Player.counter);
// console.log('bradMarchand.counter:', bradMarchand.counter); // Nope! 'counter' is a static property on Player; it does not apply to instances.


