import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { motion } from 'framer-motion'
import { COLORS } from '../../constants/colors'
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { NavigationTypes } from '../../types/types';
import { images } from '../../assets/imagePath';
import './NavigationBar.css'

const NavigationBar = ({ currentSection, scrollToSection, setIsShowSideBar }) => {

  const { theme, handleTheme } = useContext(ThemeContext)
  const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light
  const imageIcon = theme === 'dark' ? images.logoWhite : images.logoDefault
  interface ItemsInterface {
    name: string,
    value: NavigationTypes,
  }

  const itemList: ItemsInterface[] = [
    {
      name: 'Home',
      value: 'hero-section',
    },
    {
      name: 'About Me',
      value: 'about-section',
    },
    {
      name: 'Projects',
      value: 'projects-section',
    },
    {
      name: 'Contact Me',
      value: 'contact-section',
    },
  ]


  return (
    <>
      <motion.img 
        src={imageIcon} 
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
    
          {itemList.map((item, index) => {
              const isActive = item.value === currentSection
              return(
                <button 
                  key={index}
                  className='navigation-button'
                  style={{ 
                    backgroundColor: isActive ? 'rgba(128, 128, 128, 0.100)' : '', border: 'none',
                    color: themeColors.text,
                  }}
                  onClick={() => scrollToSection(item.value)}
                >{item.name}</button>
              )
            }
          )}

          <button 
            className='hamburgerIcon' 
            onClick={() => setIsShowSideBar(true)}
            
          >
            <TiThMenu size={20} color={themeColors.background}/>
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
              theme === 'dark' ? 
              <IoMdSunny color={themeColors.icon} size={25} title='light mode'/> :
              <MdDarkMode color={themeColors.icon} size={25} title='dark mode'/>
            }
          </motion.button>

      </div>
    </>
  )
}

export default NavigationBar
