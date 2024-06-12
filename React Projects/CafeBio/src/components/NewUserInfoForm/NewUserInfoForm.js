import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { get } from "firebase/database";
import { database, dbref } from '../../objects/dataobject';
import styles from './NewUserInfoForm.module.css';

const NewUserInfoForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const normalizeSocialHandle = (urlPrefix, handle) => {
    if (!handle) return '';
    return `${urlPrefix}${handle.replace(/^@/, '')}`;
  };

  const checkMerchantHandle = async (_, value) => {
    if (!value || value.indexOf(' ') >= 0) {
      return Promise.reject(new Error('Handle must be a single word'));
    }
    const lowercaseHandle = value.toLowerCase();
    const handleRef = dbref(database, `Merchants/${lowercaseHandle}`);
    const snapshot = await get(handleRef);
    if (snapshot.exists()) {
      return Promise.reject(new Error('Merchant handle already exists'));
    }
    return Promise.resolve();
  };

  const onFinish = (values) => {
    values.merchantHandle = values.merchantHandle.toLowerCase();
    values.instagramHandle = normalizeSocialHandle('https://www.instagram.com/', values.instagramHandle);
    values.twitterHandle = normalizeSocialHandle('https://twitter.com/', values.twitterHandle);
    values.tikTokHandle = normalizeSocialHandle('https://www.tiktok.com/@', values.tikTokHandle);

    onSubmit(values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" className={styles.NewUserInfoForm}>
      <Form.Item
        name="merchantHandle"
        label="Merchant Handle"
        rules={[{ required: true, message: 'Please input your merchant handle!' }, { validator: checkMerchantHandle }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="merchantName"
        label="Cafe or Coffee Shop Name"
        rules={[{ required: true, message: 'Please input your cafe or coffee shop name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="websiteUrl"
        label="Website URL"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="instagramHandle"
        label="Instagram Handle"
      >
        <Input placeholder="Username without '@'" />
      </Form.Item>
      <Form.Item
        name="twitterHandle"
        label="Twitter Handle"
      >
        <Input placeholder="Username without '@'" />
      </Form.Item>
      <Form.Item
        name="tikTokHandle"
        label="TikTok Handle"
      >
        <Input placeholder="Username without '@'" />
      </Form.Item>
      <Form.Item
        name="posSystem"
        label="POS System"
        rules={[{ required: true, message: 'Please select your POS system!' }]}
      >
        <Radio.Group>
          <Radio value="Square">Square</Radio>
          <Radio value="Toast">Toast</Radio>
          <Radio value="Unknown">I don't know</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewUserInfoForm;
