import React, { useState } from 'react';
import './About.css';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in full-stack web development including React, Node.js, and more.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me via the contact form on the website or email me directly.",
  },
  {
    question: "What is your development process?",
    answer: "I follow agile methodologies to ensure efficient and quality project delivery.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-container">
      <div className="about-left fade-in">
        <img
          src="https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About"
          className="about-image"
        />
      </div>

      <div className="about-right fade-in delay">
        <h1>About Me</h1>
        <p>
          I am a passionate web developer dedicated to creating modern, responsive,
          and user-friendly websites. With expertise in front-end and back-end
          technologies, I strive to deliver high-quality solutions that meet client
          needs and enhance user experience. Explore my projects to see how I turn
          ideas into reality with clean code and creative design.
        </p>

        <button className="contact-btn" onClick={scrollToContact}>
          Contact Me
        </button>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <p className="answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
