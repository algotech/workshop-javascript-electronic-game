function BouncingCritter() {
  this.direction = Helper.randomElement(Config.directionNames);
};

BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != " ") {
    this.direction = view.find(" ");
  }

  return {type: "move", direction: this.direction};
};
