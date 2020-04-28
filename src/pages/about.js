import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const About = ({ transitionStatus }) => {
  return transitionStatus === "exiting" ? (
    <Layout></Layout>
  ) : (
    <Layout>
      <SEO title="Sobre" />
      <h1>Fundada em 2019 pelo Ricardo Keigo, teste</h1>
    </Layout>
  )
}

export default About
