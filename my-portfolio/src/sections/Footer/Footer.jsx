import React from 'react'
import './Footer.css'
import whiteLogo from '../../assets/images/rp-white.png'
import { COLORS } from '../../constants/colors'
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {

  return (
    <div className='content-footer-section'>
        <div className="d-flex w-100 justify-content-between align-items-center pl-4 pr-4">
            <div className="d-flex flex-column">
                <img src={whiteLogo} alt="logo" />
                <h3 className='fs-6' style={{ color: COLORS.white }}>Source Code</h3>
            </div>
            <div className="d-flex gap-4">
                <div className="d-flex flex-column">
                    <h1>Important Links</h1>
                    <p>Home</p>
                    <p>Porjects</p>
                    <p>About me</p>
                </div>
                <div className="d-flex flex-column">
                    <h1>Social</h1>
                    <p>Github</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
        <div className='w-100 d-flex align-items-center justify-content-end'>
            <h3 className='fs-6'>
                <MdOutlineCopyright/>2025 Rumar Pamparo,All right reserved.
            </h3>            
        </div>
    </div>
  )
}

export default Footer
