import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Services.css';  // CSS file import yahan

const servicesData = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites using React, HTML, CSS, and JavaScript.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly and engaging interfaces for better user experience.',
    icon: '🎨',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website ranking on search engines to increase traffic and visibility.',
    icon: '🚀',
  },
  {
    title: 'Consulting',
    description: 'Providing expert advice and solutions to grow your business digitally.',
    icon: '💡',
  },
];

// Counters info
const countersData = [
  { label: 'Projects Completed', count: 120 },
  { label: 'Happy Clients', count: 85 },
  { label: 'Years of Experience', count: 5 },
  { label: 'Awards Won', count: 12 },
];

// Custom hook to animate counting
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 20;
    const totalIncrements = duration / incrementTime;
    const incrementValue = target / totalIncrements;

    const interval = setInterval(() => {
      start += incrementValue;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count;
};

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-heading', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.services-description', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.service-card', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.counter-item', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1,
        stagger: 0.3,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="services-section" ref={containerRef}>
      <h1 className="services-heading">Our Services</h1>
      <p className="services-description">
        We offer a wide range of services to help your business grow online. Whether you need
        development, design, or consulting, we've got you covered.
      </p>

      <div className="services-portfolio">
        {servicesData.map(({ title, description, icon }, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

      {/* Counter Section */}
      <div className="counters-container">
        {countersData.map(({ label, count }, idx) => {
          const currentCount = useCountUp(count, 2500);
          return (
            <div key={idx} className="counter-item">
              <h2>{currentCount}+</h2>
              <p>{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
