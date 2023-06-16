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
        // If it's player's turn, check if it's player or cpu
        // If cpu, randomly generate coordinates to use for attack
        // Otherwise, player attacks the given coordinates
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