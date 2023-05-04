import arrayContainsCoordinates from "./checkArraysContains.js";

const GenerateCoordinates = (() => {
    function getRandomCoordinates(successfulHits, missedAttacks) {
        const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    
        const row = Math.floor(Math.random() * 10) + 1;
        const col = lettersKey[Math.floor(Math.random() * lettersKey.length)];
    
        if (arrayContainsCoordinates(successfulHits, [row, col]) || arrayContainsCoordinates(missedAttacks, [row, col])) {
            return getRandomCoordinates(successfulHits, missedAttacks);
        }
    
        return [row, col];
    };

    return { getRandomCoordinates };
})();

export default GenerateCoordinates;
