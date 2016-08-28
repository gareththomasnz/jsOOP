function Animal(name, attack, defense, hitPoints) {
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	this.hitPoints = hitPoints;
	this.weapon = new weapon(1, 2);
}

Animal.prototype = new Gladiator();
Animal.prototype.constructor = Animal;
Animal.prototype.getRandomTargetInArena = function(arena) {
	var myIndex = arena.indexOf(this);
	var targetArray = arena.concat();
	targetArray.splice(myIndex, 1);
	var sortByLowestHitPoints = function(a, b) {
		if (a.hitPoints > b.hitPoints) {
			return 1;
		} else if (a.hitPoints < b.hitPoints) {
			return -1;
		} else {
			return 0;
		}
	};
	targetArray.sort(sortByLowestHitPoints);
	return targetArray[0];
	//var randomIndex = Math.floor(Math.random() * targetArray.length);
	//return targetArray[randomIndex];
};