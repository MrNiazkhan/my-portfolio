import React, { useState, useEffect } from 'react';
import './Skills.css';

const skillsData = [
  {
    name: 'HTML',
    image: 'https://w7.pngwing.com/pngs/410/100/png-transparent-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-text-thumbnail.png',
    details: 'HTML is the standard markup language for creating web pages.',
    percent: 90,
  },
  {
    name: 'CSS',
    image: 'https://w7.pngwing.com/pngs/473/634/png-transparent-css-hd-logo-thumbnail.png',
    details: 'CSS is used to control the style of a web document in a simple and easy way.',
    percent: 85,
  },
  {
    name: 'JavaScript',
    image: 'https://w7.pngwing.com/pngs/4/186/png-transparent-javascript-node-js-logo-computer-programming-programmer-others-miscellaneous-angle-text-thumbnail.png',
    details: 'JavaScript is a programming language commonly used in web development.',
    percent: 80,
  },
  {
    name: 'React',
    image: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png',
    details: 'React is a JavaScript library for building user interfaces.',
    percent: 75,
  },
  {
    name: 'Three.js',
    image: 'https://w7.pngwing.com/pngs/318/192/png-transparent-orthographic-projection-projection-matrix-perspective-perspective-projection-angle-triangle-projection-thumbnail.png',
    details: 'Three.js is a JavaScript library for creating 3D graphics in the browser.',
    percent: 65,
  },
  {
    name: 'GSAP',
    image: 'https://w7.pngwing.com/pngs/94/51/png-transparent-gsap-greensock-hd-logo-thumbnail.png',
    details: 'GSAP is a powerful JavaScript library for animations.',
    percent: 70,
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 100); // Delay for animation trigger
    return () => clearTimeout(timeout);
  }, [activeSkill]);

  return (
    <div className="skills-section">
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="skills-list">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className={`skill-item ${activeSkill.name === skill.name ? 'active' : ''}`}
              onMouseEnter={() => setActiveSkill(skill)}
            >
              {skill.name}
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`skill-details ${animate ? 'animate' : ''}`}>
          <img src={activeSkill.image} alt={activeSkill.name} />
          <h2>{activeSkill.name}</h2>
          <p>{activeSkill.details}</p>
          <div className="progress-bar large">
            <div
              className="progress"
              style={{ width: `${activeSkill.percent}%` }}
            ></div>
          </div>
          <p>{activeSkill.percent}% learned</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
