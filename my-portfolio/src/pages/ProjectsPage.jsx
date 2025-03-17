import React, { useContext } from 'react'
import './ProjectsPage.css'
import Footer from '../sections/Footer/Footer'
import { ThemeContext } from '../../context/ThemeContext'
import { COLORS } from '../constants/colors'


const ProjectsPage = () => {

  const { theme } = useContext(ThemeContext)
  const darkMode = theme === 'dark' ? true : false 

  return (
    <div 
      className='projects-content'
      style={{ backgroundColor: darkMode ? COLORS.dark : COLORS.light }}
    >
      <div className="container h-100">
        <div className="header">
          <h3 style={{ color: darkMode ? COLORS.white : COLORS.dark }}>My Projects</h3>
        </div>
        <div className='projects-card-list'>
          <div className="card">
            <h4>E-SchoolApp</h4>
          </div>
        </div>
      </div>
      <footer style={{ backgroundColor: darkMode ? COLORS.green : COLORS.darkGreen }}>
        <Footer darkMode={darkMode}/>
      </footer>
    </div>
  )
}

export default ProjectsPage
