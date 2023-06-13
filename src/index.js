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

    // Test game
    const playerCarrier = Ship(5);
    const playerBattleship = Ship(4);
    const playerDestroyer = Ship(3);
    const playerSubmarine = Ship(3);
    const playerPatrol = Ship (2); 
    const allPlayerShips = [
        playerCarrier, playerBattleship, playerDestroyer,
        playerSubmarine, playerPatrol
    ];

    // Manually place player's ships for now just to test the game
    playerBoard.placeShip(playerCarrier, [4, "A"]);
    playerBoard.placeShip(playerCarrier, [4, "B"]);
    playerBoard.placeShip(playerCarrier, [4, "C"]);
    playerBoard.placeShip(playerCarrier, [4, "D"]);
    playerBoard.placeShip(playerCarrier, [4, "E"]);

    playerBoard.placeShip(playerBattleship, [6, "E"]);
    playerBoard.placeShip(playerBattleship, [7, "E"]);
    playerBoard.placeShip(playerBattleship, [8, "E"]);
    playerBoard.placeShip(playerBattleship, [9, "E"]);
    
    playerBoard.placeShip(playerDestroyer, [3, "H"]);
    playerBoard.placeShip(playerDestroyer, [3, "I"]);
    playerBoard.placeShip(playerDestroyer, [3, "J"]);
    
    playerBoard.placeShip(playerSubmarine, [3, "G"]);
    playerBoard.placeShip(playerSubmarine, [4, "G"]);
    playerBoard.placeShip(playerSubmarine, [5, "G"]);

    playerBoard.placeShip(playerPatrol, [8, "I"]);
    playerBoard.placeShip(playerPatrol, [8, "J"]);

    const computerCarrier = Ship(5);
    const computerBattleship = Ship(4);
    const computerDestroyer = Ship(3);
    const computerSubmarine = Ship(3);
    const computerPatrol = Ship (2); 
    const allComputerShips = [
        computerCarrier, computerBattleship, computerDestroyer,
        computerSubmarine, computerPatrol
    ];

    // Randomly place computer's ships
    Game.placeComputerShips(computerBoard, allComputerShips);

    // Game starts with player going first
    player.startTurn();
    Game.takeTurnsAttacking(
        player, playerBoard, computer, computerBoard,
        allComputerShips, allPlayerShips
    );

    // Drag-drop player ships
    const ships = document.querySelectorAll(".ship");
    const squares = document.body.querySelectorAll("#my-board .square:not(.legend)");
    let angle = 0;

    function rotateShip(e) {
        angle = angle === 0 ? 90 : 0;
        e.target.style.transform = `rotate(${angle}deg)`;
    }

    function getHorizontalOffset(div) {
        const divWidth = div.getBoundingClientRect().width;
        const divLength = (divWidth + 2) / 45;
        
        return 22 * (divLength - 1);         
    }

    function dragStart(e) {
        e.dataTransfer.clearData();
        e.dataTransfer.setData("text", e.target.classList[1]);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        if(e.target.classList.contains("square")) e.target.classList.add("hover");
    }

    function dragLeave(e) {
        if (e.target.classList.contains("square")) e.target.classList.remove("hover");
    }

    function dragDrop(e) {
        const shipData = e.dataTransfer.getData("text");
        const ship = document.querySelector(`.ship.${shipData}`);
        if (e.target.classList.contains("square")) {
            e.target.appendChild(ship);
            e.target.classList.remove("hover");

            if (angle === 90) {
                if (ship.classList.contains("vertical")) ship.classList.remove("vertical");
                ship.classList.add("horizontal");
                // Offset ships to start in correct square
                const offsetX = getHorizontalOffset(ship);
                ship.style.left = `${offsetX}px`;
            } else {
                if (ship.classList.contains("horizontal")) ship.classList.remove("horizontal");
                ship.classList.add("vertical");
            }

            e.target.appendChild(ship);
            e.target.classList.remove("hover");
        };
    }
    
    ships.forEach(ship => {
        ship.addEventListener("click", e => rotateShip(e));
        ship.addEventListener("dragstart", e => dragStart(e));
        ship.addEventListener("dragend", null);
    });
    squares.forEach(square => {
        square.addEventListener("dragover", e => dragOver(e));
        square.addEventListener("dragenter", e => dragEnter(e));
        square.addEventListener("dragleave", e => dragLeave(e));
        square.addEventListener("drop", e => dragDrop(e));
    });
})();