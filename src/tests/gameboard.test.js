const Ship = require("../modules/ship");
const Gameboard = require("../modules/gameboard");

describe("Gameboard", () => {
  test("Carrier placed at A3", () => {
    const carrier = Ship(5);
    const testBoard = Gameboard();
    testBoard.placeShip(carrier, [3, "A"]);

    expect(testBoard.board[2][0].ship).toBe(carrier);
  });

  test("Gameboard receives attack and carrier is hit", () => {
    const carrier = Ship(5);
    const testBoard = Gameboard();
    testBoard.placeShip(carrier, [5, "A"]);
    testBoard.receiveAttack([5, "A"]);

    expect(carrier.numHits).toEqual(1);
  });

  test("Gameboard receives attack but attack misses", () => {
    const carrier = Ship(5);
    const testBoard = Gameboard();
    testBoard.placeShip(carrier, [5, "A"]);
    testBoard.receiveAttack([3, "E"]);

    expect(testBoard.missedAttacks[0]).toEqual([3, "E"]);
  });

  test("Gameboard reports all ships have sunk", () => {
    const allShips = [];
    const destroyer = Ship(3);
    const patrol = Ship(2);
    allShips.push(destroyer);
    allShips.push(patrol);

    const testBoard = Gameboard();
    testBoard.placeShip(destroyer, [5, "E"]);
    testBoard.placeShip(destroyer, [6, "E"]);
    testBoard.placeShip(destroyer, [7, "E"]);
    testBoard.placeShip(patrol, [1, "J"]);
    testBoard.placeShip(patrol, [2, "J"]);

    // Attack destroyer
    testBoard.receiveAttack([5, "E"]);
    testBoard.receiveAttack([6, "E"]);
    testBoard.receiveAttack([7, "E"]);

    // Attack patrol boat
    testBoard.receiveAttack([1, "J"]);
    testBoard.receiveAttack([2, "J"]);

    expect(testBoard.allShipsSunk(allShips)).toBe(true);
  });
});
