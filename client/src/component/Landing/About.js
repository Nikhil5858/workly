import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">About Workly</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>Workly is designed to empower freelancers by providing a seamless platform to find work, manage projects, and get paid. Whether you're a designer, developer, writer, or any other professional, Workly connects you to opportunities that match your skills.</p>
          </div>
          <div className="col-md-6">
            <img src="https://placehold.co/600x400" alt="About Workly" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;