import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../components/about';
import Projects from '../components/Projects';
import Contact from '../components/contact';
import Footer from '../components/Footer';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gray-100 text-black'>
      <Navbar />

      {/* Home Section */}
      <section id='home' className='p-10 text-center'>
        <h1 className='text-4xl font-bold mb-4'>welcome to my portfolio</h1>
        <p className='text-lg'>This is the begining of something awesome</p>
      </section>

      {/* About Section */}
      <About />

      {/* Project section */}
      <Projects />

      {/* contact section */}
      <Contact />

      {/* footer serction */}
      <Footer />
    </div>
  );
};

export default Dashboard;
