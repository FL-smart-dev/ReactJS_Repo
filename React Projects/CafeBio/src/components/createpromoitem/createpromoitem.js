import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import styles from './createpromoitem.module.css';
import { Promotion, PromotionLibraryItem } from '../../objects/promotional';
import { Form, Spin, Typography } from 'antd';
import { database, dbref, dbOnValue } from '../../objects/dataobject';
import * as Constants from '../../utils/promo-constants';
import * as API from '../../utils/api.services';
import PromoItem from '../promoItem/promoItem';
import { useNavigate } from 'react-router-dom';
import { basePath } from '../../utils/promo-constants';
import MerchantInfo from '../../utils/Constants';
import { fetchSquareLocations } from '../../services/SquareAPI/locationService';
import { createCampaign } from '../../utils/AppStrings';
import OfferSteps from './OfferSteps';
import CampaignDataStore from './Utils/CampaignDataStore';
import { formatDate } from '../../utils/dateUtils';
import CustomerGroupServices from '../../services/CustomerGroupServices';

const { Text, Title } = Typography;

function Createpromoitem() {
  const [spinning, setSpinning] = useState(false);
  const { appMerchantHandle, setAppMerchantHandle } = useContext(AppContext);
  const navigate = useNavigate();
  const [premiumMerchant, setPremiumMerchant] = useState(false);
  const [merchantData, setMerchantData] = useState([]);
  const [form] = Form.useForm();
  const [dateRange, setDateRange] = useState(CampaignDataStore.dateRange);
  const [promoType, setPromoType] = useState(CampaignDataStore.styleType);
  const [campaignStyle, setCampaignStyle] = useState(CampaignDataStore.style);
  const [imageName, setImageName] = useState(CampaignDataStore.imageName);
  const [fontFamily, setFontFamily] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [selectedheadline, setSelectedheadline] = useState(CampaignDataStore.selectedHeadline);
  const [bodyMessage, setBodyMessage] = useState(CampaignDataStore.bodyMessage);

  useEffect(() => {
    const handleDataStoreUpdate = () => {
      setSelectedheadline(CampaignDataStore.selectedHeadline);
      setBodyMessage(CampaignDataStore.bodyMessage);
      setPromoType(CampaignDataStore.styleType);
      setCampaignStyle(CampaignDataStore.style);
      setImageName(CampaignDataStore.imageName);
      setDateRange(CampaignDataStore.dateRange);
    };

    CampaignDataStore.subscribe(handleDataStoreUpdate);

    return () => {
      CampaignDataStore.unsubscribe(handleDataStoreUpdate);
    };
  }, []);

  const getLocations = (accessToken) => {
    if (!accessToken) return;
    fetchSquareLocations(accessToken)
      .then((locations) => {
        if (locations) {
          MerchantInfo.locations = locations;
        } else {
          console.log('Failed to fetch Square locations.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const getMerchantInfo = (merchant) => {
    if (merchant === null) {
      return Promise.reject(new Error('Merchant handle is null'));
    }

    return new Promise((resolve, reject) => {
      const tempInfoArray = [];
      const merchantInformation = dbref(database, basePath(merchant) + '/info/');
      dbOnValue(merchantInformation, (snapshot) => {
        snapshot.forEach((infoObject) => {
          switch (infoObject.key) {
            case 'merchantHandle':
              MerchantInfo.merchantHandle = infoObject.val();
              break;
            case 'merchantName':
              MerchantInfo.merchantName = infoObject.val();
              break;
            case 'squareProductionKey':
              MerchantInfo.squareProductionKey = infoObject.val();
              getLocations(MerchantInfo.squareProductionKey);
              break;
            case 'premium':
              setPremiumMerchant(infoObject.val());
              if (infoObject.val() === true) {
                MerchantInfo.ispremium = true;
              }
              break;
            default:
              break;
          }
          tempInfoArray.push(infoObject.val());
        });

        setMerchantData([merchantData, ...tempInfoArray]);
      });
      resolve();
    });
  };

  useEffect(() => {
    if (appMerchantHandle) {
      getMerchantInfo(appMerchantHandle)
        .then(() => {
          getLocations(MerchantInfo.squareProductionKey);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [appMerchantHandle]);

  useEffect(() => {
    console.log('Is premium:', premiumMerchant);
  }, [premiumMerchant]);

  const handleFormSubmit = () => {
    prepareFormSubmission();
  };

  async function prepareFormSubmission() {
    setSpinning(true);

    const customerGroupDetails = await CustomerGroupServices.createCustomerGroup();

    if (customerGroupDetails?.status === 200) {
      console.log('Promotion Created Successfully');
      navigate(`/${appMerchantHandle}`);
    } else {
      console.log('Promotion Creation Failed');
    }
    setSpinning(false);
  }

  const getFormattedEndDate = () => {
    return dateRange && dateRange[1] ? formatDate(dateRange[1]) : 'MM/DD/YY';
  };

  return (
    <div className={styles.Createpromoitem}>
      <Spin spinning={spinning} fullscreen />
      <div className='contentHolder'>
        <div className='contentHolderLeft'>
          <Form layout="vertical" form={form}>
            <Title level={2}>{createCampaign.header}</Title>

            <div style={{ paddingTop: '10px' }}>
              <OfferSteps form={form} onFormSubmit={handleFormSubmit} />
            </div>
          </Form>
        </div>
        <div className='contentHolderRight'>
          <Title level={3}>{createCampaign.preview}</Title>
          <Text type="secondary">{createCampaign.previewSubtitle}</Text>
          <div style={{ marginLeft: 8, marginRight: 4, marginTop: 15 }}>
            {/* Preview Promo Item */}
            <PromoItem
              trackAnalytics="false"
              promoimageheader={imageName}
              promotitle={selectedheadline}
              promomessage={bodyMessage}
              promobuttontext="Redeem"
              promoprimarycolor={campaignStyle.primarycolor}
              promosecondarycolor={campaignStyle.secondarycolor}
              messagecolor={campaignStyle.secondarycolor}
              fontFamily={fontFamily}
              disable="false"
              promotype={promoType}
              dateend={getFormattedEndDate()}
              wholepromo={{
                dateend: getFormattedEndDate(),
                promotitle: selectedheadline,
                promomessage: bodyMessage,
                merchantname: MerchantInfo.merchantName,
                promoterms: CampaignDataStore.termsOfUse
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Createpromoitem.propTypes = {};

export default Createpromoitem;
