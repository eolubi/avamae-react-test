import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavigationBar.module.css';
import companyLogo from '../icons/Logo.svg';

function NavigationBar() {
  return (
    <nav className={styles['navigation-bar']}>
      <div className={styles['logo-container']}>
        <img className={styles.logo} src={companyLogo} alt="Company Logo" />
      </div>
      <div className={styles['home-about-us-contact-us']}>
        <ul className={styles['nav-links']}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about-us">ABOUT US</Link></li>
          <li><Link to="/contact-us">CONTACT US</Link></li>
        </ul>
      </div>
      <div className={styles['login-button-box']}>
        <button className={styles['login-button']}>Log In</button>
      </div>
    </nav>
  );
}

export default NavigationBar;
