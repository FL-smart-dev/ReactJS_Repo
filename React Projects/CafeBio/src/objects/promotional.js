import { generateGUIDWithCharacterCount } from "../utils/guid";

// {
//   promo_id: "23456789-0abc-defg-hijk-lmnopqrstuvw",
//   category: "Drink Discount",
//   type: "Minimum Purchase Quantity",
//   item_category: "Espresso Drinks",
//   headline: "Double shot, double reward!",
//   description: "Buy 3 espresso drinks and get 1 free.",
//   activity: "Activate",
//   image_header: {
//     description: "A vibrant cafe scene with people sipping espresso drinks and chatting with friends.",
//   },
//   recommended_redemptions: 10,
//   frequency: "Monthly",
// }

export class PromotionLibraryItem {
  constructor(
    promo_id,
    category,
    type,
    item_category,
    headline,
    description,
    activity,
    image_header,
    recommended_redemptions,
    frequency
  ) {
    this.promo_id = promo_id;
    this.category = category;
    this.type = type;
    this.item_category = item_category;
    this.headline = headline;
    this.description = description;
    this.activity = activity;
    this.image_header = image_header;
    this.recommended_redemptions = recommended_redemptions;
    this.frequency = frequency;
  }
}
export class Promotion {
  constructor(
    merchantname,
    promotitle,
    promoname = "",
    promomessage,
    promobuttontext,
    datestart,
    dateend,
    datetimeend,
    datetimestart,
    redemptionlimit,
    promoimageheader,
    promoterms,
    promoshowterms,
    promotype,
    squareloyaltyID,
    status,
    square_loyalty_program_id,
    date_created = "",
    timezone,
    style,
    sendReminderSMSEnabled
  ) {
    const todaysDate = new Date();
    this.merchantname = merchantname;
    this.promotitle = promotitle;
    this.promoname = merchantname + "-" + generateGUIDWithCharacterCount(5);
    this.promomessage = promomessage;
    this.promobuttontext = promobuttontext;
    this.datestart = datestart;
    this.dateend = dateend;
    this.datetimeend = datetimeend;
    this.datetimestart = datetimestart;
    this.redemptionlimit = redemptionlimit;
    this.promoimageheader = promoimageheader;
    this.promoterms = promoterms;
    this.promoshowterms = promoshowterms;
    this.promotype = promotype;
    this.squareloyaltyID = squareloyaltyID;
    this.status = status;
    this.square_loyalty_program_id = square_loyalty_program_id;
    this.date_created =
      todaysDate.getMonth() +
      1 +
      "/" +
      todaysDate.getDate() +
      "/" +
      todaysDate.getFullYear();
    this.timezone = timezone;
    this.style = style;
    this.sendReminderSMSEnabled = sendReminderSMSEnabled;
  }

  getDate() {
    const todaysDate = new Date();
    let gendate =
      todaysDate.getMonth() +
      1 +
      "/" +
      todaysDate.getDate() +
      "/" +
      todaysDate.getFullYear();
    return gendate;
  }

  // Method to get the remaining redemption limit
  // getRemainingRedemptions() {
  //   // Assume we have a `redemptionCount` variable that keeps track of how many times this promotion has been redeemed
  //   return this.redemptionlimit - redemptionCount;
  // }

  // Method to check if the promotion is currently active
  // isActive() {
  //   const now = new Date();
  //   return now >= this.datetimestart && now <= this.datetimeend;
  // }

  // Method to display the promotion terms and conditions
  // displayTerms() {
  //   if (this.promoshowterms) {
  //     alert(this.promoterms);
  //   }
  // }
}
