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
      <h1 className="my-5">Sobre</h1>
      <p>Fundada em 2019, somos uma empresa especializada no desenvolvimento de sistemas e aplicativos sob medida, 
        que atende a clientes nacionais e internacionais, com foco em aplicações Web/IoT em diversos segmentos. O que nos diferencia? A arte de fazer código.</p>
    </Layout>
  )
}

export default About
