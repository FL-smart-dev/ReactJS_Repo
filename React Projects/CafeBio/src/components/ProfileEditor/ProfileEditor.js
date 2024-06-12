import React, { useState, useEffect, useContext } from "react";
import {
  profileEditor,
} from "../../utils/AppStrings";
import {
  Form,
  Input,
  Button,
  Upload,
  message,
  Typography,
  Divider,
  Space,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./ProfileEditor.module.css";
import { dbref, dbOnValue, dbupdate, database } from "../../objects/dataobject";
import { AppContext } from "../../AppContext";
import { profileInfoPath } from "../../utils/promo-constants";

const ProfileEditor = ({ userId }) => {
  const { Text, Title } = Typography;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [data, setData] = useState("");
  const [editable, setEditable] = useState(false);
  const { appUserID, setAppUserID } = useContext(AppContext);
  const { appMerchantHandle, setAppMerchantHandle } = useContext(AppContext);

  useEffect(() => {
    const userRef = dbref(database, profileInfoPath(appMerchantHandle));

    const onDataChange = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);
        form.setFieldsValue(data);
        setFileList([
          {
            uid: "-1",
            name: "existing_image",
            status: "done",
            url: data?.merchantImage,
          },
        ]);
      }
    };

    const unsubscribe = dbOnValue(userRef, onDataChange);

    return () => {
      unsubscribe();
    };
  }, [form, appMerchantHandle]);

  const handleUploadChange = (info) => {
    getBase64(info.file.originFileObj, (imageUrl) => {
      setFileList([
        { uid: "-1", name: "existing_image", status: "done", url: imageUrl },
      ]);
      form.setFieldsValue({ merchantImage: imageUrl });
    });
  };

  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = (error) => message.error("Error reading file: " + error);
  };

  const onFinish = (values) => {
    const userRef = dbref(database, profileInfoPath(appMerchantHandle));
    dbupdate(userRef, values)
      .then(() => {
        message.success("Profile updated successfully");
      })
      .catch((error) => {
        message.error("Failed to update profile: " + error.message);
      });
    setEditable(false);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const posKeyElement = (posType) => {
    if (typeof posType !== "string") {
      return null;
    }

    const pos = posType.toLowerCase();
    const fieldNameProd = `${pos}ProductionKey`;
    const fieldNameSandbox = `${pos}SandboxKey`;
    const descriptionProd = `${posType} Production Access Token`;
    const descriptionSandbox = `${posType} Sandbox Access Token`;
    return (
      <>
        <Form.Item name={fieldNameProd} label={descriptionProd}>
          <Input disabled={!!form.getFieldValue(fieldNameProd) && !editable} />
        </Form.Item>
        <Form.Item name={fieldNameSandbox} label={descriptionSandbox}>
          <Input disabled={!!form.getFieldValue(fieldNameSandbox) && !editable} />
        </Form.Item>
      </>
    );
  };

  return (
    <div className={styles.ProfileEditor}>
      <Title level={2}>{profileEditor.header}</Title>
      <Text type="secondary">{profileEditor.description}</Text>
      <Divider />
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Title level={4}>{profileEditor.profileSettingsHeader}</Title>
        <Text type="secondary">
          {profileEditor.profileSettingsHeaderDescription}
        </Text>
        <Space />
        <Form.Item name="merchantImage" label="Profile Image">
          <Upload
            onChange={handleUploadChange}
            fileList={fileList[0]?.url ? fileList : []}
            maxCount={1}
            listType="picture-card"
            multiple={false}
            disabled={!!form.getFieldValue('merchantImage') && !editable}
          >
            <div>{uploadButton}</div>
          </Upload>
        </Form.Item>
        <Form.Item name="merchantName" label="Company Name">
          <Input disabled={!!form.getFieldValue('merchantName') && !editable} />
        </Form.Item>
        <Form.Item name="merchantHandle" label="Cafe.Bio company handle">
          <Input disabled={!!form.getFieldValue('merchantHandle') && !editable} />
        </Form.Item>
        <Divider />

        <Title level={4}>{profileEditor.profilePOSHeader}</Title>
        <Text type="secondary">{profileEditor.profilePOSDescription}</Text>
        <Space />
        <Form.Item name="posSystem" label="POS System">
          <Input disabled={!!form.getFieldValue('posSystem') && !editable} />
        </Form.Item>

        {posKeyElement(form.getFieldValue('posSystem'))}
        <Divider />
        <Title level={4}>{profileEditor.profileSocialHeader}</Title>
        <Text type="secondary">{profileEditor.profileSocialDescription}</Text>
        <Space />
        <Form.Item name="instagramHandle" label="Instagram Handle">
          <Input disabled={!!form.getFieldValue('instagramHandle') && !editable} />
        </Form.Item>
        <Form.Item name="tikTokHandle" label="TikTok Handle">
          <Input disabled={!!form.getFieldValue('tikTokHandle') && !editable} />
        </Form.Item>
        <Form.Item name="twitterHandle" label="Twitter Handle">
          <Input disabled={!!form.getFieldValue('twitterHandle') && !editable} />
        </Form.Item>
        <Form.Item name="websiteUrl" label="Website URL">
          <Input disabled={!!form.getFieldValue('websiteUrl') && !editable} />
        </Form.Item>

        <div className={styles.editableProfile}>
          <div hidden={editable}>
            <Button
              type="primary"
              onClick={() => setEditable(!editable)}
              disabled={editable}
            >
              {profileEditor.editButton}
            </Button>
          </div>
          <div hidden={!editable}>
            <Button type="primary" htmlType="submit" disabled={!editable}>
              {profileEditor.saveChanges}
            </Button>
            <Button
              type="link"
              onClick={() => setEditable(!editable)}
              disabled={!editable}
            >
              {profileEditor.cancelButton}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

ProfileEditor.propTypes = {};

export default ProfileEditor;
