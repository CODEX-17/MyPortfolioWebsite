import React from 'react'
import { delay, motion } from 'framer-motion';
import { HiOutlineDownload } from "react-icons/hi";
import { 
    FaGithub, 
    FaFacebook,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import rumar from '../../assets/images/rumar-green-bg.png';
import './HeroPage.css'

const HeroPage = ({ heroRef, darkMode }) => {

  return (
    <div className='content-hero-page' ref={heroRef}>
      <div className='container d-flex align-items-center row' id='content-hero-page' style={{ height: '90%', backgroundColor: 'transparent' }}>
        <div 
          className='left-side-hero col-md-7'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <motion.h2 
            className='fs-3' 
            style={{ color: !darkMode ? '#171c22' : 'white' }} 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          ><b>Hi!</b>, I'm</motion.h2>
          <h1 className='fs-1'>Rumar Pamparo</h1>
          <motion.p 
            style={{ color: !darkMode ? '#171c22' : 'white' }} 
            className='fs-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >A fresh graduate and <b>Fullstack Web Developer</b> based in the Philippines. I have a passion for building web applications, freelancing, and solving complex problems as I grow in my career.</motion.p>
          
          <button style={{ color: darkMode ? '#171c22' : 'white' }}>
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              style={{ display: "inline-block" }} // Ensures the icon animates properly
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
                stiffness: 200,
                rotate: 0,
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
                delay: 0.2,
                duration: 1,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
              }} 
              onClick={() => window.location.href = 'https://github.com/CODEX-17'}
            >
              <FaGithub color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'}/>
            </motion.div>
            
            <motion.div
             initial={{ rotate: 120 }}
             whileInView={{
               type: "spring",
               stiffness: 200,
               rotate: 0,
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
               delay: 0.4,
               duration: 1,
               ease: "easeInOut",
               type: "spring",
               stiffness: 200,
             }} 
            >
              <FaFacebook color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
            </motion.div>

            <motion.div
              initial={{ rotate: 120 }}
              whileInView={{
                type: "spring",
                stiffness: 200,
                rotate: 0,
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
                delay: 0.6,
                duration: 1,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
              }} 
            >
              <IoLogoLinkedin color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
            </motion.div>

            <motion.div
              initial={{ rotate: 120 }}
              whileInView={{
                type: "spring",
                stiffness: 200,
                rotate: 0,
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
                delay: 0.8,
                duration: 1,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
              }} 
            >
              <FaSquareInstagram color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
            </motion.div>

            <motion.div
              initial={{ rotate: 120 }}
              whileInView={{
                type: "spring",
                stiffness: 200,
                rotate: 0,
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
                delay: 1,
                duration: 1,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
              }} 
            >
              <BsTelegram color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
            </motion.div>
          </div>
        </div>
        <div className='right-side-hero col-md-5 '>
          <motion.img
            src={rumar}
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
  )
}

export default HeroPage

