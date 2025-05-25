import React from 'react';
import './Home.css';
import CubeButton from './CubeButton';

const Home = () => {
  return (
    <div className='home'>
      <div className="homeleft">
        <img src="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h1 className="heading">
         <span className="line1">Welcome to my</span>
         <span className="line2">portfolio!</span></h1>
        <p>I am [Admin], a passionate web developer dedicated to creating modern, responsive, and user-friendly websites. With expertise in front-end and back-end technologies, I strive to deliver high-quality solutions that meet client needs and enhance user experience. Explore my projects to see how I turn ideas into reality with clean code <span className='line3'>and creative design.</span></p>
      </div>
      <div className="homeright">
        <CubeButton />
      </div>
    </div>
  );
};

export default Home;
