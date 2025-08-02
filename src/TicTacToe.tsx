import React, { useState } from 'react';
import PageLayout from './PageLayout';
import Button from './Button';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<(null | 'X' | 'O')[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const isDraw = board.every(cell => cell !== null) && !winner;

  function handleClick(i: number) {
    if (board[i] || winner) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }
  

  function restartGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  function calculateWinner(squares: (null | 'X' | 'O')[]) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6],
    ];
    for (let [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <PageLayout title="Tic Tac Toe">
      <h2 className="mb-4 text-center text-lg font-medium text-gray-700">
        {winner
          ? `Winner: ${winner}`
          : isDraw
          ? "It's a Draw!"
          : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </h2>

      <div className="grid grid-cols-3 gap-3 mx-auto w-48">
        {board.map((val, idx) => (
          <Button
            key={idx}
            onClick={() => handleClick(idx)}
            className="w-16 h-16 text-3xl font-bold flex items-center justify-center"
          >
            {val}
          </Button>
        ))}
      </div>

      {/*New Game button */}
      <div className="text-center mt-4">
        <Button onClick={restartGame}>New Game</Button>
      </div>
    </PageLayout>
  );
};

export default TicTacToe;
