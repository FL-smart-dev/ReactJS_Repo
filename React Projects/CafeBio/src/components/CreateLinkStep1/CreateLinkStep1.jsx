import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Button, Typography,Divider } from 'antd';
import moment from 'moment';
import LinkTypeModal from '../LinkTypeModal/LinkTypeModal';
import { createLink } from '../../utils/AppStrings';

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;

const CreateLinkStep1 = ({ onNext, previewHandler, previewLinkItem, setPreviewLinkItem }) => {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [linkItem, setLinkItem] = useState(previewLinkItem || {});

  const handleLinkTitleChange = (event) => {
    const updatedLinkItem = { ...linkItem, linkTitle: event.target.value };
    setLinkItem(updatedLinkItem);
    setPreviewLinkItem(updatedLinkItem);
  };

  const handleLinkDescriptionChange = (event) => {
    const updatedLinkItem = { ...linkItem, linkDescription: event.target.value };
    setLinkItem(updatedLinkItem);
    setPreviewLinkItem(updatedLinkItem);
  };

  const handleLinkUrlChange = (event) => {
    const updatedLinkItem = { ...linkItem, linkUrl: event.target.value };
    setLinkItem(updatedLinkItem);
    setPreviewLinkItem(updatedLinkItem);
  };

  const handleLinkDateChange = (date) => {
    if (date) {
      const linkDateString = date.format("MM-DD-YYYY");
      const updatedLinkItem = { ...linkItem, linkDate: linkDateString };
      setLinkItem(updatedLinkItem);
      setPreviewLinkItem(updatedLinkItem);
    }
  };

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      const startDateString = dates[0].format("MM-DD-YYYY");
      const endDateString = dates[1].format("MM-DD-YYYY");
      const updatedLinkItem = { ...linkItem, dateStart: startDateString, dateEnd: endDateString };
      setLinkItem(updatedLinkItem);
      setPreviewLinkItem(updatedLinkItem);
    }
  };

  const handleLinkTypeChange = (linkType) => {
    const updatedLinkItem = { ...linkItem, linkType };
    setLinkItem(updatedLinkItem);
    setPreviewLinkItem(updatedLinkItem);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    onNext(linkItem); // Pass form values to the next step
  };

  useEffect(() => {
    previewHandler(linkItem);
  }, [linkItem]);

  const disabledDate = (current) => {
    return current && current < moment().startOf('day');
  };

  return (
    <div className='contents'>
      <Title level={2}>{createLink.header}</Title>
      <Text>{createLink.subtitle}</Text>
      <Divider />
      <Title level={4}>Select Link Type</Title>

      <Button
        type="primary"
        className='solidbutton' style={{ padding: '15px' }}
        onClick={() => setModalVisible(true)}
      >
        {createLink.pickLink}
      </Button>
      <Title level={4}>Link Details</Title>
      <Text className="labelStyle">Flesh out the link details</Text>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          title: linkItem.linkTitle,
          url: linkItem.linkUrl,
          description: linkItem.linkDescription,
          dateOfEvent: linkItem.linkType === 'event' ? moment() : undefined,
          duration: [moment(), moment().add(1, 'days')],
        }}
      >
        <Form.Item label="Title" name="title">
          <Input placeholder="Title" onChange={handleLinkTitleChange} />
        </Form.Item>

        <Form.Item label="URL/Link" name="url">
          <Input placeholder="https://" onChange={handleLinkUrlChange} />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Description" maxLength={150} onChange={handleLinkDescriptionChange} />
        </Form.Item>

        {linkItem.linkType === 'event' && (
          <Form.Item label="Date of the event" name="dateOfEvent">
            <DatePicker format="MM/DD/YYYY" onChange={handleLinkDateChange} disabledDate={disabledDate} />
          </Form.Item>
        )}

        <Form.Item label="Duration you want this link to be visible." name="duration">
          <RangePicker format="MM/DD/YYYY" onChange={handleDateChange} disabledDate={disabledDate} />
        </Form.Item>

        <Form.Item>
          <Button className='solidbutton' type="primary" htmlType="submit">Next</Button>
        </Form.Item>
      </Form>

      <LinkTypeModal visible={modalVisible} selectHandler={handleLinkTypeChange} linkItem={previewLinkItem} onClose={() => setModalVisible(false)} />
    </div>
  );
};

export default CreateLinkStep1;
