import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeader.module.css';

const SectionHeader = (props) => (
 
  <div className={styles.SectionHeader}>
   <div className={styles.sectionTitle}>{props.title}</div>
   <div className={styles.sectionSubtitle}>{props.subtitle}</div>
  </div>
  
);

SectionHeader.propTypes = {};

SectionHeader.defaultProps = {};

export default SectionHeader;
