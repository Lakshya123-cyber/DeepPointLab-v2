import React, { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";
import Toggle from "../toggle/Toggle";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbar-items">
        <img src={logo} className="logo" alt="logo" />
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuData.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.url} className={item.cName}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Toggle />
        </>
      </nav>
    );
  }
}

export default Navbar;
