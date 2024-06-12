import React from 'react';
import PropTypes from 'prop-types';
import styles from './HowItWorks.module.css';
import SectionHeaderDark from '../SectionHeaderDark/SectionHeaderDark';
import { howitworks } from '../../utils/AppStrings';

const HowItWorks = () => (
  <div id='howitworks' className={styles.HowItWorks}>
    <section>
      <div className={styles.hiwcontentholder}>
<SectionHeaderDark title={howitworks.title} subtitle={howitworks.subtitle}/>
      </div>
      <div className={styles.hiwflexholder}>

      <div>
      <iframe width="325" height="200" src="https://www.youtube.com/embed/nVS2y6G2Lds?si=arVYXx6m2zpJPfyl&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className={styles.hiwcontentcontainer}>
        <div className={styles.hiwcontenttitle}>{howitworks.contenttitle}
        </div>
        <div className={styles.hiwcontentsubtitle}>{howitworks.contentsubtitle}
        </div>
        <a href={howitworks.cta1Link} className='solidbuttonwhite'>
        {howitworks.cta1}
        </a>

        <a href={howitworks.cta2Link} className='solidbuttonwhite'>
        {howitworks.cta2}
        </a>
      </div>
      </div>
    </section>
    
  </div>
);

HowItWorks.propTypes = {};

HowItWorks.defaultProps = {};

export default HowItWorks;
