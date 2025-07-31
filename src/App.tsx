// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import SnakeGame from './Snakegame';
import TicTacToe from './TicTacToe';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/snake" element={< SnakeGame/>} />
        <Route path='/tictactoe' element={<TicTacToe/>} />
      </Routes>
    </Router>
  );
};

export default App;
