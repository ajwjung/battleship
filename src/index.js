import "./styles/style.css";

const Ship = require("./modules/ship");
const Gameboard = require("./modules/gameboard");
const Player = require("./modules/player");
const Display = require("./modules/display");
const Game = require("./modules/gameComponents");
const DragDrop = require("./modules/dragDrop");
const Rotate = require("./modules/rotateShip");

const StartGame = (() => {
    const infoText = document.getElementById("info-text");
    setTimeout(() => {
        infoText.innerHTML = "Drag and drop your ships to place them on the left board.";
    }, 2000);
    setTimeout(() => {
        infoText.innerHTML = "Click to rotate any ship horizontally or vertically.";
    }, 6000);
    setTimeout(() => {
        infoText.innerHTML = "When you're finished, click the 'Start' button to begin the game.";
    }, 9000);


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

    // Player ships setup
    const playerCarrier = Ship(5);
    const playerBattleship = Ship(4);
    const playerDestroyer = Ship(3);
    const playerSubmarine = Ship(3);
    const playerPatrol = Ship(2); 
    const allPlayerShips = [
        playerCarrier, playerBattleship, playerDestroyer,
        playerSubmarine, playerPatrol
    ];

    const computerCarrier = Ship(5);
    const computerBattleship = Ship(4);
    const computerDestroyer = Ship(3);
    const computerSubmarine = Ship(3);
    const computerPatrol = Ship(2); 
    const allComputerShips = [
        computerCarrier, computerBattleship, computerDestroyer,
        computerSubmarine, computerPatrol
    ];

    // Drag-drop player ships
    const ships = document.querySelectorAll(".ship");
    const squares = document.body.querySelectorAll("#my-board .square:not(.legend)");
    
    ships.forEach(ship => {
        ship.addEventListener("click", e => Rotate.rotateShip(e));
        ship.addEventListener("dragstart", e => DragDrop.dragStart(e));
        ship.addEventListener("dragend", null);
    });
    
    squares.forEach(square => {
        square.addEventListener("dragover", e => DragDrop.dragOver(e));
        square.addEventListener("dragenter", e => DragDrop.dragEnter(e));
        square.addEventListener("dragleave", e => DragDrop.dragLeave(e));
        square.addEventListener("drop", e => DragDrop.dragDrop(e));
    });
 
    // Listen for changes in player's dock
    // To enable/disable "Start" button
    const startBtn = document.querySelector(".start-game");
    const playerDock = document.getElementById("my-ships");
    startBtn.disabled = true;
    const config = { childList: true, subtree: true };
    const observer = Display.startBtnListener();
    observer.observe(playerDock, config);

    // Finalize both party's ship placement
    startBtn.addEventListener("click", () => {
        const shipsPlaced = Display.getShipsPlacedCounter();
        const playerShipBlocks = document.querySelectorAll(".ship");

        if (shipsPlaced === 5) {
            startBtn.disabled = true;
            observer.disconnect();
            Display.hideTooltipText();
            Display.addStartGameText();
            Display.removeCpuShipBlocks();
            playerShipBlocks.forEach(ship => { ship.style.cursor = "default" });

            Game.placeComputerShips(computerBoard, allComputerShips);
            Game.placePlayerShips(
                playerBoard, playerPatrol, playerDestroyer, playerSubmarine, 
                playerBattleship, playerSubmarine, playerCarrier
            );
            Rotate.disableRotateShip();
            DragDrop.disableDragDrop(ships);
        }
    })

    // Game starts with player going first
    player.startTurn();
    Game.takeTurnsAttacking(
        player, playerBoard, computer, computerBoard,
        allComputerShips, allPlayerShips
    );
})();