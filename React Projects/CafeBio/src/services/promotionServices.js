import axiosClient from "../axios/index";
import axios from "../axios/index";
import { ENV } from "../constants/env";
import * as helpers from "../utils/helpers";
const token = "EAAAEYwCoYgVyO8jQYoUWDeCXf2JecLzmy68h0yeNbGeMP4lfZH84OTu2OjKAL6b"; //TODO get token 



const promotionServices = {
    /**
     * Creates a new Bogo discount using the provided data.
     *
     * @param {Object} data - The data object containing information for the new Bogo discount
     * @return {Promise} The response from the axios post request
     */
    createNewBogoDiscount: async (data) => {
        // Set the access token and environment to the data object
        data.accessToken = token;
        data.env = ENV;
 
        // rules
        data.anyTwoProductIds = data.anyTwoProductIds.concat(data.anyTwoCategoryIds);
        data.OneFreeProductsIds = data.OneFreeProductsIds.concat(data.freeCategoryIds);

        // If there is a time period, format it to iCalendar format
        if (data.timePeriod) {
            data.timePeriod = helpers.iCalendarFormatRFC5545(data.timePeriod[0], data.timePeriod[1]);
        }

        try {
            // Make the API call to create the new Bogo discount
            return await axios.post('/createDiscountBogoRules', data);

        } catch (e) {
            // Log any errors to the console
            console.log(e);
        }
    },

    /**
     * Create a new bundled discount
     * @param {Object} data The data for the new discount
     * @param {String} data.accessToken The access token
     * @param {String} data.env The environment
     * @param {String[]} data.productIdsAll The product IDs for the discount
     * @param {String[]} data.allCategoryIds The category IDs for the discount
     * @param {Date[]} data.timePeriod The time period for the discount
     * @param {Number} data.percentage The percentage of the discount
     * @return {Promise} The promise for the API call
     */
    createNewBundledDiscount: async (data) => {
        data.accessToken = token;
        data.env = ENV;
        data.productIdsAll = data.productIdsAll.concat(data.allCategoryIds);
        console.log(data.percentage);

        if (data.timePeriod) {
            data.timePeriod = helpers.iCalendarFormatRFC5545(data.timePeriod[0], data.timePeriod[1]);
        }

        try {
            // Make the API call to create the new bundled discount
            return await axios.post('/createbundledDiscount', data);
        } catch (e) {
            // Log the error to the console
            console.log(e);
        }
    },

    /**
     * Get products and categories
     * @return {Promise} The promise for the API call
     */
    getProductsAndCategories: async () => {
        try {
            // Make the API call to get the products and categories
            // const data = await axiosClient.post('/getProductsCategory', {
            //     "env": "prod",
            //     "accessToken": "EAAAEYwCoYgVyO8jQYoUWDeCXf2JecLzmy68h0yeNbGeMP4lfZH84OTu2OjKAL6b"
            // });
            // Return the data from the API call
            return [];
        } catch (e) {
            // Log the error to the console
            console.log(e);
            // If the status code is 422, set the errors object with the data from the response
            // if (e.response.status === 422) {
            //     errors.value = e.response.data.errors;
            // }
        }
    },
  createCustomerGroup: async (data) => {
    try {
      // Make the API call to create the new customer group
      return await axiosClient.post('/createCustomerGroup', data);
    } catch (e) {
      // Log the error to the console
      console.log(e);
    }
  }
};

export default promotionServices;