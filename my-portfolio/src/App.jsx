import { useRef, useState, useEffect, useContext } from 'react';

import logoDefault from './assets/images/rp.png'
import logoWhite from './assets/images/rp-white.png'
import './App.css';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaReact, 
  FaFacebook,
} from "react-icons/fa";

import { IoMdSunny } from "react-icons/io";
import { MdDarkMode, MdBuildCircle } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Sidebar from './components/Sidebar';
import samplePic from './assets/images/bg.jpg'

import { useInView } from "react-intersection-observer";
import { ThemeContext } from '../context/ThemeContext';
import { COLORS } from './constants/colors';
import HeroPage from './sections/Hero/HeroPage';
import About from './sections/About/About';




function App() {

  const { theme, setTheme } = useContext(ThemeContext)

  const darkMode = theme === 'dark' ? true : false

  const [isShowSideBar, setIsShowSideBar] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero-page')

  const options = {
    threshold: 0.3, // Section should be at least 30% visible to trigger
  }

  const { ref: heroRef, inView: heroInView } = useInView(options)
  const { ref: aboutRef, inView: aboutInView } = useInView(options)
  const { ref: projectsRef, inView: projectsInView } = useInView(options)

  useEffect(() => {
    if (heroInView) setCurrentSection('hero-page')
    else if (aboutInView) setCurrentSection('about-page')
    else if (projectsInView) setCurrentSection('projects-page')
  },[heroInView, aboutInView, projectsInView])

  //Section Scroll
  const sectionHeroRef = useRef(null)
  const sectionAboutRef = useRef(null)
  const sectionProjectsRef = useRef(null)

  const scrollToSection = (sectionRef, data) => {
    setCurrentSection(data)
    sectionRef.current.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <div className='body' style={{ backgroundColor: darkMode ? '#171c22' : '#f5f5f5' }}>
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
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ backgroundColor: 'transparent' }}
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
      
            <button 
              className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}
              style={{ backgroundColor: currentSection === 'hero-page' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
              onClick={() => scrollToSection(sectionHeroRef, 'hero-page')}
            >Home
            </button>

            <button 
              className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}
              style={{ backgroundColor: currentSection === 'about-page' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
              onClick={() => scrollToSection(sectionAboutRef, 'about-page')}
            >About Me
            </button>

            <button 
              className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}
              style={{ backgroundColor: currentSection === 'projects-page' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
              onClick={() => scrollToSection(sectionProjectsRef,'projects-page')}
            >Projects
            </button>

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
              initial={{
                opacity: 0,
                rotate: 120,
              }}
              animate={{
                opacity: 1,
                rotate: 300,
                transition: { duration: 1 },
              }}
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
              onClick={() => setTheme((data) => data === 'dark' ? 'light' : 'dark')}
              > 
            {
              darkMode ? 
              <IoMdSunny className={darkMode ? 'dark-mode-icon' : 'light-mode-icon'} size={25} title='light mode'/> :
              <MdDarkMode className={darkMode ? 'dark-mode-icon' : 'light-mode-icon'} size={25} title='dark mode'/>
            }
          </motion.button>
        </div>
      </motion.header>

      <motion.section 
        className='hero-page' 
        data-section="hero-page"
        ref={sectionHeroRef}
        style={{ backgroundColor: darkMode ? '#171c22' : '#f5f5f5', transition: 'opacity 0.3s ease' }}
        animate={{ backgroundColor: darkMode ? '#171c22' : '#f5f5f5' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        
      >
        <HeroPage
          heroRef={heroRef}
          darkMode={darkMode}
        />
      </motion.section>

      <motion.section 
        className='about-page'
        data-section="about-page"
        ref={sectionAboutRef}
        style={{ backgroundColor: darkMode ? '#171c22' : '#f5f5f5' }}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1, 
          y: 0,
          transition: { duration: 1 }
        }}
      >
        <About
          aboutRef={aboutRef}
          darkMode={darkMode}
        />
          
      </motion.section>

      <motion.section 
        className='projects-page' 
        data-section="projects-page"
        ref={sectionProjectsRef} 
        style={{ backgroundColor: darkMode ? '#171c22' : 'white', transition: 'opacity 0.3s ease' }}
        animate={{ backgroundColor: darkMode ? '#171c22' : '#ffffff' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }} 
      >
        <div className='content-projects-page' ref={projectsRef}>
          <div className='head-project-page'>
            <h1 className='title'>My Projects.</h1>
          </div>
          <div className='body-project-page'>
            <div className='projects-card-list'>
              <div className='projects-card'>
                <div className='projects-card-head'>
                  <h3>E-SchoolApp</h3>
                  <p>(Web Application)</p>
                </div>
                <img src={samplePic} alt="thumbnail" className='projects-card-thumbnail'/>
                <div className='projects-card-details'>
                  <div className='projects-card-technology-list'>
                    <div className='technology-card'>
                      <FaReact/>
                      React
                    </div>
                    <div className='technology-card'>
                      <FaReact/>
                      React
                    </div>
                  </div>
                  <div className='projects-card-description'>
                    <div className='d-flex flex-column'>
                      <b>Description:</b>
                      <p> A web application that communication and collaboration platform for student and teacher.</p>
                    </div>
                    <div className='d-flex flex-column'>
                      <b>Key Features:</b>
                      <p>Create Classes, Posting of assignments and Activities, Posting of learning materials,  Create Quiz, Real-time Chat.</p>
                    </div>
                  </div>
                  <div className='d-flex w-100 mt-2'>
                    <button>Repository</button>
                  </div>
                </div>
              </div>

              <div className='projects-card'>
                <div className='projects-card-head'>
                  <h3>E-SchoolApp</h3>
                  <p>(Web Application)</p>
                </div>
                <img src={samplePic} alt="thumbnail" className='projects-card-thumbnail'/>
                <div className='projects-card-details'>
                  <div className='projects-card-technology-list'>
                    <div className='technology-card'>
                      <FaReact/>
                      React
                    </div>
                    <div className='technology-card'>
                      <FaReact/>
                      React
                    </div>
                  </div>
                  <div className='projects-card-description'>
                    <div className='d-flex flex-column'>
                      <b>Description:</b>
                      <p> A web application that communication and collaboration platform for student and teacher.</p>
                    </div>
                    <div className='d-flex flex-column'>
                      <b>Key Features:</b>
                      <p>Create Classes, Posting of assignments and Activities, Posting of learning materials,  Create Quiz, Real-time Chat.</p>
                    </div>
                  </div>
                  <div className='d-flex w-100 mt-2'>
                    <button>Repository</button>
                  </div>
                </div>
              </div>

              <div className='projects-card'>
                <div className='projects-card-head'>
                  <h3>E-SchoolApp</h3>
                  <p>(Web Application)</p>
                </div>
                <img src={samplePic} alt="thumbnail" className='projects-card-thumbnail'/>
                <div className='projects-card-details'>
                  <div className='projects-card-technology-list'>
                    <div className='technology-card'>
                      <FaReact/>
                      React
                    </div>
                    <div className='technology-card'>
                      <FaReact/>
                      React
                    </div>
                  </div>
                  <div className='projects-card-description'>
                    <div className='d-flex flex-column'>
                      <b>Description:</b>
                      <p> A web application that communication and collaboration platform for student and teacher.</p>
                    </div>
                    <div className='d-flex flex-column'>
                      <b>Key Features:</b>
                      <p>Create Classes, Posting of assignments and Activities, Posting of learning materials,  Create Quiz, Real-time Chat.</p>
                    </div>
                  </div>
                  <div className='d-flex w-100 mt-2'>
                    <button>Repository</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;
