import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend logic yahan aayega
    console.log("Login submitted");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
              />
              <span className="toggle-password" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="divider">or</div>

          <div className="social-login">
            <button className="google"><FaGoogle /> Login with Google</button>
            <button className="facebook"><FaFacebookF /> Login with Facebook</button>
          </div>

        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
    