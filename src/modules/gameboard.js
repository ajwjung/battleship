const arrayContainsCoordinates = require("./checkArraysContains.js");
const Coordinates = require("./convertCoordinates.js");

const Gameboard = () => {
  const board = [];

  for (let i = 1; i < 11; i += 1) {
    const newRow = [];
    "ABCDEFGHIJ".split("").forEach((letter) => {
      newRow.push({
        coordinates: [i, letter],
        ship: "none",
      });
    });
    board.push(newRow);
  }

  return {
    board,
    lastAttack: "none",
    wasHit: false,
    successfulHits: [],
    missedAttacks: [],
    placeShip(boat, coordinates) {
      const [row, col] = Coordinates.convertCoordinatesToIndex(coordinates);
      board[row][col].ship = boat;
    },
    receiveAttack(coordinates) {
      // User's board receives attack at given coordinates
      // Save the coordinates to miss or hit array
      // So we can check if this coordinate has been attacked before

      const [row, col] = Coordinates.convertCoordinatesToIndex(coordinates);

      if (board[row][col].ship !== "none") {
        board[row][col].ship.hit();
        this.successfulHits.push(coordinates);
        this.lastAttack = coordinates;
        this.wasHit = true;
      } else if (board[row][col].ship === "none") {
        if (!arrayContainsCoordinates(this.missedAttacks, coordinates)) {
          this.missedAttacks.push(coordinates);
          this.lastAttack = coordinates;
          this.wasHit = false;
        }
      }
    },
    allShipsSunk(allShips) {
      return allShips.every((ship) => ship.isSunk());
    },
  };
};

module.exports = Gameboard;
