import React from 'react'
import './Contact.css'
import { COLORS } from '../../constants/colors'
import { IoSend } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";

const Contact = ({ darkMode }) => {
  return ( 
    <div className='content-contact-section container'>
        <div className='head-contact-section w-100 d-flex flex-wrap align-items-center justify-content-center mb-4'>
            <h1 className='title'>Contact me.</h1>
            <p 
                className='fs-6 text-center'
                style={{ color: darkMode ? COLORS.white : COLORS.dark }}
            >Excited to bring fresh ideas and creative solutions to your team! Let’s connect and see how I can help drive your next project to success.</p>
        </div>
        <div className='body-contact-section w-100 d-flex flex-wrap gap-5 align-items-center justify-content-center '>
            <div 
                className="card flex-glow-1"
                style={{ 
                    color: darkMode ? COLORS.white : COLORS.dark,
                    borderColor: darkMode ? COLORS.white : COLORS.dark,
                }}
            >
                <form action="">
                    <div className="d-flex gap-2 w-100 mb-2">
                        <div className="d-flex flex-column w-100">
                            <label htmlFor="">Name <b>*</b></label>
                            <input type="text" placeholder='Juan Dela Cruz' className='p-2 w-100'/>
                        </div>
                        <div className="d-flex flex-column w-100">
                            <label>Email <b>*</b></label>
                            <input type="email" placeholder='juan@delacruz.com' className='p-2 w-100'/>
                        </div>
                    </div>
                    <div className="d-flex w-100 mb-2">
                        <div className="d-flex flex-column w-100">
                            <label>Message <b>*</b></label>
                            <textarea className='p-2' placeholder='Hi!, There.'></textarea>
                        </div>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                        <p style={{ fontSize: '.7rem', fontFamily: 'normal' }}>0/500</p>
                        <button>Send <IoSend size={10}/></button>
                    </div>
                </form>
                
            </div>
            <div className='d-flex flex-glow-1 d-flex flex-column align-items-center justify-content-center'>
                <h1 
                    className='title fs-4'
                    style={{ color: darkMode ? COLORS.white : COLORS.dark }}
                >or contact me with...</h1>
                <div className="d-flex gap-2">
                    <MdEmail size={27} color={COLORS.green} cursor={'pointer'}/>
                    <FaFacebook size={23} color={COLORS.green} cursor={'pointer'}/>
                    <AiFillInstagram size={25} color={COLORS.green} cursor={'pointer'}/>
                    <FaTelegram size={25} color={COLORS.green} cursor={'pointer'}/>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Contact
