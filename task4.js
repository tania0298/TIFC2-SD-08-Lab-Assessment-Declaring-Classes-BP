export class Player {
constructor(name,level) {
    this.name = name;
    this.level = level;
    }
  info(){
  console.log(`Player: ${this.name}, has reached level ${this.level}!`);
  }

  levelUp(){ 
console.log(`${this.name} has leveled up to level ${this.level}!`);
  } 
  

}