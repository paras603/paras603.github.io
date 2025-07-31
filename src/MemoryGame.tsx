import React, { useEffect, useState, useRef } from 'react';
import PageLayout from './PageLayout';
import Button from './Button';

type Card = {
  id: number;
  emoji: string;
  matched: boolean;
};

const allEmojis = ['🐶', '🍕', '🚀', '🎧', '🌵', '🐱', '⚽', '📚', '🎲', '🍩'];

const shuffleCards = (emojiCount: number): Card[] => {
  const selected = allEmojis.slice(0, emojiCount);
  const doubled = [...selected, ...selected];
  return doubled
    .map((emoji, index) => ({
      id: index + Math.random(),
      emoji,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
};

const MemoryGame: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const [seconds, setSeconds] = useState(0); // ⏱️ Timer state
  const [finalTime, setFinalTime] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const pairCount = 2 + level * 2;

  // Start new level
  useEffect(() => {
    setupLevel();
  }, [level]);

  const setupLevel = () => {
    const newCards = shuffleCards(pairCount);
    setCards(newCards);
    setFlipped([]);
    setDisabled(false);
    setWon(false);
    setFinalTime(null);
    setSeconds(0);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const handleFlip = (index: number) => {
    if (disabled || flipped.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      const [firstIdx, secondIdx] = newFlipped;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];

      if (firstCard.emoji === secondCard.emoji) {
        const updatedCards = cards.map((card, idx) =>
          idx === firstIdx || idx === secondIdx ? { ...card, matched: true } : card
        );
        setCards(updatedCards);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 800);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setWon(true);
      if (timerRef.current) clearInterval(timerRef.current);
      setFinalTime(seconds); // Save the final time when won
    }
  }, [cards]);

  const nextLevel = () => {
    setLevel((prev) => prev + 1);
  };

  const newGame = () => {
    setLevel(1);
  };

  const isFlipped = (index: number) =>
    flipped.includes(index) || cards[index].matched;

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60)
      .toString()
      .padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <PageLayout title="Memory Match">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-6 px-4 text-center">
        <div>
          <p className="mb-1 text-gray-700 font-medium">Level {level}</p>
          <p className="mb-3 text-sm text-gray-600">Time: {formatTime(seconds)}</p>
          <Button onClick={newGame}>New Game</Button>
        </div>

        <div
          className={`grid gap-3`}
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(pairCount * 2))}, 64px)`,
          }}
        >
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => handleFlip(index)}
              className={`w-16 h-16 text-2xl flex items-center justify-center border border-gray-600 rounded 
                ${isFlipped(index) ? 'bg-white' : 'bg-gray-400'} 
                transition-all duration-300`}
              disabled={card.matched}
            >
              {isFlipped(index) ? card.emoji : '❓'}
            </button>
          ))}
        </div>

        {won && (
          <div>
            <p className="text-lg font-medium mb-2">🎉 You completed Level {level}!</p>
            {finalTime !== null && (
              <p className="text-sm mb-3 text-gray-600">
                Time Taken: {formatTime(finalTime)}
              </p>
            )}
            <Button onClick={nextLevel}>Next Level</Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default MemoryGame;
