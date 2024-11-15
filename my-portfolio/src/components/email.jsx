import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p0ohq6o', 'template_6f4kw5h', form.current, 'WHumULzKE5Yl110BI')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
      }, (error) => {
          console.log('Email failed:', error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default email;