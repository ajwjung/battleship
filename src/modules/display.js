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
                
                // Add legend for columns
                if (i === 0 && letter !== "Z") {
                    newSquare.textContent = `${letter}`
                };
                
                // Add legend for rows
                if (i !== 0 && letter === "Z") {
                    newSquare.textContent = `${i}`
                };
                
                newRow.appendChild(newSquare);
            })
        };
    };

    return { createBoardGrid };
})();

export default Display;