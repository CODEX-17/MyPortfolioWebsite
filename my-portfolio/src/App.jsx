import { useRef, useState, useEffect, useContext } from 'react';
import rumar from './assets/images/rumar-green-bg.png';
import logoDefault from './assets/images/rp.png'
import logoWhite from './assets/images/rp-white.png'
import './App.css';
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaReact, 
  FaFacebook,

} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode, MdBuildCircle } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Sidebar from './components/Sidebar';
import samplePic from './assets/images/bg.jpg'

import { useInView } from "react-intersection-observer";
import { ThemeContext } from '../context/ThemeContext';
import { COLORS } from './constants/colors';


function App() {

  const { theme, setTheme } = useContext(ThemeContext)

  const darkMode = theme === 'dark' ? true : false

  const [isShowSideBar, setIsShowSideBar] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero-page')


  const { ref, inView} = useInView({
    triggerOnce: false, // Ensures animation triggers only once
    threshold: 0.2, // Adjust when the animation starts (0 = as soon as visible)
  })

  //Section Scroll
  const sectionHeroRef = useRef(null)
  const sectionAboutRef = useRef(null)
  const sectionProjectsRef = useRef(null)

  const scrollToSection = (sectionRef) => {
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
              onClick={() => {scrollToSection(sectionHeroRef), setCurrentSection('hero-page')}}
            >Home
            </button>

            <button 
              className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}
              style={{ backgroundColor: currentSection === 'about-page' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
              onClick={() => {scrollToSection(sectionAboutRef), setCurrentSection('about-page')}}
            >About Me
            </button>

            <button 
              className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}
              style={{ backgroundColor: currentSection === 'projects-page' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
              onClick={() => {scrollToSection(sectionProjectsRef), setCurrentSection('projects-page')}}
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
        <div className='content-hero-page'>
          <div className='container d-flex' id='content-hero-page' style={{ height: '90%', backgroundColor: 'transparent' }}>
            <div 
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
              <button style={{ color: darkMode ? '#171c22' : 'white' }}>
                <motion.div
                  initial={{ y: -5 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  style={{ display: "inline-block" }} // Ensures the icon animates properly
                >
                  <HiOutlineDownload size={15} />
                </motion.div>
                {" "}Download CV
              </button>
              <div className='d-flex gap-2 mt-5'>
                <motion.div
                  initial={{ rotate: 120 }}
                  animate={{
                    type: "spring",
                    stiffness: 200,
                    rotate: 0,
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
                    duration: 1,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 200,
                  }} 
                >
                  <FaGithub color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'}/>
                </motion.div>
                
                <motion.div
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
                  <FaFacebook color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
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
                  <IoLogoLinkedin color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
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
                  <FaSquareInstagram color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
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
                  <BsTelegram color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>
              </div>
            </div>
            <div className='right-side-hero'>
              <motion.img
              src={rumar}
                alt="Rumar Pamparo" 
                className="profile-img"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
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
        </div>
      </motion.section>

      <motion.section 
        className='about-page'
        data-section="about-page"
        ref={ref}
        style={{ backgroundColor: darkMode ? '#171c22' : '#f5f5f5' }}
        initial={{ opacity: 0, y: 200 }} // Initial state (hidden)
        whileInView={{
          opacity: 1, 
          y: 0,
          transition: { duration: 1 }
        }}
      >
        <div className='content-about-page'>

          <div className='content-about-page-head'>
            <motion.h1 
              initial={{ opacity: 0, x: -200 }} 
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} 
              className='title'
            >About me.</motion.h1>
            <motion.h1 
              initial={{ opacity: 0, x: 200 }} 
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} 
              className='title'
              style={{ color: theme === 'dark' ? COLORS.dark : '#fff' }}
            >"Love what you do,<b>live what you love.</b>"</motion.h1>
          </div>

          <div className='content-about-page-body'> 

            <div className='content-about-page-container'>
              <img src={!darkMode ? logoDefault : logoWhite} alt="logo"/>
            </div>

            <div className='content-about-page-container' >
              <p style={{ color: darkMode ? 'white' : '#171c22' }}><b>Hello!</b> I'm a recent graduate with a passion for building and designing web applications and a growing interest in mobile app development.
                I also enjoy exploring the creative side of graphic design, merging functionality with visual appeal to create engaging, user-friendly digital experiences.
                Eager to dive into new challenges and expand my skill set, I'm always ready to bring ideas to life.</p>
            </div>

            <div className='content-about-page-container'>

              <h3>What I Do?</h3>
              <div className='about-card-list'>
                <div className='about-card'>
                  <MdBuildCircle size={50}/>
                  <div className='d-flex flex-column'>
                    <h4 className='mt-4'>Web Developer</h4>
                    <p style={{ color: darkMode ? 'white' : '#171c22' }}>Landing page, Management Sytems,
                    Capstone Projects </p>
                  </div>
                </div>
                <div className='about-card'>
                  <MdBuildCircle size={50}/>
                  <div className='d-flex flex-column'>
                    <h4 className='mt-4'>Web Developer</h4>
                    <p style={{ color: darkMode ? 'white' : '#171c22' }}>Landing page, Management Sytems,
                    Capstone Projects </p>
                  </div>
                </div>
                <div className='about-card'>
                  <MdBuildCircle size={50}/>
                  <div className='d-flex flex-column'>
                    <h4 className='mt-4'>Web Developer</h4>
                    <p style={{ color: darkMode ? 'white' : '#171c22' }}>Landing page, Management Sytems,
                    Capstone Projects </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
      </motion.section>

      <motion.section 
        className='projects-page' 
        data-section="projects-page"
        ref={sectionProjectsRef} 
        style={{ backgroundColor: darkMode ? '#171c22' : 'white', transition: 'opacity 0.3s ease' }}
        animate={{ backgroundColor: darkMode ? '#171c22' : '#ffffff' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }} 
      >
        <div className='content-projects-page'>
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
