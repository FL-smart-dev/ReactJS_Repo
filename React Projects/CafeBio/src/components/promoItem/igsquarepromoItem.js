import React from 'react';
import {Link} from 'react-router-dom';
import { Button,Modal } from 'antd';
import PropTypes from 'prop-types';
import styles from './promoItem.module.css';
import img24 from '../../images/image24.png' ;
import img25 from '../../images/image25.png' ;
import img27 from '../../images/image27.png' ;

import img_001 from '../../images/promoimages/img_001.png' ;
import img_002 from '../../images/promoimages/img_002.png' ;
import img_003 from '../../images/promoimages/img_003.png' ;
import img_004 from '../../images/promoimages/img_004.png' ;
import img_005 from '../../images/promoimages/img_005.png' ;
import img_006 from '../../images/promoimages/img_006.png' ;
import img_007 from '../../images/promoimages/img_007.png' ;
import img_008 from '../../images/promoimages/img_008.png' ;
import img_009 from '../../images/promoimages/img_009.png' ;
import img_010 from '../../images/promoimages/img_010.png' ;
import img_011 from '../../images/promoimages/img_011.png' ;
import img_012 from '../../images/promoimages/img_012.png' ;
import img_013 from '../../images/promoimages/img_013.png' ;
import img_014 from '../../images/promoimages/img_014.png' ;
import img_015 from '../../images/promoimages/img_015.png' ;
import img_016 from '../../images/promoimages/img_016.png' ;
import img_017 from '../../images/promoimages/img_017.png' ;
import img_018 from '../../images/promoimages/img_018.png' ;
import img_019 from '../../images/promoimages/img_019.png' ;
import img_020 from '../../images/promoimages/img_020.png' ;
import img_021 from '../../images/promoimages/img_021.png' ;
import img_022 from '../../images/promoimages/img_022.png' ;
import img_023 from '../../images/promoimages/img_023.png' ;
import img_024 from '../../images/promoimages/img_024.png' ;
import img_025 from '../../images/promoimages/img_025.png' ;
import img_026 from '../../images/promoimages/img_026.png' ;
import img_027 from '../../images/promoimages/img_027.png' ;
import img_028 from '../../images/promoimages/img_028.png' ;
import img_029 from '../../images/promoimages/img_029.png' ;
import img_030 from '../../images/promoimages/img_030.png' ;
import img_031 from '../../images/promoimages/img_031.png' ;
import img_032 from '../../images/promoimages/img_032.png' ;
import img_033 from '../../images/promoimages/img_033.png' ;
import img_034 from '../../images/promoimages/img_034.png' ;
import img_035 from '../../images/promoimages/img_035.png' ;
import img_036 from '../../images/promoimages/img_036.png' ;
import img_037 from '../../images/promoimages/img_037.png' ;
import img_038 from '../../images/promoimages/img_038.png' ;
import img_039 from '../../images/promoimages/img_039.png' ;
import img_040 from '../../images/promoimages/img_040.png' ;
import img_041 from '../../images/promoimages/img_041.png' ;
import img_042 from '../../images/promoimages/img_042.png' ;
import img_043 from '../../images/promoimages/img_043.png' ;
import img_044 from '../../images/promoimages/img_044.png' ;
import img_045 from '../../images/promoimages/img_045.png' ;
import img_046 from '../../images/promoimages/img_046.png' ;
import img_047 from '../../images/promoimages/img_047.png' ;
import img_048 from '../../images/promoimages/img_048.png' ;
import img_049 from '../../images/promoimages/img_049.png' ;
import img_050 from '../../images/promoimages/img_050.png' ;
import img_051 from '../../images/promoimages/img_051.png' ;
import img_052 from '../../images/promoimages/img_052.png' ;
import img_053 from '../../images/promoimages/img_053.png' ;
import img_054 from '../../images/promoimages/img_054.png' ;
import img_055 from '../../images/promoimages/img_055.png' ;
import img_056 from '../../images/promoimages/img_056.png' ;
import img_057 from '../../images/promoimages/img_057.png' ;
import img_058 from '../../images/promoimages/img_058.png' ;
import img_059 from '../../images/promoimages/img_059.png' ;
import img_060 from '../../images/promoimages/img_060.png' ;
import img_061 from '../../images/promoimages/img_061.png' ;
import img_062 from '../../images/promoimages/img_062.png' ;
import img_063 from '../../images/promoimages/img_063.png' ;
import img_064 from '../../images/promoimages/img_064.png' ;
import img_065 from '../../images/promoimages/img_065.png' ;
import img_066 from '../../images/promoimages/img_066.png' ;
import img_067 from '../../images/promoimages/img_067.png' ;
import img_068 from '../../images/promoimages/img_068.png' ;
import img_069 from '../../images/promoimages/img_069.png' ;
import img_070 from '../../images/promoimages/img_070.png' ;
import img_071 from '../../images/promoimages/img_071.png' ;
import img_072 from '../../images/promoimages/img_072.png' ;
import img_073 from '../../images/promoimages/img_073.png' ;
import img_074 from '../../images/promoimages/img_074.png' ;
import img_075 from '../../images/promoimages/img_075.png' ;
import img_076 from '../../images/promoimages/img_076.png' ;
import img_077 from '../../images/promoimages/img_077.png' ;
import img_078 from '../../images/promoimages/img_078.png' ;
import img_079 from '../../images/promoimages/img_079.png' ;
import img_080 from '../../images/promoimages/img_080.png' ;
import img_081 from '../../images/promoimages/img_081.png' ;
import img_082 from '../../images/promoimages/img_082.png' ;
import img_083 from '../../images/promoimages/img_083.png' ;
import img_084 from '../../images/promoimages/img_084.png' ;
import img_085 from '../../images/promoimages/img_085.png' ;
import img_086 from '../../images/promoimages/img_086.png' ;
import img_087 from '../../images/promoimages/img_087.png' ;
import img_088 from '../../images/promoimages/img_088.png' ;
import img_089 from '../../images/promoimages/img_089.png' ;
import img_090 from '../../images/promoimages/img_090.png' ;
import img_091 from '../../images/promoimages/img_091.png' ;
import img_092 from '../../images/promoimages/img_092.png' ;
import img_093 from '../../images/promoimages/img_093.png' ;
import img_094 from '../../images/promoimages/img_094.png' ;
import img_095 from '../../images/promoimages/img_095.png' ;
import img_096 from '../../images/promoimages/img_096.png' ;
import img_097 from '../../images/promoimages/img_097.png' ;
import img_098 from '../../images/promoimages/img_098.png' ;
import img_099 from '../../images/promoimages/img_099.png' ;
import img_100 from '../../images/promoimages/img_100.png' ;
import img_101 from '../../images/promoimages/img_101.png' ;
import img_102 from '../../images/promoimages/img_102.png' ;
import img_103 from '../../images/promoimages/img_103.png' ;
import img_104 from '../../images/promoimages/img_104.png' ;
import img_105 from '../../images/promoimages/img_105.png' ;
import img_106 from '../../images/promoimages/img_106.png' ;
import img_107 from '../../images/promoimages/img_107.png' ;
import img_108 from '../../images/promoimages/img_108.png' ;
import img_109 from '../../images/promoimages/img_109.png' ;
import img_110 from '../../images/promoimages/img_110.png' ;
import { act } from 'react-dom/test-utils';


