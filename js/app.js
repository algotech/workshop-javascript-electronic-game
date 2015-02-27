var plan = [
  "############################",
  "#      #    #      o      ##",
  "#                          #",
  "#          #####           #",
  "##         #   #    ##     #",
  "###           ##     #     #",
  "#           ###      #     #",
  "#   ####                   #",
  "#   ##       o             #",
  "# o  #         o       ### #",
  "#    #                     #",
  "############################"
];

var legend = {
  "#": Wall,
  'o': BouncingCritter
};

var world = new World(plan, legend);

console.log(world.toString());
for (var i = 0; i < 5; i++) {
  world.turn();
  console.log(world.toString());
}
