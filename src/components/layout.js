/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import styles from "./layout.module.css"
import {Container} from 'react-bootstrap';
const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.body}>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <Container>
          <main>
            {children}
          </main>
        </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
