const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const Coordinates = (() => {
  function convertCoordinatesToIndex(coordinates) {
    // Converts [2, "D"] to [1, 3]
    const [row, col] = coordinates;
    const colIndex = lettersKey.indexOf(col);

    return [row - 1, colIndex];
  }

  function convertLetterToNumber(letter) {
    // Converts the A in "A3" to 1
    // We want coordinates, not indices, so we're counting from 1
    return lettersKey.indexOf(letter) + 1;
  }

  return { convertCoordinatesToIndex, convertLetterToNumber };
})();

module.exports = Coordinates;
