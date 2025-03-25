import React from 'react'
import './About.css'
import { motion } from 'framer-motion';
import logoWhite from '../../assets/images/rp-white.png'
import logoDefault from '../../assets/images/rp.png'
import { COLORS } from '../../constants/colors';
import { SiCssdesignawards } from "react-icons/si";
import { HiSpeakerphone } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import TiltedCard from '../../components/TiltedCard/TiltedCard';

const About = ({ aboutRef, darkMode }) => {
  return (
    <div className='content-about-section' ref={aboutRef}>
        <div className='content-about-section-head'>
            <motion.h1 
                initial={{ opacity: 0, x: -200 }} 
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} 
                className='title'
                style={{ color: darkMode ? COLORS.green : COLORS.darkGreen }}
            >About me.</motion.h1>
            <motion.h1 
                initial={{ opacity: 0, x: 200 }} 
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} 
                className='title'
                style={{ color: darkMode ? '#fff' : COLORS.dark }}
            >"Love what you do, <b style={{ color: darkMode ? COLORS.green : COLORS.darkGreen }}>live what you love."</b></motion.h1>
        </div>

        <div className='row align-items-center'> 

        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, duration: 1 }}
            className='content-about-section-container col-lg-4 col-md-6 col-12'
        >
            <TiltedCard
                imageSrc={!darkMode ? logoDefault : logoWhite}
                altText="Rumar Pamparo Logo"
                captionText="RP(Rumar Pamparo) Logo"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className='content-about-section-container col-lg-4 col-md-6 col-12'
        >
            <p style={{ color: darkMode ? 'white' : '#171c22' }}><b style={{ color: darkMode ? COLORS.green : COLORS.darkGreen }}>Hello!</b> I'm a recent graduate with a passion for building and designing web applications and a growing interest in mobile app development.
            I also enjoy exploring the creative side of graphic design, merging functionality with visual appeal to create engaging, user-friendly digital experiences.
            Eager to dive into new challenges and expand my skill set, I'm always ready to bring ideas to life.</p>
        </motion.div>

        <div className='content-about-section-container col-lg-4 col-md-6 col-12'>

            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ color: darkMode ? '#fff' : COLORS.dark }}
            >What I Do?</motion.h3>

            <div className='about-card-list'>
                <motion.div 
                    className='about-card'
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0, }}
                    whileHover={{ scale: 1.1, transition: { delay: 0, duration: 0.5 } }}
                    transition={{ 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        duration: 1,
                    }}
                    style={{ 
                        color: darkMode ? COLORS.green : COLORS.darkGreen,
                        borderColor: darkMode ? COLORS.green : COLORS.darkGreen,
                    }}
                >
                    <FaLaptopCode size={50}/>
                    <div className='d-flex flex-column'>
                        <h4 className='mt-4'>Web Developer</h4>
                        <p style={{ color: darkMode ? 'white' : '#171c22' }}>Landing page, Management Sytems,
                        Capstone Projects </p>
                    </div>
                </motion.div>

                <motion.div 
                    className='about-card'
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0, }}
                    whileHover={{ scale: 1.1, transition: { delay: 0, duration: 0.5 } }}
                    transition={{ 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        duration: 1,
                     }}
                    style={{ 
                        color: darkMode ? COLORS.green : COLORS.darkGreen,
                        borderColor: darkMode ? COLORS.green : COLORS.darkGreen,
                    }}
                >
                    <SiCssdesignawards size={50}/>
                    <div className='d-flex flex-column'>
                        <h4 className='mt-4'>Graphic Designer</h4>
                        <p style={{ color: darkMode ? 'white' : '#171c22' }}>Branding, Print Design, Digital Design, Marketing, Illustrations</p>
                    </div>
                </motion.div>
                <motion.div 
                    className='about-card'
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0, }}
                    whileHover={{ scale: 1.1, transition: { delay: 0, duration: 0.5 } }}
                    transition={{ 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        duration: 1,
                     }}
                    style={{ 
                        color: darkMode ? COLORS.green : COLORS.darkGreen,
                        borderColor: darkMode ? COLORS.green : COLORS.darkGreen,
                    }}
                >
                    <HiSpeakerphone size={50}/>
                    <div className='d-flex flex-column'>
                    <h4 className='mt-4'>Facebook Ads Specialist</h4>
                    <p style={{ color: darkMode ? 'white' : '#171c22' }}>Ad Creation, Targeting, Campaign Management</p>
                    </div>
                </motion.div>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default About
