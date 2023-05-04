const Display = (() => {
    const playerMsgBox = document.getElementById("player-text");
    const cpuMsgBox = document.getElementById("cpu-text");

    function createBoardGrid(parentDiv) {
        for (let i = 0; i < 11; i += 1) {
            const newRow = document.createElement("div");
            newRow.classList.add("row");
            parentDiv.appendChild(newRow);

            "ZABCDEFGHIJ".split("").forEach(letter => {
                const newSquare = document.createElement("div");
                newSquare.classList.add("square");
                newSquare.setAttribute("id", `${letter}${i}`);
                
                // Give each square an ID of the coordinates (e.g., A3)
                if (i > 0 && letter !== "Z") {
                    newSquare.setAttribute("id", `${letter}${i}`);
                } else {
                    newSquare.classList.add("legend");
                };
                
                // Create legend in first row/col
                if (i === 0 && letter !== "Z") {
                    newSquare.textContent = `${letter}`
                };

                if (i !== 0 && letter === "Z") {
                    newSquare.textContent = `${i}`
                };

                // Add peg holes to each square
                if (i > 0 && letter !== "Z") {
                    const pegHole = document.createElement("div");
                    pegHole.classList.add("peg-hole");
                    pegHole.setAttribute("id", `${letter}${i}`);
                    newSquare.appendChild(pegHole);
                };
                
                newRow.appendChild(newSquare);
            })
        };
    };

    function cpuAttackMessage(coordinates) {
        const formattedCoordinates = `${coordinates[1]}${coordinates[0]}`;
        cpuMsgBox.textContent = formattedCoordinates;
    };

    function playerResponse(wasHit, hitTarget) {
        if (hitTarget !== "none") {
            if (wasHit && hitTarget.isSunk()) {
                playerMsgBox.textContent = "Hit, sunk!";
            } else if (wasHit) {
                playerMsgBox.textContent = "Hit!" 
            };
        } else {
            playerMsgBox.textContent = "Miss";
        };
    };

    function updateCpuPeg(coordinates, wasHit) {
        const formattedCoordinates = `${coordinates[1]}${coordinates[0]}`;
        const targetSquarePeg = document.body.querySelector(
            `#my-board #${formattedCoordinates} > .peg-hole`
        );

        if (wasHit) {
            targetSquarePeg.classList.add("red-hit");
        } else {
            targetSquarePeg.classList.add("white-miss");
        };

        
    };

    return { createBoardGrid, cpuAttackMessage, playerResponse, updateCpuPeg };
})();

module.exports = Display;