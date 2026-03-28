import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>About</span>
      </div>

      <h1 className="about-title">About Us</h1>

      <div className="about-content">
        {/* Our Mission */}
        <div className="about-section mission-section">
          <div className="about-text">
            <h2>Our Mision</h2>
            <p>
              "To empower parents by providing thoughtfully designed, safe, and sustainable baby essentials that
              make childcare easier and more enjoyable for every family". "To be the go-to online store for parents
              seeking reliable, expertly curated baby products, ensuring peace of mind with every purchase". "To
              offer innovative, high-quality baby gear and apparel that promote infant comfort, safety, and healthy
              development from day one"
            </p>
          </div>
          <div className="about-image">
            <img src="/about-mother.jpg" alt="Mother and baby" />
          </div>
        </div>

        {/* Our Vision */}
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            "To create a world where every new parent has access to the best resources and products, fostering a
            generation of healthy, happy, and thriving children". "To become the most beloved and trusted global
            community for parents, known for our commitment to quality, innovation, and family well-being". "To
            revolutionize the way families shop for baby products, setting the standard for sustainability,
            transparency, and personalized support in the industry".
          </p>
        </div>

        {/* Map */}
        <div className="about-map">
          <img src="/about-map.jpg" alt="Our Location" />
        </div>
      </div>
    </div>
  );
};

export default About;
