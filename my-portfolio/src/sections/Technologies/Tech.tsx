import React, { useCallback, useContext, useMemo } from 'react'
import './Tech.css'
import { COLORS } from '../../constants/colors'
import { ThemeContext } from '../../../context/ThemeContext'
import { images } from '../../assets/imagePath'
import { motion } from 'framer-motion'

const Tech = () => {

  const { theme, handleTheme } = useContext(ThemeContext)
  const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light

  const techList = [
    {
      icon: images.reactIcon,
      name: 'React',
      link: 'https://react.dev/'
    },
    {
      icon: images.PHPIcon,
      name: 'PHP',
      link: 'https://www.php.net/'
    },
    {
      icon: images.JSIcon, 
      name: 'Javascript',
      link: 'https://www.javascript.com/'
    },
    {
      icon: images.TypeScriptIcon,
      name: 'Typesscript',
      link: 'https://www.typescriptlang.org/'
    },
    {
      icon: images.ReactNativeIcon, 
      name: 'React Native',
      link: 'https://reactnative.dev/'
    },
    {
      icon: images.ExpoIcon,
      name: 'Expo',
      link: 'https://expo.dev/'
    },
    {
      icon: images.NodeIcon,
      name: 'Node',
      link: 'https://nodejs.org/en'
    },
    {
      icon: images.ViteIcon,
      name: 'Vite',
      link: 'https://vite.dev/'
    },
    {
      icon: images.BootstrapIcon,
      name: 'Bootstrap',
      link: 'https://getbootstrap.com/'
    },
    {
      icon: images.TailwindIcon,
      name: 'Tailwind',
      link: 'https://react.dev/'
    },
    {
      icon: images.MySQLIcon,
      name: 'MySQL',
      link: 'https://www.mysql.com/'
    },
    {
      icon: images.JavaIcon,
      name: 'Java',
      link: 'https://www.java.com/en/'
    },
    {
      icon: images.NPMIcon,
      name: 'NPM',
      link: 'https://www.java.com/en/'
    },
    {
      icon: images.IonicIcon,
      name: 'Ionic',
      link: 'https://www.java.com/en/'
    },
    {
      icon: images.GithubIcon,
      name: 'Github',
      link: 'https://github.com/'
    },
    {
      icon: images.GitIcon,
      name: 'Git',
      link: 'https://www.java.com/en/'
    },
  ]

  const openLink = (link: string) => useCallback(() => window.location.href = link, [link])

  const cardMotionProps = (index: number) => useMemo(() => ({
    initial: { rotate: 5 },
    whileInView: { rotate: 0, transition: { delay: parseFloat(`0.${index + 2}`), type: 'spring', stiffness: 300} },
    whileHover: { rotate: 5 },
    transition: { type: 'spring', stiffness: 300 }
  }),[])

  return (
    <div className='content-tech-section'>
        <div className='head-tech-section'>
            <motion.h1
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1, transition: { delay: 0.5 }}}
              className='title' 
              style={{ color: themeColors.green }}
            >Technologies I use.</motion.h1>
        </div>
        <div className='body-tech-section row'>
        {techList.map((data, index) => (
          <motion.div 
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-2 d-flex align-items-center justify-content-center" 
            key={index}
            onClick={() => openLink(data.link)}
            {...cardMotionProps(index)}
          >
            <div className="card">
              <img src={data.icon} alt={data.name}/>
              <p 
                className="mt-2 fs-7 fs-sm-4 fs-md-5" 
              >{data.name}</p>
            </div>
          </motion.div>
        ))}
        <div className='text-center mt-2'>
          <motion.h1 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1, transition: { delay: 1 }}}
            className='title fs-5'
            style={{ color: themeColors.green }}
          >...and many others!</motion.h1>
        </div>
        </div>
    </div>
  )
}

export default Tech
