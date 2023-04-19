const Ship = ((length, numHits = 0) => ({
    length,
    numHits,
    hit() {
        this.numHits += 1;
    },
    isSunk() {
        return this.numHits === this.length;
    }
}));

module.exports = Ship;