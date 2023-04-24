const Ship = require("../modules/ship");
const Gameboard = require("../modules/gameboard");
const Player = require("../modules/player");

test("Players can take turns", () => {
    const player = Player("Bob");
    const computer = Player("AI");
    
    player.startTurn();
    expect(player.checkTurn()).toBe(true);
    expect(computer.checkTurn()).toBe(false);

    player.endTurn(computer);
    expect(player.checkTurn()).toBe(false);
    expect(computer.checkTurn()).toBe(true);
});

test("Player can attack computer (opponent)", () => {
    const player = Player("Bob");
    const computer = Player("AI");
    const destroyer = Ship(3);
    const computerBoard = Gameboard();
    computerBoard.placeShip(destroyer, [4, "B"]);
    player.startTurn();
    player.makeAttack(computer, computerBoard, [4, "B"]);

    expect(computerBoard.board[3][1].ship.numHits).toEqual(1);
});