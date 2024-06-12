import React, { useState } from 'react';
import { Tooltip } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
//import 'antd/dist/antd.css';
import styles from './PricingTable.module.css';
import { pricing } from '../../utils/AppStrings';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Link } from 'react-router-dom';


const plans = [
  {
    name: 'Starter Plan',
    suggestion:'Great starting plan for individual locations that want to generate more foot traffic.',
    price: '$19.99',
    pricePerLocation:'per location, per month',
    features: [
      'Personalized Deal Page',
      'Square Integration',
      'Social Media Post Creation Tools',
      'Campaign Creation Tools',
      'Creation of Cash Back Offers and Discounts',
      'Email Support (48 Hours)'
    ],
    trial: 'Try free for 30 days',
    link: '#starter',
    paylink:'https://buy.stripe.com/cN2aHNaJgfn7eKAfZ1'
  },
  {
    name: 'Growth Plan',
    suggestion:'Ideal plan for growing operations that need better digital tools to boost sales and foot traffic.',
    price: '$39.99',
    pricePerLocation:'per location, per month',
    features: [
      'Includes all Starter Plan features',
      'Campaign Analytics',
      'Offer Templates',
      'Hours and Locations',
      'Limited Redemptions per Deal',
      'Points Per Purchase',
      'SMS Text Message Blast',
      'Text Messaging Reminders',
      'Email Support (24 Hours)'
    ],
    trial: 'Try free for 30 days',
    link: '#growth',
    paylink:'https://buy.stripe.com/8wM03904C5MxfOE6os'
  },
  {
    name: 'Premium Plan',
    price: '$59.99',
    pricePerLocation:'per location, per month',
    suggestion:'Flexibility and efficiency. This plan includes advanced support and monthly coaching sessions.',
    features: [
      'Includes all Growth Plan features',
      'Advanced Campaign Management',
      'Ad Free Experience',
      'Events Links',
      'Zoom Support',
      'Email Support (12 Hours)'
    ],
    trial: 'Try free for 30 days',
    link: '#premium',
    paylink:'https://buy.stripe.com/5kA8zF04C5MxaukdQV'
  }
];

// Google Analytics event function
const sendAnalyticsEvent = (action, category, label) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};
const PricingTable = (props) => {
  const [showPriceDiv,setShowPriceDiv] = useState(false);
 
  const togglePrice = (planName) => {
    setShowPriceDiv(!showPriceDiv);
    sendAnalyticsEvent('pricing_expand', 'Pricing', planName);
  };
 
  return(
  <>
  <section id='pricing'>
  <SectionHeader title={pricing.header} subtitle={pricing.subtitle} />
  
  <div className={styles.PricingTable}>
  
    {plans.map(plan => (
      <div className={styles.planCard} key={plan.name}>
        <div className={styles.planHeader}>
          <h4>{plan.name}</h4>
          </div>
          <p className={styles.plansubtitle}>
          {plan.suggestion}
          </p>
        <ul className={styles.featureList}>
          {plan.features.map(feature => (
            <li className={styles.featureItem} key={feature}>
              <CheckCircleFilled className={styles.icon} />
              {feature}
            </li>
          ))}
        </ul>

        {showPriceDiv &&
        <div className={styles.pricingblock}>
          
          <SectionHeader title={plan.price} subtitle={plan.pricePerLocation}/>
          <a href={plan.paylink} className='solidbutton'>{plan.trial}</a>

        </div>
        } 

        {!showPriceDiv && 

        <Link onClick={()=>togglePrice(plan.name)}
        className='borderbutton'>{pricing.seePricingButton}</Link>
                // <button 
                // onClick={togglePrice}
                // className='borderbutton'
                // >
                //   {pricing.seePricingButton}
                // </button>
        }

        <div className={styles.priceButtonContainer}>
          
        {props.showTrial=='true' &&
          <>
          <a href={plan.link} className='solidbutton'>{plan.trial}</a>
          </> 
          }

        {props.showPrice=='true' &&
          <>
          <div className={styles.featureItem}>{plan.trial}</div>
          <a href={plan.link} className='solidbutton'>{plan.price}</a>
          </> 
          }
          
        </div>
      </div>
    ))}
  </div>

  </section>
  </>)
};

export default PricingTable;
