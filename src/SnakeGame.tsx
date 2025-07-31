import React, { useState, useEffect, useRef } from 'react';
import PageLayout from './PageLayout';
import Button from './Button';

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
  const [snake, setSnake] = useState<number[][]>(initialSnake);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [food, setFood] = useState<[number, number]>(() =>
    getRandomFoodPosition(initialSnake)
  );
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveRef = useRef(direction);
  moveRef.current = direction;

  // Detect mobile (optional if you want to conditionally add swipe only on mobile)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch positions to detect swipe
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isMobile) return; // only add swipe on mobile

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;

      // Threshold to consider a swipe (in pixels)
      const threshold = 30;
      if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) return;

      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal swipe
        if (dx > 0 && moveRef.current !== 'LEFT') setDirection('RIGHT');
        else if (dx < 0 && moveRef.current !== 'RIGHT') setDirection('LEFT');
      } else {
        // Vertical swipe
        if (dy > 0 && moveRef.current !== 'UP') setDirection('DOWN');
        else if (dy < 0 && moveRef.current !== 'DOWN') setDirection('UP');
      }

      touchStartRef.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

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
          setScore((prev) => prev + 1);
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
    setScore(0);
    setGameOver(false);
  };

  return (
    <PageLayout title="Snake Game">
      <p className="text-lg font-semibold mb-6 text-center">Score: {score}</p>

      <div
        className="grid gap-[2px] mx-auto"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 28px)`,
          gridTemplateRows: `repeat(${gridSize}, 28px)`,
          width: `${gridSize * 28 + (gridSize - 1) * 2}px`,
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
          <Button onClick={restartGame}>Restart</Button>
        </div>
      )}
    </PageLayout>
  );
};

export default SnakeGame;
