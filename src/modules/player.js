const GenerateCoordinates = require("./generateCoordinates");

const Player = ((playerName) => ({
    playerName,
    myTurn: false,
    startTurn() {
        if (!this.checkTurn()) {
            this.myTurn = true;
        }
    },
    endTurn() {
        if (this.checkTurn()) {
            this.myTurn = false;
        }
    },
    checkTurn() {
        return this.myTurn;
    },
    makeAttack(opponent, opponentBoard, coordinates = []) {
        if (this.checkTurn()) {
            if (opponent.playerName !== "computer" && coordinates.length === 0) {
                const randomCoordinates = GenerateCoordinates.getUnusedCoordinates(
                    opponentBoard.successfulHits, opponentBoard.missedAttacks
                    );
                opponentBoard.receiveAttack(randomCoordinates);
            } else {
                opponentBoard.receiveAttack(coordinates);
            };
        }
    }
}));

module.exports = Player;