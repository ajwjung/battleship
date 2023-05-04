import Coordinates from "./convertCoordinates.js";

const arrayContainsCoordinates = require("./checkArraysContains.js");

const Gameboard = (() => {
    const board = [];
    const successfulHits = [];
    const missedAttacks = [];

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

    function placeShip(boat, coordinates) {
        const [row, col] = Coordinates.convertCoordinates(coordinates);
        for (let i = row; i < row + boat.length; i += 1) {
            board[i - 1][col].ship = boat;
        };
    };

    function receiveAttack(coordinates) {
        const [row, col] = Coordinates.convertCoordinates(coordinates);

        if (board[row - 1][col].ship !== "none") {
            board[row - 1][col].ship.hit();
            successfulHits.push(coordinates);
        } else if (!arrayContainsCoordinates(missedAttacks, coordinates))
            missedAttacks.push(coordinates);
    };

    function allShipsSunk(allShips) {
        return allShips.every(ship => ship.isSunk());
    };

    return {
        board,
        successfulHits,
        missedAttacks,
        placeShip,
        receiveAttack,
        allShipsSunk
    };
});

module.exports = Gameboard;