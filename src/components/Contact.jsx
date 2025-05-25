import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend URL ko yahan directly specify karo:
      await axios.post('http://localhost:5000/api/contact', formData);
      setSubmitted(true);
      setError('');
      setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    } catch (err) {
      console.error('Axios error:', err);
      setError('Error sending message. Please try again.');
    }
  };

  return (
    <div className={`contact-wrapper ${animate ? 'fade-in' : ''}`}>
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
            {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
            {error && <p className="error-message">{error}</p>}
          </form>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> 123 Web Street, React City, JS 90001</p>
            <p><strong>Phone:</strong> +92 300 1234567</p>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Country:</strong> Pakistan</p>
            <div className="contact-map">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.321501145798!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd0e5a5fb3%3A0xf54b7b83b9e38b94!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716531000000!5m2!1sen!2s"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
