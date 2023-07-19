class Character {
  constructor(name, life, attackPower, defensePower){
    this.name = name
    this.life = life
    this.attackPower = attackPower
    this.defensePower = defensePower
  }
  attack(hero){
    const dano = this.attackPower - hero.defensePower
    hero.life -= dano 
    return console.log(`Pontos de vida do personagem atacado ${hero.life}`)
  }
}
module.exports = Character