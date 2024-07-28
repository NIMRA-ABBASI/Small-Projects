import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

function Tictactoe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [currentPlayerX, setCurrentPlayerX] = useState(true);
  const [winner, setWinner] = useState(null);

  function Restart() {
    setSquares(Array(9).fill(""));
    setCurrentPlayerX(true);
    setWinner(null);
  }

  function GetWinner() {
    const WinnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < WinnerPattern.length; i++) {
      const [x, y, z] = WinnerPattern[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleOnClick(value) {
    let cpySquare = [...squares];
    if (GetWinner(cpySquare) || cpySquare[value]) return;
    cpySquare[value] = currentPlayerX ? "X" : "O";
    setCurrentPlayerX(!currentPlayerX);
    setSquares(cpySquare);
  }

  useEffect(() => {
    if (!GetWinner() && squares.every((item) => item !== "")) {
      setWinner("This is Draw. Restart Again");
    } else if (GetWinner()) {
      setWinner(`Winner is ${GetWinner()}`);
    } else {
      setWinner(`Next turn ${currentPlayerX ? "X" : "O"}`);
    }
  }, [squares, currentPlayerX]);

  return (
    /*render the game board*/
    <div className="container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleOnClick(0)} />
        <Square value={squares[1]} onClick={() => handleOnClick(1)} />
        <Square value={squares[2]} onClick={() => handleOnClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleOnClick(3)} />
        <Square value={squares[4]} onClick={() => handleOnClick(4)} />
        <Square value={squares[5]} onClick={() => handleOnClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleOnClick(6)} />
        <Square value={squares[7]} onClick={() => handleOnClick(7)} />
        <Square value={squares[8]} onClick={() => handleOnClick(8)} />
      </div>
      <h2>{winner}</h2>
      <button onClick={Restart}>Restart</button>
    </div>
  );
}

export default Tictactoe;
