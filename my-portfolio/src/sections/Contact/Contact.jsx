import React from 'react'
import './Contact.css'

const Contact = () => {
  return ( 
    <div className='content-contact-section'>
        <div className='head-contact-section'>
            <h1 className='title'>Contact me.</h1>
            <p>Excited to bring fresh ideas and creative solutions to your team! Let’s connect and see how I can help drive your next project to success.</p>
        </div>
        <div className='body-contact-section row'>
            <div className="card">
                <form action="">
                    <div className="d-flex">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>
                    <div className="d-flex">
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>

                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Contact
