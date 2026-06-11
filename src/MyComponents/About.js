import React from "react";

export const About = () => {
  return (
    <div className="container my-5">
      <div
        className="card shadow-lg border-0 p-4"
        style={{ borderRadius: "15px" }}
      >
        <div className="text-center">
          <h1 className="mb-3">🚀 About Us</h1>
          <p className="lead text-muted">
            Welcome to our platform! We are passionate about creating amazing
            experiences for users.
          </p>
        </div>

        <hr />

        <div className="row text-center mt-4">
          <div className="col-md-4 mb-3">
            <h3>💡 Innovation</h3>
            <p>
              We continuously explore new ideas and technologies to deliver
              better solutions.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h3>🤝 Collaboration</h3>
            <p>
              Teamwork and communication help us build products users love.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h3>🎯 Quality</h3>
            <p>
              Our focus is on providing reliable, efficient, and user-friendly
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};