import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomerExperience.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ce1 from '../../images/ce1.png';
import ce2 from '../../images/ce2.png';
import ce3 from '../../images/ce3.png';
const CustomerExperience = () => (
  <div id='customer' className={styles.CustomerExperience}>
   <section>

<SectionHeader title='The Cafe customer experience' subtitle='See how your customers will experience the benefits of Cafe.'/>



<div className={styles.ceholder}>

<div className={styles.ceitem}>
    <div className={styles.cedescriptionholder}>
      <div className={styles.cenumber}>
        1.
        </div>
      <div className={styles.cedescription}>
      Customers tap the deal page link in your bio.
        </div>
    </div>
    <img className={styles.cedescriptionholderimg} src={ce1}/>
</div>

<div className={styles.ceitem}>
<div className={styles.cedescriptionholder}>
      <div className={styles.cenumber}>
        2.
        </div>
      <div className={styles.cedescription}>
      Redeem offers from deal page
        </div>
    </div>
    <img className={styles.cedescriptionholderimg} src={ce2}/>
</div>

<div className={styles.ceitem}>
<div className={styles.cedescriptionholder}>
      <div className={styles.cenumber}>
        3.
        </div>
      <div className={styles.cedescription}>
      Offers are automatically applied at checkout via POS.
SMS reminder is sent
        </div>
    </div>
    <img className={styles.cedescriptionholderimg} src={ce3}/>
</div>


</div>



   </section>
   



  </div>
);

CustomerExperience.propTypes = {};

CustomerExperience.defaultProps = {};

export default CustomerExperience;
