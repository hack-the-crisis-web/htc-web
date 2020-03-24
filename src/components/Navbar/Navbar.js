import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

import styles from "./Navbar.module.scss";
import SocialIconLink from "../SocialIconLink/SocialIconLink";
import Brand from "../Brand/Brand";
import NavLink from "../NavLink/NavLink";

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
    const navLinkClassnames = classnames("navbar-item", styles.navItem);
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Brand></Brand>
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
            <div
              className={classnames(
                "navbar-start",
                "has-text-right",
                "has-text-centered-desktop",
                styles.spaceRight
              )}
            >
              <NavLink to="/about" className={navLinkClassnames}>
                About
              </NavLink>
              <NavLink to="/products" className={navLinkClassnames}>
                Products
              </NavLink>
              <NavLink to="/blog" className={navLinkClassnames}>
                Blog
              </NavLink>
              <NavLink to="/contact" className={navLinkClassnames}>
                Contact
              </NavLink>
              <NavLink to="/contact/examples" className={navLinkClassnames}>
                Form Examples
              </NavLink>
            </div>
            <div
              className={classnames(
                "navbar-end",
                "has-text-right",
                styles.spaceRight
              )}
            >
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
