# Battleship

## Objective

To practice test-driven development (TDD) by creating a single-player Battleship game played against the computer. Full details can be found on [The Odin Project's page](https://www.theodinproject.com/lessons/node-path-javascript-battleship).

**Requirements**

1. Create a `Ship` factory function to create ship objects with the following properties and methods:
    * Length, number of times they've been hit, and whether they've been sunk
    * `hit()` and `isSunk()` methods

2. Create a `Gameboard` factory that places ships at specific coordinates, has a `receiveAttack()` method to determine whether the given coordinates hit or missed a ship, and records missed attacks

3. Create `Player` that allows players to take turns attacking the enemy Gameboard
    * The "computer" player should make random plays and checks that it is a legal move before attacking

4. Create the main game loop and a module for DOM interaction
    * The game loop sets up a new game by creating Players and Gameboards
    * Game should be turn-based and only uses methods from other objects
    * Render information on both players' boards
    * Allow the user to click on a coordinate in the enemy Gameboard to make an attack
    * Create conditions to check when the game ends

**Optional**

1. Polish the intelligence of the computer player

2. Create a 2-player option that lets the user take turns by passing the device back and forth
    * The game should be playable on a mobile screen
    * Implement a "pass device" screen so players don't see each others boards