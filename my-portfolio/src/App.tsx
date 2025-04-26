import { useRef, useState, useEffect, useContext } from 'react';
import ClickSpark from './components/ClickSpark/ClickSpark';
import './App.css';
import { motion } from 'framer-motion';
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
import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { NavigationTypes } from './types/types';



function App() {

  const { theme, handleTheme } = useContext(ThemeContext)
  const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light

  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false)
  const [currentSection, setCurrentSection] = useState<NavigationTypes | null>('hero-section')

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
  const sectionHeroRef = useRef<any>(null)
  const sectionAboutRef = useRef<any>(null)
  const sectionProjectsRef = useRef<any>(null)
  const sectionContactRef = useRef<any>(null)

  const scrollToSection = (navigation: NavigationTypes) => {
    setIsShowSideBar(false)
    setCurrentSection(navigation)

    switch (navigation) {

      case 'hero-section':
        sectionHeroRef.current.scrollIntoView({ behavior: "smooth" })
      break
      
      case 'about-section':
        sectionAboutRef.current.scrollIntoView({ behavior: "smooth" })
      break

      case 'projects-section':
        sectionProjectsRef.current.scrollIntoView({ behavior: "smooth" })
      break

      case 'contact-section':
        sectionContactRef.current.scrollIntoView({ behavior: "smooth" })
      break

    }
    
  }


  return (
    <ClickSpark
      sparkColor={themeColors.background}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div 
        style={{ 
          backgroundColor: themeColors.background,
          height: '100%',
          width: '100%',
        }}
      >
        {
          isShowSideBar && 
          <div className="sidebar-menu">
            <Sidebar 
              setIsShowSideBar={setIsShowSideBar} 
              scrollToSection={scrollToSection}
            />
          </div>
          
        }

        <motion.nav
          className="nav h-20 px-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, backgroundColor: themeColors.background }}
          transition={{ duration: 0.5, ease: 'easeInOut', transition: 'opacity 0.3s ease' }}
          style={{ backgroundColor: themeColors.background }}
        >
         <NavigationBar 
          currentSection={currentSection} 
          scrollToSection={scrollToSection}
          setIsShowSideBar={setIsShowSideBar}
         />
        </motion.nav>
        

        <div className='content'>
          <motion.section 
            className='hero-section' 
            data-section="hero-section"
            ref={sectionHeroRef}
            style={{ backgroundColor: themeColors.background, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: themeColors.background }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            
          >
            <HeroPage heroRef={heroRef}/>
          </motion.section>

          <motion.section 
            className='about-section'
            data-section="about-section"
            ref={sectionAboutRef}
            style={{ backgroundColor: themeColors.background, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: themeColors.background }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            initial={{ opacity: 0, y: 200, backgroundColor: themeColors.background }}
            whileInView={{
              opacity: 1, 
              y: 0,
              transition: { duration: 1 }
            }}
          >
            <About aboutRef={aboutRef}/>
              
          </motion.section>

          <motion.section 
            className='projects-section' 
            data-section="projects-section"
            ref={sectionProjectsRef} 
            style={{ backgroundColor: themeColors.background, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: themeColors.background }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <Projects 
              projectsRef={projectsRef} 
            />
          </motion.section>

          <motion.section 
            className='tech-section'
            style={{ backgroundColor: themeColors.background, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: themeColors.background }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <Tech/>
          </motion.section>

          <motion.section 
            className='contact-section'
            ref={sectionContactRef}
            style={{ backgroundColor: themeColors.background, transition: 'opacity 0.3s ease' }}
            animate={{ backgroundColor: themeColors.background }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <Contact contactRef={contactRef} />
          </motion.section>

          <footer 
            className='footer' 
            style={{ backgroundColor: themeColors.green }}
          >
            <Footer scrollToSection={scrollToSection} />
          </footer>
        
        </div>
      </div>
    </ClickSpark>
  );
}

export default App;