import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import PropTypes from "prop-types";
import { setAnalytics } from '../../utils/api.services';



function FullScreenPromoItem(props) {
  if (props.trackAnalytics=='true'){
  setAnalytics({
          "page": "promo-loaded/",
          "merchantHandle": props.merchanthandle,
          "promo": props.wholepromo,
          "userAgent": navigator.userAgent,
          "host": window.location.host,
          "pathname": window.location.pathname,
          "time": new Date().toISOString(),
          "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone
        });
      }
  const renderHeader=(type) => {

    switch (type) {
      case '2-gradient':
        return (
          <div
            className="promoHeader"
            style={{
              background: `linear-gradient(43deg, ${
                "#" + props.promoprimarycolor
              } , ${"#" + props.promosecondarycolor} )`,
            }}
          >
            <img
              className="promoImage"
              src={
                props.promoimageheader && (props.promoimageheader.startsWith('http') || props.promoimageheader.startsWith('data'))
                  ? props.promoimageheader
                  : require(`../../images/cafebiopromoimages/${props.promoimageheader}`)
              }
            />
          </div>
        );

        break;
      case "single-color":
        return (
          <div
            className="promoHeader"
            style={{
              background: `${"#" + props.promoprimarycolor}`,
            }}
          >
            <img
              className="promoImage"
              src={
                props.promoimageheader && (props.promoimageheader.startsWith('http') || props.promoimageheader.startsWith('data'))
                  ? props.promoimageheader
                  : require(`../../images/cafebiopromoimages/${props.promoimageheader}`)
              }                        
            />
          </div>
        );

        break;

      case  'simplified' :
        
      
      break;
    
      default:
        break;
    }

  }
  const renderTitle = (type) =>{
    switch (type) {
      case "simplified":
        return (
          <div className='promoTitle' style={{ 
            color: `${'#' + props.promoprimarycolor}`
          }}>{props.promotitle}</div>
        )
        break;
    
      default:
        return (
          <div className='promoTitle'>
            {props.promotitle}
            </div>
        )
        break;
    }
  }

  // const renderButton = (inactive, merchanthandle, promoname, promobuttontext, wholepromo) => {
  //   const handleButtonClick = () => {
  //     // Set analytics before navigating
  //     setAnalytics({
  //       "page": "promo-redeem-click/",
  //       "merchantHandle": merchanthandle,
  //       "promo": wholepromo,
  //       "userAgent": navigator.userAgent,
  //       "host": window.location.host,
  //       "pathname": window.location.pathname,
  //       "time": new Date().toISOString(),
  //       "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone
  //     });
  //   };
  
  //   if (inactive === 'false') {
  //     return (
  //       <Link className='promoCopyHolder_linkholder' to={{ pathname: '/r/' + merchanthandle + "/" + promoname, state: { promo: wholepromo } }} onClick={handleButtonClick}>
  //         {promobuttontext}
  //       </Link>
  //     );
  //   } else {
  //     return null; // or any other fallback UI
  //   }
  // };





  const renderButton=(inactive,merchanthandle,promoname,promobuttontext)=>{
    if (inactive=='false'){
    return (
      <Link  className='promoCopyHolder_linkholder' to={'/r/' +merchanthandle +"/"+ promoname} state={{promo:props.wholepromo}} >
      {promobuttontext}
      </Link>
    )}
    else{
      
    }
  }
return(
<>
  <div className='promoHolder'>

    {
      renderHeader(props.promotype,props.backgroundcolor, props.messagecolor)
    }
    
    <div style={{backgroundColor:'#fff', width:'100%'}}>
      <div className='promoCopyHolder'>
      {
      renderTitle(props.promotype)
      }
        <div className='promoBody'>{props.promomessage}</div>
        <div >
          {renderButton(props.disable, props.merchanthandle, props.promoname, props.promobuttontext)}
        </div>
      </div>
    </div>
  </div>
</>

)

};

FullScreenPromoItem.propTypes = {};

export default FullScreenPromoItem;
