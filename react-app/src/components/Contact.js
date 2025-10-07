import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email and message.');
      return;
    }

    emailjs.send(
      'service_t34dygt',
      'template_0e9wokk',
      formData
    )
    .then((response) => {
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      alert('Email not sent. Error: ' + (error.text || error));
    });
  };

  return (
    <main>
      <section className="contact-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="contact-hero-left">
            <span className="star top-left">&#9733;</span>
            <div className="circle top"></div>
            <h1>Contact us</h1>
            <div className="contact-hero-middle-circle"></div>
          </div>
          <div className="contact-hero-right">
            <img src="/assets/dfsgdf.jpg" alt="Contact illustration" className="contact-hero-image" />
            <div className="orange-circle-right"></div>
          </div>
        </div>
      </section>

      <section className="get-in-touch">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-around' }}>
          <div className="get-in-touch-left">
            <img src="/assets/LOGO.png" alt="AR Energy Infrastructure Logo" />
            <p>"Ready to move from ambition to action? Join AR Energy Infrastructure. Together, we don't just light up streets – we illuminate entire communities."</p>
          </div>
          <div className="get-in-touch-right">
            <h2>Get In Touch with us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
