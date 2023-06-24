const Coordinates = require("./convertCoordinates");

const DragDrop = (() => {
    function hasVerticalClass(ship) {
        return ship.classList.contains("vertical");
    }

    function hasHorizontalClass(ship) {
        return ship.classList.contains("horizontal");
    }

    function getShipWidth(ship) {
        return ship.getBoundingClientRect().width;
    }

    function getShipHeight(ship) {
        return ship.getBoundingClientRect().height;
    }

    function getShipLength(dimension) {
        return Math.round((dimension + 2) / 45);
    }

    function getHorizontalOffset(dimension) {
        return 22 * (getShipLength(dimension) - 1);
    }

    function addVerticalStyle(ship) {
        ship.classList.add("vertical");
        ship.style.left = "";
    }

    function addHorizontalStyle(ship, shipWidth) {
        ship.classList.add("horizontal");
        const offsetX = getHorizontalOffset(shipWidth);
        ship.style.left = `${offsetX}px`;
    }

    function firstDropForShip(ship, shipWidth) {
        // Check if it's the first time this ship is being dropped
        // It should not have either `horizontal` or `vertical` classes
        return !hasHorizontalClass(ship, shipWidth) && !hasVerticalClass(ship)
    }

    function markSquareTaken(ship, square) {
        const shipName = ship.classList[1]
        square.classList.add(`my-${shipName}`)
        square.classList.add("taken");
    }

    function markOldSquaresAvailable(ship) {
        const shipName = ship.classList[1];
        const lastOccupiedSquares = document.querySelectorAll(`.square.taken.my-${shipName}`);
        lastOccupiedSquares.forEach(takensquare => {
            takensquare.classList.remove("taken");
            takensquare.classList.remove(`my-${shipName}`);
        });
    }

    // Removes temporary classes added when rotating in dock only
    function removeTemporaryClasses(ship) {
        if (ship.classList.contains("rotated-vertical")) ship.classList.remove("rotated-vertical");
        if (ship.classList.contains("rotated-horizontal")) ship.classList.remove("rotated-horizontal");
    }

    function checkOutOfBoundsHorizontal(squareId, shipWidth) {
        const col = squareId.charAt(0);
        const colCoordinate = Number(Coordinates.convertLetterToNumber(col));
        const shipLength = getShipLength(shipWidth);

        return colCoordinate - 1 + shipLength <= 10;
    }

    function checkOutOfBoundsVertical(squareId, shipHeight) {
        /* 
        Subtract 1 from row because adding the ship length
        assumes we're starting from the next cell 
            - E.g., A ship of length 4 placed on A7 occupies A7-10
                    but the calculation (7 + 4) would assume
                    we're taking up one extra square
        */ 
        const row = squareId.slice(1);
        const shipLength = getShipLength(shipHeight);

        return row - 1 + shipLength <= 10;
    }

    function getAdjacentSquares(squareId, dimension, orientation) {
        const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const shipLength = getShipLength(dimension);
        const [col, row] = [squareId.charAt(0), Number(squareId.slice(1))];
        const requiredSquares = [];

        for (let i = 0; i < shipLength; i += 1) {
            let targetSquare;
            if (orientation === "vertical") {
                targetSquare = document.getElementById(`${col}${row + i}`);
            } else if (orientation === "horizontal") {
                targetSquare = document.getElementById(`${lettersKey[lettersKey.indexOf(col) + i]}${row}`);
            }
            requiredSquares.push(targetSquare);
        }

        return requiredSquares;
    }

    function checkSquaresTaken(requiredSquares, ship) {
        // A square taken up by the same current ship is okay
        // Because we want to allow pivoting around the first square
        const shipName = ship.classList[1];
        return requiredSquares.some(square => 
            square.classList.contains("taken") && square.classList[1] !== `my-${shipName}`
        )
    };

    function isValidDrop(squareId, dimension, adjacentSquares, ship, orientation) {
        // Returns true if the attempted drop position is within bounds
        // and does not overlap a placed ship
        let validDrop;

        if (orientation === "vertical") {
            validDrop = checkOutOfBoundsVertical(squareId, dimension) && !checkSquaresTaken(adjacentSquares, ship)
        } else if (orientation === "horizontal") {
            validDrop = checkOutOfBoundsHorizontal(squareId, dimension) && !checkSquaresTaken(adjacentSquares, ship);
        }

        return validDrop;
    }

    function shipNeverRotatedBefore(ship) {
        return !ship.classList.contains("rotated-vertical") && !ship.classList.contains("rotated-horizontal");
    }

    function dragStart(e) {
        e.dataTransfer.clearData();
        e.dataTransfer.setData("text", e.target.classList[1]);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        if(e.target.classList.contains("square")) e.target.classList.add("hover");
    }

    function dragLeave(e) {
        if (e.target.classList.contains("square")) e.target.classList.remove("hover");
    }

    function dragDrop(e) {
        const shipData = e.dataTransfer.getData("text");
        const ship = document.querySelector(`.ship.${shipData}`);
        const shipHeight = getShipHeight(ship);
        const shipWidth = getShipWidth(ship);

        if (e.target.classList.contains("square")) {
            let adjacentSquares;
            let validDrop;

            if (hasVerticalClass(ship) || ship.classList.contains("rotated-vertical") || (firstDropForShip(ship) && shipNeverRotatedBefore(ship))) {
                // All scenarios where ship is in vertical orientation
                adjacentSquares = getAdjacentSquares(e.target.id, shipHeight, "vertical");
                validDrop = isValidDrop(e.target.id, shipHeight, adjacentSquares, ship, "vertical");
            } else if (hasHorizontalClass(ship) || ship.classList.contains("rotated-horizontal")) {
                // All scenarios where ship is in horizontal orientation
                adjacentSquares = getAdjacentSquares(e.target.id, shipWidth, "horizontal");
                validDrop = isValidDrop(e.target.id, shipWidth, adjacentSquares, ship, "horizontal");
            }
            
            // For first time drop only (no rotation either)
            if (shipNeverRotatedBefore(ship) && firstDropForShip(ship, shipWidth) && validDrop) {
                addVerticalStyle(ship);
                e.target.append(ship);
                adjacentSquares.forEach(square => markSquareTaken(ship, square));
                removeTemporaryClasses(ship);
            } else if (ship.classList.contains("rotated-vertical") && firstDropForShip(ship, shipHeight) && validDrop) {
                // For first time drop with vertical ship (previously rotated)
                addVerticalStyle(ship);
                e.target.append(ship);
                adjacentSquares.forEach(square => markSquareTaken(ship, square));
                removeTemporaryClasses(ship);
            } else if (ship.classList.contains("rotated-horizontal") && firstDropForShip(ship) && validDrop) {
                // For first time drop with horizontal ship (previously rotated)
                addHorizontalStyle(ship, shipWidth);
                e.target.append(ship);
                adjacentSquares.forEach(square => markSquareTaken(ship, square));
                removeTemporaryClasses(ship);
            }

            // Handles dragging/dropping an already-placed ship to a new square
            if ((hasVerticalClass(ship) || hasHorizontalClass(ship)) && ship.parentNode.classList.contains("square") && validDrop) {
                markOldSquaresAvailable(ship);
                e.target.append(ship);
                adjacentSquares.forEach(newSquare => markSquareTaken(ship, newSquare));
                removeTemporaryClasses(ship);
            }
        };

        e.target.classList.remove("hover");
    }

    function disableDragDrop(ships) {
        ships.forEach(ship => { ship.draggable = false });
    }

    return { dragStart, dragOver, dragEnter, dragLeave, dragDrop,
            hasVerticalClass, hasHorizontalClass, getShipHeight, getShipWidth,
            getAdjacentSquares, isValidDrop, addHorizontalStyle, addVerticalStyle,
            markOldSquaresAvailable, markSquareTaken, shipNeverRotatedBefore,
            disableDragDrop };

})();

module.exports = DragDrop;