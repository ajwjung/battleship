const Gameboard = (() => {
    const board = [];
    const missedAttacks = [];
    const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    for (let i = 1; i < 11; i += 1) {
        const newRow = [];
        "ABCDEFGHIJ".split("").forEach(letter => {
            newRow.push({
                coordinates: [i, letter],
                ship: "none"
            });
        });
        board.push(newRow);
    };

    function convertCoordinates(coordinates) {
        const [row, col] = coordinates;
        const colIndex = lettersKey.indexOf(col);
        
        return [row, colIndex];
    };

    function placeShip(boat, coordinates) {
        const [row, col] = convertCoordinates(coordinates);

        board[row - 1][col].ship = boat;
    };

    function receiveAttack(coordinates) {
        const [row, col] = convertCoordinates(coordinates);

        if (board[row - 1][col].ship !== "none") {
            board[row - 1][col].ship.hit();
        } else {
            missedAttacks.push(coordinates);
        };
    };

    return {
        board,
        missedAttacks,
        placeShip,
        receiveAttack
    }
});

module.exports = Gameboard;