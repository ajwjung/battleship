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

    // Player calls out a coordinate to attack
    function playerAttackMessage(coordinates, player) {
        if (player.playerName === "computer") {
            const formattedCoordinates = `${coordinates[1]}${coordinates[0]}`;
            cpuMsgBox.textContent = formattedCoordinates;
        } else {
            playerMsgBox.textContent = coordinates;
        }
    };

    // Opponent that got hit responds hit/miss
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

    // Handlers for start of game
    function removeCpuShipBlocks() {
        const cpuShipBlocks = document.querySelectorAll(".ship-preview");
        cpuShipBlocks.forEach(cpuShip => cpuShip.remove());
    };

    function addStartGameText() {
        const cpuMessage = document.getElementById("cpu-text");
        const infoText = document.getElementById("info-text");
        infoText.textContent = "The first to sink all 5 of their opponent's ships wins. Good luck!";
        cpuMessage.textContent = "You may go first.";
    };

    // Button popups/tooltips
    function hideTooltipText() {
        const tooltipText = document.querySelector(".tooltip-text");
        tooltipText.style.visibility = "hidden";
    };

    function resetTooltipVisibility() {
        const tooltipText = document.querySelector(".tooltip-text");
        tooltipText.style.visibility = "";
    };

    function helpBoxToggle() {
        const helpBox = document.querySelector(".help-box");
        const helpBoxBackdrop = document.querySelector(".backdrop");
        helpBoxBackdrop.classList.toggle("hidden");
        helpBox.classList.toggle("hidden");
    }

    // Handlers for enabling/disabling start button
    let shipsPlaced = 0;

    function getShipsPlacedCounter() {
        return shipsPlaced;
    };
    
    function incrementShipsPlaced() {
        shipsPlaced += 1;
    };

    function mutationHandler(mutations) {
        const startBtn = document.querySelector(".start-game");
        mutations.forEach((mutation => {
            if (mutation.type === "childList") incrementShipsPlaced();
        }));

        if (shipsPlaced === 5) {
            startBtn.disabled = false;
        };
    };

    function startBtnListener() {
        const startBtn = document.querySelector(".start-game");
        startBtn.disabled = true;
        
        return new MutationObserver(mutationHandler);
    };

    function createShipBlock(shipName) {
        const newShipBlock = document.createElement("div");
        newShipBlock.classList.add("ship-preview", shipName);

        return newShipBlock;
    };

    // Handlers for resetting the game
    function resetPlayerShipDock() {
        // Append ships back to dock instead of re-creating new ships
        // so that existing event listeners continue to work on reset
        const leftShipDock = document.querySelector("#my-ships > .left-ships");
        const rightShipDock = document.querySelector("#my-ships > .right-ships");
        const allPlacedShips = document.querySelectorAll("#my-board .ship");
        
        allPlacedShips.forEach(ship => {
            const shipName = ship.classList[1];
            ship.className = `ship ${shipName}`;
            ship.removeAttribute("style");
            ship.draggable = true;

            if (shipName === "destroyer" || shipName === "carrier") {
                leftShipDock.appendChild(ship);
            } else if (shipName === "battleship" || shipName === "patrol"
            || shipName === "submarine") {
                rightShipDock.appendChild(ship);
            }
        });
    };

    function resetCpuShipDock() {
        const leftShipDock = document.querySelector("#opponent-ships > .left-ships");
        const rightShipDock = document.querySelector("#opponent-ships > .right-ships");
        // Remove children nodes in case ship blocks already exist
        leftShipDock.replaceChildren();
        rightShipDock.replaceChildren();

        const carrierBlock = createShipBlock("carrier");
        const battleshipBlock = createShipBlock("battleship");
        const destroyerBlock = createShipBlock("destroyer");
        const submarineBlock = createShipBlock("submarine");
        const patrolBlock = createShipBlock("patrol");

        leftShipDock.appendChild(destroyerBlock);
        leftShipDock.appendChild(carrierBlock);
        rightShipDock.appendChild(battleshipBlock);
        rightShipDock.appendChild(patrolBlock);
        rightShipDock.appendChild(submarineBlock);
    };

    function resetGameGrids() {
        const playerGridSquares = document.querySelectorAll("#my-board .square:not(.legend)");
        const cpuGridSquares = document.querySelectorAll("#opponent-board .square:not(.legend)");

        playerGridSquares.forEach(square => {
            square.className = "square";
            square.firstChild.className = "peg-hole";
        });

        cpuGridSquares.forEach(square => {
            square.className = "square";
            square.firstChild.className = "peg-hole";
        });
    };

    function resetChatBubbles() {
        const playerText = document.getElementById("player-text");
        const cpuText = document.getElementById("cpu-text");

        playerText.textContent = "";
        cpuText.textContent = "";
    };

    return { createBoardGrid, playerAttackMessage, opponentResponse,
        updatePeg, displayEndGame, removeCpuShipBlocks, addStartGameText,
        hideTooltipText, resetTooltipVisibility, helpBoxToggle, 
        getShipsPlacedCounter, startBtnListener, resetPlayerShipDock, 
        resetCpuShipDock, resetGameGrids, resetChatBubbles };
})();

module.exports = Display;