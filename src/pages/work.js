import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row }  from 'react-bootstrap';
import Divider from '../components/Common/Divider';
import aws from '../images/aws.png';
import dynamodb from '../images/dynamodb-icon.png';
import mongodb from '../images/mongodb.png';
import materialui from '../images/materialui.png';
import nodejs from '../images/nodejs.png';
import reactjs from '../images/reactjs.png'

const Work = ({ transitionStatus }) => {

  const [selectedFile, setSelectedFile] = useState("Nenhum arquivo selecionado");

  const handleChange = (e) => {
    if(e.target.files.length > 0){
      setSelectedFile(e.target.files[0].name);
    } 
  }

  return transitionStatus === "exiting" ? (
    <Layout></Layout>
  ) : (
    <Layout>
      <SEO title="Trabalhe conosco"></SEO>
      <Container>
        <div className="my-5">
          <h1>Work Us!</h1>
          <Divider/>
          <h2>How Is Our Daily</h2>
          <p>We work in Home Office, this provides more flexibility to our team. 
            For us unforeseen time and distance are not obstacles, our team is 
            always connected,</p>
        </div>
          <h2>What Technologies We Use</h2>
          <p>Our team use ever the technologies most current of I.T market, objetiving turn innovation not only a goal but a daily reality</p>
          <Row>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <img className="img-fluid w-75" src={nodejs} alt="Node.JS"/>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <img className="img-fluid w-75" src={mongodb} alt="MongoDB"/>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <img className="img-fluid w-75" src={materialui} alt="Material UI"/>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <img className="img-fluid w-75" src={dynamodb} alt="Dynamo DB"/>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <img className="img-fluid w-75" src={aws} alt="AWS"/>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <img className="img-fluid w-75" src={reactjs} alt="React JS and Native"/>
            </div>
          </Row>
          <Row className="my-5 justify-content-center">
            <a target="_blank" href="mailto:codehashi@codehashi.com.br" className="btn btn-lg main-button py-3 px-5 w-25">Work Us</a>
          </Row>
      </Container>
    </Layout>
  )
}

export default Work
