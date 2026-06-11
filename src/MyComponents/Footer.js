import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <h5 className="mb-3">🚀 MyTodosList</h5>

        <p className="text-muted">
          Organize your tasks and boost your productivity.
        </p>

        <div className="mb-3">
          <a
            href="https://github.com"
            className="text-light mx-3 text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            className="text-light mx-3 text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:contact@mytodoslist.com"
            className="text-light mx-3 text-decoration-none"
          >
            Contact
          </a>
        </div>

        <hr className="bg-light" />

        <p className="mb-0">
          © {year} MyTodosList. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};