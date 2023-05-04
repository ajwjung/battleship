const arrayContainsCoordinates = require("./checkArraysContains");

const GenerateCoordinates = (() => {
    const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    
    function getRandomCoordinates() {
        const row = Math.floor(Math.random() * 10) + 1;
        const col = lettersKey[Math.floor(Math.random() * lettersKey.length)];

        return [row, col];
    };

    function getRandomPlacement(takenSpots, ship) {
        const row = Math.floor(Math.random() * 10) + 1;
        const colIndex = Math.floor(Math.random() * lettersKey.length)
    
        if (row + ship.length > 10 || colIndex + ship.length > 10
            || arrayContainsCoordinates(takenSpots, [row, lettersKey[colIndex]])) {
            return getRandomPlacement(takenSpots, ship);
        } 
    
        return [row, lettersKey[colIndex]];
    };

    function getUnusedCoordinates(successfulHits, missedAttacks) {
        const row = Math.floor(Math.random() * 10) + 1;
        const col = lettersKey[Math.floor(Math.random() * lettersKey.length)];
    
        if (arrayContainsCoordinates(successfulHits, [row, col])
        || arrayContainsCoordinates(missedAttacks, [row, col])) {
            return getUnusedCoordinates(successfulHits, missedAttacks);
        }
    
        return [row, col];
    };
    

    return { getRandomCoordinates, getRandomPlacement, getUnusedCoordinates };
})();

module.exports = GenerateCoordinates;
