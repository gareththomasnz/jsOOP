function Human(name, attack, defense, hitPoints) {
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	this.hitPoints = hitPoints;
	this.weapon = new weapon(1, 1);
}

Human.prototype = Object.create(Gladiator);

Human.prototype.getRandomTargetInArena = function(arena) {
	var myIndex = arena.indexOf(this);
	var targetArray = arena.concat();
	targetArray.splice(myIndex, 1);
	var sortByHighestHitPoints = function(a, b) {
		if (a.hitPoints > b.hitPoints) {
			return -1;
		} else if (a.hitPoints < b.hitPoints) {
			return 1;
		} else {
			return 0;
		}
	};
	targetArray.sort(sortByHighestHitPoints);
	return targetArray[0];
};

Human.prototype = new Gladiator();
Human.prototype.constructor = Human;