const imgSelector =(img)=>{


  switch(img){
    case "24" :
      return img24
    case "25" :
        return img25
    case "26" :
        return img24
        case "27" :
          return img27 
case "img_001":
return img_001
case "img_002":
return img_002
case "img_003":
return img_003
case "img_004":
return img_004
case "img_005":
return img_005
case "img_006":
return img_006
case "img_007":
return img_007
case "img_008":
return img_008
case "img_009":
return img_009
case "img_010":
return img_010
case "img_011":
return img_011
case "img_012":
return img_012
case "img_013":
return img_013
case "img_014":
return img_014
case "img_015":
return img_015
case "img_016":
return img_016
case "img_017":
return img_017
case "img_018":
return img_018
case "img_019":
return img_019
case "img_020":
return img_020
case "img_021":
return img_021
case "img_022":
return img_022
case "img_023":
return img_023
case "img_024":
return img_024
case "img_025":
return img_025
case "img_026":
return img_026
case "img_027":
return img_027
case "img_028":
return img_028
case "img_029":
return img_029
case "img_030":
return img_030
case "img_031":
return img_031
case "img_032":
return img_032
case "img_033":
return img_033
case "img_034":
return img_034
case "img_035":
return img_035
case "img_036":
return img_036
case "img_037":
return img_037
case "img_038":
return img_038
case "img_039":
return img_039
case "img_040":
return img_040
case "img_041":
return img_041
case "img_042":
return img_042
case "img_043":
return img_043
case "img_044":
return img_044
case "img_045":
return img_045
case "img_046":
return img_046
case "img_047":
return img_047
case "img_048":
return img_048
case "img_049":
return img_049
case "img_050":
return img_050
case "img_051":
return img_051
case "img_052":
return img_052
case "img_053":
return img_053
case "img_054":
return img_054
case "img_055":
return img_055
case "img_056":
return img_056
case "img_057":
return img_057
case "img_058":
return img_058
case "img_059":
return img_059
case "img_060":
return img_060
case "img_061":
return img_061
case "img_062":
return img_062
case "img_063":
return img_063
case "img_064":
return img_064
case "img_065":
return img_065
case "img_066":
return img_066
case "img_067":
return img_067
case "img_068":
return img_068
case "img_069":
return img_069
case "img_070":
return img_070
case "img_071":
return img_071
case "img_072":
return img_072
case "img_073":
return img_073
case "img_074":
return img_074
case "img_075":
return img_075
case "img_076":
return img_076
case "img_077":
return img_077
case "img_078":
return img_078
case "img_079":
return img_079
case "img_080":
return img_080
case "img_081":
return img_081
case "img_082":
return img_082
case "img_083":
return img_083
case "img_084":
return img_084
case "img_085":
return img_085
case "img_086":
return img_086
case "img_087":
return img_087
case "img_088":
return img_088
case "img_089":
return img_089
case "img_090":
return img_090
case "img_091":
return img_091
case "img_092":
return img_092
case "img_093":
return img_093
case "img_094":
return img_094
case "img_095":
return img_095
case "img_096":
return img_096
case "img_097":
return img_097
case "img_098":
return img_098
case "img_099":
return img_099
case "img_100":
return img_100
case "img_101":
return img_101
case "img_102":
return img_102
case "img_103":
return img_103
case "img_104":
return img_104
case "img_105":
return img_105
case "img_106":
return img_106
case "img_107":
return img_107
case "img_108":
return img_108
case "img_109":
return img_109
case "img_110":
return img_110




    default:
      return img24
  }
 
}






const redeemPromo=(promoid)=>{
  // open Modal
  // Reddeem
  //Close modal
  // openRedeemModal();
  // Move to confirm URL with Back to main profile

}
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
const renderBackground = (props) => {
  if (props.displayBackgroundImage === 'true') {
    return {
      backgroundImage: `url(${imgSelector(props.promoimageheader)})`,
      backgroundSize: 'contain'
    };
  } else {
    return {
      backgroundImage: 'none'
    };
  }
};
const IGSquarePromoItem = (props) => (

  <>
  <div className='igpromoHolder' style={{backgroundColor: '#'+props.promobackgroundcolor}} >
    <div
      className='ig-square-promoBottom'
      style={renderBackground(props)}
    >
      <div className='ig-square-promoTop' style={{backgroundColor: '#'+props.promotitlecolor}}>
        <div className='title' style={{color:'#'+props.promobackgroundcolor, fontFamily:props.fontFamily}}>
          {props.promotitle}  
        </div>
        <div className='subtitle' style={{color:'#'+props.promobackgroundcolor, fontFamily:props.fontFamily}}>
          {props.promomessage} 
        </div>
      </div>
    </div>
  </div>
</>


    
);

IGSquarePromoItem.propTypes = {};

export default IGSquarePromoItem;
