import { useState } from 'react';
import rumar from './assets/images/rumar-green-bg.png';
import logoDefault from './assets/images/rp.png'
import logoWhite from './assets/images/rp-white.png'
import './App.css';
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import Email from './components/email';
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Sidebar from './components/Sidebar';

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [isShowSideBar, setIsShowSideBar] = useState(false)


  return (
    <div className='body' style={{ backgroundColor: darkMode ? '#171c22' : '#ffffff' }}>
      {
        isShowSideBar && 
        <Sidebar 
          setIsShowSideBar={setIsShowSideBar} 
          darkMode={darkMode}
        />
      }
      

      <motion.header
        className="header h-20 px-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, backgroundColor: darkMode ? '#171c22' : 'white'}}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <motion.img 
          src={darkMode ? logoWhite : logoDefault} 
          alt="Logo"  
          width={50}
          whileHover={{
            scale: 1.2,
            rotateX: 15,
            rotateY: 15,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.9, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 0.2 }}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        />
        
        <div className="logo d-flex align-items-center gap-5">
      
            <button className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}>Home</button>
            <button className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}>About Me</button>
            <button className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}>Projects</button>
            <button className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}>Contact Me</button>
    
            <motion.button 
              className='hamburgerIcon' 
              onClick={() => setIsShowSideBar(true)}
              whileHover={{
                opacity: 0.5,
                rotate: 120,
              }}
              whileTap={{
                opacity: 0.5,
                rotate: 120,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }} 
            >
              <TiThMenu size={20} color={darkMode ? 'white' : '#171c22'}/>
            </motion.button>
          
          <motion.button 
              whileHover={{
                opacity: 0.5,
                rotate: 120,
              }}
              whileTap={{
                opacity: 0.5,
                rotate: 120,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }} 
              style={{ backgroundColor: 'transparent' }}
              onClick={() => setDarkMode(!darkMode)}
              > 
            {
              darkMode ? 
              <IoMdSunny className={darkMode ? 'dark-mode-icon' : 'light-mode-icon'} size={25} title='light mode'/> :
              <MdDarkMode className={darkMode ? 'dark-mode-icon' : 'light-mode-icon'} size={25} title='dark mode'/>
            }
          </motion.button>
        </div>
      </motion.header>

      <section className='hero-page' style={{ transition: 'opacity 0.3s ease' }}>
        <motion.div 
          className='content-hero-page' 
          style={{ backgroundColor: darkMode ? '#171c22' : 'white' }}
          animate={{ backgroundColor: darkMode ? '#171c22' : '#ffffff' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='container d-flex' id='content-hero-page' style={{ height: '90%', backgroundColor: 'transparent' }}>
            <motion.div 
              className='left-side-hero'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <h2 className='fs-3' style={{ color: !darkMode ? '#171c22' : 'white' }} ><b>Hi!</b>, I'm</h2>
              <h1 className='fs-1'>Rumar Pamparo</h1>
              <p style={{ color: !darkMode ? '#171c22' : 'white' }} className='fs-6'>A fresh graduate and <b>Fullstack Web Developer</b> based in the Philippines. I have a passion for building web applications, freelancing, and solving complex problems as I grow in my career.</p>
              <button className='download-btn'>
                <HiOutlineDownload size={15} /> Download CV
              </button>
              <div className='d-flex gap-2 mt-5'>
                <motion.div
                   whileHover={{
                    opacity: 0.5,
                    rotate: 120,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }} 
                >
                  <FaGithub color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'}/>
                </motion.div>
                
                <motion.div
                   whileHover={{
                    opacity: 0.5,
                    rotate: 120,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }} 
                >
                  <FaFacebook color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
                   whileHover={{
                    opacity: 0.5,
                    rotate: 120,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }} 
                >
                  <IoLogoLinkedin color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
                   whileHover={{
                    opacity: 0.5,
                    rotate: 120,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }} 
                >
                  <FaSquareInstagram color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
                   whileHover={{
                    opacity: 0.5,
                    rotate: 120,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }} 
                >
                  <BsTelegram color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>
              </div>
              
            </motion.div>
            <div className='right-side-hero'>
              <motion.img
              src={rumar}
                alt="Rumar Pamparo" 
                className="profile-img"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className='project-page'>
        <div className='content-project-page'>
          <div className='container'>
            <div className='d-flex align-items-center justify-content-center pt-5'>
              <h1 className='title'>PROJECTS</h1>
              {/* <Email/> */}
            </div>
          </div>
        </div>
          
      </section>

      <section className='section bg-primary'>
          Section 2 content
      </section>
    </div>
  );
}

export default App;
