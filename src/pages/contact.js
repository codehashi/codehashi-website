import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ContactLogos from "../components/Contact-logos/ContactLogos"

const Contact = ({ transitionStatus }) => {
  return transitionStatus === "exiting" ? (
    <Layout></Layout>
  ) : (
    <Layout>
      <SEO title="Contato" />
      <h1>
        Hello World! CodeHashi is a software house based in Campinas-SP. We love
        to code!
      </h1>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <ContactLogos />
      </div>
    </Layout>
  )
}

export default Contact
