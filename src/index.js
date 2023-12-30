import "./styles/style.css";
import "./styles/responsiveStyles.css";
import MobilePlay from "./modules/mobilePlaceShip.js";

const Ship = require("./modules/ship.js");
const Gameboard = require("./modules/gameboard.js");
const Player = require("./modules/player.js");
const Display = require("./modules/display.js");
const Game = require("./modules/gameComponents.js");
const DragDrop = require("./modules/dragDrop.js");
const Rotate = require("./modules/rotateShip.js");

const StartGame = (() => {
  const infoText = document.getElementById("info-text");
  setTimeout(() => {
    infoText.innerHTML =
      "Drag and drop your ships to place them on the left (or top) board.";
  }, 2000);
  setTimeout(() => {
    infoText.innerHTML = "Click to rotate any ship horizontally or vertically.";
  }, 6000);
  setTimeout(() => {
    infoText.innerHTML =
      "When you're finished, click the 'Start' button to begin the game.";
  }, 9000);

  // Game setup
  const player = Player("player");
  const computer = Player("computer");
  let playerBoard = Gameboard();
  let computerBoard = Gameboard();

  // Display setup
  const playerGrid = document.getElementById("my-board");
  const opponentGrid = document.getElementById("opponent-board");

  Display.createBoardGrid(playerGrid);
  Display.createBoardGrid(opponentGrid);

  // Player ships setup
  let playerCarrier = Ship(5);
  let playerBattleship = Ship(4);
  let playerDestroyer = Ship(3);
  let playerSubmarine = Ship(3);
  let playerPatrol = Ship(2);
  let allPlayerShips = [
    playerCarrier,
    playerBattleship,
    playerDestroyer,
    playerSubmarine,
    playerPatrol,
  ];

  let computerCarrier = Ship(5);
  let computerBattleship = Ship(4);
  let computerDestroyer = Ship(3);
  let computerSubmarine = Ship(3);
  let computerPatrol = Ship(2);
  let allComputerShips = [
    computerCarrier,
    computerBattleship,
    computerDestroyer,
    computerSubmarine,
    computerPatrol,
  ];

  const viewportSize = window.innerWidth;
  const mobileModeEnabled = viewportSize < 1024;

  // Player places ships
  const ships = document.querySelectorAll(".ship");
  const squares = document.body.querySelectorAll(
    "#my-board .square:not(.legend)"
  );

  // Toggle between mobile and desktop game mode when viewport size changes
  if (!mobileModeEnabled || viewportSize >= 1024) {
    // Desktop mode - drag/drop to place ships
    ships.forEach((ship) => {
      ship.removeEventListener("click", MobilePlay.setSelectedShip);
      ship.removeEventListener("dblclick", Rotate.rotateShip);

      ship.addEventListener("click", (e) => Rotate.rotateShip(e));
      ship.addEventListener("dragstart", (e) => DragDrop.dragStart(e));
      ship.addEventListener("dragend", null);
    });

    squares.forEach((square) => {
      square.removeEventListener("click", DragDrop.dragDrop);

      square.addEventListener("dragover", (e) => DragDrop.dragOver(e));
      square.addEventListener("dragenter", (e) => DragDrop.dragEnter(e));
      square.addEventListener("dragleave", (e) => DragDrop.dragLeave(e));
      square.addEventListener("drop", (e) =>
        DragDrop.dragDrop(e, viewportSize)
      );
    });
  } else if (mobileModeEnabled || viewportSize < 1024) {
    // Mobile/tablet mode - click to place ships
    ships.forEach((ship) => {
      ship.removeEventListener("click", Rotate.rotateShip);
      ship.removeEventListener("dragstart", DragDrop.dragStart);
      ship.removeEventListener("dragend", null);

      ship.addEventListener("click", (e) => MobilePlay.setSelectedShip(e));
      ship.addEventListener("dblclick", (e) => Rotate.rotateShip(e));
    });

    squares.forEach((square) => {
      square.removeEventListener("dragover", DragDrop.dragOver);
      square.removeEventListener("dragenter", DragDrop.dragEnter);
      square.removeEventListener("dragleave", DragDrop.dragLeave);
      square.removeEventListener("drop", DragDrop.dragDrop);

      square.addEventListener("click", (e) =>
        DragDrop.dragDrop(e, viewportSize)
      );
    });
  }

  // Help info box
  const helpBtn = document.querySelector(".help");
  const closeHelpBtn = document.getElementById("close-help");

  helpBtn.addEventListener("click", () => {
    Display.helpBoxToggle();
  });

  closeHelpBtn.addEventListener("click", () => {
    Display.helpBoxToggle();
  });

  // Prevent user from attacking CPU until allowed (i.e., start button clicked)
  Display.disableClickingCpuBoard();

  // Listen for changes in player's dock
  // To enable/disable "Start" button
  const startBtn = document.querySelector(".start-game");
  const playerDock = document.getElementById("my-ships");
  const config = { childList: true, subtree: true };
  const observer = Display.startBtnListener();
  observer.observe(playerDock, config);

  // Finalize both party's ship placement
  startBtn.addEventListener("click", () => {
    const shipsPlaced = Display.getShipsPlacedCounter();
    const playerShipBlocks = document.querySelectorAll(".ship");

    if (shipsPlaced === 5) {
      Display.enableClickingCpuBoard();

      startBtn.disabled = true;
      Display.hideTooltipText();
      Display.addStartGameText();
      Display.removeCpuShipBlocks();
      playerShipBlocks.forEach((ship) => {
        ship.style.cursor = "default";
      });

      Game.placeComputerShips(computerBoard, allComputerShips);
      Game.placePlayerShips(
        playerBoard,
        playerPatrol,
        playerDestroyer,
        playerSubmarine,
        playerBattleship,
        playerSubmarine,
        playerCarrier
      );
      Rotate.disableRotateShip();
      DragDrop.disableDragDrop(ships);
      startBtn.classList.add("hidden");
    }
  });

  // Reset game
  const resetBtn = document.querySelector(".reset-game");
  resetBtn.addEventListener("click", () => {
    Display.disableClickingCpuBoard();
    Display.resetShipsPlacedCounter();
    Display.resetChatBubbles();
    startBtn.classList.remove("hidden");
    Display.resetTooltipVisibility();
    // Reset gameboards
    Display.resetPlayerShipDock();
    Display.resetCpuShipDock();
    Rotate.enableRotateShip();

    playerBoard = Gameboard();
    computerBoard = Gameboard();
    Display.resetGameGrids();

    // Reset player and cpu ships
    playerCarrier = Ship(5);
    playerBattleship = Ship(4);
    playerDestroyer = Ship(3);
    playerSubmarine = Ship(3);
    playerPatrol = Ship(2);
    allPlayerShips = [
      playerCarrier,
      playerBattleship,
      playerDestroyer,
      playerSubmarine,
      playerPatrol,
    ];

    computerCarrier = Ship(5);
    computerBattleship = Ship(4);
    computerDestroyer = Ship(3);
    computerSubmarine = Ship(3);
    computerPatrol = Ship(2);
    allComputerShips = [
      computerCarrier,
      computerBattleship,
      computerDestroyer,
      computerSubmarine,
      computerPatrol,
    ];
  });

  // Game starts with player going first
  player.startTurn();
  Game.takeTurnsAttacking(
    player,
    playerBoard,
    computer,
    computerBoard,
    allComputerShips,
    allPlayerShips
  );
})();
