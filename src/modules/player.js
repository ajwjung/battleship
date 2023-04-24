const Player = ((playerName) => 
     ({
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
                opponentBoard.receiveAttack(coordinates);
                this.endTurn(opponent);
            }
        }
    })
);

module.exports = Player;