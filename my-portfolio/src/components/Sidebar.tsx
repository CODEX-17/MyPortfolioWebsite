import React, { useContext } from 'react'
import { MdClose } from "react-icons/md";
import { motion } from "motion/react"
import './Sidebar.css'
import { ThemeContext } from '../../context/ThemeContext';
import { COLORS } from '../constants/colors';

const Sidebar = ({ 
    setIsShowSideBar,  
    scrollToSection,
    sectionAboutRef,
    sectionProjectsRef,
    sectionHeroRef,
    sectionContactRef
}) => {

 const { theme, handleTheme } = useContext(ThemeContext)
 const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light


  return (
    <motion.div
        className='sidebar'
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1,  x: 0}}
        exit={{ opacity: 0, x: -250, transition: { duration: 5000 } }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ backgroundColor: themeColors.background }}
    >
        <div className='d-flex alig-items-center justify-content-between p-4' style={{ color: themeColors.text }}>
            <div>
                <h1 className='fs-3'>Rumar Pamparo</h1>
                <p className='fs-6'>Navigation Links</p>
            </div>
            <div 
                className='closeBtn'
                style={{ borderColor: themeColors.text }}
                onClick={() => setIsShowSideBar(false)}           
            >
                <MdClose/>
            </div>
        </div>
        <div className='d-flex flex-column gap-3 p-4' style={{ color: themeColors.text }}>
            <motion.h1 
                initial={{ x: 0 }}
                whileTap={{ x: 10, opacity: 0.5 }}
                className='fs-6' onClick={() => scrollToSection(sectionHeroRef, 'hero-section')}
            >Home</motion.h1>
            <motion.h1 
                initial={{ x: 0 }}
                whileTap={{ x: 10, opacity: 0.5 }}
                className='fs-6' onClick={() => scrollToSection(sectionAboutRef, 'about-section')}
            >About Me</motion.h1>
            <motion.h1 
                initial={{ x: 0 }}
                whileTap={{ x: 10, opacity: 0.5 }}
                className='fs-6' onClick={() => scrollToSection(sectionProjectsRef, 'projects-section')}
            >Projects</motion.h1>
            <motion.h1 
                initial={{ x: 0 }}
                whileTap={{ x: 10, opacity: 0.5 }}
                className='fs-6' onClick={() => scrollToSection(sectionContactRef, 'contact-section')}
            >Contact Me</motion.h1>
        </div>
        
    </motion.div>
  )
}

export default Sidebar
