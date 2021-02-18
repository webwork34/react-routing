import React from "react";
import { NavLink, useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  const goToHomeHandler = () => {
    history.push("/");
  };

  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/main">Main Page</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Page</NavLink>
        </li>
        <li>
          <NavLink to="/cards">Cards Page</NavLink>
        </li>
        <li>
          <button onClick={goToHomeHandler}>Go To Home</button>
        </li>
      </ul>
    </nav>
  );
};
