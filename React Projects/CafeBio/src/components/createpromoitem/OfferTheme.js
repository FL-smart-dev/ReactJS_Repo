import React, { useState } from "react";
import {
  Form,
  Typography,
  Select,
  Button,
  Upload,
  Space,
  Modal,
  List,
  Image,
  ColorPicker,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./createpromoitem.module.css";
import * as Constants from "../../utils/promo-constants";
import { promostyles } from "../../utils/promostyles";
import PromoItem from "../promoItem/promoItem";
import MerchantInfo from "../../utils/Constants";
import { promoimages } from "../../utils/promo-images";
import CampaignDataStore from "./Utils/CampaignDataStore";
import { storage } from "../../objects/dataobject";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const { Text, Title } = Typography;
const { Option } = Select;

const OfferTheme = () => {
  const [promoType, setPromoType] = useState(CampaignDataStore.styleType);
  const [selectedStyle, setSelectedStyle] = useState(CampaignDataStore.style);
  const [openMessagePreview, setOpenMessagePreview] = useState(false);
  const [openPrimaryColor, setOpenPrimaryColor] = useState(false);
  const [openSecondaryColor, setOpenSecondaryColor] = useState(false);
  const [openImageSelectorPreview, setOpenImageSelectorPreview] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState(
    require(`../../images/cafebiopromoimages/espresso.png`)
  );
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [imageName, setImageName] = useState("espresso.png");

  const removeCharFromString = (string, char, replacement) => {
    return string.replace(char, replacement).toUpperCase();
  };

  const handleStyleChange = (value) => {
    CampaignDataStore.styleType = value;
    setPromoType(value);
  };

  const handleColorChange = (name, value) => {
    const selectedColor = removeCharFromString(value, "#", "");

    if (name === "primarycolor") {
      CampaignDataStore.setPrimaryColor(selectedColor);
    } else {
      CampaignDataStore.setSecondaryColor(selectedColor);
    }
  };

  const openMessagePreviewModal = () => {
    setOpenMessagePreview(true);
  };

  const selectMessageStyle = (style) => {
    CampaignDataStore.style = style;
    setOpenMessagePreview(false);
  };

  const openImagePreviewModal = () => {
    setOpenImageSelectorPreview(true);
  };


  const handleUploadImage = async (info) => {
    const file = info.file.originFileObj;
    const storageRef = ref(storage, `promo-images/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setFileList([
        {
          uid: "-1",
          name: file.name,
          status: "done",
          url: downloadURL,
        },
      ]);
      setOpenImageSelectorPreview(!openImageSelectorPreview);
      CampaignDataStore.imageName = downloadURL;
      setImageUrl(downloadURL);
      message.success("Image uploaded successfully!");
    } catch (error) {
      message.error("Image upload failed. Please try again.");
    }
  };

  const selectPromoImage = (imageset) => {
    CampaignDataStore.imageName = imageset.item.imagename;
    setImageUrl(
      require(`../../images/cafebiopromoimages/${imageset.item.imagename}`)
    );
    setSelectedStyle((prevState) => ({
      ...prevState,
      imagename: imageUrl ? imageUrl : imageset.item.imagename,
    }));
    setOpenImageSelectorPreview(false);
  };

  return (
    <div>
      <Title level={3}>Customize your offer</Title>
      <Text type="secondary">Choose styles that make your offer stand out</Text>
      <Title level={4}>Offer style</Title>
      <Form.Item name="style">
        <Select
          defaultValue={CampaignDataStore.styleType}
          onChange={handleStyleChange}
          style={{ width: "100%" }}
        >
          <Option value="2-gradient">2-Color gradient</Option>
          <Option value="single-color">Single color</Option>
          <Option value="simplified">Simplified</Option>
        </Select>
      </Form.Item>
      <Title level={4}>Colors</Title>
      <Button
        className={styles.btn}
        size="large"
        type="link"
        onClick={openMessagePreviewModal}
      >
        Pick a color theme from our theme library
      </Button>
      <Space direction="horizontal" style={{ display: "flex" }}>
        <ColorPicker
          open={openPrimaryColor}
          onOpenChange={setOpenPrimaryColor}
          size="large"
          defaultFormat="hex"
          value={selectedStyle.primarycolor}
          onChange={(value, hex) => handleColorChange("primarycolor", hex)}
        />
        <Text className={styles.colorLabel}>
          Primary Color: {selectedStyle.primarycolor}
        </Text>
        <ColorPicker
          open={openSecondaryColor}
          onOpenChange={setOpenSecondaryColor}
          size="large"
          defaultFormat="hex"
          value={selectedStyle.secondarycolor}
          onChange={(value, hex) => handleColorChange("secondarycolor", hex)}
        />
        <Text className={styles.colorLabel}>
          Secondary Color: {selectedStyle.secondarycolor}
        </Text>
      </Space>
      <Modal
        title={Constants.promo_choosemessage_copy}
        centered
        open={openMessagePreview}
        onOk={() => setOpenMessagePreview(false)}
        onCancel={() => setOpenMessagePreview(false)}
        width={1200}
        mask={true}
      >
        <div className="messagelist-div" style={{ overflowX: "auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {promostyles.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "calc(25% - 10px)",
                  marginBottom: "20px",
                }}
              >
                <div onClick={() => selectMessageStyle(item)}>
                  <PromoItem
                    trackAnalytics="false"
                    promoimageheader={imageName}
                    promotitle={CampaignDataStore.selectedHeadline}
                    promomessage={CampaignDataStore.bodyMessage}
                    promoprimarycolor={item.primarycolor}
                    promosecondarycolor={item.secondarycolor}
                    messagecolor={item.secondarycolor}
                    disable="true"
                    promotype={promoType}
                    style={{ width: "100%", height: "100px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <Title level={4}>Image</Title>
      <Space direction="horizontal" style={{ display: "flex" }}>
        <Image
          width={68}
          height={68}
          src={imageUrl}
          className={styles.imageWithBorder}
        />
        <Button
          className={styles.imageButton}
          size="medium"
          type="link"
          onClick={openImagePreviewModal}
        >
          Select or upload image
        </Button>
      </Space>
      <Modal
        title={Constants.promo_image_select_header}
        centered
        open={openImageSelectorPreview}
        onOk={() => setOpenImageSelectorPreview(false)}
        onCancel={() => setOpenImageSelectorPreview(false)}
        width={1200}
        mask={true}
      >
        {MerchantInfo.ispremium && (
          <div className={styles.uploadContainer}>
            <Form.Item name="promoimage" rules={[{ required: false }]}>
              <Upload.Dragger
                fileList={fileList}
                maxCount={1}
                multiple={false}
                listType="picture-card"
                onChange={handleUploadImage}
                onRemove={() => {
                  setFileList([]);
                  setImageUrl("");
                  setSelectedStyle((prevState) => ({
                    ...prevState,
                    imagename: "espresso.png",
                  }));
                }}
                onPreview={() => {
                  setPreviewImage(imageUrl);
                  setPreviewOpen(!previewOpen);
                }}
                style={{
                  paddingTop: 50,
                  paddingBottom: 50,
                  border: "4px dashed black",
                }}
              >
                <div className={styles.upload}>
                  <span>
                    <PlusOutlined style={{ fontSize: "40px" }} />
                  </span>
                  <span>Upload an Image</span>
                </div>
              </Upload.Dragger>
              <Modal
                open={previewOpen}
                title={"Preview Image"}
                footer={null}
                onCancel={() => setPreviewOpen(!previewOpen)}
                width={400}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>
          </div>
        )}
        <div className="messagelist-div" style={{ width: "100%" }}>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={promoimages}
            renderItem={(item) => (
              <List.Item>
                <Space direction="vertical" size="large">
                  <div>{item.name}</div>
                  <div
                    onClick={() => selectPromoImage({ item })}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require(`../../images/cafebiopromoimages/${item.imagename}`)}
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </Space>
              </List.Item>
            )}
          />
        </div>
      </Modal>
    </div>
  );
};

export default OfferTheme;
