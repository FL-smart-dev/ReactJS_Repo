import React,{useEffect} from 'react';
import { Form, Button, Typography, Row, Col,ColorPicker,Space, Flex,Divider } from 'antd';
import { useState } from 'react';
import { createLink } from '../../utils/AppStrings';
import { removeCharFromString } from '../../utils/StringUtils';


const { Title, Text } = Typography;


const StyleLinkStep2 = ({ 
  onSubmit,
  previewHandler,
  previewLinkItem,
  setPreviewLinkItem,
  secondaryColor, 
  primaryColor,
  fontColor,
  setPrimaryColor,
  setSecondaryColor,
  setFontColor,
  handlePrevious
}) => {
  const [form] = Form.useForm();
  const [linkItem, setLinkItem] = useState(previewLinkItem || {});
  const [openPrimaryColor, setOpenPrimaryColor] = useState(false);
  const [openSecondaryColor, setOpenSecondaryColor] = useState(false);
  const [openFontColor,setOpenFontColor] = useState(false);
  

  const handleColorChange = (name, value) => {
    const selectedColor = removeCharFromString(value, "#", "");

    if (name === "primarycolor") {
      const updatedLinkItem = {
        ...linkItem,
        linkStyle: {
          ...linkItem.linkStyle,
          primaryColor: selectedColor
        }}
        setPrimaryColor(selectedColor);
        setLinkItem(updatedLinkItem);
        setPreviewLinkItem(updatedLinkItem)
    }
    if (name === 'fontcolor'){
      const updatedLinkItem = {
        ...linkItem,
        linkStyle: {
          ...linkItem.linkStyle,
          fontColor: selectedColor
        }}
        setFontColor(selectedColor);
        setLinkItem(updatedLinkItem);
        setPreviewLinkItem(updatedLinkItem)

    } if (name === 'secondarycolor'){
      const updatedLinkItem = {
        ...linkItem,
        linkStyle: {
          ...linkItem.linkStyle,
          secondaryColor: selectedColor
        }}
        setSecondaryColor(selectedColor);
        setLinkItem(updatedLinkItem);
        setPreviewLinkItem(updatedLinkItem)
    }
    
  };

 
  useEffect(() => {
    previewHandler(linkItem);
  }, [linkItem,secondaryColor,primaryColor]);
  
  const onFinish = (values) => {
    const finalValues = { ...values,linkItem};
    console.log('Form values:', finalValues);
    onSubmit(finalValues); 
  };

  return (
    <div>
      <Title level={2}>{createLink.header2}</Title>
      <Text>{createLink.subtitle2}</Text>
    <Space/>
    <Divider />
    
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >


        
      {linkItem.linkType ==='gradient' && (
        <div style={{width:'100%'}}>
             <Title level={4}>Color & Style</Title>
             <Text className="labelStyle">Select the primary and secondary gradient colors.</Text>
            
             <Space/>
          <div>
            <ColorPicker
              open={openPrimaryColor}
              onOpenChange={setOpenPrimaryColor}
              size="large"
              defaultFormat="hex"
              value={linkItem.linkStyle.primaryColor}
              onChange={(value, hex) => handleColorChange("primarycolor", hex)}
            />
          <div>
            <Text>
              Primary Color: #{linkItem.linkStyle.primaryColor}
            </Text>  
        </div>
        
        </div>
        
        <Space/>
        <div>
        <ColorPicker
          open={openSecondaryColor}
          onOpenChange={setOpenSecondaryColor}
          size="large"
          defaultFormat="hex"
          value={linkItem.linkStyle.secondaryColor}
          onChange={(value, hex) => handleColorChange("secondarycolor", hex)}
        />
        <div>
        <Text >
          Secondary Color: #{linkItem.linkStyle.secondaryColor}
        </Text>
        </div>
        </div>
        <Divider />
        </div>
        )
        }
      <div >
<Space/>
        <div>
          <div>
          <Title level={4}>Font Color</Title>
          <Text className="labelStyle">Select the color of the font for your link.</Text>
          </div>
          <Space/>
          <div>
          <ColorPicker
          open={openFontColor}
          onOpenChange={setOpenFontColor}
          size="large"
          defaultFormat="hex"
          value={linkItem.linkStyle.fontColor}
          onChange={(value, hex) => handleColorChange("fontcolor", hex)}
        />
          </div>
          <div>
             <Text >Font Color: #{linkItem.linkStyle.fontColor}
        </Text>
          </div>

        </div>

        </div>
      
      <div style={{display:'flex', flexDirection:'row', gap:'15px', padding:'20px'}}>
      <Form.Item>
          <Button type="primary" onClick={handlePrevious} className='solidbutton' >Previous</Button>
        </Form.Item>
      <Form.Item>
          <Button type="primary" htmlType="submit" className='solidbutton'>{createLink.submitButton}</Button>
        </Form.Item>
     
      </div>  
       
      </Form>
    </div>
  );
};

export default StyleLinkStep2;
