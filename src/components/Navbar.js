import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="container size=sm">
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <Link className="navbar-brand" to="/textutils">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                {props.home}
                <span className="sr-only">current</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <button
            onClick={props.showColor}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Yellow
          </button>
          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
