const GenerateCoordinates = require("./generateCoordinates")

const Game = (() => {
    function getLetter(letter, i) {
        const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        return lettersKey[lettersKey.indexOf(letter) + i];
    };

    function placeComputerShips(allShips) {
        const takenSquares = [];
        
        allShips.forEach(ship => {
            const [x, y] = GenerateCoordinates.getRandomPlacement(takenSquares, ship); // [1, "A"] format
            const randomBoolean = Math.random() < 0.5;
            const isHorizontal = randomBoolean;


            for (let i = 0; i < ship.length; i += 1) {
                if (isHorizontal) {
                    takenSquares.push([x + i, y])
                    const square = document.body.querySelector(`#opponent-board #${y}${x + i}`)
                    square.classList.add("highlight");
                } else {
                    takenSquares.push([x, getLetter(y, i)]);
                    const square = document.body.querySelector(`#opponent-board #${getLetter(y, i)}${x}`);
                    square.classList.add("highlight");
                }
            };
        });
    };

    return { placeComputerShips };
})();

module.exports = Game;