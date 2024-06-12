import React, { useState } from 'react';
import { Button, Input, Form, Spin , Select,Typography, Divider } from 'antd';
import { Steps } from 'antd-mobile';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MiniPromoItem from '../../components/promoItem/minipromoitem';
import { setAnalytics } from '../../utils/api.services';
import { redeemScreen } from '../../utils/AppStrings';

import styles from './RedemptionScreen.module.css';
import { generateGUIDWithCharacterCount } from '../../utils/guid';

const {Text,Title} = Typography

const times = [
  "Select...",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 AM",
];

const dates = [
  "Select...",
  "Today",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Next Sunday",
  "Next Monday",
  "Next Tuesday",
  "Next Wednesday",
  "Next Thursday",
  "Next Friday",
  "Next Saturday",
  "Not sure",
];

export default function RedemptionScreen(props) {
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('');

  const navigate = useNavigate();
  const routeParams = useParams();
  const location = useLocation();
  const wholepromo = location.state.promo;
  const item = wholepromo;

  function redeemPromotion(values) {
    let merchant = routeParams.merchanthandle;
    let promoName = routeParams.promo;
    let phoneNumber = "+1" + values.phonenumber;

    if (!/^(?:\+?1)?([2-9][0-9]{9})$/.test(phoneNumber)) {
      window.alert(`${redeemScreen.phoneNumberFormat}`);
      return;
    }
    if (phoneNumber.length < 6 || phoneNumber.length > 16) {
      window.alert(`${redeemScreen.phoneNumberFormat}`);
      return;
    }

    let redemptionObject = {
      "merchant_handle": merchant,
      "merchantName": merchant,
      "promo_id": promoName,
      "visit_time": visitTime,
      "visit_date": visitDate,
      "phone_number": phoneNumber,
      "customer_group_id": 1222,
      "environment": "production",
      "redeemguid" : generateGUIDWithCharacterCount(8)
    };

    setAnalytics({
      "page": "promo-redeem-complete/",
      "merchant_handle": merchant,
      "redemption_object": redemptionObject,
      "user_agent": navigator.userAgent,
      "host": window.location.host,
      "path_name": window.location.pathname,
      "time": new Date().toISOString(),
      "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    redeem(redemptionObject)
    .then(()=>{setSpinning(false);})
    .then(response => {
      navigate('/complete/' + redemptionObject.merchant_handle + '/' + redemptionObject.redeemguid);
    })
    .catch(error => {
      window.alert(error);
    });    
  }

  async function redeem(redemptionObject) {
    setSpinning(true);
    const cloudFunctionUrl = 'https://us-central1-tapmein-3b357.cloudfunctions.net/redeemPromotion';
  
    try {
      const response = await fetch(cloudFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(redemptionObject)
      });
  
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
      }
  
      return await response.json();
    } catch (error) {
      setSpinning(false);
      throw error;
    }
  }
  

  const [spinning, setSpinning] = React.useState(false);

  const { Step } = Steps;

  return (
    <>
      <MiniPromoItem
        wholepromo={item}
        key={item.promoname}
        promoimageheader={item.style.stylename}
        promotitle={item.promotitle}
        promomessage={item.promomessage}
        promobuttontext={item.promobuttontext}
        promobackgroundcolor={item.style.backgroundcolor}
        promotitlecolor={item.style.textcolor}
        messagecolor={item.style.textcolor}
        disable='false'
        merchanthandle={item.merchantname}
        promoname={item.promoname}
      />
      <Steps current={1}>
        <Step title='Select Offer' description='' />
        <Step title='Redeem' description='' />
        <Step title='Complete' description='' />
      </Steps>

      <Form onFinish={redeemPromotion} layout='vertical' className='redeemForm'>
      <Title level={4} className='h1header'> {redeemScreen.header}
        </Title>
        <Text className='subtitle'>{redeemScreen.subtitle}
        </Text>
       
<Divider/>
        <Form.Item
          label="Mobile number"
          name="phonenumber"
          rules={[
            {
              required: true,
              message: 'Please input your mobile number.',
            },
            {
              pattern: /^(?:\+?1)?([2-9][0-9]{9})$/,
              message: `${redeemScreen.phoneNumberFormat}`,
            },
            {
              min: 6,
              max: 15,
              message: `${redeemScreen.phoneNumberFormat}`,
            }
          ]}
        >
          <Input type='tel' size='large' prefix="+1" />
        </Form.Item>
        <Form.Item
          name='visitdate'
          label='What day can we expect to see you?'
          rules={[
            {
              required: false,
              message: 'Missing Visit Date',
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Select Date"
            value={visitDate}
            onChange={(value) => setVisitDate(value)}
            options={dates.map(date => ({ value: date, label: date }))}
          />
        </Form.Item>
        <Form.Item
          name='visittime'
          label='What time can we expect to see you?'
          rules={[
            {
              required: false,
              message: 'Missing Visit Time',
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Select Time"
            value={visitTime}
            onChange={(value) => setVisitTime(value)}
            options={times.map(time => ({ value: time, label: time }))}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Spin spinning={spinning} fullscreen />
        </Form.Item>
      </Form>
    </>
  )
}