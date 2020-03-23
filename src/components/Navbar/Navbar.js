import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import logo from "../../img/logo.svg";

import styles from "./Navbar.module.scss";
import SocialIconLink from "../SocialIconLink/SocialIconLink";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={classnames(
              "navbar-menu",
              this.state.navBarActiveClass,
              styles.hoverMenu
            )}
          >
            <div className={classnames("navbar-start", "has-text-centered")}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className={classnames("navbar-end", styles.flex)}>
              <div className="navbar-item">
                {/* TODO add correct social links */}
                <SocialIconLink type="facebook" href="https://facebook.com" />
              </div>
              <div className="navbar-item">
                <SocialIconLink type="twitter" href="https://twitter.com" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
