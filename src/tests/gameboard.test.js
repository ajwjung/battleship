const Ship = require("../modules/ship");
const Gameboard = require("../modules/gameboard");

test("Carrier placed vertically at A5 to A9", () => {
    const carrier = Ship(5);
    const testBoard = Gameboard();
    testBoard.placeShip(carrier, [5, "A"]);

    expect(testBoard.board[4][0].ship).toBe(carrier);
    expect(testBoard.board[5][0].ship).toBe(carrier);
    expect(testBoard.board[6][0].ship).toBe(carrier);
    expect(testBoard.board[7][0].ship).toBe(carrier);
    expect(testBoard.board[8][0].ship).toBe(carrier);
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
