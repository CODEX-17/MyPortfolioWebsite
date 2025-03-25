import { useRef, useState, useEffect, useContext } from 'react';
import ClickSpark from './components/ClickSpark/ClickSpark';
import logoDefault from './assets/images/rp.png'
import logoWhite from './assets/images/rp-white.png'
import './App.css';
import { motion } from 'framer-motion';
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode, MdBuildCircle } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Sidebar from './components/Sidebar';
import { useInView } from "react-intersection-observer";
import { ThemeContext } from '../context/ThemeContext';
import HeroPage from './sections/Hero/HeroPage';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Tech from './sections/Technologies/Tech';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { COLORS } from './constants/colors';
import Squares from './components/Squares/Squares';


function App() {

  const { theme, handleTheme } = useContext(ThemeContext)
  const darkMode = theme === 'dark' ? true : false

  const [isShowSideBar, setIsShowSideBar] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero-section')

  const options = {
    threshold: 0.3, // Section should be at least 30% visible to trigger
  }

  const { ref: heroRef, inView: heroInView } = useInView(options)
  const { ref: aboutRef, inView: aboutInView } = useInView(options)
  const { ref: projectsRef, inView: projectsInView } = useInView(options)
  const { ref: contactRef, inView: contactInView } = useInView(options)

  useEffect(() => {
    if (heroInView) setCurrentSection('hero-section')
    else if (aboutInView) setCurrentSection('about-section')
    else if (projectsInView) setCurrentSection('projects-section')
    else if (contactInView) setCurrentSection('contact-section')
  },[heroInView, aboutInView, projectsInView, contactInView])

  //Section Scroll
  const sectionHeroRef = useRef(null)
  const sectionAboutRef = useRef(null)
  const sectionProjectsRef = useRef(null)
  const sectionContactRef = useRef(null)

  const scrollToSection = (sectionRef, data) => {
    setIsShowSideBar(false)
    setCurrentSection(data)
    sectionRef.current.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <ClickSpark
      sparkColor={ darkMode ? COLORS.white : COLORS.dark }
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div 
        style={{ 
          backgroundColor: darkMode ? COLORS.dark : COLORS.light, 
          height: '100%',
          width: '100%',
        }}
      >
        {
          isShowSideBar && 
          <div className="sidebar-menu">
            <Sidebar 
              setIsShowSideBar={setIsShowSideBar} 
              darkMode={darkMode}
              scrollToSection={scrollToSection}
              sectionHeroRef={sectionHeroRef}
              sectionAboutRef={sectionAboutRef}
              sectionProjectsRef={sectionProjectsRef}
              sectionContactRef={sectionContactRef}
            />
          </div>
          
        }

        <motion.nav
          className="nav h-20 px-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
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
                style={{ backgroundColor: currentSection === 'hero-section' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
                onClick={() => scrollToSection(sectionHeroRef, 'hero-section')}
              >Home
              </button>

              <button 
                className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}
                style={{ backgroundColor: currentSection === 'about-section' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
                onClick={() => scrollToSection(sectionAboutRef, 'about-section')}
              >About Me
              </button>

              <button 
                className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}
                style={{ backgroundColor: currentSection === 'projects-section' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
                onClick={() => scrollToSection(sectionProjectsRef,'projects-section')}
              >Projects
              </button>

              <button 
                className={darkMode ? 'dark-mode-navigation-button' : 'light-mode-navigation-button'}
                style={{ backgroundColor: currentSection === 'contact-section' ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none'}}
                onClick={() => scrollToSection(sectionContactRef,'contact-section')}
              >Contact Me</button>
      
              <button 
                className='hamburgerIcon' 
                onClick={() => setIsShowSideBar(true)}
                
              >
                <TiThMenu size={20} color={darkMode ? 'white' : COLORS.dark}/>
              </button>
            
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
                onClick={() => handleTheme(theme === 'dark' ? 'light' : 'dark')}
                > 
              {
                darkMode ? 
                <IoMdSunny className={darkMode ? 'dark-mode-icon' : 'light-mode-icon'} size={25} title='light mode'/> :
                <MdDarkMode className={darkMode ? 'dark-mode-icon' : 'light-mode-icon'} size={25} title='dark mode'/>
              }
            </motion.button>
          </div>
        </motion.nav>
        

        <div 
          className='content' 
        >

          <motion.section 
            className='hero-section' 
            data-section="hero-section"
            ref={sectionHeroRef}
            style={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            
          >
            <HeroPage
              heroRef={heroRef}
              darkMode={darkMode}
            />
          </motion.section>

          <motion.section 
            className='about-section'
            data-section="about-section"
            ref={sectionAboutRef}
            style={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            initial={{ opacity: 0, y: 200, backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
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
            className='projects-section' 
            data-section="projects-section"
            ref={sectionProjectsRef} 
            style={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <Projects 
              projectsRef={projectsRef} 
              darkMode={darkMode}
            />
          </motion.section>

          <motion.section 
            className='tech-section'
            style={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <Tech
              darkMode={darkMode}
            />
          </motion.section>

          <motion.section 
            className='contact-section'
            ref={sectionContactRef}
            style={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <Contact
              contactRef={contactRef}
              darkMode={darkMode}
            />
          </motion.section>

          <footer 
            className='footer' 
            style={{ backgroundColor: darkMode ? COLORS.green : COLORS.darkGreen }}
          >
            <Footer
              darkMode={darkMode}
              scrollToSection={scrollToSection}
              sectionHeroRef={sectionHeroRef}
              sectionAboutRef={sectionAboutRef}
              sectionProjectsRef={sectionProjectsRef}
            />
          </footer>
        
        </div>
      </div>
    </ClickSpark>
  );
}

export default App;