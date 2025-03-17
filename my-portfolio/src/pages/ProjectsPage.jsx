import React, { useContext, useState } from 'react'
import './ProjectsPage.css'
import Footer from '../sections/Footer/Footer'
import { ThemeContext } from '../../context/ThemeContext'
import { COLORS } from '../constants/colors'
import { motion } from "framer-motion";
import { GoHomeFill } from "react-icons/go";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

const ProjectsPage = () => {

  const { theme, handleTheme } = useContext(ThemeContext)
  const darkMode = theme === 'dark' ? true : false 

  const [selected, setSelected] = useState('all')

  const menuItems = [
   'All',
   'Website',
   'Mobile'
  ]

  return (
    <motion.div 
      className='projects-content'
      style={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light, transition: 'opacity 0.3s ease' }}
      animate={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="container">
        <div className="header">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <GoHomeFill color={ darkMode ? COLORS.white : COLORS.dark } size={25}/>
            <h3 style={{ color: darkMode ? COLORS.white : COLORS.dark }}>My Projects</h3>
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
          
          <div 
            className='menu-list'
            style={{ color: darkMode ? COLORS.white : COLORS.dark }}
          >
            {menuItems.map((item) => (
              <div key={item} className="menu-item" onClick={() => setSelected(item)}>
                <p 
                  className={selected === item ? "active" : ""}
                  style={{ color: 
                    selected === item ? 
                      (darkMode ? COLORS.white : COLORS.dark) : (
                        'gray'
                      )}}
                >{item}</p>
                {selected === item && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: darkMode ? COLORS.white : COLORS.dark }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
  
        <div className='projects-card-list'>

          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>


        </div>
   
      </div>
      <footer style={{ backgroundColor: darkMode ? COLORS.green : COLORS.darkGreen }}>
        <Footer darkMode={darkMode}/>
      </footer>
    </motion.div>
  )
}

export default ProjectsPage
