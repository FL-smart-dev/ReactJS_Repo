import React, { useRef, useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import PropTypes from "prop-types";
import styles from "./updatepromoitem.module.css";
import { Promotion, PromotionLibraryItem } from "../../objects/promotional";
import {
  Form,
  Input,
  DatePicker,
  Button,
  Select,
  Modal,
  List,
  Space,
  Divider,
  Upload,
  Collapse,
} from "antd";

import {
  app,
  database,
  dbset,
  dbref,
  dbOnValue,
  signInWithEmail,
  firebaseConfig,
  auth,
  dbget,
} from "../../objects/dataobject";
import * as Constants from "../../utils/promo-constants";
import { promostyles } from "../../utils/promostyles";
import * as API from "../../utils/api.services";
import PromoItem from "../promoItem/promoItem";
//import IGPromoItem from "../promoItem/igpromoItem";
import IGSquarePromoItem from "../promoItem/igsquarepromoItem";
import MiniPromoItem from "../promoItem/minipromoitem";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { generateGUID, generateGUIDWithCharacterCount } from "../../utils/guid";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Radio } from "antd-mobile/es/components/radio/radio";
import { basePath } from "../../utils/promo-constants";
import { PlusOutlined } from "@ant-design/icons";
import { promoimages } from "../../utils/promo-images";
import Espresso from "../../images/cafebiopromoimages/espresso.png";
import Cookie from "../../images/cafebiopromoimages/cookie.png";
import Croissant from "../../images/cafebiopromoimages/croissant.png";
import CupOfCoffee from "../../images/cafebiopromoimages/cupofcoffee.png";
import ColdBrew from "../../images/cafebiopromoimages/coldbrew.png";
import Cappuccino from "../../images/cafebiopromoimages/cappuccino.png";
import EspressoWithWater from "../../images/cafebiopromoimages/espressowithwater.png";
import Latte from "../../images/cafebiopromoimages/latte.png";
import Americano from "../../images/cafebiopromoimages/americano.png";
import Biscotti from "../../images/cafebiopromoimages/biscotti.png";
import RaspberryDanish from "../../images/cafebiopromoimages/raspberrydanish.png";
import MerchantInfo from "../../utils/Constants";
import promotionServices from "../../services/promotionServices";
import IOSCheckbox from "../checkBox/checkBox";
import CustomerGroupServices from "../../services/CustomerGroupServices";
import CustomModal from "../Modal/index";
import { Typography } from "antd";
import {
  UpdateCampaign,
  UpdateCampaignHeader,
  UpdateCampaignPreview,
  UpdateCampaignPreviewSubtitle,
  UpdateCampaignSubtitle,
} from "../../utils/AppStrings";
import { values } from "lodash";
import moment from "moment";

