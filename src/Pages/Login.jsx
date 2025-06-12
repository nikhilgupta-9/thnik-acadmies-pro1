import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { email, password, rememberMe });
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to manage your tasks</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="/forgot-password" className="forgot-password">
                Forgot password?
              </a>
            </div>
            
            <button type="submit" className="login-button">
              Sign In
            </button>
            
            <div className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </form>
          
          <div className="social-login">
            <p>Or sign in with</p>
            <div className="social-icons">
              <button className="social-icon google">
                <i className="fab fa-google"></i>
              </button>
              <button className="social-icon github">
                <i className="fab fa-github"></i>
              </button>
              <button className="social-icon twitter">
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;