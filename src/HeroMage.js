const Character = require("./Character")

class HeroMage extends Character {
  constructor(name, life, attackPower, defensePower, magicPower){
    super(name, life, attackPower, defensePower)
    this.magicPower = magicPower
  }
  attack(hero){
    const dano = (this.attackPower + this.magicPower) - hero.defensePower
    hero.life -= dano 
  }
  cure(hero){
    const cure = (this.magicPower * 2)
    hero.life += cure
  }
}
module.exports = HeroMage

/* A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem alvo (passado como argumento do método) em um valor de duas vezes os pontos de magia do personagem atual.
Uma classe Warrior que representa outro tipo de personagem e também herda de Character.Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).
Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.*/