import React, { useEffect } from "react"
import { Navbar, Nav } from "react-bootstrap"
import classNames from "classnames"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "gatsby-plugin-transition-link"

import styles from "./header.module.css"

import logo from "../../images/codehashi.png"
import TransitionPortal from "gatsby-plugin-transition-link/components/TransitionPortal"
import { Location } from "@reach/router"

const Header = ({ siteTitle, location }) => {
  // useEffect(() => {
  //   console.log("Location: ", location)
  // }, [])
  return (
    <Navbar collapseOnSelect expand="md" className={`${styles.header} shadow`}>
      <Navbar.Brand>
        <AniLink cover to="/" direction="right" bg="#BE1616">
          <img src={logo} alt="Codehashi" title="Codehashi" className={styles.logo}></img>
        </AniLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className={styles.nav}>
          <Nav.Link>
            <AniLink
              cover
              to="/about"
              bg="#BE1616"
              activeStyle={{
                textDecoration: "underline",
                color: "#BE1616",
                textDecorationColor: "#000",
              }}
            >
              About
            </AniLink>
          </Nav.Link>

          <Nav.Link className="nav-link">
            <AniLink
              cover
              to="/contact"
              bg="#BE1616"
              activeStyle={{
                textDecoration: "underline",
                color: "#BE1616",
                textDecorationColor: "#000",
              }}
            >
              Contact
            </AniLink>
          </Nav.Link>

          <Nav.Link>
            <AniLink
              cover
              to="/clients"
              bg="#BE1616"
              activeStyle={{
                textDecoration: "underline",
                color: "#BE1616",
                textDecorationColor: "#000",
              }}
            >
              Clients
            </AniLink>
          </Nav.Link>

          <Nav.Link className="nav-link">
            <AniLink
              cover
              to="/work"
              bg="#BE1616"
              activeStyle={{
                textDecoration: "underline",
                color: "#BE1616",
                textDecorationColor: "#000",
              }}
            >
              Careers
            </AniLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
