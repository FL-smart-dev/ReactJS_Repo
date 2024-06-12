import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logosvg from '../../images/CafeBioLogo.svg';

const CBHeader = ({ logoSrc = logosvg }) => (
  <div className={styles.headerholder}>
    <div className={styles.logoimage}>
      <a href="/" className={styles.link}>
        <img src={logoSrc} alt="CafeBio Logo" />
      </a>
    </div>

    <div className={styles.headermenu}>
      <ul>
        <li><a href="/" className={styles.link}>Home</a></li>
        <li><a href="/#howitworks" className={styles.link}>How It Works</a></li>
        <li><a href="/#pricing" className={styles.link}>Plans</a></li>
        <li><a href="/#faq" className={styles.link}>Faq</a></li>
        <li><a href="/signup" className={styles.link}>Login</a></li>
      </ul>
    </div>
  </div>
);

CBHeader.propTypes = {
  logoSrc: PropTypes.string,
};

export default CBHeader;
