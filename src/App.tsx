import { Routes, Route } from 'react-router-dom';
import ThankYou from './pages/ThankYou';
import ProjectDetail from './pages/ProjectDetail';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default App;
