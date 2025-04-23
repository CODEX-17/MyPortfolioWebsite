import React, { useContext, useEffect, useState } from 'react'
import './ProjectsPage.css'
import Footer from '../sections/Footer/Footer'
import { ThemeContext } from '../../context/ThemeContext'
import { COLORS } from '../constants/colors'
import { motion } from "framer-motion";
import { GoHomeFill } from "react-icons/go";
import { IoMdSunny } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { 
  MdPhoneAndroid, 
  MdComputer, 
  MdDarkMode, 
  MdOutlineDesignServices,
  MdOutlinePhonelink 
} from "react-icons/md";
import GridMotion from '../components/GridMotion/GridMotion';

const ProjectsPage = () => {

  const { theme, handleTheme } = useContext(ThemeContext)
  const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light 
  const navigate = useNavigate()

  // note: you'll need to make sure the parent container of this component is sized properly
  const items = [
    'Item 1',
    <div key='jsx-item-1'>
      <img className='img-display' src={'../assets/images/e-schoolapp-login.jpg'} alt="" />
    </div>,
    <div key='jsx-item-1'><img className='img-display' src={'../assets/images/e-schoolapp-login.jpg'} alt="" /></div>,
    <div key='jsx-item-1'><img className='img-display' src={'../assets/images/e-schoolapp-login.jpg'} alt="" /></div>,
    <div key='jsx-item-1'><img className='img-display' src={'../assets/images/e-schoolapp-login.jpg'} alt="" /></div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 2',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 4',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 5',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 7',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 8',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 10',
    <div key='jsx-item-3'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 11',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 13',
    <div key='jsx-item-4'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 14',
    // Add more items as needed
  ];
  

  const menuItems = [
    {
      title: 'All',
      icon: <MdOutlinePhonelink color={ themeColors.icon } size={20}/>
    },
    {
      title: 'Website',
      icon: <MdComputer color={ themeColors.icon } size={20}/>
    },
    {
      title: 'Mobile',
      icon: <MdPhoneAndroid color={ themeColors.icon } size={20}/>
    },
    {
      title: 'Digital Artwork',
      icon: <MdOutlineDesignServices color={ themeColors.icon } size={20}/>
    },
  ]

  const [selected, setSelected] = useState<string | null>(menuItems[0].title)

  const [width, setWidth] = useState(window.innerWidth);


  //For Screen Size
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div 
      className='projects-content'
      style={{ backgroundColor: themeColors.background, transition: 'opacity 0.3s ease' }}
      animate={{ backgroundColor: themeColors.background }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="container">
        <div className="header">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <GoHomeFill 
              color={ themeColors.icon } 
              size={25}
              cursor={'pointer'}
              onClick={() => navigate('/')}
            />
            <h3 style={{ color: themeColors.text }}>My Projects</h3>
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
          {
            window.innerWidth >= 1024 &&
            <div style={{ height: 500, width: '100%', marginBottom: 20 }}> 
              <GridMotion items={items} />
            </div>
          }
          

          <div 
            className='menu-list gap-5 mt-2 mb-2 '
            style={{ color: themeColors.background }}
          >
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item" onClick={() => setSelected(item.title)}>
                <div className='d-flex gap-2 align-items-center'>
                  {item.icon}
                  {
                    width > 425 &&
                    <p 
                      className={selected === item.title ? "active" : ""}
                      style={{ color: 
                        selected === item.title ? 
                          (themeColors.text) : (
                            'gray'
                          )}}
                    >{item.title}</p>
                  }
                  
                </div>
                {selected == item.title && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: themeColors.background }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
       

        <div className='projects-card-list'>

          <div className="card" style={{ backgroundColor: themeColors.card }}>
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4 style={{ color: themeColors.text }}>E-SchoolApp</h4>
          </div>

          <div className="card" style={{ backgroundColor: themeColors.cardActived}}>
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4 style={{ color: themeColors.text }}>E-SchoolApp</h4>
          </div>

          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            
            <h4>E-SchoolApp</h4>
          </div>


        </div>
   
      </div>
      {/* <footer style={{ backgroundColor: themeColors.green }}>
        <Footer/>
      </footer> */}
    </motion.div>
  )
}

export default ProjectsPage
