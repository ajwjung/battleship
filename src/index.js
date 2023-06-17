import { convertCoordinatesToIndex, convertLetterToNumber } from "./modules/convertCoordinates";
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

    function hasVerticalClass(ship) {
        return ship.classList.contains("vertical");
    }

    function hasHorizontalClass(ship) {
        return ship.classList.contains("horizontal");
    }

    function firstDropForShip(ship, shipWidth) {
        // Check if it's the first time this ship is being dropped
        // It should not have either `horizontal` or `vertical` classes
        return !hasHorizontalClass(ship, shipWidth) && !hasVerticalClass(ship)
    }

    function getShipLength(dimension) {
        return Math.round((dimension + 2) / 45);
    }

    function getHorizontalOffset(dimension) {
        return 22 * (getShipLength(dimension) - 1);
    }

    function addVerticalStyle(ship) {
        ship.classList.add("vertical");
        ship.style.left = "";
    }

    function addHorizontalStyle(ship, shipWidth) {
        ship.classList.add("horizontal");
        const offsetX = getHorizontalOffset(shipWidth);
        ship.style.left = `${offsetX}px`;
    }

    function markSquareTaken(ship, square) {
        const shipName = ship.classList[1]
        square.classList.add(`my-${shipName}`)
        square.classList.add("taken");
    }

    function rotateShip(e) {
        angle = angle === 0 ? 90 : 0;
        e.target.style.transform = `rotate(${angle}deg)`;
    }

    function checkOutOfBoundsHorizontal(squareId, shipWidth) {
        const col = squareId.charAt(0);
        const colCoordinate = Number(convertLetterToNumber(col));
        const shipLength = getShipLength(shipWidth);

        return colCoordinate - 1 + shipLength <= 10;
    }

    function checkOutOfBoundsVertical(squareId, shipHeight) {
        /* 
        Subtract 1 from row because adding the ship length
        assumes we're starting from the next cell 
            - E.g., A ship of length 4 placed on A7 occupies A7-10
                    but the calculation (7 + 4) would assume
                    we're taking up one extra square
        */ 
        const row = squareId.slice(1);
        const shipLength = getShipLength(shipHeight);

        return row - 1 + shipLength <= 10;
    }

    // Works for both orientations
    function getAdjacentSquares(squareId, dimension) {
        const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const shipLength = getShipLength(dimension);
        const [col, row] = [squareId.charAt(0), Number(squareId.slice(1))];
        const requiredSquares = [];

        for (let i = 0; i < shipLength; i += 1) {
            let targetSquare;
            if (angle === 0) {
                targetSquare = document.getElementById(`${col}${row + i}`);
            } else {
                targetSquare = document.getElementById(`${lettersKey[lettersKey.indexOf(col) + i]}${row}`);
            }
            requiredSquares.push(targetSquare);
        }

        return requiredSquares;
    }

    // Works for both orientations
    function checkSquaresTaken(requiredSquares) {
        // Checks whether at least one square has `.taken` class
        return requiredSquares.some(square => square.classList.contains("taken"));
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
        const shipHeight = ship.getBoundingClientRect().height;
        const shipWidth = ship.getBoundingClientRect().width;

        if (e.target.classList.contains("square")) {
            const adjacentSquares = angle === 0 ? getAdjacentSquares(e.target.id, shipHeight) : getAdjacentSquares(e.target.id, shipWidth);
            
            // For first time drop only (no rotation either)
            if (angle === 0 && firstDropForShip(ship, shipWidth) && checkOutOfBoundsVertical(e.target.id, shipHeight) && !checkSquaresTaken(adjacentSquares)) {
                addVerticalStyle(ship);
                e.target.append(ship);
                adjacentSquares.forEach(square => {
                    markSquareTaken(ship, square);
                });
            } else if (angle === 90 && firstDropForShip(ship) && checkOutOfBoundsHorizontal(e.target.id, shipWidth) && !checkSquaresTaken(adjacentSquares)) {
                // For first time drop with horizontal ship (single rotation)
                // Does not check for out of bounds yet
                addHorizontalStyle(ship, shipWidth);
                e.target.append(ship);
                adjacentSquares.forEach(square => {
                    markSquareTaken(ship, square);
                });
            }
        };

        e.target.classList.remove("hover");
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