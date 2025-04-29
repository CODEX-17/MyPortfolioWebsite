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

  const screenWidth = window.innerWidth


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
    <div className='nav-content'>
      <motion.img 
        src={imageIcon} 
        className='logo-img'
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
      
      <div className="d-flex align-items-center gap-lg-5 gap-md-3 position-relative">
    
          {
            screenWidth > 425 ?
              itemList.map((item, index) => {
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
            ) :
            <motion.button
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              }}
              whileHover={{
                opacity: 0.5,
                scale: 1,
              }}
              whileTap={{
                opacity: 0.5,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 300, 
                damping: 20
              }}  
              className='hamburgerIcon' 
              onClick={() => setIsShowSideBar(true)}
            >
              <TiThMenu size={20} color={themeColors.icon}/>
            </motion.button>
          }
          
          <motion.button
              initial={{
                opacity: 0,
                rotate: 120,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
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
                duration: 0.5,
                type: 'spring',
                stiffness: 300, 
                damping: 20
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
    </div>
  )
}

export default NavigationBar
