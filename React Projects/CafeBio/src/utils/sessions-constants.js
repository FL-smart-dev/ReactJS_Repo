import MerchantInfo from "./Constants";
export const merchantName = MerchantInfo.merchantName
export const merchantHandle = MerchantInfo.merchantHandle
export const basePath = (merchantHandle) => 'Merchants/' + merchantHandle;
export const analyticsPath = (merchantHandle) => basePath(merchantHandle) + `/promos`;
export const redemptionPath = (merchantHandle, promoId) => basePath(merchantHandle) + `/promos/${promoId}/redemptions/`;
