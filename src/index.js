import { convertCoordinatesToIndex } from "./modules/convertCoordinates";
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
    let lastClickArea;
    let lastDroppedShip;

    function getShipLength(dimension) {
        return (dimension + 2) / 45;
    }

    function getHorizontalOffset(dimension) {
        return 22 * (getShipLength(dimension) - 1);         
    }

    function addHorizontalStyles(ship, shipWidth) {
        ship.classList.add("horizontal");
        // Offset ships to start in correct square
        const offsetX = getHorizontalOffset(shipWidth);
        ship.style.left = `${offsetX}px`;
    }

    function addVerticalStyles(ship) {
        ship.classList.add("vertical");
        ship.style.left = "";
    }

    function checkWithinBounds(coordinates, shipLength) {
        const coords = [coordinates[1], coordinates[0]];
        const [row, col] = convertCoordinatesToIndex(coords); // 0-based indexes
        
        return angle === 0 ? row + Math.round(shipLength) <= 10 : col + Math.round(shipLength) <= 10
    }

    function rotateShip(e) {
        console.log("On rotate, before reset:", angle);
        // Reset angle if player rotates a new ship
        // After just dropping an already-rotated ship
        // And if player rotates a new ship after rotating a placed ship
        if (!lastClickArea) lastClickArea = e.target.parentElement.parentElement.id;
        const currentClick = e.target.parentElement.parentElement.id;
        if (lastClickArea === "grid" && currentClick === "my-ships") angle = 0;
        if (lastDroppedShip !== e.target) angle = 0; // faulty logic here

        console.log("On rotate, after reset:", angle)

        if (e.target.classList.contains("vertical")) {
            e.target.classList.remove("vertical");
            angle = 90;
            e.target.style.transform = `rotate(${angle}deg)`;
            const shipWidth = e.target.getBoundingClientRect().width;
            addHorizontalStyles(e.target, shipWidth);
            lastClickArea = "grid";
        } else if (e.target.classList.contains("horizontal")) {
            e.target.classList.remove("horizontal");
            addVerticalStyles(e.target);
            angle = 0;
            e.target.style.transform = `rotate(${angle}deg)`;
            lastClickArea = "grid";
        } else {
            angle = angle === 0 ? 90 : 0;
            e.target.style.transform = `rotate(${angle}deg)`;
            lastClickArea = "my-ships";
        }
    }

    function dragStart(e) {
        console.log("Drag start:", angle)
        // Reset angle in case player drags a ship from dock
        // After just rotating a ship in the grid
        const currentClick = e.target.parentElement.parentElement.id;
        if (lastClickArea === "grid" && currentClick === "my-ships") angle = 0;

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
            if (angle === 90 && checkWithinBounds(e.target.id, getShipLength(shipWidth))) {
                if (lastDroppedShip === ship) angle = 0;
                if (ship.classList.contains("vertical")) ship.classList.remove("vertical");
                addHorizontalStyles(ship, shipWidth);
                e.target.append(ship);
                lastDroppedShip = ship;
            } else if (angle === 0 && checkWithinBounds(e.target.id, getShipLength(shipHeight))) {
                if (lastDroppedShip === ship) angle = 0;
                if (ship.classList.contains("horizontal")) ship.classList.remove("horizontal");
                addVerticalStyles(ship);
                e.target.appendChild(ship);
                lastDroppedShip = ship;
            }
        };

        e.target.classList.remove("hover");
        console.log("After drag/drop:", angle)
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