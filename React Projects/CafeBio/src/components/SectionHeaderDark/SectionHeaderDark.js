import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeaderDark.module.css';

const SectionHeaderDark = (props) => (
 
 
    <div className={styles.SectionHeader}>
     <div className={styles.sectionTitle}>{props.title}</div>
     <div className={styles.sectionSubtitle}>{props.subtitle}</div>
    </div>
    
  
);

SectionHeaderDark.propTypes = {};

SectionHeaderDark.defaultProps = {};

export default SectionHeaderDark;
