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

    // Initial message - player calling out coordinates
    // Update respective player's message box
    function playerAttackMessage(coordinates, player) {
        if (player.playerName === "computer") {
            const formattedCoordinates = `${coordinates[1]}${coordinates[0]}`;
            cpuMsgBox.textContent = formattedCoordinates;
        } else {
            playerMsgBox.textContent = coordinates;
        }
    };

    // Opponent that got hit responds hit/miss
    // Update respective player's message box
    function opponentResponse(wasHit, hitTarget, opponent) {
        const message = opponent.playerName !== "computer" ? playerMsgBox : cpuMsgBox;

        if (hitTarget !== "none") {
            if (wasHit && hitTarget.isSunk()) {
                message.textContent = "Hit, sunk!";
            } else if (wasHit) {
                message.textContent = "Hit!" 
            };
        } else {
            message.textContent = "Miss";
        };
    };

    // Board of opponent that got hit updates
    // Peg hole changes to red (hit) or white (miss)
    function updatePeg(coordinates, wasHit, opponent) {
        const formattedCoordinates = `${coordinates[1]}${coordinates[0]}`;
        const targetSquarePeg = opponent.playerName !== "computer"
        ? document.body.querySelector(
            `#my-board #${formattedCoordinates} > .peg-hole`
        )
        : document.body.querySelector(
            `#opponent-board #${formattedCoordinates} > .peg-hole`
        );

        if (wasHit) {
            targetSquarePeg.classList.add("red-hit");
        } else {
            targetSquarePeg.classList.add("white-miss");
        };
    };

    // Congratulate winner
    function displayEndGame(winner) {
        if (winner === "computer") {
            playerMsgBox.textContent = "Congrats, you win!";
            cpuMsgBox.textContent = ":)";
        } else {
            cpuMsgBox.textContent = "Congrats, you beat me!";
            playerMsgBox.textContent = ":)";
        };
    };

    return { createBoardGrid, playerAttackMessage, opponentResponse,
        updatePeg, displayEndGame };
})();

module.exports = Display;