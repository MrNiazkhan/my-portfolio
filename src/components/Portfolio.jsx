import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Portfolio.css';

const projects = [
  { title: 'E-Commerce Shopify', category: 'E-Commerce', img: 'https://ecommerce-platforms.com/wp-content/uploads/2014/08/what-is-amazon.jpg', link: '#' },
  { title: 'Portfolio Website', category: 'Web Design', img: 'https://cdn.kwork.com/files/portfolio/t3/20/bfb933fcd3f49054c923c6b9d231e34d9effe768-1713894769.jpg', link: '#' },
  { title: 'Blog Platform', category: 'Web Design', img: 'https://images.ctfassets.net/lzny33ho1g45/best-blog-sites-p-img/a6219be7872ed6a51354e042f42ff455/best-blog-sites.jpeg?w=1520&fm=jpg&q=31&fit=thumb&h=760', link: '#' },
  { title: 'Mobile App Design', category: 'App Design', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYusfETg-4XSK8VndVQneUAjUPHfyRvvAwDw&s', link: '#' },
  { title: 'Social Media Dashboard', category: 'Dashboard', img: 'https://www.big-red-digital.com/images/blogimages/social-media-networks.jpg', link: '#' },
  { title: 'Landing Page', category: 'Web Design', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pVbZyICO5UFthUJS2kQLc2uKZxK4xZb2Lw&s', link: '#' },
  { title: 'CRM System', category: 'Dashboard', img: 'https://www.gosite.com/hubfs/Blog/Images/April%202020/What%20is%20a%20CRM%20system/What%20is%20a%20CRM%20system-3.jpg', link: '#' },
  { title: 'Online Learning Platform', category: 'E-Commerce', img: 'https://dlimsonline.pk/wp-content/uploads/2024/02/Learner-License.webp', link: '#' },
  { title: 'Travel Booking App', category: 'App Design', img: 'https://www.etraviax.com/wp-content/uploads/2025/04/Develop-Mobile-App-Banner.jpg.webp', link: '#' },
];

const categories = ['All', 'E-Commerce', 'Web Design', 'App Design', 'Dashboard'];

const Portfolio = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-heading', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.portfolio-description', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Removed filter-btn GSAP animation

      gsap.from('.project-card', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div className="portfolio-section" ref={containerRef}>
      <h1 className="portfolio-heading">My Portfolio</h1>
      <p className="portfolio-description">
        A showcase of some of my best projects including e-commerce, apps, websites, and more.
      </p>

      <div className="filters-container">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(({ title, img, link }, idx) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img src={img} alt={title} className="project-image" />
            </div>
            <h3 className="project-title">{title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
