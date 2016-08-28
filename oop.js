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

//error handling

//function getPerson(chunk){
//        if(chunk != null){
//                var chunkArray = chunk.split(" ");
//                var person = {};
//                person.firstName = chunkArray[0];
//                person.lastName = chunkArray[1];
//                return person;
//        }else{
//                console.error("Whatever Error");
//        }
//}
//
//window.onerror = function(errorMessage, fileName, lineNumber){
//   console.error("___________________");
//   console.log("errorMessage:", errorMessage);
//   console.log("fileName:", fileName);
//   console.log("lineNumber:", lineNumber);
//   return false;
//};

//use with try-catch for uncaught

//
//var intervalID = null;
//var currentIndex = -1;
//
//function rollDice(howMany, whatType){
//        var result = 0;
//        for(i=0; i<howMany;i++){
//                result += Math.floor(Math.random() * whatType) + 1;
//        }
//        return result;
//}
//
//
//function calculateDamage(attacker){
//        var damageRoll = attacker.weapon.getDamage();
//        return damageRoll;
//}
//
//function handleAttack(attacker, defender){
//        d(attacker.name + " is attacking " + defender.name);
//        var didTheyHit = didHit(attacker, defender);
//        if(theyDidHit === true){
//                var howMuchDamage = calculateDamage(attacker);
//                defender.hitPoints -= howMuchDamage();
//                d("hit for " + howMuchDamage + " points of damage" + defender.name + " has " + defender.hitPoints + " hit points left");
//                if(defender.hitPoints <= 0){
//                       gameOverMan(defender); 
//                }
//        }else{
//                d("missed");
//        }
//}
//
//function calculateTarget(attacker, arena){
//        var copyArena = arena.concat();
//        var myIndex = copyArena.indexOf(attacker);
//        copyArena.splice(myIndex, 1);
//        var sortByLowestHitPoints = function(a, b){
//                if(a.hitPoints > b.hitPoints){
//                        return 1;
//                }else if(a.hitPoints < b.hitPoints){
//                        return -1;
//                }else{
//                        return 0;
//                }
//        };
//        copyArena.sort(sortByLowestHitPoints);
//        return copyArena[0];
//}
//
//function startGame(){
//        
//        var dagger = {
//                getDamage: function(){
//                  return rollDice(1, 4);
//                  }  
//        };
//         
//         var claw = {
//              getDamage: function(){
//                return rollDice(1, 3);
//                }  
//        };
//         var halberd = {
//                getDamage: function(){
//                  return rollDice(1, 12);
//                  }  
//        };
//         
//         var boomstick = {
//              getDamage: function(){
//                return rollDice(3, 12);
//                }  
//        };
//        
//        var gladiator1 = {name: "Jesse", attack: 2, defense: 10, hitPoints: 10, weapon: dagger};
//        var gladiator2 = {name: "Peter", attack: 4, defense: 12, hitPoints: 14, weapon: claw};
//        var gladiator3 = {name: "Princess", attack: 1, defense: 14, hitPoints: 10, weapon: halberd};
//        var gladiator4 = {name: "Bruce", attack: 5, defense: 11, hitPoints: 12, weapon: boomstick};
//        
//        arena.push(gladiator1, gladiator2, gladiator3, gladiator4);
//        currentIndex = -1;
//        intervalID = setInterval(nextAttack, 3000);
//}
//
//
//function gameOverMan(){
//     var defendersIndex = arena.indexOf(defender);
//     arena.splice(defendersIndex, 1);
//     if(arena.length <= 1){
//        clearInterval(intervalID);
//        intervalID = null;
//     }
//}
//
//function nextAttack(){
//        if(currentIndex< arena.length)
//        {
//                currentIndex++;
//        }else{
//            currentIndex = 0;    
//        }
//        var currentGladiator = arena[currentIndex];
//        d(currentGladiator + "'s turn");
//        var currentDefender = calculateTarget(currentGladiator);
//        handleAttack(currentGladiator, currentDefender);
//}
//
//
//function d(o){
//        console.log(o);
//}



//d(rollDice(1, 6));
//d(rollDice(1, 20));
//d(rollDice(3, 4));

//function didHit(attacker, defender){
//        var toHitNumber = defender.defense - attacker.attack;
//        var roll = rollDice(1, 20);
//        if(roll>=toHitNumber){
//                return true;
//        }else
//        {
//                return false;
//        }
//}
//
//startGame();

//var Gladiators = [
//        {hitPoints: 10, maxHitPoints: 10},
//        {hitPoints: 8, maxHitPoints: 10},
//        {hitPoints: 10, maxHitPoints: 10},
//        {hitPoints: 3, maxHitPoints: 10},
//        {hitPoints: 2, maxHitPoints: 10},
//        {hitPoints: 4, maxHitPoints: 10},
//];
//
//var hurtGladiators = _filter(gladiators, function(gladiator){
//        if(gladiator.hitPoints <= (gladiator.maxPoints/2)){
//                return true;
//        }else{
//                return false;
//        }
//        });
//
//hurtGladiators.sort(function(gladiatorA, gladiatorB){
//        if(gladiatorA.hitPoints > gladiatorB.hitPoints){
//                return 1; 
//        }else if(gladiatorA.hitPoints < gladiatorB.hitPoints){
//                return -1;
//        }else{
//                return 0;
//        }    
//});

//var healingTarget = hurtGladiators[0];
//
//d(didHit(gladiator1, gladiator2));
//d(didHit(gladiator2, gladiator1));
//
//d(calculateDamage(gladiator1));
//d(calculateDamage(gladiator2));
//
//console.log(jesse);
//console.log(jesse.sayName());
//console.log(john.name);
//console.log(john.weapon);
//console.log(Gladiator.instances);


//var testTiger = new Tiger();
//testTiger.init("Test Tiger", 14, 14, 30);
//console.log(testTiger);
//console.log("testTiger" + testTiger);
//
//Tiger.prototype.getRandomTargetInArena = function(arena){
//        var myIndex = arena.indexOf(this);
//        var targetArray = arena.concat();
//        targetArray.splice(myIndex, 1);
//        //var randomIndex = Math.floor(Math.random() * targetArray.length);
//        //return targetArray[randomIndex];
//        var sortByLowestHitPoints = function(a, b){
//                if(a.hitPoints > b.hitPoints){
//                        return 1;
//                }else if(a.hitPoints < b.hitPoints){
//                       return -1; 
//                }else{
//                        return 0;
//                }
//        };
//        targetArray.sort(sortByLowestHitPoints);
//        return targetArray[0];
//};

var arena = [];

var jesse = makeGladiator("Jesse", 10, 12, 10);
var john  = makeGladiator("John", 10, 12, 20);

var Simon = new Human("Simon", 10, 12, 10);
var Peter = new Human("Peter", 12, 10, 12);
var Karl = new Animal("Karl", 14, 10, 14);
Karl.weapon = new Weapon(2, 6);

arena.push(Simon, Peter, Karl, jesse, john);

