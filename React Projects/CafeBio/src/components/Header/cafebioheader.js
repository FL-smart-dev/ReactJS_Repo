import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logosvg from '../../images/CafeBioLogo.svg';
import { header } from '../../utils/AppStrings';
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';

const CafeBioHeader = () => (
  <div className={styles.headerholder}>

      <div className={styles.logoimage}>
        <a href="/" className={styles.link}>
            <img src={logosvg} alt="Cafe.bio"/>
        </a>
      </div>
      
      <div className={styles.headermenu}>
            <ul>
               <li><a href="/" className={styles.link}>Home</a></li>
               <li><a href="/#howitworks" className={styles.link}>How It Works</a></li>
               <li><a href="/#pricing" className={styles.link}>Plans</a></li>
               <li><a href="/#faq" className={styles.link}>Faq</a></li>
               <li><a href="/signup" className={styles.link}>Login</a></li>
               {/* <li><a href="/beta" className={styles.link}>Join our beta program</a></li> */}
               {/* <li>Login/Sign-Up</li> */}
            </ul>
      </div>
      

  </div>
);

CafeBioHeader.propTypes = {};

CafeBioHeader.defaultProps = {};

export default CafeBioHeader;
