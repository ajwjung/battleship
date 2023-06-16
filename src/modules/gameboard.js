const arrayContainsCoordinates = require("./checkArraysContains");
const Coordinates = require("./convertCoordinates");

const Gameboard = (() => {
    const board = [];
    
    for (let i = 1; i < 11; i += 1) {
        const newRow = [];
        "ABCDEFGHIJ".split("").forEach(letter => {
            newRow.push({
                coordinates: [i, letter],
                ship: "none"
            });
        });
        board.push(newRow);
    };

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
            // Given coordinates (e.g., [3, "A"]), convert to indices
            // If there's a ship on this index of the board, use `ship.hit()`
            // And save it to the `successfulHits` array
            // Otherwise if miss, then save it to the `missedAttacks` array
            // Also save the last attack
            // And toggle true/false if hit or miss

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
                };
            };
        },
        allShipsSunk(allShips) {
            return allShips.every(ship => ship.isSunk());
        }
  };
});

module.exports = Gameboard;