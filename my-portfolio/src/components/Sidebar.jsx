import React from 'react'
import { MdClose } from "react-icons/md";
import { motion } from 'framer-motion';
import './Sidebar.css'

const Sidebar = ({ setIsShowSideBar, darkMode }) => {
  return (
    <motion.div
        className='sidebar'
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1,  x: 0}} 
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ backgroundColor: darkMode ? '#171c22' : 'white'}}
    >
        <div className='d-flex alig-items-center justify-content-between p-4' style={{ color: !darkMode ? '#171c22' : 'white' }}>
            <div>
                <h1 className='fs-3'>Rumar Pamparo</h1>
                <p className='fs-6'>Navigation Links</p>
            </div>
            <div 
                className='closeBtn'
                style={{ border: darkMode ? '1px solid white' : '1px solid #171c22' }}
                onClick={() => setIsShowSideBar(false)}           
            >
                <MdClose/>
            </div>
        </div>
        <div className='d-flex flex-column gap-3 p-4' style={{ color: !darkMode ? '#171c22' : 'white' }}>
            <h1 className='fs-5'>Home</h1>
            <h1 className='fs-5'>About Me</h1>
            <h1 className='fs-5'>Projects</h1>
            <h1 className='fs-5'>Contact Me</h1>
        </div>
        
    </motion.div>
  )
}

export default Sidebar
