import "./styles/style.css";

const Ship = require("./modules/ship");
const Gameboard = require("./modules/gameboard");
const Player = require("./modules/player");
const Display = require("./modules/display");
const Game = require("./modules/gameComponents");

const StartGame = (() => {
    // Game setup
    const player = Player("player");
    const computer = Player("computer");
    const playerBoard = Gameboard();
    const computerBoard = Gameboard();

    // Display setup
    const playerGrid = document.getElementById("my-board");
    const opponentGrid = document.getElementById("opponent-board");

    Display.createBoardGrid(playerGrid);
    Display.createBoardGrid(opponentGrid);

    const computerCarrier = Ship(5);
    const computerBattleship = Ship(4);
    const computerDestroyer = Ship(3);
    const computerSubmarine = Ship(3);
    const computerPatrol = Ship (2); 
    const allComputerShips = [
        computerCarrier, computerBattleship, computerDestroyer,
        computerSubmarine, computerPatrol
    ];
    Game.placeComputerShips(computerBoard, allComputerShips);

    computer.startTurn();
    Game.cpuTurnToAttack(computer, player, playerBoard);
})();