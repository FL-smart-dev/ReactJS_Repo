import React, { useState } from "react";
import { Form, DatePicker, Typography, Input, Checkbox } from "antd";
import styles from "./createpromoitem.module.css";
import moment from "moment";
import CampaignDataStore from "./Utils/CampaignDataStore";

const { Text, Title } = Typography;
const { RangePicker } = DatePicker;

function OfferSchedule() {
  const [sendReminderSMSEnabled, setSendReminderSMSEnabled] = useState(true);
  const [redemptionLimit, setRedemptionLimit] = useState(CampaignDataStore.redemptionLimit || 100);

  const handleSMSCheckboxChange = () => {
    setSendReminderSMSEnabled(!sendReminderSMSEnabled);
    CampaignDataStore.smsEnabled = sendReminderSMSEnabled;
  };

  const disabledDate = (current) => {
    // Disable dates before today
    return current && current < moment().startOf("day");
  };

  const handleDateChange = (dates) => {
    CampaignDataStore.dateRange = dates;
  };

  const handleRedemptionLimitChange = (e) => {
    const value = e.target.value;
    setRedemptionLimit(value);
    CampaignDataStore.redemptionLimit = value;
  };

  return (
    <div>
      <Title level={3}>Schedule your offer</Title>
      <Text type="secondary">
        Choose the time frame you would like this offer to run
      </Text>
      <Title level={4}>Dates</Title>
      <Text className={styles.labelStyle}>Duration for this offer</Text>
      <Form.Item
        name="dateRange"
        rules={[{ required: true, message: "Please select the date range!" }]}
      >
        <RangePicker
          size="large"
          onChange={handleDateChange}
          disabledDate={disabledDate}
          format="MM/DD/YY hh:mm A"
          showTime={{ format: 'hh:mm A', minuteStep: 15, use12Hours: true }}
        />
      </Form.Item>
      <Title level={4}>Redemptions</Title>
      <Text className={styles.labelStyle}>
        Number of redemptions for this offer
      </Text>
      <Form.Item
        name="redemptionlimit"
        rules={[
          {
            required: true,
            message: "Please input the redemption limit!",
          },
        ]}
        initialValue={redemptionLimit}
      >
        <Input
          size="large"
          type="number"
          value={redemptionLimit}
          onChange={handleRedemptionLimitChange}
        />
      </Form.Item>
      <Title level={4}>SMS Settings</Title>
      <Checkbox
        defaultChecked={sendReminderSMSEnabled}
        onChange={handleSMSCheckboxChange}
        checked={sendReminderSMSEnabled}
      >
        Send SMS reminder 24 hours before expiration
      </Checkbox>
      <Title level={4}></Title>
    </div>
  );
}

export default OfferSchedule;
