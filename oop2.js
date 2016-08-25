        var arena = [];
        var intervalID = null;
        var currentIndex = -1;
 
        function rollDice(howMany, whatType)
        {
                var result = 0;
                for(var i=0; i<howMany; i++)
                {
                        result += Math.floor(Math.random() * whatType + 1);
                }
                return result;
        }
 
        function didHit(attacker, defender)
        {
                var toHitNumber = defender.defense - attacker.attack;
                var roll = rollDice(1, 20);
                if(roll >= toHitNumber)
                {
                        return true;
                }
                else
                {
                        return false;
                }
        }
 
        function calculateDamage(attacker)
        {
                var damageRoll = attacker.weapon.getDamage();
                return damageRoll;
        }
 
        function handleAttack(attacker, defender)
        {
                d(attacker.name + " is attacking " + defender.name);
                var didTheyHit = didHit(attacker, defender);
                if(didTheyHit === true)
                {
                        var howMuchDamage = calculateDamage(attacker);
                        defender.hitPoints -=howMuchDamage;
                        d(attacker.name + " hit for " + howMuchDamage + " points of damge, " + defender.name + " has " + defender.hitPoints + " hit points left.");
                        if(defender.hitPoints <= 0)
                        {
                                gameOverMan(defender);
                        }
                }
                else
                {
                        d("missed...");
                }
        }
 
        function calculateTarget(attacker, arena)
        {      
                var copyArena = arena.concat();
                var myIndex = copyArena.indexOf(attacker);
                copyArena.splice(myIndex, 1);
                var sortByLowestHitPoints = function(a, b)
                {
                        if(a.hitPoints > b.hitPoints)
                        {
                                return 1;
                        }
                        else if(a.hitPoints < b.hitPoints)
                        {
                                return -1;
                        }
                        else
                        {
                                return 0;
                        }
                };
                copyArena.sort(sortByLowestHitPoints);
                return copyArena[0];
        }
 
        function startGame()
        {
                var dagger = {
                        getDamage: function()
                        {
                                return rollDice(1, 4);
                        }
                };
 
                var claw = {
                        getDamage: function()
                        {
                                return rollDice(1, 3);
                        }
                };
                var stick = {
                        getDamage: function()
                        {
                                return rollDice(1, 12);
                        }
                };
 
                var boomStick = {
                        getDamage: function()
                        {
                                return rollDice(3, 4);
                        }
                };
 
                var gladiator1 = {name: "Anthony",      attack: 15,     defense: 20,    hitPoints: 10,  weapon: dagger};
                var gladiator2 = {name: "Tom",          attack: 13,     defense: 7,     hitPoints: 10,  weapon: claw};
                var gladiator3 = {name: "Dom",          attack: 10,     defense: 6,     hitPoints: 7,   weapon: stick};
                var gladiator4 = {name: "Tim",          attack: 12,     defense: 11,    hitPoints: 9,   weapon: boomStick};
 
                arena.push(gladiator1, gladiator2, gladiator3, gladiator4);
 
                currentIndex = -1;
                intervalID = setInterval(nextAttack, 1000);
        }
 
        function gameOverMan(defender)
        {
                var defendersIndex = arena.indexOf(defender);
                arena.splice(defendersIndex, 1);
               
                d("-------------" + defender.name + "Died!" );
                d(arena);
 
                if(arena.length <= 1)
                {
                        clearInterval(intervalID);
                        intervalID = null;
                        d("BAM, THE END. Survivor = " + arena[0].name);
                }
        }
 
        function nextAttack()
        {
                if (arena.length==1) {
                        d("BAM, THE END. Survivor = " + arena[0].name);
                }
 
                if(currentIndex < arena.length-1)
                {
                        currentIndex++;
                }
                else
                {
                        currentIndex = 0;
                }
 
                var currentGladiator = arena[currentIndex];
                d(currentGladiator.name + " 's turn." + currentGladiator.hitPoints);
                var currentDefender = calculateTarget(currentGladiator,arena);
                handleAttack(currentGladiator, currentDefender);
        }
 
        function d(o)
        {
                console.log(o);
        }
 
       
 
 
startGame();