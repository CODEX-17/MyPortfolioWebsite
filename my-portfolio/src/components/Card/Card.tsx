import React, { memo, useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { COLORS } from '../../constants/colors'
import './Card.css'
import { shortenSentence } from '../../utils/shortenWord'


interface CardPropsType {
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    minHeight?: string,
    maxHeight?: string,
    height?: string,
    title: string,
    description: string,
    thumbnail: any,
    icon: any,
    className?: string,
    style?: React.CSSProperties,
}


const Card = ({ 
     width,
     minWidth,
     maxWidth,
     height,
     minHeight,
     maxHeight,
     title,
     description,
     thumbnail, 
     icon,
     className,
     style,
    } : CardPropsType) => {

  const { theme, handleTheme } = useContext(ThemeContext)
  const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light
  const [hovered, setHovered] = useState(false)
  
  const screenWidth = window.innerWidth

  const cardWidth = width ? width : 'auto'
  const cardMinWidth = minWidth ? minWidth : screenWidth > 425 ? '400px' : '300px'
  const cardMaxWidth = maxWidth ? maxWidth : 'auto'

  const cardHeight = height ? height : 'auto'
  const cardMinHeight = minHeight ? minHeight : '200px'
  const cardMaxHeight = maxHeight ? maxHeight : 'none'


  return (
    <div 
        className={`customize-card ${className}` }
        style={{ 
            backgroundColor: themeColors.background,
            height: cardHeight,
            minHeight: cardMinHeight,
            maxHeight: cardMaxHeight,
            width: cardWidth,
            minWidth: cardMinWidth,
            maxWidth: cardMaxWidth,
            ...(style || {}),
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(!hovered)}
    >
        <div className={ theme === 'dark' ? 'gradient-effect-dark' : 'gradient-effect-light' }>
        </div>
        <div className="content-image">
            <div 
                className='content-image-container'
                style={{ 
                    filter: hovered ? 'blur(0px)' : 'blur(1px)',
                    transition: 'filter 0.3s ease-in-out'
                }}
            >
                <img 
                    src={thumbnail} 
                    alt="logo" 
                    style={{ 
                        scale: hovered ? '110%' : '100%',
                        transition: 'scale 1s ease-in-out'
                    }}
                />
            </div>
        </div>
        <div className='d-flex flex-column w-100 position-absolute bottom-0 p-3 cursor-pointer' style={{ zIndex: 10, fontSize: '.8rem' }}>
            <img 
                src={icon}
                alt="logo" 
                className='logo mb-2'
            /> 
            <h4 style={{ color: themeColors.text }}>{title}</h4>
            <p style={{ color: themeColors.text }}>{shortenSentence(description, hovered ? 100 : 50)}</p>
        </div>
    </div>
  )
}

export default memo(Card)
