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
            const [x, y] = GenerateCoordinates.getRandomPlacement(takenSquares, ship); // [1, "A"] format
            const randomBoolean = Math.random() < 0.5;
            const isHorizontal = randomBoolean;

            for (let i = 0; i < ship.length; i += 1) {
                if (isHorizontal) {
                    computerGameboard.placeShip(ship, [x + i, y]);
                    takenSquares.push([x + i, y]);
                    const square = document.body.querySelector(`#opponent-board #${y}${x + i}`);
                    square.classList.add("highlight");
                } else {
                    computerGameboard.placeShip(ship, [x, getLetter(y, i)]);
                    takenSquares.push([x, getLetter(y, i)]);
                    const square = document.body.querySelector(`#opponent-board #${getLetter(y, i)}${x}`);
                    square.classList.add("highlight");
                }
            };
        });

        return takenSquares;
    };

    function cpuTurnToAttack(computer, player, playerBoard) {
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
        }, 2000);
    };

    function formatTarget(target) {
        const splitString = target.split("");
        const row = splitString.splice(1).join("");
        const col = splitString[0];
    
        return [row, col];
    };

    function playerTurnToAttack(e, player, computer, computerBoard) {
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
        }, 2000);
    };

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
                player.endTurn();
                computer.startTurn();

                setTimeout(() => {
                    if (computer.checkTurn()) {
                        cpuTurnToAttack(computer, player, playerBoard, playerShips);
                        computer.endTurn();
                        player.startTurn();
                    }
                }, 4000);
            });
        });
    };

    return { placeComputerShips, takeTurnsAttacking };
})();

module.exports = Game;