import React from 'react'
import { MdClose } from "react-icons/md";
import { motion } from "motion/react"
import './Sidebar.css'

const Sidebar = ({ 
    setIsShowSideBar, 
    darkMode, 
    scrollToSection,
    sectionAboutRef,
    sectionProjectsRef,
    sectionHeroRef
}) => {
  return (
    <motion.div
        className='sidebar'
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1,  x: 0}}
        exit={{ opacity: 0, x: -250, transition: { duration: 5000 } }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ backgroundColor: darkMode ? '#171c22' : 'white'}}
    >
        <div className='d-flex alig-items-center justify-content-between p-4' style={{ color: !darkMode ? '#171c22' : 'white' }}>
            <div>
                <h1 className='fs-3'>Rumar Pamparo</h1>
                <p className='fs-6'>Navigation Links</p>
            </div>
            <div 
                className='closeBtn'
                style={{ border: darkMode ? '1px solid white' : '1px solid #171c22' }}
                onClick={() => setIsShowSideBar(false)}           
            >
                <MdClose/>
            </div>
        </div>
        <div className='d-flex flex-column gap-3 p-4' style={{ color: !darkMode ? '#171c22' : 'white' }}>
            <motion.h1 
                initial={{ x: 0 }}
                whileTap={{ x: 10, opacity: 0.5 }}
                className='fs-6' onClick={() => scrollToSection(sectionHeroRef, 'hero-page')}
            >Home</motion.h1>
            <motion.h1 
                initial={{ x: 0 }}
                whileTap={{ x: 10, opacity: 0.5 }}
                className='fs-6' onClick={() => scrollToSection(sectionAboutRef, 'about-page')}
            >About Me</motion.h1>
            <motion.h1 
                initial={{ x: 0 }}
                whileTap={{ x: 10, opacity: 0.5 }}
                className='fs-6' onClick={() => scrollToSection(sectionProjectsRef, 'projects-page')}
            >Projects</motion.h1>
            <motion.h1 
                initial={{ x: 0 }}
                whileTap={{ x: 10, opacity: 0.5 }}
                className='fs-6' onClick={() => scrollToSection(sectionProjectsRef, 'projects-page')}
            >Contact Me</motion.h1>
        </div>
        
    </motion.div>
  )
}

export default Sidebar
