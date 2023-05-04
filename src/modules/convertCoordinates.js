const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const Coordinates = (() => {
    function convertCoordinates(coordinates) {
        const [row, col] = coordinates;
        const colIndex = lettersKey.indexOf(col);
        
        return [row, colIndex];
    };

    return { convertCoordinates };
})();

module.exports = Coordinates;