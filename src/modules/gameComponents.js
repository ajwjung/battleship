const Coordinates = require("./convertCoordinates");
const GenerateCoordinates = require("./generateCoordinates");
const Display = require("./display");
const arrayContainsCoordinates = require("./checkArraysContains");

const Game = (() => {
  const cpuMsgBox = document.getElementById("cpu-text");
  const playerMsgBox = document.getElementById("player-text");

  function getLetter(letter, i) {
    const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    return lettersKey[lettersKey.indexOf(letter) + i];
  }

  function placeComputerShips(computerGameboard, allShips) {
    // Creates a randomly-generated coordinate for each ship
    // And gets the adjacent squares to place the ship
    const takenSquares = [];

    allShips.forEach((ship) => {
      const [x, y] = GenerateCoordinates.getRandomPlacement(takenSquares, ship); // [1, "A"] format
      const randomBoolean = Math.random() < 0.5;
      const isHorizontal = randomBoolean;

      for (let i = 0; i < ship.length; i += 1) {
        if (isHorizontal) {
          computerGameboard.placeShip(ship, [x + i, y]);
          takenSquares.push([x + i, y]);
          const square = document.body.querySelector(
            `#opponent-board #${y}${x + i}`
          );
          square.classList.add("cpu-ship");
        } else {
          computerGameboard.placeShip(ship, [x, getLetter(y, i)]);
          takenSquares.push([x, getLetter(y, i)]);
          const square = document.body.querySelector(
            `#opponent-board #${getLetter(y, i)}${x}`
          );
          square.classList.add("cpu-ship");
        }
      }
    });

    return takenSquares;
  }

  // Place player's ships based on occupied squares
  function placePlayerShips(
    playerBoard,
    playerPatrol,
    playerDestroyer,
    playerSubmarine,
    playerBattleship,
    playerCarrier
  ) {
    const playerOccupiedSquares = document.querySelectorAll(
      "#my-board .square.taken"
    );
    playerOccupiedSquares.forEach((occupiedSquare) => {
      const shipName = occupiedSquare.classList[1].slice(3);
      const coordinates = occupiedSquare.id;
      const formattedCoordinates = [coordinates[1], coordinates[0]];

      if (shipName === "patrol") {
        playerBoard.placeShip(playerPatrol, formattedCoordinates);
      } else if (shipName === "destroyer") {
        playerBoard.placeShip(playerDestroyer, formattedCoordinates);
      } else if (shipName === "submarine") {
        playerBoard.placeShip(playerSubmarine, formattedCoordinates);
      } else if (shipName === "battleship") {
        playerBoard.placeShip(playerBattleship, formattedCoordinates);
      } else if (shipName === "carrier") {
        playerBoard.placeShip(playerCarrier, formattedCoordinates);
      }
    });
  }

  // CPU makes attack based on randomly-generated coordinate
  function cpuTurnToAttack(computer, player, playerBoard, playerShips) {
    computer.makeAttack(player, playerBoard);
    Display.playerAttackMessage(playerBoard.lastAttack, computer);
    const coordinatesIndex = Coordinates.convertCoordinatesToIndex(
      playerBoard.lastAttack
    );
    const hitSquare =
      playerBoard.board[coordinatesIndex[0]][coordinatesIndex[1]];
    setTimeout(() => {
      Display.opponentResponse(playerBoard.wasHit, hitSquare.ship, player);
    }, 1000);
    setTimeout(() => {
      Display.updatePeg(playerBoard.lastAttack, playerBoard.wasHit, player);
      cpuMsgBox.textContent = "Your turn.";
      computer.endTurn();
      if (playerBoard.allShipsSunk(playerShips)) {
        Display.displayEndGame("computer");
        const cpuOccupiedSquares = document.querySelectorAll(".cpu-ship");
        cpuOccupiedSquares.forEach((square) => {
          square.classList.add("highlight");
        });
      } else {
        player.startTurn();
      }
    }, 2000);
  }

  // Formats player's target square (coordinates)
  // E.g., "A3" >> [3, "A"]
  function formatTarget(target) {
    const splitString = target.split("");
    const row = splitString.splice(1).join("");
    const col = splitString[0];

    return [row, col];
  }

  // Player makes attack by clicking on the target square
  function playerTurnToAttack(e, player, computer, computerBoard, cpuShips) {
    const formattedCoordinates = formatTarget(e.target.id);
    const coordinatesIndex =
      Coordinates.convertCoordinatesToIndex(formattedCoordinates);
    const hitSquare =
      computerBoard.board[coordinatesIndex[0]][coordinatesIndex[1]];

    player.makeAttack(computer, computerBoard, formattedCoordinates);
    Display.playerAttackMessage(e.target.id, player);
    setTimeout(() => {
      Display.opponentResponse(computerBoard.wasHit, hitSquare.ship, computer);
    }, 1000);
    setTimeout(() => {
      Display.updatePeg(
        computerBoard.lastAttack,
        computerBoard.wasHit,
        computer
      );
      playerMsgBox.textContent = "Your turn.";
      player.endTurn();
      if (computerBoard.allShipsSunk(cpuShips)) {
        Display.displayEndGame("player");
        const cpuOccupiedSquares = document.querySelectorAll(".cpu-ship");
        cpuOccupiedSquares.forEach((square) => {
          square.classList.add("highlight");
        });
      } else {
        computer.startTurn();
      }
    }, 2000);
  }

  // Players automatically take turns attacking until end game
  function takeTurnsAttacking(
    player,
    playerBoard,
    computer,
    computerBoard,
    cpuShips,
    playerShips
  ) {
    const cpuGridSquares = document.body.querySelectorAll(
      "#opponent-board .square"
    );

    cpuGridSquares.forEach((square) => {
      square.addEventListener("click", (e) => {
        const formattedCoordinates = formatTarget(e.target.id);

        // Player may not click to attack until it's their turn
        if (
          !player.checkTurn() ||
          arrayContainsCoordinates(
            computerBoard.successfulHits,
            formattedCoordinates
          ) ||
          arrayContainsCoordinates(
            computerBoard.missedAttacks,
            formattedCoordinates
          ) ||
          computerBoard.allShipsSunk(cpuShips) ||
          playerBoard.allShipsSunk(playerShips)
        )
          return;

        playerTurnToAttack(e, player, computer, computerBoard, cpuShips);

        setTimeout(() => {
          if (computer.checkTurn()) {
            cpuTurnToAttack(computer, player, playerBoard, playerShips);
          }
        }, 4000);
      });
    });
  }

  return { placeComputerShips, placePlayerShips, takeTurnsAttacking };
})();

module.exports = Game;
