import React from 'react';
import {Link} from 'react-router-dom';
import { Button,Modal } from 'antd';
import PropTypes from 'prop-types';
import styles from './promoItem.module.css';
import { act } from 'react-dom/test-utils';
import { socialMediaAsset } from '../../utils/AppStrings';








const renderButton=(inactive,merchanthandle,promoname,promobuttontext)=>{
  if (inactive=='false'){
  return (
    <Link to={'/r/' +merchanthandle +"/"+ promoname} >
    {promobuttontext}
    </Link>
  )}
  else{
    
  }
}
const SocialMediaPortraitItem = (props) => (


  <>
    <div className='igpromoHolder' style={{backgroundColor: '#'+props.promobackgroundcolor}}>

    {props.showImage && 
  
  <>
  <img
     className="promoImage" style={{maxHeight:'250px', maxWidth:'250px'}}
     src={
      props.promoimageheader && (props.promoimageheader.startsWith('http') || props.promoimageheader.startsWith('data'))
        ? props.promoimageheader
        : require(`../../images/cafebiopromoimages/${props.promoimageheader}`)
    }
   />
  </>
      }

    <div className='igpromoLeft' >
      <div className='title' style={{color:'#'+props.promotitlecolor, fontFamily:props.fontFamily}}>
      {props.promotitle}  
      </div>
      <div className='subtitle' style={{color:'#'+props.messagecolor, fontFamily:props.fontFamily}}>
      {props.promomessage} 
      </div>

{ props.showLinkInBio && 
      <div className='portraitSubtitle' style={{
        backgroundColor:'#'+props.messagecolor,
       
        borderRadius:'25px'
        }}>
     
      <div className='subtitle' style={{
      color:'#'+props.promobackgroundcolor,
      fontFamily:props.fontFamily,
      margin:'0.5rem',
      fontSize:'1.2rem'
       }}>
      {socialMediaAsset.linkInBio} 
      </div>
     

      </div>
      
}


    </div>
    
  </div>
</>


    
);

SocialMediaPortraitItem.propTypes = {};

export default SocialMediaPortraitItem;
