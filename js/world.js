function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);

  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      grid.set(
        new Vector(x, y),
        Helper.elementFromChar(legend, line[x])
      );
    }
  });
}

World.prototype.toString = function() {
  var output = "";

  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += Helper.charFromElement(element);
    }

    output += "\n";
  }

  return output;
};
