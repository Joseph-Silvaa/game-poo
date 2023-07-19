const HeroMage = require("../src/HeroMage");
const HeroThief = require("../src/HeroThief");
const HeroWarrior = require("../src/HeroWarrior");

const hero1 = new HeroMage("Voldemort", 90, 100, 15, 14);
const hero2 = new HeroWarrior("Harry", 100, 60, 250, 15, true);
const hero3 = new HeroThief("Dumbledore", 40, 20, 90);

console.table({ hero1, hero2, hero3 });


hero2.change()
hero1.attack(hero2)


console.table({ hero1, hero2, hero3 });
