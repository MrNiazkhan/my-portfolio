import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';
import { gsap } from 'gsap';

const testimonials = [
  {
    name: 'Niaz Ali',
    role: 'Frontend Developer',
    img: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Working at E Teck Viral has been a game-changer for me. The team, culture, and projects are amazing!',
    rating: 5,
  },
  {
    name: 'Sara Khan',
    role: 'UI/UX Designer',
    img: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'I enjoy designing experiences here. Creativity and freedom is what I love most!',
    rating: 4,
  },
  {
    name: 'Ali Raza',
    role: 'Backend Engineer',
    img: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Scalable systems and exciting tech stacks keep me motivated every day.',
    rating: 5,
  },
  {
    name: 'Ayesha Noor',
    role: 'Product Manager',
    img: 'https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'The leadership and vision of this company truly stand out in the market.',
    rating: 4,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        slideRef.current,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      );
    });

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(timer);
      ctx.revert();
    };
  }, [index]);

  const handlePrev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Team Says</h2>

      <div className="testimonial-wrapper">
        <button className="arrow-btn left" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="testimonial-slide" ref={slideRef}>
          <img src={testimonials[index].img} alt={testimonials[index].name} className="testimonial-img" />
          <p className="testimonial-text">"{testimonials[index].text}"</p>
          <h3 className="testimonial-name">{testimonials[index].name}</h3>
          <span className="testimonial-role">{testimonials[index].role}</span>
          <div className="testimonial-rating">
            {'★'.repeat(testimonials[index].rating)}{'☆'.repeat(5 - testimonials[index].rating)}
          </div>
        </div>

        <button className="arrow-btn right" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
