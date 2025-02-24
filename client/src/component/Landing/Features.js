import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Workly?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card feature-card">
              <div className="card-body text-center">
                <i className="bi bi-people fs-1 mb-3"></i>
                <h5 className="card-title">Connect with Clients</h5>
                <p className="card-text">Find and collaborate with clients from around the world effortlessly.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card feature-card">
              <div className="card-body text-center">
                <i className="bi bi-briefcase fs-1 mb-3"></i>
                <h5 className="card-title">Manage Projects</h5>
                <p className="card-text">Organize your tasks and deadlines in one intuitive platform.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card feature-card">
              <div className="card-body text-center">
                <i className="bi bi-currency-dollar fs-1 mb-3"></i>
                <h5 className="card-title">Secure Payments</h5>
                <p className="card-text">Get paid quickly and securely with our trusted payment system.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;