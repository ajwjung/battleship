const Coordinates = require("./convertCoordinates");

const DragDrop = (() => {
    let angle = 0;

    function hasVerticalClass(ship) {
        return ship.classList.contains("vertical");
    }

    function hasHorizontalClass(ship) {
        return ship.classList.contains("horizontal");
    }

    function firstDropForShip(ship, shipWidth) {
        // Check if it's the first time this ship is being dropped
        // It should not have either `horizontal` or `vertical` classes
        return !hasHorizontalClass(ship, shipWidth) && !hasVerticalClass(ship)
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

    // Works for both orientations
    function getAdjacentSquares(squareId, dimension) {
        const lettersKey = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const shipLength = getShipLength(dimension);
        const [col, row] = [squareId.charAt(0), Number(squareId.slice(1))];
        const requiredSquares = [];

        for (let i = 0; i < shipLength; i += 1) {
            let targetSquare;
            if (angle === 0) {
                targetSquare = document.getElementById(`${col}${row + i}`);
            } else {
                targetSquare = document.getElementById(`${lettersKey[lettersKey.indexOf(col) + i]}${row}`);
            }
            requiredSquares.push(targetSquare);
        }

        return requiredSquares;
    }

    // Works for both orientations
    function checkSquaresTaken(requiredSquares, ship) {
        // Checks whether at least one square has `.taken` class
        // If a square is taken,
        // checks that it's not taken by the same ship we're dropping/rotating
        const shipName = ship.classList[1];
        return requiredSquares.some(square => 
            square.classList.contains("taken") && square.classList[1] !== `my-${shipName}`
        )
    };

    function isValidDrop(squareId, dimension, adjacentSquares, ship) {
        // Returns true if the attempted drop position is within bounds and does not overlap a placed ship
        let validDrop;

        if (angle === 0) {
            validDrop = checkOutOfBoundsVertical(squareId, dimension) && !checkSquaresTaken(adjacentSquares, ship)
        } else if (angle === 90) {
            validDrop = checkOutOfBoundsHorizontal(squareId, dimension) && !checkSquaresTaken(adjacentSquares, ship);
        }

        return validDrop;
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
            const adjacentSquares = angle === 0 ? getAdjacentSquares(e.target.id, shipHeight) : getAdjacentSquares(e.target.id, shipWidth);
            const validDrop = angle === 0 ? isValidDrop(e.target.id, shipHeight, adjacentSquares, ship) : isValidDrop(e.target.id, shipWidth, adjacentSquares, ship);
            
            // For first time drop only (no rotation either)
            if (angle === 0 && firstDropForShip(ship, shipWidth) && validDrop) {
                addVerticalStyle(ship);
                e.target.append(ship);
                adjacentSquares.forEach(square => markSquareTaken(ship, square));
            } else if (angle === 90 && firstDropForShip(ship) && validDrop) {
                // For first time drop with horizontal ship (single rotation)
                addHorizontalStyle(ship, shipWidth);
                e.target.append(ship);
                adjacentSquares.forEach(square => markSquareTaken(ship, square));
            }

            // Handles dragging/dropping an already-placed ship to a new square
            if ((hasVerticalClass(ship) || hasHorizontalClass(ship)) && ship.parentNode.classList.contains("square") && validDrop) {
                markOldSquaresAvailable(ship);
                e.target.append(ship);
                adjacentSquares.forEach(newSquare => markSquareTaken(ship, newSquare));
            }
        };

        e.target.classList.remove("hover");
    }

    function rotateShip(e) {
        const ship = e.target;
        if (hasVerticalClass(ship)) {
            angle = 0;
            angle = angle === 0 ? 90 : 0;
            const shipWidth = getShipHeight(ship);
            const targetSquare = ship.parentNode.id;
            const adjacentSquares = getAdjacentSquares(targetSquare, shipWidth);
            const validDrop = isValidDrop(ship.id, shipWidth, adjacentSquares, ship);
            
            if (validDrop) {
                ship.style.transform = `rotate(${angle}deg)`;
                ship.classList.remove("vertical");
                addHorizontalStyle(ship, shipWidth);
                markOldSquaresAvailable(ship);
                adjacentSquares.forEach(square => markSquareTaken(ship, square));
            }
        } else {
            angle = angle === 0 ? 90 : 0;
            ship.style.transform = `rotate(${angle}deg)`;
        }
    }

    return { dragStart, dragOver, dragEnter, dragLeave, dragDrop, rotateShip };

})();

module.exports = DragDrop;