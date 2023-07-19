const Character = require("./Character");

class HeroWarrior extends Character {
  constructor(name, life, attackPower, defensePower, blockPower) {
    super(name, life, attackPower, defensePower);
    this.blockPower = blockPower;
    this.position = true;
  }
  attack(hero) {
    if (this.position === true) {
      const dano = this.attackPower - hero.defensePower;
      hero.life -= dano
    } else if(this.position === false){
    }
  }
  change(){
    if(this.position === true){
      this.position = false
       this.defensePower += this.blockPower 
    } else if(this.position === false){
      this.position = true
      this.defensePower -= this.blockPower
    }
  }
}
module.exports = HeroWarrior;