const { TextArea } = Input;
const { Text, Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const list = API.getAllRetailItems();

function Updatepromoitem() {
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const location = useLocation();
  console.log("Location state:", location.state); // Log the entire state object

  // Destructure promo from location state
  const { item } = location.state || {}; // Use default empty object to avoid errors

  // Now you can use the promo object in your component
  console.log("Promo:", item);

  // Now you can use the promo object in your component
  const { appUserID, setAppUserID } = useContext(AppContext);
  const { appMerchantHandle, setAppMerchantHandle } = useContext(AppContext);
  const navigate = useNavigate();
  const [openMessageLibrary, setOpenMessageLibrary] = useState(false);
  const [openMessagePreview, setOpenMessagePreview] = useState(false);
  const [openImageSelectorPreview, setOpenImageSelectorPreview] =
    useState(false);
  const [MessageList, setMessageList] = useState([]);
  const [merchantHandle, setMerchantHandle] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [premiumMerchant, setPremiumMerchant] = useState(false);
  const [merchantData, setMerchantData] = useState([]);
  const [merchantBackgroundColor, setMerchantBackgroundColor] =
    useState("#FAFAFA");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [form] = Form.useForm();
  const [CustomerMessage, setCustomerMessage] = useState({
    PromotionLibraryItem,
  });
  const [endDate, setEndDate] = useState(null);
  // promo Type
  const [promoType, setPromoType] = useState("single-color");
  const [selectedStyle, setselectedStyle] = useState({
    imagename: "espresso.png",
    primarycolor: "FFD600",
    secondarycolor: "BB0AB5",
    promotype: promoType,
  });
  const [fontFamily, setFontFamily] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedheadline, setselectedheadline] = useState(
    "Buy one get one free!"
  );
  const [selectedmessage, setselectedmessage] = useState(
    "Buy one espresso at full price, and get one free!"
  );
  //Color picker Defaults
  const [displayTextColorPicker, setDisplayTextColorPicker] = useState(false);
  const [displayBackgroundColorPicker, setDisplayBackgroundColorPicker] =
    useState(false);
  const [colorPickerDefaultColor, setColorPickerDefaultColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  // Theme collapsible
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  // Function to toggle the state
  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const handleTextColorClick = () => {
    setDisplayTextColorPicker(!displayTextColorPicker);
  };

  const handleBackgroundColorPickerClick = () => {
    setDisplayBackgroundColorPicker(!displayBackgroundColorPicker);
  };

  const handleClose = () => {
    setDisplayBackgroundColorPicker(false);
    setDisplayTextColorPicker(false);
  };

  const removeCharFromString = (string, char, replacement) => {
    return string.replace(char, replacement).toUpperCase();
  };
  const handleBackgroundColorChange = (color) => {
    colorSelectionChange(color, "background");
  };
  const handleTextColorChange = (color) => {
    colorSelectionChange(color, "text");
  };

  const handleDateChange = (dates) => {
    const endDate = dates[1];
    const endDateString = endDate ? endDate.format("YYYY-MM-DD") : "";

    if (dates && dates.length === 2) {
      setEndDate(endDateString);
    } else {
      setEndDate(null);
    }
  };

  const colorSelectionChange = (color, item) => {
    let currentSelectedColors = selectedStyle;
    const selectedColor = removeCharFromString(color.hex, "#", "");

    switch (item) {
      case "background":
        currentSelectedColors.primarycolor = selectedColor;
        setselectedStyle(currentSelectedColors);
        setColorPickerDefaultColor(color.hex);
        break;
      case "text":
        currentSelectedColors.secondarycolor = selectedColor;
        setselectedStyle(currentSelectedColors);
        setColorPickerDefaultColor(color.hex);
      default:
        break;
    }
  };

  // Collapse

  const getMerchantInfo = (merchant) => {
    let tempInfoArray = [];
    var merchantInformation = dbref(database, basePath(merchant) + "/info/");
    dbOnValue(merchantInformation, (snapshot) => {
      snapshot.forEach((infoObject) => {
        switch (infoObject.key) {
          case "merchantHandle":
            MerchantInfo.merchantHandle = infoObject.val();
            setMerchantHandle(infoObject.val());
            break;
          case "merchantName":
            MerchantInfo.merchantName = infoObject.val();
            setMerchantName(infoObject.val());
            break;
          case "premium":
            setPremiumMerchant(infoObject.val());
            if (infoObject.val() === true) {
              // Check if MerchantBackgroundColor exists in the snapshot
              const bgColor = snapshot.child("merchantBackgroundColor").val();
              if (bgColor) {
                setMerchantBackgroundColor(bgColor);
              }
            }
            break;
          default:
            break;
        }

        tempInfoArray.push(infoObject.val());
      });

      setMerchantData([merchantData, ...tempInfoArray]);
    });
  };

  useEffect(() => {
    console.log("Merchant: ", appMerchantHandle);
    getMerchantInfo(appMerchantHandle);
  }, []);

  useEffect(() => {
    console.log("Is premium:", premiumMerchant);
  }, [premiumMerchant]);

  const handleUploadImage = (info, itemName) => {
    getBase64(info.file.originFileObj, (imageUrl) => {
      setFileList([
        {
          uid: "-1",
          name: "existing_image",
          status: "done",
          url: imageUrl,
        },
      ]);
      setOpenImageSelectorPreview(!openImageSelectorPreview);

      // form.setFieldsValue({ [`${itemName}_cafeimage`]: imageUrl });
      setImageUrl(imageUrl);
    });
  };

  useEffect(() => {
    if (imageUrl) {
      selectPromoImage();
    }
  }, [imageUrl]);

  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    // reader.onerror = (error) => message.error("Error reading file: " + error);
  };
  const hello = "HMF";

  const customizeStyle = [
    {
      key: "1",
      label: "Customize",
      children: <p>{hello}</p>,
    },
    {
      key: "2",
      label: "Customize",
      children: <p>{hello}</p>,
    },
  ];
  //Color Picker
  const colorPickerstyles = reactCSS({
    default: {
      textcolor: {
        width: "50px",
        height: "25px",
        borderRadius: "2px",
        background: `#${selectedStyle.secondarycolor}`,
      },
      bkgcolor: {
        width: "50px",
        height: "25px",
        borderRadius: "2px",
        background: `#${selectedStyle.primarycolor}`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  const renderColorPicker = () => {
    switch (promoType) {
      case "single-color":
        return (
          <>
            <Divider />
            <Title level={5}>Theme colors</Title>

            <div className="colorPickHolder">
              <div className="colorPick">
                <div
                  style={colorPickerstyles.swatch}
                  onClick={handleBackgroundColorPickerClick}
                >
                  <div style={colorPickerstyles.bkgcolor} />
                </div>
                {displayBackgroundColorPicker ? (
                  <div style={colorPickerstyles.popover}>
                    <div
                      style={colorPickerstyles.cover}
                      onClick={handleClose}
                    />
                    <SketchPicker
                      color={"#" + selectedStyle.primarycolor}
                      onChange={handleBackgroundColorChange}
                    />
                  </div>
                ) : null}
              </div>
              <div className="colorPickText">
                Primary Color :<b>#{selectedStyle.primarycolor} </b>{" "}
              </div>
            </div>
          </>
        );

        break;

      case "2-gradient":
        return (
          <>
            <Divider />
            <div className={styles.labelStyle}>Theme colors</div>
            <div className="colorPickHolder">
              <div className="colorPick">
                <div
                  style={colorPickerstyles.swatch}
                  onClick={handleBackgroundColorPickerClick}
                >
                  <div style={colorPickerstyles.bkgcolor} />
                </div>
                {displayBackgroundColorPicker ? (
                  <div style={colorPickerstyles.popover}>
                    <div
                      style={colorPickerstyles.cover}
                      onClick={handleClose}
                    />
                    <SketchPicker
                      color={"#" + selectedStyle.primarycolor}
                      onChange={handleBackgroundColorChange}
                    />
                  </div>
                ) : null}
              </div>
              <div className="colorPickText">
                Primary Color :<b>#{selectedStyle.primarycolor} </b>{" "}
              </div>

              <div className="colorPickHolder">
                <div className="colorPick">
                  <div
                    style={colorPickerstyles.swatch}
                    onClick={handleTextColorClick}
                  >
                    <div style={colorPickerstyles.textcolor}></div>
                  </div>
                  {displayTextColorPicker ? (
                    <div style={colorPickerstyles.popover}>
                      <div
                        style={colorPickerstyles.cover}
                        onClick={handleClose}
                      />
                      <SketchPicker
                        color={"#" + selectedStyle.textcolor}
                        onChange={handleTextColorChange}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <Space></Space>
              <div className="colorPickText">
                Secondary Color : <b> #{selectedStyle.secondarycolor} </b>
              </div>
            </div>
            <Space></Space>
          </>
        );

        break;

      case "simplified":
        return (
          <>
            <Divider />
            <div className={styles.labelStyle}>Theme colors</div>
            <div className="colorPickHolder">
              <div className="colorPick">
                <div
                  style={colorPickerstyles.swatch}
                  onClick={handleBackgroundColorPickerClick}
                >
                  <div style={colorPickerstyles.bkgcolor} />
                </div>
                {displayBackgroundColorPicker ? (
                  <div style={colorPickerstyles.popover}>
                    <div
                      style={colorPickerstyles.cover}
                      onClick={handleClose}
                    />
                    <SketchPicker
                      color={"#" + selectedStyle.primarycolor}
                      onChange={handleBackgroundColorChange}
                    />
                  </div>
                ) : null}
              </div>
              <div className="colorPickText">
                Primary Color :<b>#{selectedStyle.primarycolor} </b>{" "}
              </div>
            </div>
          </>
        );
      default:
        break;
    }
  };

  //Message related stuff

  function openMessageLibraryModal() {
    hydrateMessageList();
    setOpenMessageLibrary(true);
  }
  const openMessagePreviewModal = () => {
    //prepareFormSubmission()
    setOpenMessagePreview(true);
  };
  const openImagePreviewModal = () => {
    //prepareFormSubmission()
    setOpenImageSelectorPreview(true);
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
    setselectedheadline(item.headline);
    setselectedmessage(item.description);
    let promotitle = document.getElementById("promotitle");
    promotitle.value = item.headline;
    let promomessage = document.getElementById("promomessage");
    promomessage.value = item.description;

    setOpenMessageLibrary(false);
  }
  function selectMessageStyle(style) {
    setselectedStyle((prevState) => ({
      ...prevState,
      primarycolor: style.item.primarycolor,
      secondarycolor: style.item.secondarycolor,
    }));
    //setselectedStyle(style.item)
    //console.log("STYLE " + style.item)
    setOpenMessagePreview(false);
  }
  function selectPromoImage(imageset) {
    // setselectedStyle(imageset.item)
    setselectedStyle((prevState) => ({
      ...prevState,
      imagename: imageUrl ? imageUrl : imageset.item.imagename,
    }));
    //console.log("STYLE " + style.item)
    setOpenImageSelectorPreview(false);
  }

  const [discountType, setDiscountType] = useState();
  const [discountConfig, setDiscountConfig] = useState("none");
  const [productOptions, setProductOptions] = useState([]);
  const [categoryBuyType, setCategoryBuyType] = useState([]);
  const [productToBuy, setProductToBuy] = useState([]);
  const [productToFree, setProductToFree] = useState([]);
  const [categoryFreeType, setCategoryFreeType] = useState([]);
  const [timeBased, setTimeBased] = useState(false);

  async function prepareFormSubmission(values) {
    let promotitle = document.getElementById("promotitle");
    let promomessage = document.getElementById("promomessage");
    let percentage = document.getElementById("percentage")?.value;
    //   let appMerchantHandle = document.getElementById("appMerchantHandle")?.value
    let amount = document.getElementById("amountDiscount")?.value;
    discountType === "percentage"
      ? (values.percentage = percentage)
      : (values.amount = amount);
    const { item } = location.state || {};
    const discount_id = item?.discount_id;
    const customer_group_id = item?.customer_group_id;
    const object = item;
    console.log(promotitle, promomessage);

    const customerGroupDetails =
      await CustomerGroupServices.updateCustomerGroupDiscount(
        values,
        appMerchantHandle,
        promotitle.value,
        promomessage.value,
        selectedStyle,
        null,
        discount_id,
        customer_group_id,
        object
      );

    if (customerGroupDetails?.status === 200) {
      setIsOpen(true);
      setStatus("success");
      setText("Promotion Created Successfully");
    } else {
      setIsOpen(true);
      setStatus("error");
      setText("Promotion Creation Failed");
    }
    //history.push('/newpromo');

    // For React Router v6:
    navigate(`/${appMerchantHandle}`);
  }
  const onMessageChanged = (e) => {
    console.log("Message here", e.target.value);
    setselectedmessage(e.target.value);
    //setCustomerMessage(e.target.value);
  };
  const onHeadlineChanged = (e) => {
    setselectedheadline(e.target.value);
  };
  const hydrateMessageList = (e) => {
    setMessageList([...MessageList, ...API.getAllPromoMessages()]);
  };
  const handlePromoTypeChange = (event) => {
    setPromoType(event.target.value);
    setselectedStyle((prevState) => ({
      ...prevState,
      promotype: event.target.value,
    }));
  };

  function renderPromoProperties(item, selectedStyle, promoType) {
    return {
      trackAnalytics: false,
      promoimageheader: selectedStyle.imagename,
      promotitle: item.headline,
      promomessage: item.description,
      promobuttontext: "Redeem",
      promoprimarycolor: selectedStyle.primarycolor,
      promosecondarycolor: "525252",
      messagecolor: "525252",
      disable: true,
      promotype: promoType,
    };
  }

  useEffect(() => {
    try {
      // Check if item is not null and has discount_details property
      if (item && item.discount_details) {
        setDiscountType(item.discount_details.discount_type);
        setselectedheadline(item.promotitle);
        setselectedmessage(item.promomessage);
        setselectedStyle(item.style);
      }
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [item]); // Add item to the dependencies array
  const statusOptions = [
    { value: 1, label: "Publish" },
    { value: 0, label: "Unpublish" },
  ];
  const [statusValue, setStatusValue] = useState("");
  const handleStatusChange = (e) => {
    setStatusValue(e.value);
  };
  return (
    <div className={styles.Createpromoitem}>
      <div className={styles.Createpromoitemholder}>
        <div className={styles.promoholderLeft}>
          <Form
            onFinish={prepareFormSubmission}
            layout="vertical"
            form={form}
            initialValues={{
              promotitle: CustomerMessage.headline,
            }}
          >
            <Title level={2}>{UpdateCampaign.header}</Title>
            <Text type="secondary">{UpdateCampaign.subtitle}</Text>

            <Modal
              title={Constants.promo_choosemessage_copy}
              centered
              open={openMessageLibrary}
              onOk={() => setOpenMessageLibrary(false)}
              onCancel={() => setOpenMessageLibrary(false)}
              width={600}
              mask={true}
            >
              <div className="messagelist-div" style={{ width: "375px" }}>
                <List
                  bordered
                  dataSource={MessageList}
                  renderItem={(item, val) => (
                    <List.Item>
                      <Space direction="vertical" size="large">
                        <div onClick={() => selectCustomerMessage({ item })}>
                          <PromoItem
                            {...renderPromoProperties(
                              item,
                              selectedStyle,
                              promoType
                            )}
                          />
                        </div>
                      </Space>
                    </List.Item>
                  )}
                />
              </div>
            </Modal>

            <Divider />

            <Title level={4}>Campaign Details</Title>

            <div className={styles.labelStyle}>
              {UpdateCampaign.campaignName}{" "}
            </div>
            <Form.Item name="name">
              <Input
                size="large"
                type="text"
                defaultValue={item ? item.campaign_name : ""}
                disabled
              />
            </Form.Item>
            <Divider />
            <Button
              className={styles.btn}
              style={{ width: "100%", textAlign: "left" }}
              size="large"
              type="link"
              onClick={toggleCollapsible}
            >
              {isOpen ? "Close" : "Customize your theme colors >"}
            </Button>

            {isOpen && (
              <div className="theme-collapsible">
                <Divider />

                <Title level={4}>Customize your theme.</Title>
                <Text>
                  Use the colors and styles below to craft a unique message.
                </Text>

                <Divider />
                <div>
                  <Title level={5}>Select a campaign style</Title>
                  <div>
                    <select
                      name="promotype"
                      id="promoptypes"
                      onChange={handlePromoTypeChange}
                    >
                      <option value="single-color">Single color</option>
                      <option value="simplified">Simplified</option>
                      <option value="2-gradient">2-Color gradient</option>
                    </select>
                  </div>
                </div>

                {renderColorPicker()}

                <Button
                  className={styles.btn}
                  style={{ width: "100%", textAlign: "left" }}
                  size="large"
                  type="link"
                  onClick={openMessagePreviewModal}
                >
                  Select colors from our theme templates
                </Button>

                <div className={styles.labelStyle}>Theme image</div>
                <Button
                  className={styles.btn}
                  style={{ width: "100%", textAlign: "left" }}
                  size="medium"
                  type="link"
                  onClick={openImagePreviewModal}
                >
                  Select theme image
                </Button>

                <Divider />

                <Button
                  className={styles.btn}
                  style={{ width: "100%", textAlign: "left" }}
                  size="medium"
                  type="link"
                  onClick={toggleCollapsible}
                >
                  {isOpen ? "Close" : "Customize your theme colors"}
                </Button>
              </div>
            )}

            <Divider />

            <div>
              <div className={styles.labelStyle}>Campaign Headline</div>

              <input
                type="text"
                id="promotitle"
                placeholder="Promo headline"
                onChange={onHeadlineChanged}
                value={selectedheadline}
              ></input>

              <Button
                className={styles.btn}
                style={{ textAlign: "left" }}
                size="large"
                type="link"
                onClick={openMessageLibraryModal}
              >
                {Constants.promo_choosemessage_copy}
              </Button>
            </div>

            <div>
              <div className={styles.labelStyle}>Promo Details</div>

              <textarea
                id="promomessage"
                name="promomessage"
                placeholder="Promo message"
                rows="4"
                cols="50"
                value={selectedmessage}
                onChange={onMessageChanged}
              ></textarea>
            </div>
            <Divider />
            <div></div>
            <Title level={4}>Discount Type</Title>
            <div>
              <div className={styles.labelStyle}>
                Select the type of discount. Percentage or amount based.
              </div>

              <Form.Item name="discounttype">
                <Select
                  defaultValue={item?.discount_details?.discount_type}
                  size="large"
                  placeholder="Select a discount type"
                  onChange={(value) => setDiscountType(value)}
                  disabled
                >
                  <Option value="percentage"> Percentage (%)</Option>
                  <Option value="amount">Amount ($)</Option>
                </Select>
              </Form.Item>
              {discountType == "percentage" && (
                <div>
                  <Form.Item name="percentage">
                    <Input
                      size="large"
                      id="percentage"
                      type="number"
                      placeholder="Percentage"
                      value={item.discount_details.value}
                      disabled
                    />{" "}
                    %
                  </Form.Item>
                </div>
              )}
              {discountType == "amount" && (
                <div>
                  <Form.Item name="amount">
                    <Input
                      size="large"
                      id="amountDiscount"
                      type="number"
                      placeholder="Amount"
                      value={item.discount_details.value}
                      disabled
                    />{" "}
                    USD
                  </Form.Item>
                </div>
              )}
            </div>
            <Form.Item label="How long should the promo run?" name="datestart">
              <RangePicker
                size="large"
                onChange={handleDateChange}
                defaultValue={
                  item ? [moment(item.datestart), moment(item.dateend)] : ""
                }
                disabled
              />
            </Form.Item>

            <Form.Item
              label="How many redemptions of this promo do you want to allow?"
              name="redemptionlimit"
              rules={[
                {
                  required: true,
                  message: "Please input the redemption limit!",
                },
              ]}
              initialValue={item ? item.redemptionlimit : ""}
            >
              <Input
                size="large"
                type="number"
                defaultValue={item ? item.redemptionlimit : ""}
              />
            </Form.Item>

            {/* <div className={styles.Createpromoitemholder}>Promo Duration
             <div className={styles.checkboxWrapper}>
                 <IOSCheckbox label="Time Based" checked={timeBased} onChange={() => setTimeBased(!timeBased)} /> 
          
                          </div>
                      </div>  */}
            {timeBased && discountType && (
              <div className={styles.labelStyle}>
                <Form.Item label="Happy Hours" name="timePeriod">
                  <DatePicker.RangePicker
                    size="large"
                    showTime={{ format: "HH:mm" }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={["Start Date", "End Date"]}
                    // Additional props if needed
                  />
                </Form.Item>
              </div>
            )}

            <hr style={{ color: "white" }}></hr>
            {discountConfig === "bogo" && (
              <div className={styles.labelStyle}> Poduct to buy </div>
            )}

            {discountConfig === "bogo" && (
              <div style={{ display: "flex" }}>
                <Form.Item
                  label=" Quantity  "
                  name="anyTwoQuantity"
                  rules={[
                    {
                      required: true,
                      message: "Please input the amount limit!",
                    },
                  ]}
                  style={{ width: "33%" }}
                  initialValue="1"
                >
                  <Input
                    size="large"
                    type="number"
                    style={{ width: "40%" }}
                    min="1"
                  />
                </Form.Item>
                <Form.Item
                  label="Select Product"
                  name="anyTwoProductIds"
                  rules={[
                    {
                      required: true,
                      message: "Please input the amount limit!",
                    },
                  ]}
                  style={{ width: "70%", flex: 1 }}
                >
                  <Select
                    size="large"
                    placeholder="Select a discount type"
                    onChange={(value) =>
                      form.setFieldsValue({ anyTwoProductIds: [value] })
                    }
                  >
                    {productOptions.map((option) => {
                      if (option.categroy_id != null) {
                        return (
                          <Option
                            key={option.id}
                            value={option.id}
                            style={{ width: "70%" }}
                          >
                            {option.name}
                          </Option>
                        );
                      }
                      return null;
                    })}
                  </Select>
                </Form.Item>
              </div>
            )}
            {discountConfig === "bogo" && (
              <Form.Item
                label="Select With a Category"
                name="anyTwoCategoryIds"
                rules={[{ required: true, message: "Please input Category !" }]}
              >
                <Select
                  size="large"
                  placeholder="Select With a Category "
                  onChange={(value) =>
                    form.setFieldsValue({ anyTwoCategoryIds: [value] })
                  }
                >
                  {productOptions.map((option) => {
                    if (option.categroy_id === null) {
                      return (
                        <Option key={option.id} value={option.id}>
                          {option.name}
                        </Option>
                      );
                    }
                    return null;
                  })}
                </Select>
              </Form.Item>
            )}
            {discountConfig === "bogo" && (
              <div className={styles.labelStyle}> Poduct to Get </div>
            )}
            {discountConfig === "bogo" && (
              <div style={{ display: "flex" }}>
                <Form.Item
                  label="Quantity"
                  name="OneFreeQuantity"
                  rules={[
                    {
                      required: true,
                      message: "Please input the amount limit!",
                    },
                  ]}
                  initialValue="1"
                  style={{ width: "33%" }}
                >
                  <Input
                    size="large"
                    type="number"
                    style={{ width: "40%" }}
                    min="1"
                  />
                </Form.Item>
                <Form.Item
                  label="Select Product"
                  name="OneFreeProductsIds"
                  rules={[
                    {
                      required: true,
                      message: "Please input the amount limit!",
                    },
                  ]}
                  style={{ marginRight: "10px", flex: 1 }}
                >
                  <Select
                    size="large"
                    placeholder="Select a Product "
                    onChange={(value) =>
                      form.setFieldsValue({ OneFreeProductsIds: [value] }) &&
                      setProductToFree(value)
                    }
                  >
                    {productOptions.map((option) => {
                      if (option.categroy_id != null) {
                        return (
                          <Option
                            key={option.id}
                            value={option.id}
                            style={{ width: "70%" }}
                          >
                            {option.name}
                          </Option>
                        );
                      }
                      return null;
                    })}
                  </Select>
                </Form.Item>
              </div>
            )}

            {discountConfig === "bogo" && (
              <Form.Item
                label="Select With a Category"
                name="freeCategoryIds"
                rules={[{ required: true, message: "Please input Category !" }]}
              >
                <Select
                  size="large"
                  placeholder="Select With a Category "
                  onChange={(value) =>
                    form.setFieldsValue({ freeCategoryIds: [value] })
                  }
                >
                  {productOptions.map((option) => {
                    if (option.categroy_id === null) {
                      return (
                        <Option key={option.id} value={option.id}>
                          {option.name}
                        </Option>
                      );
                    }
                    return null;
                  })}
                </Select>
              </Form.Item>
            )}
            {discountConfig === "bundled" && (
              <div className={styles.labelStyle}> Products to Apply </div>
            )}
            {discountConfig === "bundled" && (
              <div style={{ display: "flex" }}>
                <Form.Item
                  label="Select Product"
                  name="productIdsAll"
                  rules={[
                    {
                      required: true,
                      message: "Please input the amount limit!",
                    },
                  ]}
                  style={{ marginRight: "10px", flex: 1 }}
                >
                  <Select
                    size="large"
                    placeholder="Select a Product "
                    onChange={(value) =>
                      form.setFieldsValue({ productIdsAll: [value] }) &&
                      setProductToFree(value)
                    }
                  >
                    {productOptions.map((option) => {
                      if (option.categroy_id != null) {
                        return (
                          <Option
                            key={option.id}
                            value={option.id}
                            style={{ width: "70%" }}
                          >
                            {option.name}
                          </Option>
                        );
                      }
                      return null;
                    })}
                  </Select>
                </Form.Item>
              </div>
            )}

            {discountConfig === "bundled" && (
              <Form.Item
                label="Select With a Category"
                name="allCategoryIds"
                rules={[{ required: true, message: "Please input Category !" }]}
              >
                <Select
                  size="large"
                  placeholder="Select With a Category "
                  onChange={(value) =>
                    form.setFieldsValue({ allCategoryIds: [value] })
                  }
                >
                  {productOptions.map((option) => {
                    if (option.categroy_id === null) {
                      return (
                        <Option key={option.id} value={option.id}>
                          {option.name}
                        </Option>
                      );
                    }
                    return null;
                  })}
                </Select>
              </Form.Item>
            )}

            <div className={styles.labelStyle} name="promotype">
              {" "}
            </div>

            <Form.Item>
              <Button
                className={styles.btn}
                style={{ width: "100%" }}
                size="large"
                type="primary"
                htmlType="submit"
              >
                {UpdateCampaign.UpdateCampaign}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button style={{ width: "100%" }} size="large">
                {UpdateCampaign.cancel}
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.promoholderRight}>
          <Title level={3}>{UpdateCampaign.preview}</Title>
          <Text type="secondary">{UpdateCampaign.previewSubtitle}</Text>
          <Divider />

          <Divider />

          <div className={styles.categoryLabel}> Promotion Preview</div>
          <div style={{ marginLeft: 8, marginRight: 4 }}>
            {/* Preview Promo Item */}
            <PromoItem
              trackAnalytics="false"
              promoimageheader={selectedStyle.imagename}
              promotitle={selectedheadline}
              promomessage={selectedmessage}
              promobuttontext="Redeem"
              promoprimarycolor={selectedStyle.primarycolor}
              promosecondarycolor={selectedStyle.secondarycolor}
              messagecolor={selectedStyle.secondarycolor}
              fontFamily={fontFamily}
              disable="false"
              promotype={promoType}
              wholepromo={{
                promotitle: selectedheadline,
                dateend: endDate,
                promomessage: selectedmessage,
              }}
            />
          </div>
        </div>

        {/* Message Modal  */}

        <Modal
          title={Constants.promo_choosemessage_copy}
          centered
          open={openMessagePreview}
          onOk={() => setOpenMessagePreview(false)}
          onCancel={() => setOpenMessagePreview(false)}
          width={600}
          mask={true}
        >
          <div className="messagelist-div" style={{ width: "375px" }}>
            <List
              bordered
              dataSource={promostyles}
              renderItem={(item, val) => (
                <List.Item>
                  <Space direction="vertical" size="large">
                    <div></div>
                    <div onClick={() => selectMessageStyle({ item })}>
                      <PromoItem
                        trackAnalytics="false"
                        promoimageheader={selectedStyle.imagename}
                        promotitle={selectedheadline}
                        promomessage={selectedmessage}
                        promoprimarycolor={item.primarycolor}
                        promosecondarycolor={item.secondarycolor}
                        messagecolor={item.secondarycolor}
                        disable="true"
                        promotype={promoType}
                      />
                    </div>
                  </Space>
                </List.Item>
              )}
            />
          </div>
        </Modal>

        <Modal
          title={Constants.promo_image_select_header}
          centered
          open={openImageSelectorPreview}
          onOk={() => setOpenImageSelectorPreview(false)}
          onCancel={() => setOpenImageSelectorPreview(false)}
          width={400}
          mask={true}
        >
          {premiumMerchant && (
            <div className={styles.uploadContainer}>
              <Form.Item name="promoimage" rules={[{ required: false }]}>
                <Upload.Dragger
                  fileList={fileList}
                  maxCount={1}
                  multiple={false}
                  listType="picture-card"
                  onChange={(info) => handleUploadImage(info)}
                  onRemove={() => {
                    setFileList([]);
                    setImageUrl("");
                    setselectedStyle((prevState) => ({
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
                    style={{
                      width: "100%",
                    }}
                    src={previewImage}
                  />
                </Modal>
              </Form.Item>
            </div>
          )}
          <div className="messagelist-div" style={{ width: "350px" }}>
            <List
              bordered
              dataSource={promoimages}
              renderItem={(item, val) => (
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
                        width: "300px",
                      }}
                    >
                      <img
                        src={require(`../../images/cafebiopromoimages/${item.imagename}`)}
                        style={{ maxWidth: "220px" }}
                      />
                    </div>
                  </Space>
                </List.Item>
              )}
            />
          </div>
        </Modal>
      </div>
      {isOpen && (
        <CustomModal setIsOpen={setIsOpen} status={status} text={text} />
      )}
    </div>
  );
}

Updatepromoitem.propTypes = {};

export default Updatepromoitem;
