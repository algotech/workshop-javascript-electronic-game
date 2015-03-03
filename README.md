# Tutorial JavaScript - Electronic Game
Tutorial on building a javascript application with classes

## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-github].
- Git [home][git-home] (download, documentation).

## Commits / Tutorial Outline

You can check out any point of the tutorial using
    git checkout step-x

To see the changes which between any two lessons use the git diff command.
    git diff step-x..step-x

### step-0: Project initialization

- Add a simple index.html file
- Add the app.js file with a plan map.

### step-1: Representing space

- Add the vector class to represent coordinate pairs
- Add the grid class to represent the map

### step-2: A critter’s programming interface

- Add the Config object to store possible directions
- Add the Helper object with the randomElement function
- Add the BouncingCritter class (our first element of the game)

### step-3: The World object

- Add an empty Wall class
- Add the World class that communicates (and creates) with the Grid
- Add two helper methods:
  - elementFromChar (creates an element from a character)
  - charFromElement (returns the original character from an element)
- Try the World object in the app.js file (check the console)

### step-4: Animating the World

- Add the forEach method on the Grip class
- Add 3 methods on the World class:
  - turn (gives the critters a chance to act)
  - letAct (contains the actual logic that allows the critters to move)
  - checkDestination (validates the destination point)
- Add the View class
- Animate the world from the app.js file

### step-5: More Life Forms

- Add the dirPlus helper
- Add the StraightCritter class
- Add our new critters in the map

### step-6: A more lifelike simulation

- Add the ActionsHandler class with methods for: grow, move, eat, reproduce
- Change the World class in order to use the ActionsHandler. It also manage the energy level

### step-7: Populating the new world

- Add the energy property on the Wall and StraightCritter objects
- Learn the BouncingCritter to reproduce, eat and move
- Add the Plant element
- Update the map

[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
