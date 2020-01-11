import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar navbar-light justify-content-between">
      <NavLink to={"profile"} className="navbar-brand">
        {/* <i className="fab fa-reddit fa-2x red"></i> */}
        <img
          className="reddit-logo"
          src={require("../../assets/reddit-logo.jpg")}
          alt="reddit logo"
          height="40px"
        />
      </NavLink>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline my-2 my-sm-0" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="row">
        <div className="col">
          <i className="fas fa-poll nav-icon"></i>
        </div>
        <div className="col">
          <i className="fas fa-fire-alt nav-icon"></i>
        </div>
        <div className="col">
          <i className="fas fa-user nav-icon"></i>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
