import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CompareTable.module.css';
import cafelogo from "../../images/CafeLogoCompare.png"
import squarelogo from "../../images/square.png"
import fivestarslogo from "../../images/fivestars.png"
import toogoodlogo from "../../images/toogoood.png"
import SectionHeader from '../SectionHeader/SectionHeader';
import {compare} from '../../utils/AppStrings'
import { Link } from 'react-router-dom';

const features = [
  { name: "Automated Marketing Messages", availability: [true, true, false, true] },  // formerly "SMS marketing tools"
  { name: "AI-Driven Campaign Design", availability: [true, false, false, false] },  // formerly "AI Marketing campaigns creation"
  { name: "Social Media Creation Tools", availability: [true, false, false, false] },  // formerly "Social media marketing tools"
  { name: "Automatic Reminder Notifications", availability: [true, false, false, false] },  // formerly "Automated offer reminders"
  { name: "Customizable Promotion Pages", availability: [true, false, false, false] },  // formerly "Custom deal page"
  { name: "Instant Deal Alerts", availability: [true, false, false, true] },  // formerly "Deal alerts"
  { name: "Extensive Library of AI Templates", availability: [true, false, false, false] },  // formerly "300+ AI Offer templates"
  { name: "Time-Sensitive Offers", availability: [true, false, false, true] },  // formerly "Time based offers"
  { name: "Shareable Promotions", availability: [true, false, false, false] },  // formerly "Sharable offers"
  { name: "Waste Reduction Tools", availability: [true, false, false, true] },  // formerly "Waste reduction offers"
  { name: "Budget-Friendly Promotional Campaigns", availability: [true, false, false, true] },  // formerly "Redemption/Budget based promotions"
  { name: "Feedback and Survey Tools", availability: [true, false, false, false] }  // formerly "Post redemption surveys"
];


// const features = [
//   { name: "SMS marketing tools", availability: [true, false, true, false] },
//   { name: "AI Marketing campaigns creation", availability: [true, true, false, true] },
//   { name: "Social media marketing tools", availability: [true, false, true, true] },
//   { name: "Automated offer reminders", availability: [true, true, false, true] },
//   { name: "Custom deal page", availability: [true, true, true, false] },
//   { name: "Deal alerts", availability: [true, true, false, false] },
//   { name: "300+ AI Offer templates", availability: [true, true, true, true] },
//   { name: "Time based offers", availability: [true, false, false, true] },
//   { name: "Sharable offers", availability: [true, true, true, false] },
//   { name: "Waste reduction offers", availability: [true, false, true, true] },
//   { name: "Redemption/Budget based promotions", availability: [true, true, false, true] },
//   { name: "Post redemption surveys", availability: [true, true, true, false] }
// ];
const CompareTable = (props) => {
  const renderDot = (available) => (
      <span style={{ 
          height: '10px', 
          width: '10px', 
          backgroundColor: available ? '#3BBD5F' : '#909491', 
          borderRadius: '50%', 
          display: 'inline-block' 
      }}></span>
  );
const [showOverlay,setShowOverlay] = useState(false);

// Google Analytics event function
const sendAnalyticsEvent = (action, category, label) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };
  const toggleSeeMore = ()=>{
    setShowOverlay(!showOverlay);
    sendAnalyticsEvent('compare_expand', 'Comparison', "expanded");
  }
  const featureRows = features.map((feature) => (
      <tr key={feature.name}>
          <td className={styles.featurename}>{feature.name}</td>
          {feature.availability.map((isAvailable, index) => (
              <td key={index}>{renderDot(isAvailable)}</td>
          ))}
      </tr>
  ));

  return (
    <section className={styles.overlayContainer}>
        {!showOverlay && (
        <div className={styles.overlay}>
            <div className={styles.overlaymenu}>
          <Link onClick={toggleSeeMore} className='borderbutton'>{compare.morebutton}</Link>
         

          <Link to="#pricing" className='borderbutton'>{compare.plansbutton}</Link>

          </div>
        </div>
      )}
    
    <SectionHeader title={compare.header} subtitle={compare.subtitle}/>
    <div className={styles.CompareTable}>
        <div className={styles.tablecontainer}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th><img src={cafelogo} className={styles.mainimg} /></th>
                        <th><img src={squarelogo} className={styles.competitorimg} /></th>
                        <th><img src={fivestarslogo} className={styles.competitorimg} /></th>
                        <th><img src={toogoodlogo} className={styles.competitorimg} /></th>
                    </tr>
                </thead>
                <tbody>
                    {featureRows}
                </tbody>
            </table>
        </div>
    </div>
  </section>
  );
};

export default CompareTable;
