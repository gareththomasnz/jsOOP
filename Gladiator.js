function Gladiator(name, attack, defense, hitPoints) {
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	this.hitPoints = hitPoints;
	this.weapon = "sword";
	Gladiator.instances++;
}


Gladiator.prototype.sayName = function() {
	console.log("Hello my name is " + this.name);
};

Gladiator.instances = 0;

function makeGladiator(name, attack, defense, hitPoints) {
	var instance = new Gladiator(name, attack, defense, hitPoints);
	return instance;
}

Gladiator.prototype.roll = function(howMany, whatType) {
	var total = 0;
	for (var i = 0; i < howMany; i++) {
		result += Math.floor(Math.random() * whatType) + 1;
		total = total + result;
	}
	return total;
};

Gladiator.prototype.attackTarget = function(theTargetWereAttacking) {
	var attackRoll = this.roll(1, 20);
	attackRoll = attackRoll + this.attack;
	if (attackRoll >= theTargetWereAttacking.defense) {
		return true;
	} else {
		return false;
	}
};

Gladiator.prototype.applyDamage = function(theThingWeHit) {
	var roll = this.roll(this.weapon.howManyDie, this.weapon.typeOfDie);
	roll = roll + this.attack;
	theThingWeHit.hitPoints = theThingWeHit.hitPoints - roll;
	return roll;
};

Gladiator.prototype.getRandomTargetInArena = function(arena) {
	var myIndex = arena.indexOf(this);
	var targetArray = arena.concat();
	targetArray.splice(myIndex, 1);
	var randomIndex = Math.floor(Math.random() * targetArray.length);
	return targetArray[randomIndex];
};