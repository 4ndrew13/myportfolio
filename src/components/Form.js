import "./FormStyles.css";
import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ContactUs = () => {
  const form = useRef();

  const notify = () => toast("Message Sent!", {theme: "dark", position: "top-center"});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v3pl6it', 'template_b9jlyxp', form.current, 'kbSWzwdeX6FXzp2Zo')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" onClick={notify} />
      <ToastContainer className="toast-position" />
    </form>
    </div>
  );
};

export default ContactUs;