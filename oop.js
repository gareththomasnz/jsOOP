function addTwoNumbers(firstNumber, secondNumber){
        console.log(firstNumber + secondNumber);
}
addTwoNumbers(1,1);
addTwoNumbers(10,10);

function someArguments(){
        console.log(arguments);
}
someArguments(1,1,1,1,1);
someArguments(10,10,10);
someArguments("apple",10,"banana");


function addNumbers(){
        amount = 0;
        for(var i=0; i<arguments.length; i++){
                amount = amount + arguments[i];              
        }
        console.log("amount: " + amount);
}
addNumbers(1,1,1,1,1);
addNumbers(10,10,10);


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