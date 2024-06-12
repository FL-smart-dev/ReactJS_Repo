import moment from 'moment';

class CampaignDataStore {
  static _listeners = [];
  static _selectedLocationIds = [];
  static _locations = [];
  static _discountType = "";
  static _selectedHeadline = "Jumpstart Your Day!";
  static _messageList = [];
  static _customerMessage = "";
  static _bodyMessage = "20% off your purchase!";
  static _campaignName = "";
  static _amountDiscount = "";
  static _percentage = "";
  static _styleType = "single-color";
  static _imageName = "espresso.png";
  static _style = {
    primarycolor: "FFD600",
    secondarycolor: "BB0AB5",
    imagename :CampaignDataStore._imageName,
  };
  static _promoButtonText = "Redeem";
  static _redemptionLimit = 100;

  static _dateRange = [];
  static _termsOfUse = "Offer valid while supplies last. Terms and conditions apply.";
  static  _smsEnabled = false;

  static subscribe(callback) {
    this._listeners.push(callback);
  }

  static unsubscribe(callback) {
    this._listeners = this._listeners.filter(listener => listener !== callback);
  }

  static reset() {
    this._selectedLocationIds = [];
    this._locations = [];
    this._discountType = "";
    this._selectedHeadline = "Jumpstart Your Day!";
    this._messageList = [];
    this._customerMessage = "";
    this._bodyMessage = "20% off your purchase!";
    this._campaignName = "";
    this._amountDiscount = "";
    this._percentage = "";
    this._styleType = "single-color";
    this._imageName = "espresso.png";
    this._style = {
      primarycolor: "FFD600",
      secondarycolor: "BB0AB5",
    };
    this._promoButtonText = "Redeem";
    this._redemptionLimit = 100;
    this._dateRange = [];
    this._termsOfUse = "Offer valid while supplies last. Terms and conditions apply.";
    this._smsEnabled = false;
    this.notify();
  }

  static notify() {
    console.log("Notifying listeners...");
    this._listeners.forEach(listener => listener());
  }

  static get selectedLocationIds() {
    return this._selectedLocationIds;
  }

  static set selectedLocationIds(ids) {
    this._selectedLocationIds = ids;
    this.notify();
  }

  static get locations() {
    return this._locations;
  }

  static set locations(locations) {
    this._locations = locations;
    this.notify();
  }

  static get discountType() {
    return this._discountType;
  }

  static set discountType(type) {
    this._discountType = type;
    this.notify();
  }

  static get selectedHeadline() {
    return this._selectedHeadline;
  }

  static set selectedHeadline(headline) {
    this._selectedHeadline = headline;
    this.notify();
  }

  static get messageList() {
    return this._messageList;
  }

  static set messageList(list) {
    this._messageList = list;
  }

  static get customerMessage() {
    return this._customerMessage;
  }

  static set customerMessage(message) {
    this._customerMessage = message;
    this.notify();
  }

  static get selectedStyle() {
    return this._style;
  }

  static set selectedStyle(style) {
    this._selectedStyle = style;
    this.notify();
  }

  static get bodyMessage() {
    return this._bodyMessage;
  }

  static set bodyMessage(message) {
    this._bodyMessage = message;
    this.notify();
  }

  static get amountDiscount() {
    return this._amountDiscount;
  }

  static set amountDiscount(discount) {
    this._amountDiscount = discount;
  }

  static get percentage() {
    return this._percentage;
  }

  static set percentage(percent) {
    this._percentage = percent;
  }

  static get campaignName() {
    return this._campaignName;
  }

  static set campaignName(campaignName) {
    this._campaignName = campaignName;
  }

  static get styleType() {
    return this._styleType;
  }

  static set styleType(styleType) {
    this._styleType = styleType;
    this.notify();
  }

  static get style() {
    return this._style;
  }

  static set style(style) {
    this._style = style;
    this.notify();
  }

  static get imageName() {
    return this._imageName;
  }

  static set imageName(imageName) {
    this._imageName = imageName;
    this.notify();
  }

  static get primarycolor() {
    return this._style.primarycolor;
  }

  static setPrimaryColor(color) {
    this._style = { ...this._style, primarycolor: color };
    this.notify();
  }

  static get secondarycolor() {
    return this._style.secondarycolor;
  }

  static setSecondaryColor(color) {
    this._style = { ...this._style, secondarycolor: color };
    this.notify();
  }

  static get dateRange() {
    return this._dateRange;
  }

  static set dateRange(dates) {
    this._dateRange = dates;
    this.notify();
  }

  static get termsOfUse() {
    return this._termsOfUse;
  }

  static set termsOfUse(termsOfUse) {
    this._termsOfUse = termsOfUse;
  }

  static get promoButtonText() {
    return this._promoButtonText;
  }

  static set promoButtonText(promoButtonText) {
    this._promoButtonText = promoButtonText;
  }

  static get smsEnabled() {
    return this._smsEnabled;
  }

  static set smsEnabled(smsEnabled) {
    this._smsEnabled = smsEnabled;
  }

  static get redemptionLimit() {
    return this._redemptionLimit;
  }

  static set redemptionLimit(redemptionLimit) {
    this._redemptionLimit = redemptionLimit;
  }

}

export default CampaignDataStore;
