const DragDrop = require("./dragDrop.js");

const Rotate = (() => {
  let angle = 0;
  let lastClickedArea;
  let lastRotatedShip;

  function shipInDock(ship) {
    return (
      !DragDrop.hasVerticalClass(ship) && !DragDrop.hasHorizontalClass(ship)
    );
  }

  function shipInGrid(ship) {
    return ship.parentNode.classList.contains("square");
  }

  function sameShipClicked(ship) {
    return lastRotatedShip === ship;
  }

  function rotateHorizontallyInGrid(ship) {
    angle = 0;
    angle = angle === 0 ? 90 : 0;
    // Use ship height to get ship width because block not rotated yet
    const shipWidth = DragDrop.getShipHeight(ship);
    const targetSquare = ship.parentNode.id;
    const adjacentSquares = DragDrop.getAdjacentSquares(
      targetSquare,
      shipWidth,
      "horizontal"
    );
    const validDrop = DragDrop.isValidDrop(
      ship.id,
      shipWidth,
      adjacentSquares,
      ship,
      "horizontal"
    );

    if (validDrop) {
      ship.style.transform = `rotate(${angle}deg)`;
      ship.classList.remove("vertical");
      DragDrop.addHorizontalStyle(ship, shipWidth);
      DragDrop.markOldSquaresAvailable(ship);
      adjacentSquares.forEach((square) =>
        DragDrop.markSquareTaken(ship, square)
      );
      lastClickedArea = "grid";
      lastRotatedShip = ship;
    }
  }

  function rotateVerticallyInGrid(ship) {
    angle = 90;
    angle = angle === 90 ? 0 : 90;
    // Use ship width to get ship height because block not rotated yet
    const shipHeight = DragDrop.getShipWidth(ship);
    const targetSquare = ship.parentNode.id;
    const adjacentSquares = DragDrop.getAdjacentSquares(
      targetSquare,
      shipHeight,
      "vertical"
    );
    const validDrop = DragDrop.isValidDrop(
      ship.id,
      shipHeight,
      adjacentSquares,
      ship,
      "vertical"
    );

    if (validDrop) {
      ship.style.transform = `rotate(${angle}deg)`;
      ship.classList.remove("horizontal");
      DragDrop.addVerticalStyle(ship);
      DragDrop.markOldSquaresAvailable(ship);
      adjacentSquares.forEach((square) =>
        DragDrop.markSquareTaken(ship, square)
      );
      lastClickedArea = "grid";
      lastRotatedShip = ship;
    }
  }

  function rotateVerticallyInDock(ship) {
    angle = 90;
    angle = angle === 90 ? 0 : 90;
    ship.style.transform = `rotate(${angle}deg)`;
    ship.classList.add("rotated-vertical");
    lastClickedArea = "my-ships";
    lastRotatedShip = ship;
  }

  function rotateHorizontallyInDock(ship) {
    angle = 0;
    angle = angle === 0 ? 90 : 0;
    ship.style.transform = `rotate(${angle}deg)`;
    ship.classList.add("rotated-horizontal");
    lastClickedArea = "my-ships";
    lastRotatedShip = ship;
  }

  function rotateShip(e) {
    const ship = e.target;
    const currentClickedArea =
      ship.parentNode.parentNode.id === "my-ships" ? "my-ships" : "grid";

    // First time rotating any ship and it's within the grid
    if (shipInGrid(ship) && !lastClickedArea && !lastRotatedShip) {
      rotateHorizontallyInGrid(ship);
    } else if (shipInDock(ship) && !lastClickedArea && !lastRotatedShip) {
      // First time rotating any ship and it's within the dock
      rotateHorizontallyInDock(ship);
    } else if (
      lastClickedArea === "grid" &&
      currentClickedArea === "my-ships"
    ) {
      // Rotate a new ship in dock after just rotating a ship in grid
      rotateHorizontallyInDock(ship);
    } else if (
      lastClickedArea === "my-ships" &&
      currentClickedArea === "grid"
    ) {
      // Rotate a ship in grid after just rotating a ship within dock
      if (DragDrop.hasVerticalClass(ship)) {
        rotateHorizontallyInGrid(ship);
      } else if (DragDrop.hasHorizontalClass(ship)) {
        rotateVerticallyInGrid(ship);
      }
    } else if (lastClickedArea === currentClickedArea) {
      // Continue rotating the same ship in dock
      if (shipInDock(ship) && sameShipClicked(ship)) {
        if (ship.classList.contains("rotated-vertical")) {
          rotateHorizontallyInDock(ship);
          ship.classList.remove("rotated-vertical");
        } else if (ship.classList.contains("rotated-horizontal")) {
          rotateVerticallyInDock(ship);
          ship.classList.remove("rotated-horizontal");
        }
      } else if (shipInGrid(ship) && sameShipClicked(ship)) {
        // Continue rotating the same ship in grid
        if (DragDrop.hasVerticalClass(ship)) {
          rotateHorizontallyInGrid(ship);
        } else if (DragDrop.hasHorizontalClass(ship)) {
          rotateVerticallyInGrid(ship);
        }
      } else if (shipInDock(ship) && !sameShipClicked(ship)) {
        // Rotate new ship in dock after just rotating another ship in dock
        if (DragDrop.shipNeverRotatedBefore(ship)) {
          rotateHorizontallyInDock(ship);
        } else if (ship.classList.contains("rotated-vertical")) {
          rotateHorizontallyInDock(ship);
          ship.classList.remove("rotated-vertical");
        } else if (ship.classList.contains("rotated-horizontal")) {
          rotateVerticallyInDock(ship);
          ship.classList.remove("rotated-horizontal");
        }
      } else if (shipInGrid(ship) && !sameShipClicked(ship)) {
        // Rotate new ship in grid after just rotating another ship in grid
        if (DragDrop.hasVerticalClass(ship)) {
          rotateHorizontallyInGrid(ship);
        } else if (DragDrop.hasHorizontalClass(ship)) {
          rotateVerticallyInGrid(ship);
        }
      }
    }
  }

  function squareHandler(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function disableRotateShip() {
    const allPlayerSquares = document.querySelectorAll("#my-board .square");
    allPlayerSquares.forEach((square) => {
      square.addEventListener("click", squareHandler, true);
    });
  }

  function enableRotateShip() {
    const allPlayerSquares = document.querySelectorAll("#my-board .square");
    allPlayerSquares.forEach((square) => {
      square.removeEventListener("click", squareHandler, false);
    });
  }

  return { rotateShip, disableRotateShip, enableRotateShip };
})();

module.exports = Rotate;
