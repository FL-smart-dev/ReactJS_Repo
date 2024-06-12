import React from 'react';
import { Card, Typography } from 'antd';


const { Text } = Typography;

const LinkType3 = ({linkItem}) => (
  <Card className="linkCardStyle" style={{ border: `1px solid #${linkItem.linkStyle.fontColor}` }}>
    <Text className="link-title" style={{ color: `#${linkItem.linkStyle.fontColor}` }}>{linkItem.linkTitle}</Text>
    <br />
    <Text className="link-subtitle" style={{ color: `#${linkItem.linkStyle.fontColor}` }}>{linkItem.linkDescription}</Text>
  </Card>
);

export default LinkType3;
