import React, { useContext, useMemo, memo } from 'react'
import './About.css'
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/colors';
import { SiCssdesignawards } from "react-icons/si";
import { HiSpeakerphone } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import TiltedCard from '../../components/TiltedCard/TiltedCard';
import { images } from '../../assets/imagePath';
import { ThemeContext } from '../../../context/ThemeContext';

const About = ({ aboutRef }) => {

   const { theme, handleTheme } = useContext(ThemeContext)
   const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light 

   const logoImgMotionProps = useMemo(() => ({
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { delay: 0.5, type: "spring", stiffness: 200, duration: 1 },
   }),[])

   const cardList = [
    {
        title: 'Web Developer',
        description: 'Landing page, Management Sytems, Capstone Projects',
        icon: <FaLaptopCode size={50}/>
    },
    {
        title: 'Mobile Developer',
        description: 'Business Apps, E-commerce, Qr Scanning App',
        icon: <FaMobileScreenButton size={50}/>
    },
    {
        title: 'Graphic Designer',
        description: 'Branding, Print Design, Digital Design, Marketing, Illustrations, UI/UX Design',
        icon: <SiCssdesignawards size={50}/>
    },
    {
        title: 'Facebook Ads Specialist',
        description: 'Ad Creation, Targeting, Campaign Management',
        icon: <HiSpeakerphone size={50}/>
    },
   ]

  return (
    <div className='content-about-section' ref={aboutRef}>
        <div className='content-about-section-head'>
            <motion.h1 
                initial={{ opacity: 0, x: -200 }} 
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} 
                className='title'
                style={{ color: themeColors.green }}
            >About me.</motion.h1>
            <motion.h1 
                initial={{ opacity: 0, x: 200 }} 
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} 
                className='title'
                style={{ color: themeColors.text }}
            >"Love what you do, <b style={{ color: themeColors.green }}>live what you love."</b></motion.h1>
        </div>

        <div className='row align-items-center justify-content-center p-5'> 

            <motion.div
                className='content-about-section-container col-lg-3'
                {...logoImgMotionProps}
            >
                <TiltedCard
                    imageSrc={theme !== 'dark' ? images.logoDefault : images.logoWhite}
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
                className='content-about-section-container col-lg-8'
            >
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 2 } }}
                    style={{ color: themeColors.text }}
                ><b style={{ color: themeColors.green }}>Hello!</b> I'm a recent graduate with a passion for building and designing web applications and a growing interest in mobile app development.
                I also enjoy exploring the creative side of graphic design, merging functionality with visual appeal to create engaging, user-friendly digital experiences.
                Eager to dive into new challenges and expand my skill set, I'm always ready to bring ideas to life.</motion.p>

                <div className='d-flex flex-column justify-content-center align-items-center mt-5 w-100'>

                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        style={{ color: themeColors.green }}
                    >What I Do?</motion.h3>

                    <div className='about-card-list'>

                        {cardList.map((item, index) => 
                            <motion.div 
                                key={index}
                                className='about-card' 
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: parseFloat(`0.${index + 2}`) } }}
                                whileHover={{ backgroundColor: themeColors.cardActived }}
                                whileTap= {{ rotate: 10, transition: { type: 'spring', stiffness: 300} }}
                                style={{ 
                                    color: themeColors.green,
                                    borderColor: themeColors.green,
                                }}
                            >
                                {item.icon}
                                <div className='d-flex flex-column'>
                                    <h4 className='mt-4'>{item.title}</h4>
                                    <p style={{ color: themeColors.text }}>{item.description}</p>
                                </div>
                            </motion.div>
                        )}
                    </div>

                </div>
            
            </motion.div>

        </div>
    </div>
  )
}

export default memo(About)
