import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          🚀 {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-bold text-warning"
                    : "nav-link"
                }
                to="/"
              >
                🏠 Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-bold text-warning"
                    : "nav-link"
                }
                to="/about"
              >
                ℹ️ About
              </NavLink>
            </li>
          </ul>

          {props.searchBar && (
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Todos..."
              />
              <button
                className="btn btn-outline-warning"
                type="submit"
              >
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Todo List",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};