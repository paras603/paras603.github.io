import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const gridSize = 10;
const initialSnake = [
  [0, 0],
  [0, 1],
  [0, 2],
];

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const getRandomFoodPosition = (snake: number[][]): [number, number] => {
  let newPos: [number, number];
  while (true) {
    newPos = [
      Math.floor(Math.random() * gridSize),
      Math.floor(Math.random() * gridSize),
    ];
    if (!snake.some(([x, y]) => x === newPos[0] && y === newPos[1])) break;
  }
  return newPos;
};

const SnakeGame: React.FC = () => {
  const navigate = useNavigate();

  const [snake, setSnake] = useState<number[][]>(initialSnake);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [food, setFood] = useState<[number, number]>(() =>
    getRandomFoodPosition(initialSnake)
  );
  const [gameOver, setGameOver] = useState(false);

  const moveRef = useRef(direction);
  moveRef.current = direction;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (moveRef.current !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (moveRef.current !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (moveRef.current !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (moveRef.current !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[prevSnake.length - 1];
        let newHead: [number, number];

        switch (moveRef.current) {
          case 'UP':
            newHead = [head[0] - 1, head[1]];
            break;
          case 'DOWN':
            newHead = [head[0] + 1, head[1]];
            break;
          case 'LEFT':
            newHead = [head[0], head[1] - 1];
            break;
          case 'RIGHT':
          default:
            newHead = [head[0], head[1] + 1];
            break;
        }

        if (
          newHead[0] < 0 ||
          newHead[0] >= gridSize ||
          newHead[1] < 0 ||
          newHead[1] >= gridSize
        ) {
          setGameOver(true);
          return prevSnake;
        }

        if (prevSnake.some(([x, y]) => x === newHead[0] && y === newHead[1])) {
          setGameOver(true);
          return prevSnake;
        }

        let newSnake;
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          newSnake = [...prevSnake, newHead];
          setFood(getRandomFoodPosition(newSnake));
        } else {
          newSnake = [...prevSnake.slice(1), newHead];
        }

        return newSnake;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [food, gameOver]);

  const restartGame = () => {
    setSnake(initialSnake);
    setDirection('RIGHT');
    setFood(getRandomFoodPosition(initialSnake));
    setGameOver(false);
  };

  return (
    <div className="w-screen h-screen bg-[#f5f5f5] flex flex-col items-center justify-center p-8 select-none relative text-gray-900">
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 border border-gray-700 rounded px-3 py-1 text-sm font-semibold hover:bg-gray-200 transition-colors"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-medium mb-8">Snake Game</h1>

      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 28px)`,
          gridTemplateRows: `repeat(${gridSize}, 28px)`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
          const row = Math.floor(idx / gridSize);
          const col = idx % gridSize;
          const isSnake = snake.some(([x, y]) => x === row && y === col);
          const isFood = food[0] === row && food[1] === col;

          return (
            <div
              key={idx}
              className={`rounded-sm ${
                isSnake
                  ? 'bg-gray-800'
                  : isFood
                  ? 'bg-gray-700'
                  : 'bg-gray-300'
              }`}
            />
          );
        })}
      </div>

      {gameOver && (
        <div className="mt-10 text-center">
          <h2 className="text-xl font-medium mb-4">Game Over</h2>
          <button
            onClick={restartGame}
            className="border border-gray-700 rounded px-6 py-2 font-semibold hover:bg-gray-200 transition-colors"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
