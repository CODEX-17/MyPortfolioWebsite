import React from 'react'
import './Tech.css'
import reactIcon from '../../assets/images/react-icon.png'
import PHPIcon from '../../assets/images/php-icons.png'
import JSIcon from '../../assets/images/javascript-icons.png'
import ExpoIcon from '../../assets/images/expo-icons.png'
import NodeIcon from '../../assets/images/node-icons.png'
import ViteIcon from '../../assets/images/vite-icons.png'
import BootstrapIcon from '../../assets/images/bootstrap-icons.png'
import TailwindIcon from '../../assets/images/tailwind-icons.png'
import ReactNativeIcon from '../../assets/images/react-native-icons.png'
import MySQLIcon from '../../assets/images/mysql-icons.png'
import JavaIcon from '../../assets/images/java-icons.png'
import PSIcon from '../../assets/images/ps-icons.png'
import NPMIcon from '../../assets/images/npm-icons.png'
import CanvaIcons from '../../assets/images/canva-icons.png'
import IonicIcon from '../../assets/images/ionic-icons.png'
import GitIcon from '../../assets/images/git-icons.png'
import { COLORS } from '../../constants/colors'


const Tech = ({ darkMode }) => {

  const techList = [
    {
      icon: reactIcon,
      name: 'React',
      link: 'https://react.dev/'
    },
    {
      icon: PHPIcon,
      name: 'PHP',
      link: 'https://www.php.net/'
    },
    {
      icon: JSIcon, 
      name: 'Javascript',
      link: 'https://www.javascript.com/'
    },
    {
      icon: ReactNativeIcon, 
      name: 'React Native',
      link: 'https://reactnative.dev/'
    },
    {
      icon: ExpoIcon,
      name: 'Expo',
      link: 'https://expo.dev/'
    },
    {
      icon: NodeIcon,
      name: 'Node',
      link: 'https://nodejs.org/en'
    },
    {
      icon: ViteIcon,
      name: 'Vite',
      link: 'https://vite.dev/'
    },
    {
      icon: BootstrapIcon,
      name: 'Bootstrap',
      link: 'https://getbootstrap.com/'
    },
    {
      icon: TailwindIcon,
      name: 'Tailwind',
      link: 'https://react.dev/'
    },
    {
      icon: MySQLIcon,
      name: 'MySQL',
      link: 'https://www.mysql.com/'
    },
    {
      icon: PSIcon,
      name: 'Photoshop',
      link: 'https://www.adobe.com/express/create/logo'
    },
    {
      icon: CanvaIcons,
      name: 'Canva',
      link: 'https://www.adobe.com/express/create/logo'
    },
    {
      icon: JavaIcon,
      name: 'Java',
      link: 'https://www.java.com/en/'
    },
    {
      icon: NPMIcon,
      name: 'NPM',
      link: 'https://www.java.com/en/'
    },
    {
      icon: IonicIcon,
      name: 'Ionic',
      link: 'https://www.java.com/en/'
    },
    {
      icon: GitIcon,
      name: 'Git',
      link: 'https://www.java.com/en/'
    },
  ]

  return (
    <div className='content-tech-section'>
        <div className='head-tech-section'>
            <h1 className='title'>Technologies I use.</h1>
        </div>
        <div className='body-tech-section row'>
        {techList.map((data, index) => (
          <div 
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-2 d-flex align-items-center justify-content-center" 
            key={index} 
            onClick={() => window.location.href = data.link}
          >
            <div className="card">
              <img src={data.icon} alt={data.name}/>
              <p className="mt-2 fs-7 fs-sm-4 fs-md-5">{data.name}</p>
            </div>
          </div>
        ))}
        <div className='text-center mt-2'>
          <h1 className='title fs-5'>...and many others!</h1>
        </div>
        </div>
    </div>
  )
}

export default Tech
