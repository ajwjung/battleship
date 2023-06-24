function arrayContainsCoordinates(arr, coordinates) {
  for (let i = 0; i < arr.length; i += 1) {
    if (coordinates[0] === arr[i][0] && coordinates[1] === arr[i][1])
      return true;
  }

  return false;
}

module.exports = arrayContainsCoordinates;
