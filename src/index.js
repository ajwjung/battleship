import Display from "./modules/display";
import "./styles/style.css";

const StartGame = (() => {
    const playerGrid = document.getElementById("my-board");
    const opponentGrid = document.getElementById("opponent-board");

    Display.createBoardGrid(playerGrid);
    Display.createBoardGrid(opponentGrid);
})();