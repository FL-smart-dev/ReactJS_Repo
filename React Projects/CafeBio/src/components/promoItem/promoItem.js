import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import PropTypes from "prop-types";
import { setAnalytics } from '../../utils/api.services';
import styles from './promoItem.module.css';
import { campaignItem } from "../../utils/AppStrings";
import { formatDate } from "../../utils/dateUtils";

// Passing the whole promo in the props is required
// TODO: Fix it where it only uses the wholepromo props

function PromoItem(props) {
  const { 
    trackAnalytics, 
    merchanthandle, 
    wholepromo, 
    promoprimarycolor, 
    promosecondarycolor, 
    promoimageheader, 
    promotitle, 
    promomessage, 
    promotype, 
    disable, 
    promoname, 
    promobuttontext, 
    dateend,
    redemptionLimit 
  } = props;

  const [showDetail, setShowDetail] = useState(false);
  const [dateEnd, setDateEnd] = useState("MM/DD/YY");
  const formatDate = (dateString) => {
    const options = { 
      year: '2-digit', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatOfferDate = (event) => {
    const formattedDate = formatDate(event);
    setDateEnd(formattedDate);
  };
  const redemptionsLeft =(redemptionCount)=>(
    <>
    <div className={styles.redemptionBubble}>
      {redemptionCount} left
    </div>
    </>
  )
  useEffect(() => {
    if (wholepromo && wholepromo.dateend) {
      //setDateEnd(wholepromo.dateend);
      formatOfferDate(wholepromo.dateend)
    } else if (dateend) {
      setDateEnd(dateend);
    }
   
  }, [wholepromo, dateend]);

  useEffect(() => {
    if (trackAnalytics === 'true') {
      setAnalytics({
        page: "promo-loaded/",
        merchantHandle: merchanthandle,
        promo: wholepromo,
        userAgent: navigator.userAgent,
        host: window.location.host,
        pathname: window.location.pathname,
        time: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    }
  }, [trackAnalytics, merchanthandle, wholepromo]);

  const renderHeader = (type) => {
    const imageSrc = promoimageheader && (promoimageheader.startsWith('http') || promoimageheader.startsWith('data'))
      ? promoimageheader
      : require(`../../images/cafebiopromoimages/${promoimageheader}`);

    switch (type) {
      case '2-gradient':
        return (
          <div
            className="promoHeader"
            style={{
              background: `linear-gradient(43deg, #${promoprimarycolor} , #${promosecondarycolor} )`,
            }}
          >
            <div className={styles.redemptionBubbleHolder}>
            {redemptionsLeft(redemptionLimit)}
            </div>
            <img
              className="promoImage"
              src={imageSrc}
              alt="Promo"
            />
           
          </div>
        );
      case "single-color":
        return (
          <div
            className="promoHeader"
            style={{
              background: `#${promoprimarycolor}`,
            }}
          >
             <div className={styles.redemptionBubbleHolder}>
            {redemptionsLeft(redemptionLimit)}
            </div>
            <img
              className="promoImage"
              src={imageSrc}
              alt="Promo"
            />
          </div>
        );
      case 'simplified':
        break;
      default:
        break;
    }
  }

  const renderTitle = (type) => {
    const titleStyle = type === "simplified" 
      ? { color: `#${promoprimarycolor}` } 
      : {};

    return (
      <div className='promoTitle' style={titleStyle}>
        {promotitle}
      </div>
    );
  }

  const renderRedeemButton = (inactive, merchanthandle, promoname, promobuttontext) => {
    if (inactive === 'false') {
      return (
        <Link className='promoCopyHolder_linkholder' to={`/r/${merchanthandle}/${promoname}`} state={{ promo: wholepromo }}>
          {promobuttontext}
        </Link>
      );
    } else {
      return null;
    }
  }

  const renderPromoDetailButton = (inactive) => {
    if (inactive === 'false') {
      return (
        <Button type="link" onClick={() => setShowDetail(true)}>Details</Button>
      );
    } else {
      return null;
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this promotion!',
        url: window.location.href
      }).then(() => {
        console.log('Promotion shared successfully');
      }).catch((error) => {
        console.error('Error sharing promotion:', error);
      });
    } else {
      console.log('Sharing not supported on this browser.');
    }
  };

  return (
    <>
      <div className='promoHolder'>
        
        {renderHeader(promotype)}
        <div style={{ backgroundColor: '#fff', width: '100%' }}>
          <div className='promoCopyHolder'>
            {renderTitle(promotype)}
            <div className='promoBody'>
              {promomessage}
            </div>
            <div className={styles.buttonContainer}>  
              {renderRedeemButton(disable, merchanthandle, promoname, promobuttontext)}
            </div>
            <div className={styles.campaignDetails}>
              <div>
                {campaignItem.expires} {dateEnd} 
              </div>
              <div>
                {renderPromoDetailButton(disable)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={wholepromo ? wholepromo.promotitle : ""}
        open={showDetail}
        onCancel={() => setShowDetail(false)}
        footer={null}
      >      
        <p><strong>Expiration Date</strong><br /> {wholepromo ? dateEnd : ""}</p>
        <div className={styles.divider}></div>
        <p><strong>Merchant</strong><br /> {wholepromo ? wholepromo.merchantname : ""}</p>
        <div className={styles.divider}></div>
        <p><strong>Details</strong><br /> {wholepromo ? wholepromo.promomessage : ""}</p>
        <div className={styles.divider}></div>
        <p><strong>Terms of Use</strong><br /> {wholepromo ? wholepromo.promoterms : ""}</p>
      </Modal>
    </>
  );
};

PromoItem.propTypes = {
  trackAnalytics: PropTypes.string,
  merchanthandle: PropTypes.string,
  wholepromo: PropTypes.object,
  promoprimarycolor: PropTypes.string,
  promosecondarycolor: PropTypes.string,
  promoimageheader: PropTypes.string,
  promotitle: PropTypes.string,
  promomessage: PropTypes.string,
  promotype: PropTypes.string,
  disable: PropTypes.string,
  promoname: PropTypes.string,
  promobuttontext: PropTypes.string,
  dateend: PropTypes.string,
};

export default PromoItem;
