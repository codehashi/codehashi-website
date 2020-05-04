import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container } from 'react-bootstrap';

const Clients = ({ transitionStatus }) => {
    return transitionStatus === "exiting" ? (
        <Layout></Layout>
      ) : (
        <Layout>
          <SEO title="Clients" />
          <Container>
            <h1>Clients</h1>
          </Container>
        </Layout>

    )
}

export default Clients;