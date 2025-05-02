import React, { useContext } from 'react'
import './Footer.css'
import { COLORS } from '../../constants/colors'
import { MdOutlineCopyright } from "react-icons/md";
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../context/ThemeContext';
import { socialMediaLinks } from '../../data/socialMediaLinks';

const Footer = () => {

  const { theme, handleTheme } = useContext(ThemeContext)
  const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light

  const links = socialMediaLinks()

  return (
    <div className='content-footer-section'>
        <div className="d-flex gap-2 align-items-center">
            {
              links.map((item, index) => (
                <motion.div
                  key={index} 
                  className='footer-icon' 
                  onClick={() => window.open(item.url, '_blank')}
                >
                  {item.icon('100%')}
                </motion.div>
                
              ))
            }
            
        </div>
        <h3 className='fs-6 mb-2' style={{color: themeColors.text}}>
            <MdOutlineCopyright/>2025 Rumar Pamparo.
        </h3> 
         
    </div>
  )
}

export default Footer
