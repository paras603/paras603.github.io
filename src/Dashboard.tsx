import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[#f5f5f5] flex flex-col items-center justify-center text-gray-900 p-8">
      <h1 className="text-3xl font-medium mb-4">Under Construction</h1>
      <p className="mb-8 text-base max-w-sm text-center">
        This dashboard is coming soon. Meanwhile, try the Snake Game!
      </p>
      <button
        onClick={() => navigate('/game')}
        className="border border-gray-700 text-gray-900 px-8 py-2 rounded hover:bg-gray-200 transition-colors text-sm font-semibold"
      >
        Play Snake Game
      </button>
    </div>
  );
};

export default Dashboard;
