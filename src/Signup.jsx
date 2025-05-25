import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';  // Aap is file mein CSS likh sakte ho for styling

const Signup = () => {
  return (
    <div className="auth-form-container">
      <form className="auth-form">
        <h2>Create Account</h2>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Your full name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="example@mail.com" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Create a password" required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />

        <button type="submit" className="btn-submit">Sign Up</button>

        <p className="auth-toggle-text">
          Already have an account? <Link to="/login" className="auth-toggle-link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
