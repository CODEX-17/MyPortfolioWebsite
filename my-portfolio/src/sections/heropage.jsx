import React from 'react'
import { motion } from 'framer-motion';

const heropage = ({ heroRef }) => {
  return (
    <div>
        <div className='content-hero-page' ref={heroRef}>
          <div className='container d-flex' id='content-hero-page' style={{ height: '90%', backgroundColor: 'transparent' }}>
            <div 
              className='left-side-hero'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <h2 className='fs-3' style={{ color: !darkMode ? '#171c22' : 'white' }} ><b>Hi!</b>, I'm</h2>
              <h1 className='fs-1'>Rumar Pamparo</h1>
              <p style={{ color: !darkMode ? '#171c22' : 'white' }} className='fs-6'>A fresh graduate and <b>Fullstack Web Developer</b> based in the Philippines. I have a passion for building web applications, freelancing, and solving complex problems as I grow in my career.</p>
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
                  animate={{
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
                    duration: 1,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 200,
                  }} 
                >
                  <FaGithub color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'}/>
                </motion.div>
                
                <motion.div
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
                >
                  <FaFacebook color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
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
                >
                  <IoLogoLinkedin color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
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
                >
                  <FaSquareInstagram color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>

                <motion.div
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
                >
                  <BsTelegram color={!darkMode ? '#171c22' : 'white'} size={25} cursor={'pointer'} />
                </motion.div>
              </div>
            </div>
            <div className='right-side-hero'>
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
    </div>
  )
}

export default heropage
