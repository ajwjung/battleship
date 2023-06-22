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
    };

    function placeComputerShips(computerGameboard, allShips) {
        const takenSquares = [];
        
        allShips.forEach(ship => {
            // Get a set of coordinates that's available to place ship
            // Randomly decide if ship should be horizontal or vertical placement
            const [x, y] = GenerateCoordinates.getRandomPlacement(takenSquares, ship); // [1, "A"] format
            const randomBoolean = Math.random() < 0.5;
            const isHorizontal = randomBoolean;

            // Based on the randomly generated coordinate,
            // Place ship along its length (horizontally or vertically)
            // And push it to the `taken squares` array so we know what's taken
            // Also highlight the squares on the board
            // E.g., [x, y] = [4, "A"] then if horizontal, we'll place the ship on [4, "A/B/C/D"]
            for (let i = 0; i < ship.length; i += 1) {
                if (isHorizontal) {
                    computerGameboard.placeShip(ship, [x + i, y]);
                    takenSquares.push([x + i, y]);
                    const square = document.body.querySelector(`#opponent-board #${y}${x + i}`);
                    square.classList.add("cpu-ship");
                } else {
                    computerGameboard.placeShip(ship, [x, getLetter(y, i)]);
                    takenSquares.push([x, getLetter(y, i)]);
                    const square = document.body.querySelector(`#opponent-board #${getLetter(y, i)}${x}`);
                    square.classList.add("cpu-ship");
                }
            };
        });

        return takenSquares;
    };

    // CPU makes a random attack (we don't pass coordinates bc it's randomly generated)
    // CPU calls out the coordinates - displayed
    // Display opponent's response (hit/miss)
    // Update CPU's board's peg
    // End CPU's turn
    // If end game, display congratulations
    // If not, then start opponent player's turn
    function cpuTurnToAttack(computer, player, playerBoard, playerShips) {
        computer.makeAttack(player, playerBoard);
        Display.playerAttackMessage(playerBoard.lastAttack, computer);
        const coordinatesIndex = Coordinates.convertCoordinatesToIndex(playerBoard.lastAttack);
        const hitSquare = playerBoard.board[coordinatesIndex[0]][coordinatesIndex[1]];
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
                cpuOccupiedSquares.forEach(square => {
                    square.classList.add("highlight");
                });
            } else {
                player.startTurn();
            }
        }, 2000);
    };

    // Function to format player's target square (coordinates)
    // E.g., "A3" >> [3, "A"]
    function formatTarget(target) {
        const splitString = target.split("");
        const row = splitString.splice(1).join("");
        const col = splitString[0];
    
        return [row, col];
    };

    // Player makes attack based on square clicked
    // Player calls out the coordinates - displayed
    // Display opponent's response (hit/miss)
    // Update player's board's peg
    // End player's turn
    // If end game, display congratulations
    // If not, then start opponent player's turn
    function playerTurnToAttack(e, player, computer, computerBoard, cpuShips) {
        const formattedCoordinates = formatTarget(e.target.id);
        const coordinatesIndex = Coordinates.convertCoordinatesToIndex(formattedCoordinates);
        const hitSquare = computerBoard.board[coordinatesIndex[0]][coordinatesIndex[1]];

        player.makeAttack(computer, computerBoard, formattedCoordinates);
        Display.playerAttackMessage(e.target.id, player);
        setTimeout(() => {
            Display.opponentResponse(computerBoard.wasHit, hitSquare.ship, computer);
        }, 1000);
        setTimeout(() => {
            Display.updatePeg(computerBoard.lastAttack, computerBoard.wasHit, computer);
            playerMsgBox.textContent = "Your turn.";
            player.endTurn();
            if (computerBoard.allShipsSunk(cpuShips)) {
                Display.displayEndGame("player");
                const cpuOccupiedSquares = document.querySelectorAll(".cpu-ship");
                cpuOccupiedSquares.forEach(square => {
                    square.classList.add("highlight");
                });
            } else {
                computer.startTurn();
            };
        }, 2000);
    };

    // Players (automatically) take turns attacking until end game
    // Add event listener on all of CPU's grid squares
    // If it's not player's turn, or the square player clicked has already been attacked before,
    // or all of player's ships have sunk, then do nothing
    // Otherwise player makes an attack, then computer makes an attack
    // And they keep going until end game (which is checked in each player's `turnToAttack()` functions)
    function takeTurnsAttacking(player, playerBoard, computer, computerBoard, cpuShips, playerShips) {
        const cpuGridSquares = document.body.querySelectorAll("#opponent-board .square");
        
        cpuGridSquares.forEach(square => {
            square.addEventListener("click", (e) => {   
                const formattedCoordinates = formatTarget(e.target.id);

                if (!player.checkTurn()
                || arrayContainsCoordinates(computerBoard.successfulHits, formattedCoordinates) 
                || arrayContainsCoordinates(computerBoard.missedAttacks, formattedCoordinates)
                || computerBoard.allShipsSunk(cpuShips)
                || playerBoard.allShipsSunk(playerShips)) return;

                playerTurnToAttack(e, player, computer, computerBoard, cpuShips);

                setTimeout(() => {
                    if (computer.checkTurn()) {
                        cpuTurnToAttack(computer, player, playerBoard, playerShips);
                    }
                }, 4000);
            });
        });
    };

    return { placeComputerShips, takeTurnsAttacking };
})();

module.exports = Game;