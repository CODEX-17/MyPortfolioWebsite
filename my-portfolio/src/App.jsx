import { useState } from 'react';
import rumar from './assets/images/rumar.png';
import './App.css';
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='body'>
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="logo">Logo</div>
      </motion.header>

      <section className='hero-page'>
        <div className='container d-flex'>
          <div className='left-side-hero'>
            <h2>Hi!, I'm</h2>
            <h1>Rumar Pamparo</h1>
            <p>A Website Developer specialized in Front-End.</p>
            <button className='download-btn'>
              <HiOutlineDownload size={15} /> Download CV
            </button>
          </div>
          <div className='right-side-hero'>
            <img src={rumar} alt="Rumar Pamparo" className="profile-img" />
          </div>
        </div>
      </section>

      <section className='section'>
          Section 1 content
      </section>

      <section className='section bg-primary'>
          Section 2 content
      </section>
    </div>
  );
}

export default App;
