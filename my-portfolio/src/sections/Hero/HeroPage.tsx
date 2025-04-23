import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { HiOutlineDownload } from "react-icons/hi";
import { 
    FaGithub, 
    FaFacebook,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import './HeroPage.css'
import { COLORS } from '../../constants/colors';
import ClickSpark from '../../components/ClickSpark/ClickSpark';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import { images } from '../../assets/imagePath';

const HeroPage = ({ heroRef }) => {

  const navigate = useNavigate()
  
  const { theme, handleTheme } = useContext(ThemeContext)
  const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light

  return (
    <ClickSpark
      sparkColor={ themeColors.background }
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className='content-hero-section' ref={heroRef}>
        <div 
          className='container d-flex align-items-center row' 
          id='content-hero-section' 
          style={{ height: '90%', backgroundColor: 'transparent' }}
        >
          <motion.div 
            className='left-side-hero col-md-7 col-sm-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <motion.h2 
              className='fs-3' 
              style={{ color: themeColors.text }} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            ><b>Hi!</b>, I'm</motion.h2>
            <h1 
              className='fs-1'
              style={{ color: themeColors.green }}
            >Rumar Pamparo</h1>

            <motion.p 
              style={{ color: themeColors.text }} 
              className='fs-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >A fresh graduate and <b>Fullstack Web Developer</b> based in the Philippines. I have a passion for building web applications, freelancing, and solving complex problems as I grow in my career.</motion.p>
            
            <button 
              style={{ 
                color: themeColors.background,
                backgroundColor: themeColors.green 
              }}
              onClick={() => window.open('/assets/resume/resume.pdf', '_blank')}
            >
              <motion.div
                initial={{ y: -5 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ display: "inline-block" }}
              >
                <HiOutlineDownload size={15} />
              </motion.div>
              {" "}Download CV
            </button>
            
            <div className='d-flex gap-2 mt-5'>
              <motion.div
                initial={{ rotate: 120 }}
                whileInView={{ 
                  type: "spring",
                  rotate: 0,
                  transition: {
                    delay: 0.2,
                    duration: 1,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 200,
                  }
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
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 200,
                }} 
                onClick={() => window.location.href = 'https://github.com/CODEX-17'}
              >
                <FaGithub color={themeColors.icon} size={25} cursor={'pointer'}/>
              </motion.div>
              
              <motion.div
              initial={{ rotate: 120 }}
              whileInView={{
                type: "spring",
                rotate: 0,
                transition: {
                  delay: 0.4,
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 200,
                }
              }}
              whileHover={{
                opacity: 0.2,
                rotate: 120,
              }}
              whileTap={{
                opacity: 0.5,
                rotate: 120,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
              }} 
              onClick={() => window.location.href = 'https://www.facebook.com/rumar.pamparo'}
              >
                <FaFacebook color={themeColors.icon} size={25} cursor={'pointer'} />
              </motion.div>

              <motion.div
                initial={{ rotate: 120 }}
                whileInView={{
                  type: "spring",
                  rotate: 0,
                  transition: {
                    delay: 0.6,
                    duration: 1,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 200,
                  }
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
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 200,
                }} 
                onClick={() => window.location.href = 'https://www.linkedin.com/in/rumar-pamparo-7613352b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=IwZXh0bgNhZW0CMTEAAR2gj4Gj5ofRHOjb2eb0RpvqPQs7p_hVh1eNUezI3fZzYW-DgZ34skAFIHw_aem_l79Dba71O87htwEywkKSJA'}
              >
                <IoLogoLinkedin color={themeColors.icon} size={25} cursor={'pointer'} />
              </motion.div>

              <motion.div
                initial={{ rotate: 120 }}
                whileInView={{
                  type: "spring",
                  rotate: 0,
                  transition: {
                    delay: 0.8,
                    duration: 1,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 200,
                  }
                }}
                whileHover={{
                  opacity: 0.5,
                  rotate: 120,
                }}
                whileTap={{
                  opacity: 0.5,
                  rotate: 120,
                }}
                onClick={() => window.location.href = 'https://www.instagram.com/pamparorumar/'}
              >
                <FaSquareInstagram color={themeColors.icon} size={25} cursor={'pointer'} />
              </motion.div>

              <motion.div
                initial={{ rotate: 120 }}
                whileInView={{
                  type: "spring",
                  rotate: 0,
                  transition: {
                    delay: 1,
                    duration: 1,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 200,
                  }
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
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 200,
                }} 
                onClick={() => window.location.href = 'https://t.me/C_0_D_3_X'}
              >

                <BsTelegram color={themeColors.icon} size={25} cursor={'pointer'} />
              </motion.div>
            </div>
          </motion.div>
          <div className='right-side-hero col-md-5 col-sm-12 '>

            <motion.img
              src={images.rumarPicture}
              alt="Rumar Pamparo" 
              className="profile-img"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            />
          </div>
        </div>
      </div>
    </ClickSpark>
  )
}

export default HeroPage

