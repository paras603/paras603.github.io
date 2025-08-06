import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../sections/About';
import Project from '../sections/Project';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Hero from '../sections/Hero';
import Experience from '../sections/Experience';
import Skill from '../sections/Skill';
import Testimonial from '../sections/Testimonial';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gray-100 text-black'>
      <Navbar />
      <Hero/>
      <About />
      <Experience />
      <Skill /> 
      <Project />
      <Testimonial/>
      <Contact />

    </div>
  );
};

export default Dashboard;
