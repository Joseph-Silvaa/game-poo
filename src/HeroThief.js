const Character = require("./Character")

class HeroThief extends Character {
  constructor(name, life, attackPower, defensePower){
    super(name, life, attackPower, defensePower)
  }
  attack(alvo){
    const dano = (this.attackPower - alvo.defensePower) * 2
    alvo.life -= dano 
  }
}
module.exports = HeroThief 
 
// Uma classe Thief que representa um personagem de um tipo diferente.Ela deve herdar os atributos de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.