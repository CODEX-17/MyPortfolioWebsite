import React from 'react'
import './Footer.css'
import whiteLogo from '../../assets/images/rp-white.png'
import { COLORS } from '../../constants/colors'
import { MdOutlineCopyright } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = ({ 
    scrollToSection,
    sectionAboutRef,
    sectionProjectsRef,
    sectionHeroRef
 }) => {

  return (
    <div className='content-footer-section'>
        <div className="d-flex w-100 justify-content-between align-items-center pl-4 pr-4">
            <div 
                className="d-flex flex-column"
                onClick={() => window.location.href = 'https://github.com/CODEX-17/MyPortfolioWebsite.git'}
            >
                <img src={whiteLogo} alt="logo" />
                <motion.h3 
                    className='fs-6' 
                    style={{ userSelect: 'none', cursor: 'pointer' }}
                    initial={{ color: COLORS.white }}
                    whileHover={{ opacity: 0.5 }}
                    whileTap={{ opacity: 0.5 }}
                >Source Code <FaCode/>
                </motion.h3>
            </div>
            <div className="d-flex gap-4">
                <div className="d-flex flex-column">
                    <h1>Important Links</h1>
                    <p onClick={() => scrollToSection(sectionHeroRef, 'hero-section')}>Home</p>
                    <p onClick={() => scrollToSection(sectionProjectsRef, 'projects-section')}>Porjects</p>
                    <p onClick={() => scrollToSection(sectionAboutRef, 'about-section')}>About me</p>
                </div>
                <div className="d-flex flex-column">
                    <h1>Social</h1>
                    <p onClick={() => window.location.href = 'https://github.com/CODEX-17'}>Github</p>
                    <p onClick={() => window.location.href = 'https://www.facebook.com/rumar.pamparo'}>Facebook</p>
                    <p onClick={() => window.location.href = 'https://www.instagram.com/pamparorumar/'}>Instagram</p>
                </div>
            </div>
        </div>
        <div className='w-100 d-flex align-items-center justify-content-end'>
            <h3 className='fs-6'>
                <MdOutlineCopyright/>2025 Rumar Pamparo,All right reserved.
            </h3>            
        </div>
    </div>
  )
}

export default Footer
