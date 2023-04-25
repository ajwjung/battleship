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

describe("Computer Player", () => {
    const player = Player("Bob");
    const computer = Player("AI");
    const playerBoard = Gameboard();

    test("Computer makes a random move", () => {
        computer.startTurn();
        computer.makeAttack(player, playerBoard);
        // Move must be in missedAttacks
        // Because no ships are placed on playerBoard
        expect(playerBoard.missedAttacks.length).toBe(1);
    });

    test("Computer's move is legal", () => {
        for (let i = 0; i < 10; i += 1) {
            computer.startTurn();
            computer.makeAttack(player, playerBoard);
        };

        // All 10 attacks should be missed attacks;
        // Add 1 extra to take into account the previous test
        expect(playerBoard.missedAttacks.length).toBe(11);
    });
});