const Display = (() => {
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

    return { createBoardGrid };
})();

module.exports = Display;