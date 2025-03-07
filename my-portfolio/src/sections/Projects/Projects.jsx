import React from 'react'
import './Projects.css'
import { FaReact } from "react-icons/fa";
import { motion } from 'framer-motion';
import eSchoolLoginPic from '../../assets/images/e-schoolapp-login.jpg'
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { GrLinkNext } from "react-icons/gr";
import { COLORS } from '../../constants/colors';
import { FaEye } from "react-icons/fa";

const Projects = ({ projectsRef, darkMode }) => {
  return (
     <div className='content-projects-page' ref={projectsRef}>
        <div className='head-project-page'>
            <h1 className='title'>My Projects.</h1>
        </div>
        <div className='body-project-page'>
            <div className='projects-card-list'>
                <motion.div 
                    initial={{ opacity: 1, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 1 }}
                    viewport={{ once: false, amount: .8 }} // Animation continues while scrolling
                    className='projects-card'
                >
                    <div className='projects-card-head'>
                        <h3>E-SchoolApp</h3>
                        <p>(Web Application)</p>
                    </div>
                    <div 
                        className='image-container'
                    >
                        <motion.img 
                            initial={{ opacity: 1, zIndex: 4 }}
                            whileHover={{ opacity: 0.5, zIndex: 0 }}
                            src={eSchoolLoginPic} 
                            alt="thumbnail" 
                            className='image-thumbnail'
                        />
                        <FaEye size={30} style={{ position: 'absolute', zIndex: 2 }}/>
                    </div>
                    <div className='projects-card-details'>
                        <div className='projects-card-technology-list'>
                            <div className='technology-card'>
                                <FaReact/>
                                React
                            </div>
                            <div 
                                className='technology-card'
                                style={{ backgroundColor: 'green', color: '#fff' }}
                            >
                                <SiExpress/>
                                Express
                            </div>
                            <div 
                                className='technology-card'
                                style={{ backgroundColor: '#005984', color: '#fff' }}
                            >
                                <TbBrandMysql/>
                                MySQL
                            </div>
                        </div>
                        <div className='projects-card-description'>
                        <div className='d-flex flex-column'>
                            <b>Description:</b>
                            <p> A web application that communication and collaboration platform for student and teacher.</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <b>Key Features:</b>
                            <p>Create Classes, Posting of assignments and Activities, Posting of learning materials,  Create Quiz, Real-time Chat.</p>
                        </div>
                        </div>
                        <div className='d-flex w-100 mt-2'>
                        <button>Repository</button>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 1, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 1 }}
                    // Animation continues while scrolling
                    className='projects-card'
                >
                    <div className='projects-card-head'>
                        <h3>E-SchoolApp</h3>
                        <p>(Web Application)</p>
                    </div>
                    <div className='image-container'>
                        <img src={eSchoolLoginPic} alt="thumbnail" className='image-thumbnail'/>
                    </div>
                    <div className='projects-card-details'>
                        <div className='projects-card-technology-list'>
                        <div className='technology-card'>
                            <FaReact/>
                            React
                        </div>
                        <div className='technology-card'>
                            <FaReact/>
                            React
                        </div>
                        </div>
                        <div className='projects-card-description'>
                        <div className='d-flex flex-column'>
                            <b>Description:</b>
                            <p> A web application that communication and collaboration platform for student and teacher.</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <b>Key Features:</b>
                            <p>Create Classes, Posting of assignments and Activities, Posting of learning materials,  Create Quiz, Real-time Chat.</p>
                        </div>
                        </div>
                        <div className='d-flex w-100 mt-2'>
                        <button>Repository</button>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 1, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 1 }}
                    viewport={{ once: false, amount: .8 }} // Animation continues while scrolling
                    className='projects-card'
                >
                    <div className='projects-card-head'>
                        <h3>E-SchoolApp</h3>
                        <p>(Web Application)</p>
                    </div>
                    <div className='image-container'>
                        <img src={eSchoolLoginPic} alt="thumbnail" className='image-thumbnail'/>
                    </div>
                    <div className='projects-card-details'>
                        <div className='projects-card-technology-list'>
                        <div className='technology-card'>
                            <FaReact/>
                            React
                        </div>
                        <div className='technology-card'>
                            <FaReact/>
                            React
                        </div>
                        </div>
                        <div className='projects-card-description'>
                        <div className='d-flex flex-column'>
                            <b>Description:</b>
                            <p> A web application that communication and collaboration platform for student and teacher.</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <b>Key Features:</b>
                            <p>Create Classes, Posting of assignments and Activities, Posting of learning materials,  Create Quiz, Real-time Chat.</p>
                        </div>
                        </div>
                        <div className='d-flex w-100 mt-2'>
                        <button>Repository</button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{ color: darkMode ? '#fff' : COLORS.dark, }}
                transition={{ type: "spring", duration: 0.5, stiffness: 200 }}
                className='mt-4 w-100 d-flex align-items-center justify-content-center'
            >
                <motion.p 
                     className='see-more-link'
                     initial={{ marginRight: 10 }}
                     whileHover={{ marginRight: 0, }}
                     transition={{ type: "spring", duration: 0.5, stiffness: 200 }}
                     
                >
                    See more projects
                    
                </motion.p>
                <GrLinkNext/>
            </motion.div>
        </div>
    </div>
  )
}

export default Projects
