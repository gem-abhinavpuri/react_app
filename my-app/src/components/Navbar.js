import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/react_app">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/react_app">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/danger">
                Moye Moye
              </Link>
            </li>
          </ul>
          {/* <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              } me-3`}
              htmlFor="flexSwitchCheckDefault"
            >
              Change to {props.mode === "light" ? "dark" : "light"} mode
            </label>
          </div> */}

          <div className="color-palette">
            <button
              className="color"
              onClick={props.toggleMode1}
              style={{ "--hue": 0 }}
            ></button>
            <button
              className="color"
              onClick={props.toggleMode2}
              style={{ "--hue": 30 }}
            ></button>
            <button
              className="color"
              onClick={props.toggleMode3}
              style={{ "--hue": 60 }}
            ></button>
            <button
              className="color"
              onClick={props.toggleMode4}
              style={{ "--hue": 207 }}
            ></button>
            <button
              className="color"
              onClick={props.toggleMode5}
              style={{ "--hue": 0 }}
            ></button>
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = { aboutText: "About Us" };
