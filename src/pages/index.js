import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {}, [transitionStatus])
  return transitionStatus === "exiting" ? (
    <Layout></Layout>
  ) : (
    <Layout>
      <SEO title="Home" />
      <h1>
        Hello World! CodeHashi is a software house based in Campinas-SP. We love
        to code!
      </h1>
    </Layout>
  )
}

export default IndexPage
