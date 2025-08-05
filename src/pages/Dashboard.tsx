import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Hero from '../sections/Hero';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gray-100 text-black'>
      <Navbar />

      <Hero/>


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
