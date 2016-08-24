function Gladiator(name, attack, defense, hitPoints){
       this.name = name;
       this.attack = attack;
       this. defense = defense;
       this.hitPoints = hitPoints;
}

function makeGladiator(name, attack, defense, hitPoints){
        var instance = new Gladiator(name, attack, defense, hitPoints);
        return instance;
}

var jesse = makeGladiator("Jesse", 10, 12, 10);
var john  = makeGladiator("John", 10, 12, 20);

console.log(jesse.name);
console.log(john);