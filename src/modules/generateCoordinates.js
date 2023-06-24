const arrayContainsCoordinates = require("./checkArraysContains");

const GenerateCoordinates = (() => {
    const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    
    function getRandomCoordinates() {
        const row = Math.floor(Math.random() * 10) + 1;
        const col = lettersKey[Math.floor(Math.random() * lettersKey.length)];

        return [row, col];
    };
      
    function checkOverlap(takenSpots, ship, row, colIndex) {
        const requiredSquares = [];
        let overlap = false;
    
        for (let i = 0; i < ship.length; i += 1) {
            requiredSquares.push([row + i, lettersKey[colIndex]]); // horizontal
            requiredSquares.push([row, lettersKey[colIndex + i]]); // vertical
        };
    
        requiredSquares.forEach(coordinates => {
            if (arrayContainsCoordinates(takenSpots, coordinates)) overlap = true;
        });
    
        return overlap;
    };

    // Randomly generate a coordinate for CPU's ship
    // And keeps generating until we get an unoccupied square
    function getRandomPlacement(takenSpots, ship) {
        const row = Math.floor(Math.random() * 10) + 1;
        const colIndex = Math.floor(Math.random() * lettersKey.length)
    
        if (row + ship.length > 10 || colIndex + ship.length > 10
            || arrayContainsCoordinates(takenSpots, [row, lettersKey[colIndex]])
            || checkOverlap(takenSpots, ship, row, colIndex)) {
            return getRandomPlacement(takenSpots, ship);
        } 
    
        return [row, lettersKey[colIndex]];
    };

    // For CPU attack on player
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
