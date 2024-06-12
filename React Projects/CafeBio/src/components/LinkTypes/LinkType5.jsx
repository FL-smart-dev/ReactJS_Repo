import React from 'react';
import { Card, Typography } from 'antd';
import './LinkType5.css';

const { Text } = Typography;

const LinkType5 = () => (
  <Card className="link-type-5">
    <Text className="link-title">Link Headline</Text>
    <br />
    <Text className="link-subtitle">www.example.com</Text>
    <br />
    <Text className="link-subtitle">Details</Text>
  </Card>
);

export default LinkType5;
