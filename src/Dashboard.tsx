import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import underConstructionAnimation from '../animations/under-construction.json'; // <- Make sure this path is correct

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-[#fafafa] flex flex-col items-center justify-center text-gray-900 p-8">
      {/* Funny animation */}
      <div className="w-72 mb-1 mix-blend-multiply opacity-90">
        <Lottie animationData={underConstructionAnimation} loop={true} />
      </div>

      <p className="mb-10 max-w-xs text-center text-gray-600 text-base leading-relaxed">
        Meanwhile, try some games!
      </p>

      {/* Game buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => navigate('/snake')}
          className="w-full border border-gray-300 rounded-md py-3 text-gray-900 font-medium text-base cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          Snakey
        </button>
        <button
          onClick={() => navigate('/tictactoe')}
          className="w-full border border-gray-300 rounded-md py-3 text-gray-900 font-medium text-base cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          Tic Tac Toe
        </button>
        <button
          onClick={() => navigate('/memorygame')}
          className="w-full border border-gray-300 rounded-md py-3 text-gray-900 font-medium text-base cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          Test your memory
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
