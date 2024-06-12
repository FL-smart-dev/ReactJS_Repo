import React from 'react';
import { Card, Typography } from 'antd';


const { Text } = Typography;

const LinkType1 = ({linkItem}) => (
  <Card className="linkCardStyle" style={{ border: `1px solid #${linkItem.linkStyle.fontColor}` }}>
    <Text className="link-title" style={{ color: `#${linkItem.linkStyle.fontColor}` }}>{linkItem.linkTitle}</Text>
    <br />
    <Text className="link-subtitle" style={{ color: `#${linkItem.linkStyle.fontColor}` }}>{linkItem.linkDescription}</Text>
    <br />
    <Text className="link-arrow" style={{ color: `#${linkItem.linkStyle.fontColor}` }}>&rarr;</Text>
  </Card>
);

export default LinkType1;
