import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../components/about';
import Projects from '../components/Projects';
import Contact from '../components/contact';
import Footer from '../components/Footer';
import { motion } from "framer-motion";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gray-100 text-black'>
      <Navbar />

      {/* Home Section */}
      <section id='home' className='p-10 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight"
        >
          Hi, I'm Paras 👋
        </motion.h1>
        <p className="text-xl text-gray-500 mt-4 max-w-xl mx-auto">
          I build interactive, accessible, and user-focused web applications.
        </p>

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
