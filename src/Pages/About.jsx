import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css';

const About = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-hero">
       <div className="hero-content">
  <h1>About Us</h1>
  <p className="hero-subtitle">Empowering productivity through innovative task management</p>
  
  <div className="about-content">
    <section className="about-section">
      <h2>Our Story</h2>
      <p>Founded in 2023, DATORS began as a small team of productivity enthusiasts frustrated with existing task management tools. We set out to build a solution that combines simplicity with powerful features, creating a seamless experience for individuals and teams alike.</p>
    </section>

    <section className="about-section">
      <h2>Our Mission</h2>
      <p>To revolutionize task management by developing intuitive software that helps people focus on what truly matters. We believe technology should enhance productivity without adding complexity to your workflow.</p>
    </section>

    <section className="about-section">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <div className="member-avatar"></div>
          <h3>Alex Johnson</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <div className="member-avatar"></div>
          <h3>Sarah Chen</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <div className="member-avatar"></div>
          <h3>Michael Rodriguez</h3>
          <p>UX Designer</p>
        </div>
      </div>
    </section>
  </div>

  <button className="cta-button">Join Our Community</button>
</div>
      </main>
      <Footer />
     
    </div>
  );
};

export default About;