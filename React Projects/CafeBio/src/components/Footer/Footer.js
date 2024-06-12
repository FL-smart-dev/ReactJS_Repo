import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();
const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#fff',  
  color: '#6c757d'  ,
  fontFamily: 'geologica-regular',
  fontSize: '0.8rem',
  fontStyle: 'normal',
};
const CBFooter = () => (
  
  <div style={footerStyle}>
     <p> Copyright &copy; {currentYear} CafeText, LLC. All rights reserved. </p>
  </div>
);

CBFooter.propTypes = {};

export default CBFooter;

