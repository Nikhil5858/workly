import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section text-center" style={{ background: 'linear-gradient(135deg, #6e8efb, #a777e3)', color: 'white', padding: '100px 0' }}>
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Welcome to Workly</h1>
        <p className="lead mb-4">Your ultimate platform for freelancing success. Connect, work, and grow with ease.</p>
        <a href="#" className="btn btn-light btn-lg">Start Freelancing Now</a>
      </div>
    </section>
  );
};

export default Hero;