const arrayContainsCoordinates = require("./checkArraysContain");

const Player = ((playerName) => {
    function getRandomCoordinates(successfulHits, missedAttacks) {
        const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        const row = Math.floor(Math.random() * 10) + 1;
        const col = lettersKey[Math.floor(Math.random() * lettersKey.length)];

        if (arrayContainsCoordinates(successfulHits, [row, col]) || arrayContainsCoordinates(missedAttacks, [row, col])) {
            return getRandomCoordinates(successfulHits, missedAttacks);
        }

        return [row, col];
    };

    return {
        playerName,
        myTurn: false,
        startTurn() {
            if (!this.checkTurn()) {
                this.myTurn = true;
            }
        },
        endTurn(opponent) {
            if (this.checkTurn()) {
                this.myTurn = false;
                opponent.startTurn();
            }
        },
        checkTurn() {
            return this.myTurn;
        },
        makeAttack(opponent, opponentBoard, coordinates) {
            if (this.checkTurn()) {
                if (!coordinates) {
                    const randomCoordinates = getRandomCoordinates(opponentBoard.successfulHits, opponentBoard.missedAttacks);
                    opponentBoard.receiveAttack(randomCoordinates);
                } else {
                    opponentBoard.receiveAttack(coordinates);
                };
                this.endTurn(opponent);
            }
        }
    }
});

module.exports = Player;