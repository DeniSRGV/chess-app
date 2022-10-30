import React, { useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";
import "./App.css";
import BoardComponent from "./BoardComponent";
import LostFigures from "./LostFigures";
import Timer from "./Timer";
export const DEFAULT_TIMER = 900;
function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [winner, setWinner] = useState("");
  const [blackTime, setBlackTime] = useState(DEFAULT_TIMER);
  const [whiteTime, setWhiteTime] = useState(DEFAULT_TIMER);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);

    const whitePlayer = new Player(Colors.WHITE);
    setWhitePlayer(whitePlayer);
    setCurrentPlayer(whitePlayer);

    setWinner("");
    setWhiteTime(DEFAULT_TIMER);
    setBlackTime(DEFAULT_TIMER);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }
  return (
    <div className="app">
      {winner && (
        <div className={"winner"} onClick={restart}>
          <div className={"winner-banner"}>{winner} wins!</div>
        </div>
      )}
      <Timer
        currentPlayer={currentPlayer}
        restart={restart}
        setWinner={setWinner}
        blackTime={blackTime}
        setBlackTime={setBlackTime}
        whiteTime={whiteTime}
        setWhiteTime={setWhiteTime}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />

      <div>
        <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
        <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
}

export default App;
