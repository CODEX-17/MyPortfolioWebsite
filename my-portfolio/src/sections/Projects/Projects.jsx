import React from 'react'
import './Projects.css'
import { FaReact } from "react-icons/fa";
import { motion } from 'framer-motion'
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { GrLinkNext } from "react-icons/gr";
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import eSchoolLoginPic from '../../assets/images/e-schoolApp-thumbnail.jpg'
import scholarshipPic from '../../assets/images/scholarship-thumbnail.jpg'
import NFRDIPic from '../../assets/images/nfrdi-thumbnail.jpg'


const Projects = ({ projectsRef, darkMode }) => {

  const navigate = useNavigate()

  return (
     <div className='content-projects-section' ref={projectsRef}>
        <div className='head-project-page'>
            <h1 
                className='title' 
                style={{ color: darkMode ? COLORS.green : COLORS.darkGreen }}
            >My Projects.</h1>
            <p className="fs-6" style={{ color: darkMode ? COLORS.white : COLORS.dark }}>Highlights Projects</p>
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
                        <p>(Web Application - Capstone Project)</p>
                    </div>
                    <div 
                        className='image-container'
                    >
                        <img 
                            initial={{ opacity: 1, zIndex: 4 }}
                            whileHover={{ opacity: 0.5, zIndex: 0 }}
                            src={eSchoolLoginPic} 
                            alt="thumbnail" 
                            className='image-thumbnail'
                        />
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
                        <div className='flex-1 d-flex w-100 mt-2'>
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
                        <h3>Scholarhip Management System</h3>
                        <p>(Web Application)</p>
                    </div>
                    <div className='image-container'>
                        <img src={scholarshipPic} alt="thumbnail" className='image-thumbnail'/>
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
                                <p>A web app that simplifies scholarship applications and management for scholars and administrators.</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <b>Key Features:</b>
                                <p>Account creation, admin posting and updates, dashboard for monitoring scholarships, available slots, and program details.</p>
                            </div>
                        </div>
                        <div className='d-flex w-100 mt-2 bg-info'>
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
                        <h3>NFRDI Procurement Dashboard</h3>
                        <p>(Web Application - Internship Project)</p>
                    </div>
                    <div className='image-container'>
                        <img src={NFRDIPic} alt="thumbnail" className='image-thumbnail'/>
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
                                <p>A web app that streamlines NFRDI's procurement process with transparency, efficiency, and real-time tracking.</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <b>Key Features:</b>
                                <p>Manages procurement data, bidding, and alternative methods, providing an overview with options to add, edit, and delete records.</p>
                            </div>
                        </div>
                        <div className='flex-1 d-flex w-100 mt-2'>
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
                     onClick={() => navigate('/projects')}
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
