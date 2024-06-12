import React,{useRef,useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './createsocialmedia.module.css';
import { Promotion, PromotionLibraryItem } from '../../objects/promotional';
import { Form, Input, DatePicker, Button, Select, Modal, List, Space, Divider, Switch,Typography } from "antd";
import { app, database, dbset, dbref, dbOnValue } from '../../objects/dataobject';
import * as Constants from '../../utils/promo-constants'
import { promostyles } from '../../utils/promostyles';
import * as API from '../../utils/api.services'
import { useState } from 'react';
import PromoItem from '../promoItem/promoItem';
import SocialMediaPortraitItem from '../promoItem/SocialMediaPortraitItem';
import IGSquarePromoItem from '../promoItem/igsquarepromoItem';

import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { generateGUID, generateGUIDWithCharacterCount } from '../../utils/guid';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
import { AppContext } from '../../AppContext';

import { basePath } from '../../utils/sessions-constants';
import { newSocial, socialMediaAsset } from '../../utils/AppStrings';


const { TextArea } = Input;
const { Text, Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const list = API.getAllRetailItems();



function CreateSocialMediaItem() {
  const [promos, setPromos] = useState([]); 
  const [showImage,setShowImage] = useState(true);
  const [showLinkInBio,setShowLinkInBio] = useState(true);
  const { appMerchantHandle } = useContext(AppContext);
  useEffect(() => {
    getAllCampaigns(appMerchantHandle);
  }, [appMerchantHandle]);

  const getAllCampaigns = (merchant) => {
    const tempSessionsArray = [];
    const tempPromosArray = [];  

    const promosRef = dbref(database, basePath(merchant) + '/promos/');
    
    dbOnValue(promosRef, (snapshot) => {
      snapshot.forEach((promo) => {
        const promoId = promo.key;
        console.log(JSON.stringify(promo,null,1))

        tempPromosArray.push({ promoId, ...promo.val() });
      
      });
      console.log("Promos: ", tempPromosArray);
      setPromos(tempPromosArray);  

    });
  };
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const [openMessageLibrary, setOpenMessageLibrary] = useState(false);
  const [openMessagePreview, setOpenMessagePreview] = useState(false);
  const [MessageList, setMessageList] = useState([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [CustomerMessage, setCustomerMessage] = useState({ PromotionLibraryItem });
  const [selectedStyle, setselectedStyle] = useState({
    "imagename": "espresso.png",
    secondarycolor: "FFD600",
    primarycolor: "313131",
    "additionalcolor": "FFA596",
    "stylename": "img_031"
  });
  const [fontFamily,setFontFamily] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [selectedheadline, setselectedheadline] = useState("Buy one get one free!");
  const [selectedmessage, setselectedmessage] = useState('Buy one espresso at full price, and get one free!');

  //Color picker Defaults
  const [displayTextColorPicker, setDisplayTextColorPicker] = useState(false)
  const [displayBackgroundColorPicker, setDisplayBackgroundColorPicker] = useState(false)
  const [colorPickerDefaultColor, setColorPickerDefaultColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  })

  const generateImageName = () =>{
    return "img_" + generateGUIDWithCharacterCount(12) + '.png';
  }
  const handleDownloadClick = () => {
    if (divRef.current) {
      html2canvas(divRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = generateImageName();
        link.click();
      });
    }
  };

  const handleDownloadClick2 = () => {
    if (divRef2.current) {
      html2canvas(divRef2.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = generateImageName();
        link.click();
      });
    }
  };
  const handleTextColorClick = () => {
    setDisplayTextColorPicker(!displayTextColorPicker)

  };

  const handleBackgroundColorPickerClick = () => {
    setDisplayBackgroundColorPicker(!displayBackgroundColorPicker)

  };

  const handleClose = () => {
    setDisplayBackgroundColorPicker(false)
    setDisplayTextColorPicker(false)
  };

  const removeCharFromString = (string, char, replacement) => {
    return string.replace(char, replacement).toUpperCase()
  }
  const handleBackgroundColorChange = (color) => {
    colorSelectionChange(color, "background")
  };
  const handleTextColorChange = (color) => {
    colorSelectionChange(color, "text")
  };
 
  const changeFont = (fontName) => {
    console.log("Font Selected: " + fontName);
    setFontFamily(fontName);
    setIsDropdownOpen(false);
  };
  const colorSelectionChange = (color, item) => {
    let currentSelectedColors = selectedStyle
    const selectedColor = removeCharFromString(color.hex, "#", "")

    switch (item) {

      case "background":
        currentSelectedColors.secondarycolor = selectedColor
        setselectedStyle(currentSelectedColors)
        setColorPickerDefaultColor(color.hex)
        break
      case "text":
        currentSelectedColors.primarycolor = selectedColor
        setselectedStyle(currentSelectedColors)
        setColorPickerDefaultColor(color.hex)
      default:
        break
    }



  }

  const handleLinkInBio = () =>{
    if(showLinkInBio){
      setShowLinkInBio(false)
    }
    else{
      setShowLinkInBio(true)
    }
  }

  const handleShowImage = () =>{
    if(showImage){
      setShowImage(false)
    }
    else{
      setShowImage(true)
    }
  }

  const colorPickerstyles = reactCSS({
    'default': {
      // color: {
      //   width: '36px',
      //   height: '14px',
      //   borderRadius: '2px',
      //   background: `rgba(${ colorPickerDefaultColor.r }, ${ colorPickerDefaultColor.g }, ${colorPickerDefaultColor.b }, ${ colorPickerDefaultColor.a })`,
      // },
      textcolor: {
        width: '50px',
        height: '25px',
        borderRadius: '2px',
        background: `#${selectedStyle.primarycolor}`,
      },
      bkgcolor: {
        width: '50px',
        height: '25px',
        borderRadius: '2px',
        background: `#${selectedStyle.secondarycolor}`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });


  //Message related stuff

  function openMessageLibraryModal() {
    hydrateMessageList()
    setOpenMessageLibrary(true)
  }
  const openMessagePreviewModal = () => {
    //prepareFormSubmission()
    setOpenMessagePreview(true)
  }

  function selectCustomerMessage(SelectedMessage) {
    const item = SelectedMessage.item
    let tempCustomerMessage = new PromotionLibraryItem(
      item.promo_id,
      item.category,
      item.type,
      item.item_category,
      item.headline,
      item.description,
      item.activity,
      item.image_header,
      item.recommended_redemptions,
      item.frequency
    )

    setCustomerMessage(tempCustomerMessage)
    setselectedheadline(item.headline)
    setselectedmessage(item.description)
    let promotitle = document.getElementById("promotitle")
    promotitle.value = item.headline
    let promomessage = document.getElementById("promomessage")
    promomessage.value = item.description
    //console.log(CustomerMessage)
    setOpenMessageLibrary(false)
  }

  function selectMessageStyle(style) {
    console.log("STYLE::::: " + style.promo.style)
    setselectedStyle(style.promo.style)


    const item = style.promo
    let tempCustomerMessage = new PromotionLibraryItem(
      item.promoId,
      null,
      null,
      null,
      item.promotitle,
      item.promomessage,
      null,
      null,
      item.redemptionlimit,
      null
    )

    setCustomerMessage(tempCustomerMessage)
    setselectedheadline(item.promotitle)
    setselectedmessage(item.promomessage)
    let promotitle = document.getElementById("promotitle")
    promotitle.value = item.promotitle
    let promomessage = document.getElementById("promomessage")
    promomessage.value = item.promomessage







    
    setOpenMessagePreview(false)

  }
  function prepareFormSubmission(values) {
    let promotitle = document.getElementById("promotitle")
    let promomessage = document.getElementById("promomessage")
    API.createNewPromotion(values, promotitle.value, promomessage.value, selectedStyle);
    //history.push('/newpromo');

    // For React Router v6:
    navigate('/cafeluna');
  }
  const onMessageChanged = (e) => {
    console.log('Message here', e.target.value);
    setselectedmessage(e.target.value)
    //setCustomerMessage(e.target.value);
  }
  const onHeadlineChanged = (e) => {
    setselectedheadline(e.target.value)

  }
  const hydrateMessageList = (e) => {
    setMessageList([...MessageList, ...API.getAllPromoMessages()])
  }


  return (
    <div className={styles.Createpromoitem}>
      <div className='contentHolder'>
        <div className='contentHolderLeft'>
          <Form onFinish={prepareFormSubmission}
            layout='vertical'
            form={form}
            initialValues={{
              promotitle: CustomerMessage.headline,
            }}
          >

            <Title level={2}>{newSocial.header}</Title>
                <Text>
                {newSocial.subtitle}
                </Text>

            {/* <Button className={styles.btn} size='large' type='link' onClick={openMessageLibraryModal}>
              {Constants.promo_choosemessage_copy}
            </Button> */}

            
            

            <Modal
              title={Constants.promo_choosemessage_copy}
              centered
              open={openMessageLibrary}
              onOk={() => setOpenMessageLibrary(false)}
              onCancel={() => setOpenMessageLibrary(false)}
              width={600}
              mask={true}
            >
              <div className='messagelist-div'>
                
                <List
                  bordered
                  dataSource={MessageList}
                  renderItem={(item, val) => (
                    <List.Item >
                      <Space direction="vertical"
                        size="large">
                   
                        <div onClick={() => selectCustomerMessage({ item })}>
                      

                          <PromoItem
                          trackAnalytics='false'
                            promoimageheader="00"
                            promotitle={item.headline}
                            promomessage={item.description} promobuttontext="Redeem"
                            promobackgroundcolor="fff"
                            promotitlecolor="525252"
                            messagecolor="525252"
                            disable='true'

                          />




                        </div>
                       
                      </Space>

                    </List.Item>
                  )}
                />

              </div>
            </Modal>
            
<div style={{padding:'1rem'}}>


            <Title level={4}>{newSocial.customizeAssetTitle}</Title>
                <Text>
                {newSocial.customizeAssetSubtitle}
                </Text>
         </div>
                
          <Divider />

          <Button className={styles.btn} style={{ width: '100%' }} size='large' type='link' onClick={openMessagePreviewModal}>
            {newSocial.selectCampaign}
          </Button>
          
         
  
          
          <div className='colorPickHolder'>


<div className='colorPick'>
  
  <div style={colorPickerstyles.swatch} onClick={handleBackgroundColorPickerClick}>

    <div style={colorPickerstyles.bkgcolor} />
  </div>
  {displayBackgroundColorPicker ? <div style={colorPickerstyles.popover}>
    <div style={colorPickerstyles.cover} onClick={handleClose} />
    <SketchPicker color={'#' + selectedStyle.secondarycolor} onChange={handleBackgroundColorChange} />
  </div> : null}

</div>

<div className='colorPickText'>Background Color :<b>#{selectedStyle.secondarycolor} </b> </div>
</div>


<div className='colorPickHolder'>
<div className='colorPick'>
  <div style={colorPickerstyles.swatch} onClick={handleTextColorClick}>
    <div style={colorPickerstyles.textcolor} >

    </div>
  </div>
  {displayTextColorPicker ? <div style={colorPickerstyles.popover}>
    <div style={colorPickerstyles.cover} onClick={handleClose} />
    <SketchPicker color={'#' + selectedStyle.primarycolor} onChange={handleTextColorChange} />
  </div> : null}

</div>
<div className='colorPickText'>Text Color : <b> #{selectedStyle.primarycolor} </b>
</div>



</div>
<div>
<div className={styles.labelStyle} style={{paddingTop:20}}>{newSocial.selectFont}</div>
<div class="font-dropdown">
  <span onClick={toggleDropdown}>Select Font...</span>
  {isDropdownOpen && (
  <div class="font-dropdown-content" style={{ overflowY: 'scroll', maxHeight: '200px' }}>
 <div onClick={()=>changeFont('acesans')} style={{fontFamily:'acesans', fontSize:20}}>AceSans</div>
<div onClick={()=>changeFont('acesans-black')} style={{fontFamily:'acesans-black', fontSize:20}}>AceSans-Black</div>
<div onClick={()=>changeFont('acesans-bold')} style={{fontFamily:'acesans-bold', fontSize:20}}>AceSans-Bold</div>
<div onClick={()=>changeFont('acesans-extrabold')} style={{fontFamily:'acesans-extrabold', fontSize:20}}>AceSans-Extrabold</div>
<div onClick={()=>changeFont('acesans-extralight')} style={{fontFamily:'acesans-extralight', fontSize:20}}>AceSans-Extralight</div>
<div onClick={()=>changeFont('acesans-light')} style={{fontFamily:'acesans-light', fontSize:20}}>AceSans-Light</div>
<div onClick={()=>changeFont('acesans-medium')} style={{fontFamily:'acesans-medium', fontSize:20}}>AceSans-Medium</div>
<div onClick={()=>changeFont('acesans-thin')} style={{fontFamily:'acesans-thin', fontSize:20}}>AceSans-Thin</div>
<div onClick={()=>changeFont('bernoru-blackultraexpanded')} style={{fontFamily:'bernoru-blackultraexpanded', fontSize:20}}>Bernoru-BlackUltraExpanded</div>
<div onClick={()=>changeFont('brooklyn-bold')} style={{fontFamily:'brooklyn-bold', fontSize:20}}>Brooklyn-Bold</div>
<div onClick={()=>changeFont('brooklyn-bolditalic')} style={{fontFamily:'brooklyn-bolditalic', fontSize:20}}>Brooklyn-BoldItalic</div>
<div onClick={()=>changeFont('brooklyn-heavy')} style={{fontFamily:'brooklyn-heavy', fontSize:20}}>Brooklyn-Heavy</div>
<div onClick={()=>changeFont('brooklyn-heavyitalic')} style={{fontFamily:'brooklyn-heavyitalic', fontSize:20}}>Brooklyn-HeavyItalic</div>
<div onClick={()=>changeFont('brooklyn-italic')} style={{fontFamily:'brooklyn-italic', fontSize:20}}>Brooklyn-Italic</div>
<div onClick={()=>changeFont('brooklyn-normal')} style={{fontFamily:'brooklyn-normal', fontSize:20}}>Brooklyn-Normal</div>
<div onClick={()=>changeFont('brooklyn-semibold')} style={{fontFamily:'brooklyn-semibold', fontSize:20}}>Brooklyn-SemiBold</div>
<div onClick={()=>changeFont('brooklyn-semibolditalic')} style={{fontFamily:'brooklyn-semibolditalic', fontSize:20}}>Brooklyn-SemiBoldItalic</div>
<div onClick={()=>changeFont('cleon')} style={{fontFamily:'cleon', fontSize:20}}>Cleon</div>
<div onClick={()=>changeFont('cleon-bold')} style={{fontFamily:'cleon-bold', fontSize:20}}>Cleon-Bold</div>
<div onClick={()=>changeFont('cleon-light')} style={{fontFamily:'cleon-light', fontSize:20}}>Cleon-Light</div>
<div onClick={()=>changeFont('departura-bold')} style={{fontFamily:'departura-bold', fontSize:20}}>Departura-Bold</div>
<div onClick={()=>changeFont('departura-bolditalic')} style={{fontFamily:'departura-bolditalic', fontSize:20}}>Departura-BoldItalic</div>
<div onClick={()=>changeFont('departura-italic')} style={{fontFamily:'departura-italic', fontSize:20}}>Departura-Italic</div>
<div onClick={()=>changeFont('departura-regular')} style={{fontFamily:'departura-regular', fontSize:20}}>Departura-Regular</div>
<div onClick={()=>changeFont('foster-black')} style={{fontFamily:'foster-black', fontSize:20}}>Foster-Black</div>
<div onClick={()=>changeFont('foster-bold')} style={{fontFamily:'foster-bold', fontSize:20}}>Foster-Bold</div>
<div onClick={()=>changeFont('foster-light')} style={{fontFamily:'foster-light', fontSize:20}}>Foster-Light</div>
<div onClick={()=>changeFont('foster-regular')} style={{fontFamily:'foster-regular', fontSize:20}}>Foster-Regular</div>
<div onClick={()=>changeFont('geologica_auto-black')} style={{fontFamily:'geologica_auto-black', fontSize:20}}>Geologica_Auto-Black</div>
<div onClick={()=>changeFont('geologica_auto-bold')} style={{fontFamily:'geologica_auto-bold', fontSize:20}}>Geologica_Auto-Bold</div>
<div onClick={()=>changeFont('geologica_auto-extrabold')} style={{fontFamily:'geologica_auto-extrabold', fontSize:20}}>Geologica_Auto-ExtraBold</div>
<div onClick={()=>changeFont('geologica_auto-extralight')} style={{fontFamily:'geologica_auto-extralight', fontSize:20}}>Geologica_Auto-ExtraLight</div>
<div onClick={()=>changeFont('geologica_auto-light')} style={{fontFamily:'geologica_auto-light', fontSize:20}}>Geologica_Auto-Light</div>
<div onClick={()=>changeFont('geologica_auto-medium')} style={{fontFamily:'geologica_auto-medium', fontSize:20}}>Geologica_Auto-Medium</div>
<div onClick={()=>changeFont('geologica_auto-regular')} style={{fontFamily:'geologica_auto-regular', fontSize:20}}>Geologica_Auto-Regular</div>
<div onClick={()=>changeFont('geologica_auto-semibold')} style={{fontFamily:'geologica_auto-semibold', fontSize:20}}>Geologica_Auto-SemiBold</div>
<div onClick={()=>changeFont('geologica_auto-thin')} style={{fontFamily:'geologica_auto-thin', fontSize:20}}>Geologica_Auto-Thin</div>
<div onClick={()=>changeFont('geologica_cursive-black')} style={{fontFamily:'geologica_cursive-black', fontSize:20}}>Geologica_Cursive-Black</div>
<div onClick={()=>changeFont('geologica_cursive-bold')} style={{fontFamily:'geologica_cursive-bold', fontSize:20}}>Geologica_Cursive-Bold</div>
<div onClick={()=>changeFont('geologica_cursive-extrabold')} style={{fontFamily:'geologica_cursive-extrabold', fontSize:20}}>Geologica_Cursive-ExtraBold</div>
<div onClick={()=>changeFont('geologica_cursive-extralight')} style={{fontFamily:'geologica_cursive-extralight', fontSize:20}}>Geologica_Cursive-ExtraLight</div>
<div onClick={()=>changeFont('geologica_cursive-light')} style={{fontFamily:'geologica_cursive-light', fontSize:20}}>Geologica_Cursive-Light</div>
<div onClick={()=>changeFont('geologica_cursive-medium')} style={{fontFamily:'geologica_cursive-medium', fontSize:20}}>Geologica_Cursive-Medium</div>
<div onClick={()=>changeFont('geologica_cursive-regular')} style={{fontFamily:'geologica_cursive-regular', fontSize:20}}>Geologica_Cursive-Regular</div>
<div onClick={()=>changeFont('geologica_cursive-semibold')} style={{fontFamily:'geologica_cursive-semibold', fontSize:20}}>Geologica_Cursive-SemiBold</div>
<div onClick={()=>changeFont('geologica_cursive-thin')} style={{fontFamily:'geologica_cursive-thin', fontSize:20}}>Geologica_Cursive-Thin</div>
<div onClick={()=>changeFont('geologica-black')} style={{fontFamily:'geologica-black', fontSize:20}}>Geologica-Black</div>
<div onClick={()=>changeFont('geologica-bold')} style={{fontFamily:'geologica-bold', fontSize:20}}>Geologica-Bold</div>
<div onClick={()=>changeFont('geologica-extrabold')} style={{fontFamily:'geologica-extrabold', fontSize:20}}>Geologica-ExtraBold</div>
<div onClick={()=>changeFont('geologica-extralight')} style={{fontFamily:'geologica-extralight', fontSize:20}}>Geologica-ExtraLight</div>
<div onClick={()=>changeFont('geologica-light')} style={{fontFamily:'geologica-light', fontSize:20}}>Geologica-Light</div>
<div onClick={()=>changeFont('geologica-medium')} style={{fontFamily:'geologica-medium', fontSize:20}}>Geologica-Medium</div>
<div onClick={()=>changeFont('geologica-regular')} style={{fontFamily:'geologica-regular', fontSize:20}}>Geologica-Regular</div>
<div onClick={()=>changeFont('geologica-semibold')} style={{fontFamily:'geologica-semibold', fontSize:20}}>Geologica-SemiBold</div>
<div onClick={()=>changeFont('geologica-thin')} style={{fontFamily:'geologica-thin', fontSize:20}}>Geologica-Thin</div>
<div onClick={()=>changeFont('gilroy extrabold')} style={{fontFamily:'gilroy extrabold', fontSize:20}}>Gilroy ExtraBold</div>
<div onClick={()=>changeFont('hashpipe')} style={{fontFamily:'hashpipe', fontSize:20}}>HashPipe</div>
<div onClick={()=>changeFont('ibmplexmono-bold')} style={{fontFamily:'ibmplexmono-bold', fontSize:20}}>IBMPlexMono-Bold</div>
<div onClick={()=>changeFont('ibmplexmono-bolditalic')} style={{fontFamily:'ibmplexmono-bolditalic', fontSize:20}}>IBMPlexMono-BoldItalic</div>
<div onClick={()=>changeFont('ibmplexmono-extralight')} style={{fontFamily:'ibmplexmono-extralight', fontSize:20}}>IBMPlexMono-ExtraLight</div>
<div onClick={()=>changeFont('ibmplexmono-extralightitalic')} style={{fontFamily:'ibmplexmono-extralightitalic', fontSize:20}}>IBMPlexMono-ExtraLightItalic</div>
<div onClick={()=>changeFont('ibmplexmono-italic')} style={{fontFamily:'ibmplexmono-italic', fontSize:20}}>IBMPlexMono-Italic</div>
<div onClick={()=>changeFont('ibmplexmono-light')} style={{fontFamily:'ibmplexmono-light', fontSize:20}}>IBMPlexMono-Light</div>
<div onClick={()=>changeFont('ibmplexmono-lightitalic')} style={{fontFamily:'ibmplexmono-lightitalic', fontSize:20}}>IBMPlexMono-LightItalic</div>
<div onClick={()=>changeFont('ibmplexmono-medium')} style={{fontFamily:'ibmplexmono-medium', fontSize:20}}>IBMPlexMono-Medium</div>
<div onClick={()=>changeFont('ibmplexmono-mediumitalic')} style={{fontFamily:'ibmplexmono-mediumitalic', fontSize:20}}>IBMPlexMono-MediumItalic</div>
<div onClick={()=>changeFont('ibmplexmono-regular')} style={{fontFamily:'ibmplexmono-regular', fontSize:20}}>IBMPlexMono-Regular</div>
<div onClick={()=>changeFont('ibmplexmono-semibold')} style={{fontFamily:'ibmplexmono-semibold', fontSize:20}}>IBMPlexMono-SemiBold</div>
<div onClick={()=>changeFont('ibmplexmono-semibolditalic')} style={{fontFamily:'ibmplexmono-semibolditalic', fontSize:20}}>IBMPlexMono-SemiBoldItalic</div>
<div onClick={()=>changeFont('ibmplexmono-thin')} style={{fontFamily:'ibmplexmono-thin', fontSize:20}}>IBMPlexMono-Thin</div>
<div onClick={()=>changeFont('ibmplexmono-thinitalic')} style={{fontFamily:'ibmplexmono-thinitalic', fontSize:20}}>IBMPlexMono-ThinItalic</div>
<div onClick={()=>changeFont('kenue')} style={{fontFamily:'kenue', fontSize:20}}>Kenue</div>
<div onClick={()=>changeFont('mujair')} style={{fontFamily:'mujair', fontSize:20}}>Mujair</div>
<div onClick={()=>changeFont('opera-blackoblique')} style={{fontFamily:'opera-blackoblique', fontSize:20}}>Opera-BlackOblique</div>
<div onClick={()=>changeFont('opera-boldoblique')} style={{fontFamily:'opera-boldoblique', fontSize:20}}>Opera-BoldOblique</div>
<div onClick={()=>changeFont('opera-inlineoblique')} style={{fontFamily:'opera-inlineoblique', fontSize:20}}>Opera-InlineOblique</div>
<div onClick={()=>changeFont('opera-lightoblique')} style={{fontFamily:'opera-lightoblique', fontSize:20}}>Opera-LightOblique</div>
<div onClick={()=>changeFont('opera-mediumoblique')} style={{fontFamily:'opera-mediumoblique', fontSize:20}}>Opera-MediumOblique</div>
<div onClick={()=>changeFont('opera-outlineoblique')} style={{fontFamily:'opera-outlineoblique', fontSize:20}}>Opera-OutlineOblique</div>
<div onClick={()=>changeFont('opera-regularoblique')} style={{fontFamily:'opera-regularoblique', fontSize:20}}>Opera-RegularOblique</div>
<div onClick={()=>changeFont('opera-stenciloblique')} style={{fontFamily:'opera-stenciloblique', fontSize:20}}>Opera-StencilOblique</div>
<div onClick={()=>changeFont('opera-thinoblique')} style={{fontFamily:'opera-thinoblique', fontSize:20}}>Opera-ThinOblique</div>
<div onClick={()=>changeFont('opera-westernoblique')} style={{fontFamily:'opera-westernoblique', fontSize:20}}>Opera-WesternOblique</div>
<div onClick={()=>changeFont('panoragraf light')} style={{fontFamily:'panoragraf light', fontSize:20}}>Panoragraf Light</div>
<div onClick={()=>changeFont('panoragraf regular')} style={{fontFamily:'panoragraf regular', fontSize:20}}>Panoragraf Regular</div>
<div onClick={()=>changeFont('prodasans-black')} style={{fontFamily:'prodasans-black', fontSize:20}}>ProdaSans-Black</div>
<div onClick={()=>changeFont('prodasans-blackitalic')} style={{fontFamily:'prodasans-blackitalic', fontSize:20}}>ProdaSans-BlackItalic</div>
<div onClick={()=>changeFont('prodasans-bold')} style={{fontFamily:'prodasans-bold', fontSize:20}}>ProdaSans-Bold</div>
<div onClick={()=>changeFont('prodasans-bolditalic')} style={{fontFamily:'prodasans-bolditalic', fontSize:20}}>ProdaSans-BoldItalic</div>
<div onClick={()=>changeFont('prodasans-book')} style={{fontFamily:'prodasans-book', fontSize:20}}>ProdaSans-Book</div>
<div onClick={()=>changeFont('prodasans-bookitalic')} style={{fontFamily:'prodasans-bookitalic', fontSize:20}}>ProdaSans-BookItalic</div>
<div onClick={()=>changeFont('prodasans-extrabold')} style={{fontFamily:'prodasans-extrabold', fontSize:20}}>ProdaSans-ExtraBold</div>
<div onClick={()=>changeFont('prodasans-extrabolditalic')} style={{fontFamily:'prodasans-extrabolditalic', fontSize:20}}>ProdaSans-ExtraBoldItalic</div>
<div onClick={()=>changeFont('prodasans-italic')} style={{fontFamily:'prodasans-italic', fontSize:20}}>ProdaSans-Italic</div>
<div onClick={()=>changeFont('prodasans-light')} style={{fontFamily:'prodasans-light', fontSize:20}}>ProdaSans-Light</div>
<div onClick={()=>changeFont('prodasans-lightitalic')} style={{fontFamily:'prodasans-lightitalic', fontSize:20}}>ProdaSans-LightItalic</div>
<div onClick={()=>changeFont('prodasans-medium')} style={{fontFamily:'prodasans-medium', fontSize:20}}>ProdaSans-Medium</div>
<div onClick={()=>changeFont('prodasans-mediumitalic')} style={{fontFamily:'prodasans-mediumitalic', fontSize:20}}>ProdaSans-MediumItalic</div>
<div onClick={()=>changeFont('prodasans-regular')} style={{fontFamily:'prodasans-regular', fontSize:20}}>ProdaSans-Regular</div>
<div onClick={()=>changeFont('prodasans-semibold')} style={{fontFamily:'prodasans-semibold', fontSize:20}}>ProdaSans-SemiBold</div>
<div onClick={()=>changeFont('prodasans-semibolditalic')} style={{fontFamily:'prodasans-semibolditalic', fontSize:20}}>ProdaSans-SemiBoldItalic</div>
<div onClick={()=>changeFont('prodasans-thin')} style={{fontFamily:'prodasans-thin', fontSize:20}}>ProdaSans-Thin</div>
<div onClick={()=>changeFont('prodasans-thinitalic')} style={{fontFamily:'prodasans-thinitalic', fontSize:20}}>ProdaSans-ThinItalic</div>
<div onClick={()=>changeFont('rnssanz-black')} style={{fontFamily:'rnssanz-black', fontSize:20}}>RNSSanz-Black</div>
<div onClick={()=>changeFont('rnssanz-bold')} style={{fontFamily:'rnssanz-bold', fontSize:20}}>RNSSanz-Bold</div>
<div onClick={()=>changeFont('rnssanz-extrabold')} style={{fontFamily:'rnssanz-extrabold', fontSize:20}}>RNSSanz-ExtraBold</div>
<div onClick={()=>changeFont('rnssanz-light')} style={{fontFamily:'rnssanz-light', fontSize:20}}>RNSSanz-Light</div>
<div onClick={()=>changeFont('rnssanz-medium')} style={{fontFamily:'rnssanz-medium', fontSize:20}}>RNSSanz-Medium</div>
<div onClick={()=>changeFont('rnssanz-normal')} style={{fontFamily:'rnssanz-normal', fontSize:20}}>RNSSanz-Normal</div>
<div onClick={()=>changeFont('rnssanz-semibold')} style={{fontFamily:'rnssanz-semibold', fontSize:20}}>RNSSanz-SemiBold</div>
<div onClick={()=>changeFont('spot-italic')} style={{fontFamily:'spot-italic', fontSize:20}}>Spot-Italic</div>
<div onClick={()=>changeFont('spot-normal')} style={{fontFamily:'spot-normal', fontSize:20}}>Spot-Normal</div>
<div onClick={()=>changeFont('spot-outline')} style={{fontFamily:'spot-outline', fontSize:20}}>Spot-Outline</div>
<div onClick={()=>changeFont('spot-outlineitalic')} style={{fontFamily:'spot-outlineitalic', fontSize:20}}>Spot-OutlineItalic</div>
<div onClick={()=>changeFont('trajan pro regular')} style={{fontFamily:'trajan pro regular', fontSize:20}}>Trajan Pro Regular</div>



<div onClick={()=>changeFont('opensans_condensed-bold')} style={{fontFamily:'opensans_condensed-bold', fontSize:20}}>OpenSans_Condensed-Bold</div>
<div onClick={()=>changeFont('opensans_condensed-bolditalic')} style={{fontFamily:'opensans_condensed-bolditalic', fontSize:20}}>OpenSans_Condensed-BoldItalic</div>
<div onClick={()=>changeFont('opensans_condensed-extrabold')} style={{fontFamily:'opensans_condensed-extrabold', fontSize:20}}>OpenSans_Condensed-ExtraBold</div>
<div onClick={()=>changeFont('opensans_condensed-extrabolditalic')} style={{fontFamily:'opensans_condensed-extrabolditalic', fontSize:20}}>OpenSans_Condensed-ExtraBoldItalic</div>
<div onClick={()=>changeFont('opensans_condensed-italic')} style={{fontFamily:'opensans_condensed-italic', fontSize:20}}>OpenSans_Condensed-Italic</div>
<div onClick={()=>changeFont('opensans_condensed-light')} style={{fontFamily:'opensans_condensed-light', fontSize:20}}>OpenSans_Condensed-Light</div>
<div onClick={()=>changeFont('opensans_condensed-lightitalic')} style={{fontFamily:'opensans_condensed-lightitalic', fontSize:20}}>OpenSans_Condensed-LightItalic</div>
<div onClick={()=>changeFont('opensans_condensed-medium')} style={{fontFamily:'opensans_condensed-medium', fontSize:20}}>OpenSans_Condensed-Medium</div>
<div onClick={()=>changeFont('opensans_condensed-mediumitalic')} style={{fontFamily:'opensans_condensed-mediumitalic', fontSize:20}}>OpenSans_Condensed-MediumItalic</div>
<div onClick={()=>changeFont('opensans_condensed-regular')} style={{fontFamily:'opensans_condensed-regular', fontSize:20}}>OpenSans_Condensed-Regular</div>
<div onClick={()=>changeFont('opensans_condensed-semibold')} style={{fontFamily:'opensans_condensed-semibold', fontSize:20}}>OpenSans_Condensed-SemiBold</div>
<div onClick={()=>changeFont('opensans_condensed-semibolditalic')} style={{fontFamily:'opensans_condensed-semibolditalic', fontSize:20}}>OpenSans_Condensed-SemiBoldItalic</div>
<div onClick={()=>changeFont('opensans_semicondensed-bold')} style={{fontFamily:'opensans_semicondensed-bold', fontSize:20}}>OpenSans_SemiCondensed-Bold</div>
<div onClick={()=>changeFont('opensans_semicondensed-bolditalic')} style={{fontFamily:'opensans_semicondensed-bolditalic', fontSize:20}}>OpenSans_SemiCondensed-BoldItalic</div>
<div onClick={()=>changeFont('opensans_semicondensed-extrabold')} style={{fontFamily:'opensans_semicondensed-extrabold', fontSize:20}}>OpenSans_SemiCondensed-ExtraBold</div>
<div onClick={()=>changeFont('opensans_semicondensed-extrabolditalic')} style={{fontFamily:'opensans_semicondensed-extrabolditalic', fontSize:20}}>OpenSans_SemiCondensed-ExtraBoldItalic</div>
<div onClick={()=>changeFont('opensans_semicondensed-italic')} style={{fontFamily:'opensans_semicondensed-italic', fontSize:20}}>OpenSans_SemiCondensed-Italic</div>
<div onClick={()=>changeFont('opensans_semicondensed-light')} style={{fontFamily:'opensans_semicondensed-light', fontSize:20}}>OpenSans_SemiCondensed-Light</div>
<div onClick={()=>changeFont('opensans_semicondensed-lightitalic')} style={{fontFamily:'opensans_semicondensed-lightitalic', fontSize:20}}>OpenSans_SemiCondensed-LightItalic</div>
<div onClick={()=>changeFont('opensans_semicondensed-medium')} style={{fontFamily:'opensans_semicondensed-medium', fontSize:20}}>OpenSans_SemiCondensed-Medium</div>
<div onClick={()=>changeFont('opensans_semicondensed-mediumitalic')} style={{fontFamily:'opensans_semicondensed-mediumitalic', fontSize:20}}>OpenSans_SemiCondensed-MediumItalic</div>
<div onClick={()=>changeFont('opensans_semicondensed-regular')} style={{fontFamily:'opensans_semicondensed-regular', fontSize:20}}>OpenSans_SemiCondensed-Regular</div>
<div onClick={()=>changeFont('opensans_semicondensed-semibold')} style={{fontFamily:'opensans_semicondensed-semibold', fontSize:20}}>OpenSans_SemiCondensed-SemiBold</div>
<div onClick={()=>changeFont('opensans_semicondensed-semibolditalic')} style={{fontFamily:'opensans_semicondensed-semibolditalic', fontSize:20}}>OpenSans_SemiCondensed-SemiBoldItalic</div>
<div onClick={()=>changeFont('opensans-bold')} style={{fontFamily:'opensans-bold', fontSize:20}}>OpenSans-Bold</div>
<div onClick={()=>changeFont('opensans-bolditalic')} style={{fontFamily:'opensans-bolditalic', fontSize:20}}>OpenSans-BoldItalic</div>
<div onClick={()=>changeFont('opensans-extrabold')} style={{fontFamily:'opensans-extrabold', fontSize:20}}>OpenSans-ExtraBold</div>
<div onClick={()=>changeFont('opensans-extrabolditalic')} style={{fontFamily:'opensans-extrabolditalic', fontSize:20}}>OpenSans-ExtraBoldItalic</div>
<div onClick={()=>changeFont('opensans-italic')} style={{fontFamily:'opensans-italic', fontSize:20}}>OpenSans-Italic</div>
<div onClick={()=>changeFont('opensans-light')} style={{fontFamily:'opensans-light', fontSize:20}}>OpenSans-Light</div>
<div onClick={()=>changeFont('opensans-lightitalic')} style={{fontFamily:'opensans-lightitalic', fontSize:20}}>OpenSans-LightItalic</div>
<div onClick={()=>changeFont('opensans-medium')} style={{fontFamily:'opensans-medium', fontSize:20}}>OpenSans-Medium</div>
<div onClick={()=>changeFont('opensans-mediumitalic')} style={{fontFamily:'opensans-mediumitalic', fontSize:20}}>OpenSans-MediumItalic</div>
<div onClick={()=>changeFont('opensans-regular')} style={{fontFamily:'opensans-regular', fontSize:20}}>OpenSans-Regular</div>
<div onClick={()=>changeFont('opensans-semibold')} style={{fontFamily:'opensans-semibold', fontSize:20}}>OpenSans-SemiBold</div>
<div onClick={()=>changeFont('opensans-semibolditalic')} style={{fontFamily:'opensans-semibolditalic', fontSize:20}}>OpenSans-SemiBoldItalic</div>
  </div>

  )}
</div>

<div style={{padding:'1rem'}}>
 {newSocial.selectedFont} <b>{fontFamily}</b>
</div>
</div>


<Divider />

            <div>
              <div className={styles.labelStyle}>
               {socialMediaAsset.title}
                </div>
              <input type='text' id='promotitle' placeholder='Promo headline' onChange={onHeadlineChanged}></input>
            </div>
            <div>
              <div className={styles.labelStyle}>{socialMediaAsset.description}</div>
              <textarea id="promomessage" name="promomessage" placeholder='Promo message' rows="4" cols="50" onChange={onMessageChanged}>
              </textarea>
            </div>
            <div>
            
            </div>

            <Form.Item label= "Show Link In Bio" name="linkinbio">

            <Switch defaultChecked onChange={handleLinkInBio} />

            </Form.Item>

            <Form.Item label= "Show Image" name="showimage">

            <Switch defaultChecked onChange={handleShowImage} />

            </Form.Item>


            <div className={styles.labelStyle} name="promotype"> </div>
          </Form>
        </div>
        <div className='contentHolderRight'>
        <Title level={3}>{newSocial.preview}</Title>
                <Text>
                {newSocial.seePreview}
                </Text>
          
          <Divider />
         
          <div className={styles.categoryLabel}> Social Media Assets </div>
          <Button className={styles.downloadButton} onClick={handleDownloadClick}>Download Portrait Asset</Button>
          <div ref={divRef} className={styles.sm_portraitdiv}>

            <SocialMediaPortraitItem id='igpost'
              promoimageheader={selectedStyle.imagename}
              promotitle={selectedheadline}
              promomessage={selectedmessage} promobuttontext={CustomerMessage.activity}
              promobackgroundcolor={selectedStyle.secondarycolor}
              promotitlecolor={selectedStyle.primarycolor}
              messagecolor={selectedStyle.primarycolor}
              disable='false'
              fontFamily = {fontFamily}
              showLinkInBio ={showLinkInBio}
              showImage = {showImage}

            />
            
          </div>
          <div className={styles.categoryLabel} style={{paddingTop:20}}> Social Media Post 2 </div>
          <Button className={styles.downloadButton} onClick={handleDownloadClick2}>Download Social Media Image</Button>
          <div ref={divRef2} className={styles.sm_squarediv}>
          
<IGSquarePromoItem id='igsquarepost'
  promoimageheader={selectedStyle.stylename}
  promotitle={selectedheadline}
  fontFamily = {fontFamily}
  promomessage={selectedmessage} promobuttontext={CustomerMessage.activity}
  promobackgroundcolor={selectedStyle.secondarycolor}
  promotitlecolor={selectedStyle.primarycolor}
  messagecolor={selectedStyle.primarycolor}
  disable='false'
  displayBackgroundImage = 'false'

/>


</div>



          <Modal
            title={Constants.promo_choosemessage_copy}
            centered
            open={openMessagePreview}
            onOk={() => setOpenMessagePreview(false)}
            onCancel={() => setOpenMessagePreview(false)}
            width={600}
            mask={true}
          >
            <div className='messagelist-div'>
              <List
                bordered
                dataSource={promostyles}
                renderItem={(item, val) => (
                  <List.Item >
                    <Space direction="vertical"
                      size="large">
                      <div>

                      </div>
                      <div onClick={() => selectMessageStyle({ item })}>

                      </div>
                     
                    </Space>

                  </List.Item>
                )}
              />
            </div>
          </Modal>
          <Modal
            title={Constants.promo_choosemessage_copy}
            centered
            open={openMessagePreview}
            onOk={() => setOpenMessagePreview(false)}
            onCancel={() => setOpenMessagePreview(false)}
            width={600}
            mask={true}
          >

              <List
                bordered
                dataSource={promos}
                renderItem={(promo, val) => (
                  <List.Item >
                    <Space direction="vertical"
                      size="large">
                      <div>

                      </div>
                      <div onClick={() => selectMessageStyle({promo})}>


                      <div key={promo.promoId} >
               <PromoItem
                trackAnalytics='true'
                  wholepromo={promo}
                  key={promo.promoname}
                  promoimageheader={promo.style.imagename}
                  promotitle={promo.promotitle}
                  promomessage={promo.promomessage}
                  promobuttontext={promo.promobuttontext}
                  promoprimarycolor={promo.style.primarycolor}
                  promoname={promo.promoname}
                  promosecondarycolor={promo.style.secondarycolor}
                  merchanthandle={promo.merchantname}
                  messagecolor={promo.style.secondarycolor}
                  disable="true"
                  promotype={promo.style.promotype}
              />
            </div>
                      </div>
                     
                    </Space>

                  </List.Item>
                )
                
              }   />
            
          </Modal>

        </div>

      </div>
    </div>
  )
};



CreateSocialMediaItem.propTypes = {};

export default CreateSocialMediaItem;