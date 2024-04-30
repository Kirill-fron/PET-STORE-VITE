import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";
import LOGOfecebook from "../../images/facebook.svg";
import LOGOinstagram from "../../images/instagram.svg";
import LOGOyoutube from "../../images/youtube.svg";
const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="Stuff" />
      </Link>
    </div>

    <div className={styles.rights}>
      Developed by{" "}
      <a href="https://github.com/Kirill-fron" target="_blank" rel="noreferrer">
        Shakirov
      </a>
    </div>

    <div className={styles.socials}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img className={styles.icon} src={LOGOfecebook} alt="fecebook" />
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <img className={styles.icon} src={LOGOinstagram} alt="instagram" />
      </a>

      <a href="https://youtube.com" target="_blank" rel="noreferrer">
      <img className={styles.icon} src={LOGOyoutube} alt="youtube" />
      </a>
    </div>
  </section>
);

export default Footer;
