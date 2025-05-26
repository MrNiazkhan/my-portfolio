// src/Login.jsx
import React, { useState, useContext } from 'react';
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login'; // ✅ Normal import (no render-props)
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.token);
        navigate('/dashboard');
      } else {
        setErrorMsg(data.message || "Login Failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const token = credentialResponse.credential;
      const res = await fetch("http://localhost:5000/api/auth/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();

      if (res.ok) {
        login(data.token);
        navigate('/dashboard');
      } else {
        setErrorMsg(data.message || "Google login failed");
      }
    } catch (error) {
      console.error("Google login error:", error);
      setErrorMsg("Google login error");
    } finally {
      setLoading(false);
    }
  };

  // Facebook Login
  const responseFacebook = async (response) => {
    setLoading(true);
    setErrorMsg('');
    try {
      if (!response.accessToken) {
        setErrorMsg("Facebook login failed or cancelled");
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:5000/api/auth/facebook-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken: response.accessToken }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.token);
        navigate('/dashboard');
      } else {
        setErrorMsg(data.message || "Facebook login failed");
      }
    } catch (error) {
      console.error("Facebook login error:", error);
      setErrorMsg("Facebook login error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>

        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <span className="toggle-password" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" disabled={loading} /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="divider">or</div>

          <div className="social-login">
            {/* Google Login */}
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => setErrorMsg("Google login failed")}
              useOneTap
              disabled={loading}
            />

            {/* Facebook Login (normal version) */}
            <FacebookLogin
              appId="user@gmail.com" // 👉 Replace with your real App ID
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="facebook-btn"
              icon={<FaFacebookF />}
              textButton="&nbsp;&nbsp;Login with Facebook"
            />
          </div>
        </form>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
