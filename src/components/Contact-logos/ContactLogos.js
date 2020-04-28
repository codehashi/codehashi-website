import React from "react"

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"

import styles from "./styles.module.css"

const ContactLogos = ({}) => {
  return (
    <div className={styles.icons}>
      <a href="#" className={styles.icon}>
        <FaInstagram size={50} color={"#000"} />
      </a>
      <a href="#" className={styles.icon}>
        <FaFacebookF size={50} color={"#000"} />
      </a>
      <a href="#" className={styles.icon}>
        <FaLinkedinIn size={50} color={"#000"} />
      </a>
      <a href="#" className={styles.icon}>
        <FaGithub size={50} color={"#000"} />
      </a>
    </div>
  )
}

export default ContactLogos
