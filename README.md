# Battleship

## Objective

To practice test-driven development (TDD) by creating a single-player Battleship game played against the computer. Full details can be found on [The Odin Project's page](https://www.theodinproject.com/lessons/node-path-javascript-battleship).

**Requirements**

1. Create a `Ship` factory function to create ship objects with the following properties and methods:

   - Length, number of times they've been hit, and whether they've been sunk
   - `hit()` and `isSunk()` methods

2. Create a `Gameboard` factory that places ships at specific coordinates, has a `receiveAttack()` method to determine whether the given coordinates hit or missed a ship, and records missed attacks

3. Create `Player` that allows players to take turns attacking the enemy Gameboard

   - The "computer" player should make random plays and checks that it is a legal move before attacking

4. Create the main game loop and a module for DOM interaction
   - The game loop sets up a new game by creating Players and Gameboards
   - Game should be turn-based and only uses methods from other objects
   - Render information on both players' boards
   - Allow the user to click on a coordinate in the enemy Gameboard to make an attack
   - Create conditions to check when the game ends

**Optional**

1. Polish the intelligence of the computer player

2. Create a 2-player option that lets the user take turns by passing the device back and forth
   - The game should be playable on a mobile screen
   - Implement a "pass device" screen so players don't see each others boards

## Built With

- HTML5
- CSS3
- Vanilla JS
- Webpack

## Battleship Features

**Drag/Drop**

The player can drag and drop ships from the dock onto their gameboard and may continue to drag/drop to re-locate a placed ship, as long as the ship remains within bounds and does not overlap another ship. If the attempted placement was invalid, the drop will not happen.

Note that it may be a little challenging to drop a ship due to the peg holes taking up part of the squares. Make sure the hover effect is visible on the square before dropping or the attempted drop won't be registered.

**Click-to-Rotate**

The player can click on a ship to rotate it in the opposite orientation (vertical to horizontal or horizontal to vertical) while the ship is still sitting in the dock or once it has already been placed. The player can click to rotate as many times as they'd like, but just like the drag/drop feature, nothing will happen if the rotation will result in the ship going out of bounds or overlapping another ship.

**Computer AI**

Currently the CPU is not "smart" so it will make random valid attacks (i.e., within the board and not previously attacked) but cannot try to attack the same ship after a successful hit. I may try to implement a "smarter" CPU in the future.

### Browser Compatibility

The game has been tested in both Google Chrome Version 114.0.5735.133 (Official Build) (64-bit) and Firefox 114.0 (64-bit). The game is working properly in Firefox but has issues in Chrome. When a ship is rotated within the grid, the newly-added styles don't load unless one uses the Chrome DevTools to inspect it. This means the rotated ship will not be properly aligned in the cell it was actually dropped into. I have tried using `-webpack-transform` but the issue still persists.

## Credits

All svg icons used in the webpage were downloaded from [Material Design Icons](https://pictogrammers.com/library/mdi/).

## Author's Notes

This project took the longest to figure out out of all of the ones I've done so far. The biggest challenge was the drag/drop feature; I couldn't figure out how to make ships drag/drop in a way that takes up the exact number of squares required. Eventually I figured out that I could make the ships the exact size based on the squares they will need to take up, so more of a visual effect than anything. I also struggled with the "click-to-rotate" feature because there were many scenarios to check. But this project forced me to think in different ways so that I could achieve the effects I wanted and I enjoyed struggling through to learn new things.
