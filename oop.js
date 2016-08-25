//function addTwoNumbers(firstNumber, secondNumber){
//        console.log(firstNumber + secondNumber);
//}
//addTwoNumbers(1,1);
//addTwoNumbers(10,10);
//
//function someArguments(){
//        console.log(arguments);
//}
//someArguments(1,1,1,1,1);
//someArguments(10,10,10);
//someArguments("apple",10,"banana");
//
//
//function addNumbers(){
//        var amount = 0;
//        for(var i=0; i<arguments.length; i++){
//                amount = amount + arguments[i];              
//        }
//                console.log("amount: " + amount);
//        return amount;
//
//}
//addNumbers(1,1,1,1,1);
//addNumbers(10,10,10);

function rollDice(howMany, whatType){
        var result = 0;
        for(i=0; i<howMany;i++){
                result += Math.floor(Math.random() * whatType) + 1;
        }
        return result;
}


function calculateDamage(attacker){
        var damageRoll = attacker.weapon.getDamage();
        return damageRoll;
}

function d(o){
        console.log(o);
}

var dagger = {
      getDamage: function(){
        return rollDice(1, 4);
        }  
};
 
 var claw = {
      getDamage: function(){
        return rollDice(1, 3);
        }  
};
 

//d(rollDice(1, 6));
//d(rollDice(1, 20));
//d(rollDice(3, 4));

function didHit(attacker, defender){
        var toHitNumber = defender.defense - attacker.attack;
        var roll = rollDice(1, 20);
        if(roll>=toHitNumber){
                return true;
        }else
        {
                return false;
        }
}


var gladiator1 = {name: "Jesse", attack: 2, defense: 10, hitPoints: 10, weapon: dagger};
var gladiator2 = {name: "Peter", attack: 4, defense: 12, hitPoints: 14, weapon: claw};

//d(didHit(gladiator1, gladiator2));
//d(didHit(gladiator2, gladiator1));

d(calculateDamage(gladiator1));
d(calculateDamage(gladiator2));


function Gladiator(name, attack, defense, hitPoints){
       this.name = name;
       this.attack = attack;
       this. defense = defense;
       this.hitPoints = hitPoints;
       this.weapon = "sword";
       Gladiator.instances++;
}
Gladiator.prototype.sayName = function(){
        console.log("Hello my name is " + this.name);
};

Gladiator.instances = 0;

function makeGladiator(name, attack, defense, hitPoints){
        var instance = new Gladiator(name, attack, defense, hitPoints);
        return instance;
}

var jesse = makeGladiator("Jesse", 10, 12, 10);
var john  = makeGladiator("John", 10, 12, 20);

console.log(jesse);
console.log(jesse.sayName());
console.log(john.name);
console.log(john.weapon);
console.log(Gladiator.instances);