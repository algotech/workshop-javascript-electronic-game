var plan = [
  "############################",
  "#***   #s   #      o     *##",
  "#**       ******        ** #",
  "#*        *#####*        **#",
  "##        *#s  #*   ##  s**#",
  "###       *   ##*    #     #",
  "#          *###**    #     #",
  "#   ####   ****            #",
  "#   ##       o         *** #",
  "# o  #         o       ### #",
  "#    #                  s  #",
  "############################"
];

var legend = {
  "#": Wall,
  '*': Plant,
  'o': BouncingCritter,
  's': StraightCritter
};

var world = new World(plan, legend);

console.log(world.toString());
for (var i = 0; i < 5; i++) {
  world.turn();
  console.log(world.toString());
}
