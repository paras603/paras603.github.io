import { Routes, Route } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import Dashboard from './pages/Dashboard';
import AllProjects from './pages/AllProjects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<><Dashboard/><Footer/></>} />
      <Route path='/projects' element={ <><AllProjects /><Footer/></>  } />
      <Route path="/projects/:slug" element={<> <ProjectDetail/> <Footer /></>} />
    </Routes>
  );
};

export default App;
