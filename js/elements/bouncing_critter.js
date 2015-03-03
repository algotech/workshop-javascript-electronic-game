function BouncingCritter() {
  this.direction = Helper.randomElement(Config.directionNames);
  this.energy = 20;
};

BouncingCritter.prototype.act = function(context) {
  var space = context.find(" ");
  var plant = context.find("*");

  if (this.energy > 60 && space) {
    return {type: "reproduce", direction: space};
  }

  if (plant) {
    return {type: "eat", direction: plant};
  }

  if (space) {
    return {type: "move", direction: space};
  }
};
