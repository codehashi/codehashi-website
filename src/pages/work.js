import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaUser, FaPhone, FaCommentAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { Form, Button, Container }  from 'react-bootstrap';

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

        <div>
          <h1>Trabalhe conosco!</h1>
        </div>
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
              <FaBriefcase size={20} className="position-relative input-icon"/><input className="input form-control pl-5 py-4 rounded-0" placeholder="Cargo Pretendido" name="email" type="email"/>
            </div>
            <div>
              <FaCommentAlt size={20} className="position-relative input-icon"/><textarea className="input form-control pl-5 py-2 rounded-0" placeholder="Mensagem (Opcional)" rows="10" name="msg"/>
              <input onChange={(e) => handleChange(e)} id="doc" className="mt-3" type="file" accept="application/pdf"/>
              <label for="doc">Selecione seu currículo...</label><label className="ml-1">{selectedFile}</label>
            </div>
              <Button variant="outline-secondary" type="submit" size="lg" className="w-100 mt-3 py-3 rounded">Enviar</Button>
          </Form>
        </div>
      </Container>
    </Layout>
  )
}

export default Work
