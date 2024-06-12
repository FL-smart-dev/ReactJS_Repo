import React from 'react';
import PropTypes from 'prop-types';
import styles from './BrandingHeader.module.css';
import DealPageMenu from '../DealPageMenu/DealPageMenu';


const displayCallButton=(props)=>{
  if(props.callbutton == 'true'){
    return(
      <>
      <div>call</div>
      <div>url </div>
      </>
    )
  } else {
  }
}

const BrandingHeader = (props) => (
 
  
  <>
    <div className='brandingHolder'>
        <div>
          <img className='brandingProfilePic' src={ props.merchantimage} ></img>
        </div>
        <div className="brandingHeader">
       { props.merchantname}
       <div className='handlename'>
        @{ props.merchanthandle}
       </div>
        </div>
        <DealPageMenu merchantMenu = {props.merchantMenu}/>
        <div>
        {displayCallButton(props)}
        </div>
        
</div>
<hr style={{color:'#d9d9d9'}}></hr>
  </>
);

BrandingHeader.propTypes = {};

export default BrandingHeader;



