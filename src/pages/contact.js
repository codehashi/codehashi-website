import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Form, Button, Container } from 'react-bootstrap';
import { FaUser, FaPhone, FaCommentAlt, FaEnvelope } from 'react-icons/fa';
import '../components/styles/contact.css'

const Contact = ({ transitionStatus }) => {
  return transitionStatus === "exiting" ? (
    <Layout></Layout>
  ) : (
    <Layout>
      <SEO title="Contato" />
      <Container>
        <h1>Contato</h1>
        <div className="mt-4 col-lg-7 offset-lg-1">
          <Form className="form-contact mb-5">
            <div>
              <FaUser size={20} className="position-relative input-icon"/><input className="input form-control pl-5 py-4 rounded-0" placeholder="Nome" name="name"/>
            </div>
            <div>
              <FaPhone size={20} className="position-relative input-icon"/><input className="input form-control pl-5 py-4 rounded-0" placeholder="Telefone" name="phone"/>
            </div>
            <div>
              <FaEnvelope size={20} className="position-relative input-icon"/><input className="input form-control pl-5 py-4 rounded-0" placeholder="E-Mail" name="email" type="email"/>
            </div>
            <div>
              <FaCommentAlt size={20} className="position-relative input-icon"/><textarea className="input form-control pl-5 py-2 rounded-0" placeholder="Mensagem" rows="10" name="msg"/>
            </div>
              <Button variant="outline-secondary" type="submit" size="lg" className="w-100 mt-3 py-3 rounded">Enviar</Button>
          </Form>
        </div>
      </Container>
    </Layout>
  )
}

export default Contact
