import React from "react";

import { Container } from 'react-bootstrap';

import './footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (  
    <footer className="footer">
      <Container className="py-4">
          <small>&copy; Copyright {year}, Codehashi</small>
      </Container>
    </footer>
  )
}

export default Footer
