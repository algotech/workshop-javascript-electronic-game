function StraightCritter() {
  this.direction = Helper.randomElement(Config.directionNames);
  this.energy = 20;
};

StraightCritter.prototype.changeDirection = function() {
  this.direction = Helper.dirPlus(this.direction, 4);
};

StraightCritter.prototype.act = function(view) {
  if (view.look(this.direction) != " ") {
    this.changeDirection();
  }

  return {type: "move", direction: this.direction};
};
