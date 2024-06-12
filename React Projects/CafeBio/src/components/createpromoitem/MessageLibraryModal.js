import React from 'react';
import { Modal } from 'antd';
import * as Constants from "../../utils/promo-constants"; 
import PromoItem from "../promoItem/promoItem";
import CampaignDataStore from './Utils/CampaignDataStore';

const MessageLibraryModal = ({ open, setOpen, MessageList = [], selectCustomerMessage }) => {
  
  const renderPromoProperties = (item) => {

    return {
      trackAnalytics: false,
      promoimageheader: CampaignDataStore.imageName,
      promotitle: item.headline,
      promomessage: item.description,
      promobuttontext: CampaignDataStore.promoButtonText,
      promoprimarycolor: CampaignDataStore.style.primarycolor,
      promosecondarycolor: CampaignDataStore.style.secondarycolor,
      messagecolor: CampaignDataStore.style.primarycolor,
      disable: "true",
      promotype: CampaignDataStore.styleType,
    };
  };

  return (
    <Modal
      title={Constants.promo_choosemessage_copy}
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
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
          {Array.isArray(MessageList) && MessageList.map((item, index) => (
            <div
              key={index}
              style={{
                width: "calc(25% - 10px)",
                marginBottom: "20px",
              }}
            >
              <div onClick={() => selectCustomerMessage({ item })}>
                <PromoItem
                  {...renderPromoProperties(
                    item
                  )}
                  style={{ width: "100%", height: "100px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default MessageLibraryModal;
