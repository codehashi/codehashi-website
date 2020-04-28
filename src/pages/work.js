import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = ({ transitionStatus }) => {
  return transitionStatus === "exiting" ? (
    <Layout></Layout>
  ) : (
    <Layout>
      <SEO title="Trabalhe conosco"></SEO>
      <div>
        <h1>Trabalhe conosco!</h1>
      </div>
    </Layout>
  )
}

export default Work
