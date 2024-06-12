import React, { useState,useContext } from 'react';
import CreateLinkStep1 from '../CreateLinkStep1/CreateLinkStep1';
import StyleLinkStep2 from '../StyleLinkStep2/StyleLinkStep2';
import * as API from "../../utils/api.services";
import { AppContext } from "../../AppContext";
import LinkType1 from '../LinkTypes/LinkType1';
import LinkType2 from '../LinkTypes/LinkType2';
import LinkType3 from '../LinkTypes/LinkType3';
import LinkType6 from '../LinkTypes/LinkType6';
import LinkType4 from '../LinkTypes/LinkType4';
import styles from "./CreateLink.css";
import { Divider, Typography } from 'antd';
const { Title, Text } = Typography;

const CreateLinkForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const { appMerchantHandle, setAppMerchantHandle } = useContext(AppContext);
  const [linkTitle, setLinkTitle] = useState("Great event ");
  const [linkDescription, setLinkDescription] = useState("Great event coming soon");
  const [linkUrl, setLinkUrl] = useState("www.example.com");
  const [linkDate, setLinkDate] = useState("12/12/2024");
  const [dateStart, setDateStart] = useState("12/12/2024");
  const [dateEnd, setDateEnd] = useState("12/12/2024");
  const [linkType, setLinkType] = useState("event");
  const [primaryColor, setPrimaryColor] = useState('817BD1');
  const [secondaryColor, setSecondaryColor] = useState('50ED33');
  const [fontColor, setFontColor] = useState('000000');
  const [previewLinkItem, setPreviewLinkItem] = useState({
    linkTitle:linkTitle,
    linkDescription:linkDescription,
    linkUrl:linkUrl,
    linkDate:linkDate,
    linkType:linkType,
    linkStart : dateStart,
    linkEnd : dateEnd,
    linkStyle : {
      primaryColor: primaryColor,
      secondaryColor:secondaryColor,
      fontColor:fontColor
    }
  });

  const handleNext = (values) => {
    setFormData(values);
    setStep(2);
  };

  const handlePrevious = (values) => {
    //setFormData(values);
    setStep(1);
  };


  const handleSubmit = (values) => {
    const finalData = values ;
    console.log('Final Form Data:', values);
    finalData.linkItem.merchantname = appMerchantHandle;
    API.createNewLink(finalData);
    // Handle final submission
  };

  const previewHandler =(linkItem)=>{
   
    console.log('Preview Item:', JSON.stringify(linkItem));
    setPreviewLinkItem(linkItem)
  }
  const previewWindow =() =>{
    switch (previewLinkItem.linkType) {
      case "arrow":
        return <LinkType1 linkItem={previewLinkItem} />
      case "gradient":
        return <LinkType2 linkItem={previewLinkItem} />
        case "info":
          return <LinkType3 linkItem={previewLinkItem} />
        case "event":
            return <LinkType4 linkItem={previewLinkItem} />
        case "button":
              return <LinkType6 linkItem={previewLinkItem} />
      default:
        return <div></div>
    }
  }

  return (
    <>
    <div className='contentHolder'>
      <div className='contentHolderLeft'>
      {step === 1 && <CreateLinkStep1 
      onNext={handleNext} previewHandler={previewHandler} 
      previewLinkItem = {previewLinkItem} 
      setPreviewLinkItem ={setPreviewLinkItem} />}
      {step === 2 && <StyleLinkStep2 
      onSubmit={handleSubmit} 
      previewHandler={previewHandler} 
      previewLinkItem = {previewLinkItem}
      setPreviewLinkItem ={setPreviewLinkItem}
      primaryColor = {primaryColor}
      secondaryColor ={secondaryColor}
      fontColor = {fontColor}
      setPrimaryColor = {setPrimaryColor}
      setSecondaryColor = {setSecondaryColor}
      setFontColor = {setFontColor}
      handlePrevious = {handlePrevious}
      />}
      </div>
      <div className='contentHolderRight'>
      <Title level={3}>Preview</Title>
      <Text type="secondary">Preview your link below.</Text>
      <Divider/>
      {previewWindow()}
      </div>
    </div>
     
    <div>
    
    </div>
    </>
  );
};

export default CreateLinkForm;
