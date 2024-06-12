import React, { useState, useEffect } from "react";
import { Form, Input, Typography, Select, Button } from "antd";
import { createCampaign } from "../../utils/AppStrings";
import MerchantInfo from "../../utils/Constants";
import * as Constants from "../../utils/promo-constants";
import * as API from "../../utils/api.services";
import MessageLibraryModal from "./MessageLibraryModal";
import { PromotionLibraryItem } from "../../objects/promotional";
import CampaignDataStore from "./Utils/CampaignDataStore";

//TODO: Separate styles
import styles from "./createpromoitem.module.css";

const { Text, Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

function CreateOffer({ form }) {
  const [selectedLocationIds, setSelectedLocationIds] = useState(
    CampaignDataStore.selectedLocationIds
  );
  const [discountType, setDiscountType] = useState(
    CampaignDataStore.discountType
  );
  const [selectedHeadline, setSelectedHeadline] = useState(
    CampaignDataStore.selectedHeadline
  );
  const [openMessageLibrary, setOpenMessageLibrary] = useState(false);
  const [MessageList, setMessageList] = useState(CampaignDataStore.messageList);
  const [CustomerMessage, setCustomerMessage] = useState(
    CampaignDataStore.customerMessage
  );
  const [promoType, setPromoType] = useState(CampaignDataStore.promoType);
  const [selectedStyle, setselectedStyle] = useState(
    CampaignDataStore.selectedStyle
  );
  const [bodyMessage, setBodyMessage] = useState(CampaignDataStore.bodyMessage);
  const [percentage, setPercentage] = useState(CampaignDataStore.percentage);
  const [amountDiscount, setAmountDiscount] = useState(
    CampaignDataStore.amountDiscount
  );
  const [locations, setLocations] = useState(
    MerchantInfo.locations
  );

  const handleLocationChange = (value) => {
    setSelectedLocationIds(value);
    CampaignDataStore.selectedLocationIds = value;
  };

  const onHeadlineChanged = (e) => {
    setSelectedHeadline(e.target.value);
    CampaignDataStore.selectedHeadline = e.target.value;
  };

  const openMessageLibraryModal = () => {
    hydrateMessageList();
    setOpenMessageLibrary(true);
  };
  
  const hydrateMessageList = () => {
    const messages = API.getAllPromoMessages();
    const updatedMessageList = [...(MessageList || []), ...messages];
    setMessageList(updatedMessageList);
    CampaignDataStore.messageList = updatedMessageList;
};

  const onCampaignNameChanged = (e) => {
    CampaignDataStore.campaignName = e.target.value;
  };

  const onBodyChanged = (e) => {
    setBodyMessage(e.target.value);
    CampaignDataStore.bodyMessage = e.target.value;
  };

  const onPercentageChanged = (e) => {
    setPercentage(e.target.value);
    CampaignDataStore.percentage = e.target.value;
  };

  const onAmountDiscountChanged = (e) => {
    setAmountDiscount(e.target.value);
    CampaignDataStore.amountDiscount = e.target.value;
  };

  function selectCustomerMessage(SelectedMessage) {
    const item = SelectedMessage.item;
    let tempCustomerMessage = new PromotionLibraryItem(
      item.promo_id,
      item.category,
      item.type,
      item.item_category,
      item.headline,
      item.description,
      item.activity,
      item.image_header,
      item.recommended_redemptions,
      item.frequency
    );

    setCustomerMessage(tempCustomerMessage);
    CampaignDataStore.customerMessage = tempCustomerMessage;

    setBodyMessage(item.description);
    CampaignDataStore.bodyMessage = item.description;

    setSelectedHeadline(item.headline);
    CampaignDataStore.selectedHeadline = item.headline;

    setOpenMessageLibrary(false);
  }

  useEffect(() => {
    const handleMerchantInfoUpdate = () => {
      setLocations(MerchantInfo.locations);
    };

    MerchantInfo.subscribe(handleMerchantInfoUpdate);

    return () => {
      MerchantInfo.unsubscribe(handleMerchantInfoUpdate);
    };
  }, []);


  return (
    <div>
      <Title level={3}>Offer Details</Title>
      <Text type="secondary">{createCampaign.offerSubtitle}</Text>

      <Title level={4}>Location</Title>
      <Text className={styles.labelStyle}>
        Select Locations this campaign should run
      </Text>
      <Form.Item
        name="locations"
        rules={[
          {
            required: true,
            message: "Select Location",
          },
        ]}
      >
        <Select
          size="large"
          mode="multiple"
          placeholder="Select a location"
          onChange={handleLocationChange}
        >
         {locations && locations.map((location, index) => (
            <Option key={index} value={location.id}>
              {location.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Title level={4}>Offer type and amount</Title>

      <Text className={styles.labelStyle}>Select offer type</Text>

      <Form.Item
        name="discounttype"
        rules={[
          {
            required: true,
            message: "Please select the discount type!",
          },
        ]}
      >
        <Select
          size="large"
          placeholder="Select a discount type"
          onChange={(value) => {
            setDiscountType(value);
            CampaignDataStore.discountType = value;
          }}
        >
          <Option value="percentage"> Percentage (%)</Option>
          <Option value="amount">Amount ($)</Option>
        </Select>
      </Form.Item>
      {discountType === "percentage" && (
        <div>
          <Form.Item
            name="percentage"
            rules={[
              {
                required: false,
                message: "Please input the percentage limit!",
              },
            ]}
          >
            <Input
              size="large"
              id="percentage"
              type="number"
              placeholder="Percentage"
              value={percentage}
              onChange={onPercentageChanged}
            />
            %
          </Form.Item>
        </div>
      )}
      {discountType === "amount" && (
        <div>
          <Form.Item
            name="amount"
            rules={[
              {
                required: false,
                message: "Please input the amount limit!",
              },
            ]}
          >
            <Input
              size="large"
              id="amountDiscount"
              type="number"
              placeholder="$0"
              value={amountDiscount}
              onChange={onAmountDiscountChanged}
            />
            USD
          </Form.Item>
        </div>
      )}

      <Title level={4}>Offer information</Title>
      <Text className={styles.labelStyle}>{createCampaign.campaignName} </Text>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input the name of campaign",
          },
        ]}
      >
        <Input
          style={{ width: "100%" }}
          size="large"
          type="text"
          autoComplete="off"
          placeholder="MyOffer_ 12_12_2024"
          onChange={onCampaignNameChanged}
        />
      </Form.Item>

      <Button
        className={styles.btn}
        size="large"
        type="link"
        onClick={openMessageLibraryModal}
      >
        Pick a message from our library
      </Button>

      <Text className={styles.labelStyle}>Title</Text>

      <Input
        style={{ width: "100%" }}
        type="text"
        size="large"
        id="promotitle"
        autoComplete="off"
        placeholder="Promo title"
        onChange={onHeadlineChanged}
        value={selectedHeadline}
      ></Input>

      <Text className={styles.labelStyle}>Body</Text>

      <TextArea
        style={{ width: "100%", marginBottom: "20px" }}
        id="promomessage"
        name="promomessage"
        placeholder="Promo body"
        rows="4"
        cols="50"
        value={bodyMessage}
        onChange={onBodyChanged}
      ></TextArea>

      <MessageLibraryModal
        open={openMessageLibrary}
        setOpen={setOpenMessageLibrary}
        MessageList={MessageList}
        selectCustomerMessage={selectCustomerMessage}
        selectedStyle={selectedStyle}
        promoType={promoType}
      />
    </div>
  );
}

export default CreateOffer;
