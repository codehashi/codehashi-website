import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Divider from '../components/Common/Divider';

const About = ({ transitionStatus }) => {
  return transitionStatus === "exiting" ? (
    <Layout></Layout>
  ) : (
    <Layout>
      <Container>
        <SEO title="About" />
        <h1 className="mt-5">About</h1>
        <Divider/>
        <p>Founded in 2019, we are a business specialized on development of tailored software and app's, which meeting national and international
          clients, with focus on Web/IoT application in various market sectors. What sets us apart?? The art of make code!</p>
      </Container>
    </Layout>
  )
}

export default About
