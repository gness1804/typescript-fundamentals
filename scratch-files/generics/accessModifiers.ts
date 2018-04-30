// makeNotAthlete() fails because 'isAthlete' is readonly
class Player {
  public name: string;
  private team: string;
  protected age: number;
  readonly isAthlete: boolean;

  constructor(name: string, team: string, age: number) {
    this.name = name;
    this.team = team;
    this.age = age;
    this.isAthlete = true;
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


