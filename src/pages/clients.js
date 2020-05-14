import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Row } from 'react-bootstrap';
import Divider from '../components/Common/Divider';
import ameaLogo from '../images/amea.png';
import araunahLogo from '../images/araunah.png';


const Clients = ({ transitionStatus }) => {
    return transitionStatus === "exiting" ? (
        <Layout></Layout>
      ) : (
        <Layout>
          <SEO title="Clients" />
          <Container>
            <h1 className="mt-5">Clients</h1>
            <Divider/>
            <Row className="justify-content-between align-items-center">
              <img className="img-fluid w-25" src={ameaLogo} title="Amea Construtora" alt="Amea Construtora"/>
              <img className="img-fluid w-25 h-25" src={araunahLogo} title="Grupo Araunah" alt="Grupo Araunah"/>
            </Row>
          </Container>
        </Layout>

    )
}

export default Clients;