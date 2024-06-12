import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './myprofile.module.css';
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, Radio } from 'antd';
import { usStates } from '../../utils/us-states';
import { setProfileInfo,getProfileInfo } from '../../utils/api.services';


const { Option } = Select;
//const db = firebase.firestore();




export function Myprofile(){
  const [form] = Form.useForm();
  const [handleExists, setHandleExists] = useState(false);
  const [currentProfile,setProfile] = useState([]);

const setCurrentProfile=()=>{
  let profilex = getProfileInfo();
  setProfile(profilex)
  console.log("END " + profilex.email)
  console.log("END 2 " + currentProfile.email)
}

  useEffect(()=>{
    setCurrentProfile()
    return ()=>{
      console.log(currentProfile.email)
    }
    }, []);

const checkCafeBioHandle = async (handle) => {
  // const docRef = db.collection('cafeBioHandles').doc(handle);
  // const doc = await docRef.get();
  // setHandleExists(doc.exists);
};

const onFinish = async (values) => {
  // if (!handleExists) {
  //   console.log('Form values: ', values);
  //   // Save the data to Firestore or perform other actions
  // } else {
  //   console.log('Cafe bio handle already exists');
  // }

  console.log('Form values: ', values);

  setProfileInfo(values);

};



return(
  <div className={styles.Myprofile}>
   
   {/* {currentProfile.posSystem} */}

    <Form form={form} onFinish={onFinish} layout="vertical">
    <div className='h1header'>My Profile</div>
   <div className='subtitle'>Please enter the info below to setup your profile.</div>
      <Form.Item
        label="Cafe Bio Handle"
        name="cafeBioHandle"
        rules={[{ required: true, message: 'Please enter a cafe bio handle' }]}
      >
        <Input onBlur={(e) => checkCafeBioHandle(e.target.value)} />
      </Form.Item>
      {handleExists && <p>This cafe bio handle already exists</p>}
      <Form.Item
        label="Instagram Profile Handle"
        name="instagramProfileHandle"
        rules={[{ required: true, type: 'url', message: 'Please enter a valid URL' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Website URL"
        name="websiteUrl"
        rules={[{ required: true, type: 'url', message: 'Please enter a valid URL' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Short Bio" name="shortBio" rules={[{ required: true, message: 'Please enter a short bio' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Location Address" name="locationAddress" rules={[{ required: true, message: 'Please enter an address' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Location City" name="locationCity" rules={[{ required: true, message: 'Please enter a city' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Location State" name="locationState" rules={[{ required: true, message: 'Please select a state' }]}>
        <Select>
        {usStates.map((state) => (
            <Option key={state} value={state}>
              {state}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Location Zip" name="locationZip" rules={[{ required: true, message: 'Please enter a zip code' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Location Phone Number"
        name="locationPhoneNumber"
        rules={[{ required: true, message: 'Please enter a phone number' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="POS"
        name="pos"
        rules={[{ required: true, message: 'Please select a POS system' }]}
      >
        <Radio.Group>
          <Radio value="square">Square</Radio>
          <Radio value="toast">Toast</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="POS KEY"
        name="posKey"
        rules={[{ required: false }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>


 



    {/* <div>
   <Link to="/cafeluna">cafeluna</Link>
   </div> */}

  </div>

  )
}

Myprofile.propTypes = {};



