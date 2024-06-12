import React from 'react';
import { Card, Typography } from 'antd';


const { Text } = Typography;

const LinkType2 = ({linkItem}) => {
 
  
  
  // Construct the gradient background string
  const gradientBackground = `linear-gradient(to right, #${linkItem.linkStyle.primaryColor}, #${linkItem.linkStyle.secondaryColor})`;

  return(
  <Card className='linkCardStyle' style={{ background: gradientBackground }}>
    <Text className="link-title" style={{ color: `#${linkItem.linkStyle.fontColor}` }}>{linkItem.linkTitle}</Text>
    <br />
    <Text className="link-subtitle" style={{ color: `#${linkItem.linkStyle.fontColor}` }}>{linkItem.linkDescription}</Text>
  </Card>
  )
};

export default LinkType2;
