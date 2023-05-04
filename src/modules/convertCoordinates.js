const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const Coordinates = (() => {
    function convertCoordinatesToIndex(coordinates) {
        // Converts [2, "D"] to [1, 3]
        const [row, col] = coordinates;
        const colIndex = lettersKey.indexOf(col);
        
        return [row - 1, colIndex];
    };

    return { convertCoordinatesToIndex };
})();

module.exports = Coordinates;