import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-hero">
        <div className="hero-content">
          <h1>Welcome to DATORS Task Manager</h1>
          <p className="hero-subtitle">Manage your tasks efficiently with our powerful tool</p>
          <button className="cta-button">Get Started</button>
        </div>
      </main>
      <Footer />
     
    </div>
  );
};

export default Home;