import React from 'react';
import PropTypes from 'prop-types';
import styles from './BrandingFooter.module.css';
import powerlogo from '../../images/CafeBioLogo.svg';

const BrandingFooter = ({ logo = powerlogo }) => (
  <div className={styles.BrandingFooter}>
   <span>Powered by</span>
    <img className="promoimage" src={logo} />
  </div>
);

BrandingFooter.propTypes = {
  logo: PropTypes.string,
};

export default BrandingFooter;
