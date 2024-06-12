import axios from "../axios/index";
import { ENV } from "../constants/env";
import * as helpers from "../utils/helpers";
import * as API from "../utils/api.services";
import { Promotion } from "../objects/promotional";
import CampaignDataStore from "../components/createpromoitem/Utils/CampaignDataStore";
import MerchantInfo from "../utils/Constants";
import {formatDate3339} from "../utils/dateUtils";

const customerGroupServices = {
  /**
   * Creates a new customer group using the provided data.
   *
   * @param {Object} data - The data object containing information for the new customer group
   * @return {Promise} The response from the axios post request
   */

  createCustomerGroup: async () => {  
    let data = {};
    let dateRange = CampaignDataStore.dateRange;

    const formattedStartDate = formatDate3339(dateRange[0]);
    const formattedEndDate = formatDate3339(dateRange[1]);
    const style =  CampaignDataStore.style;
    style.imagename = CampaignDataStore.imageName;
    style.promotype = CampaignDataStore.styleType;
    try {
      const promo = new Promotion(
        MerchantInfo.merchantHandle,
        CampaignDataStore.selectedHeadline,
        "",
        CampaignDataStore.bodyMessage,
        CampaignDataStore.promoButtonText,
        formattedStartDate,
        formattedEndDate,
        "",
        "",
        CampaignDataStore.redemptionLimit,
        CampaignDataStore.imageName,
        CampaignDataStore.termsOfUse,
        "YES",
        "promotion",
        "",
        "ACTIVE",
        "",
        "",
        "",
        style
      );

      if (dateRange[0]) {
        data.timePeriod = helpers.iCalendarFormatRFC5545(
          dateRange[0],
          dateRange[1]
        );
      }

      console.log("Time: ", data.timePeriod);
      data.merchantName = MerchantInfo.merchantHandle;
      data.discounttype = CampaignDataStore.discountType;
     

      data.environment = ENV;
      data.name = CampaignDataStore.campaignName.trim();
      data.promotion = promo;
      data.selectedLocationId = CampaignDataStore.selectedLocationIds;
      data.redemptionlimit = CampaignDataStore.redemptionLimit;
      data.sendReminderSMSEnabled = CampaignDataStore.smsEnabled;

      if (CampaignDataStore.discountType == "percentage") {
        data.percentage = CampaignDataStore.percentage;
      } else {
        data.amount = CampaignDataStore.amountDiscount;
      }

      const response = await axios.post("/createCustomerGroupDiscount", data);
      CampaignDataStore.reset();
      return response;  
    } catch (error) {
      console.error("Error Creating a new campaign:", error);
      alert("Error Creating a new campaign: " + error);
    }
  },

  updateCustomerGroupDiscount: async (
    data,
    appMerchantHandle,
    promotitle,
    promomessage,
    selectedStyle,
    selectedLocationId,
    discount_id,
    customer_group_id,
    object
  ) => {
    try {
      data = {
        ...data,
        merchantName: appMerchantHandle,
        environment: ENV,
        name: data?.name?.trim(),
        promotion: new Promotion(
          appMerchantHandle,
          promotitle,
          "",
          promomessage,
          "Redeem",
          data.datestart,
          object.dateend,
          "",
          "",
          object.redemptionlimit,
          "",
          "Offer valid while supplies last.Terms and conditions apply.",
          "YES",
          "promotion",
          "",
          "ACTIVE",
          "",
          "",
          "",
          selectedStyle
        ),
        selectedLocationId,
        discountId: discount_id,
        customerGroupsId: customer_group_id,
      };

      const response = await axios.post("/UpdatePromotion", data);
      return response.data;
    } catch (error) {
      console.error("Error updating promotion:", error);
      // throw error;
    }
  },
};

export default customerGroupServices;

