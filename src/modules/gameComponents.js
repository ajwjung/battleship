const Coordinates = require("./convertCoordinates");
const GenerateCoordinates = require("./generateCoordinates");
const Display = require("./display");

const Game = (() => {
    const cpuMsgBox = document.getElementById("cpu-text");

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
        Display.cpuAttackMessage(playerBoard.lastAttack, playerBoard.wasHit);
        const coordinatesIndex = Coordinates.convertCoordinatesToIndex(playerBoard.lastAttack);
        const hitSquare = playerBoard.board[coordinatesIndex[0]][coordinatesIndex[1]];
        setTimeout(() => {
            Display.playerResponse(playerBoard.wasHit, hitSquare.ship);
        }, 1000);
        setTimeout(() => {
            Display.updateCpuPeg(playerBoard.lastAttack, playerBoard.wasHit);
            cpuMsgBox.textContent = "Your turn.";
        }, 2000);
    };

    return { placeComputerShips, cpuTurnToAttack };
})();

module.exports = Game;