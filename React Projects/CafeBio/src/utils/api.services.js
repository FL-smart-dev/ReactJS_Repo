
import React from 'react';
import {offers1,promoArchive,merchantHandle,profileInfoPath,promoPath, offers2,offers3, baseAnalyticsPath, pageAnalyticsPath,baseAnalyticsRecordsPath, pageAnalyticsAllPages, linkPath}  from './promo-constants'
import * as ItemsDB from './items'
import { database,dbset,dbref,dbOnValue } from '../objects/dataobject';
import { Promotion } from '../objects/promotional';
import { generateGUIDWithCharacterCount } from './guid';

const offerSource = offers3
export const getAllPromoMessages=()=>{
    let ListOfMessages = [];
    Object.keys(offerSource).forEach((key)=>{
      Object.keys(offerSource[key]).forEach((messageItem)=>{
        const Message = offerSource[key][messageItem]
        ListOfMessages.push(Message)
      })
    })
    return ListOfMessages
}
export const deletePromoMessage=(handle,messageid,wholemessage)=>{
  
    dbset(dbref(database,promoArchive(handle)+wholemessage.promoname),wholemessage);
    dbset(dbref(database,promoPath(handle)+messageid),null);
    
}
export const getHeaderRail=()=>{

let railInfo = [
  {
    "type":"menu",
    "link":"https://www.google.com/maps",
    "description":"Menu",
    "image":"undefined"
    },{
    "type":"location",
    "link":"https://www.google.com/maps",
    "description":"Locations",
    "image":"undefined"
    },{
"type":"website",
"link":"http://www.example.com/nobase",
"description":"Website",
"image":"undefined"
},
{
  "type":"shopping",
  "link":"http://www.Shopify.com/123",
  "description":"Buy Coffee",
  "image":"undefined"
},
{
  "type":"event",
  "link":"http://www.eventbrite.com/event",
  "description":"Event",
  "image":"undefined"
  },
  {
    "type":"video",
    "link":"http://www.youtube.com/segment",
    "description":"YouTube Video",
    "image":"undefined"
    }]

return railInfo


}
export const sendRedemptionToFirebase =(redemptionObject)=>{

    //TODO fix the merchant name
 // const merchantName = redemptionObject.merchantname
    
  //const promoPath = Constants.basePath + "/redemptions/"
  //const promoFullPathWithName = Constants.redemptionPath + promo.promoname
  // Save the form data to Firebase Realtime Database

 // dbset(dbref(database,promoFullPathWithName),promo);
  

}
export const getAllRetailItems=(merchanthandle)=>{
  let listOfItems = []
  const itemList = ItemsDB.retailitems
  Object.keys(itemList).forEach((key)=>{
    Object.keys(itemList[key]).forEach((retailItem)=>{
      if (itemList[key][retailItem]["type"]==='ITEM'){
       const item = itemList[key][retailItem]
       listOfItems.push(item)
      }
      //const Message = Constants.offers1[key][messageItem]
      
    })
  })

  return listOfItems

}

export const checkProfileHandle = async (handle) => {
  // const docRef = db.collection(Constants.basePath + 'Merchants/').doc(handle);
  // const doc = await docRef.get();
  // setHandleExists(doc.exists);
};

export const setAnalytics = (values) => {

  const recordGuid = generateGUIDWithCharacterCount(8);
  dbset(dbref(database,baseAnalyticsRecordsPath(values.merchantHandle)+ values.page  + recordGuid),values);
  dbset(dbref(database,pageAnalyticsAllPages(values.page) + recordGuid),values);
}
export const setProfileInfo =(values)=>{
  const profile = {
 "cafeBioHandle": values.cafeBioHandle,
 "instagramProfileHandle": values.instagramProfileHandle,
 "websiteUrl": values.websiteUrl,
 "shortBio": values.shortBio,
 "location": {
   "address": values.locationAddress,
   "city": values.locationCity,
   "state": values.locationState,
   "zip": values.locationZip,
   "phoneNumber": values.locationPhoneNumber
 },
 "email": values.email,
 "posSystem": values.pos,
 "posKey":values.posKey
   }

  dbset(dbref(database,profileInfoPath),profile);
}
export const getProfileInfo=(handle)=>{
    console.log("profile :" + profileInfoPath)
    var profileInfo = dbref(database,profileInfoPath);
    let profile = {}
    dbOnValue(profileInfo,(profiledata) => {
      console.log("SNAPSHOT :" + profiledata.val().email)

      console.log("SNAPSHOT :" + profiledata)

      profile = {
        "cafeBioHandle": profiledata.val().cafeBioHandle,
        "instagramProfileHandle": profiledata.val().instagramProfileHandle,
        "websiteUrl":profiledata.val().websiteUrl,
        "shortBio": profiledata.val().shortBio,
        "location": {
          "address": profiledata.val().locationAddress,
          "city": profiledata.val().locationCity,
          "state": profiledata.val().locationState,
          "zip": profiledata.val().locationZip,
          "phoneNumber": profiledata.val().locationPhoneNumber
        },
        "email": profiledata.val().email,
        "posSystem": profiledata.val().pos,
        "posKey":profiledata.val().posKey
          }
    })
    return profile
}
export const getSquareAccessToken = (merchantName, environment) => {
    console.log("merchantName:", merchantName);
    let  SquareKey = environment!== "prod" ? "squareSandboxKey" : "squareProductionKey";
    const pathToKey = "Merchants/" + merchantName + "/info/" +SquareKey;
    
    const squareSandboxKeyRef = dbref(database, pathToKey);

    return new Promise((resolve, reject) => {
        // Listen for changes in the squareSandboxKey node
        const unsubscribe = dbOnValue(squareSandboxKeyRef, (snapshot) => {
            const key = snapshot.val();
            resolve(key);
           // Stop listening for changes once the value is retrieved
        }, (error) => {
            console.error("Error fetching squareSandboxKey:", error);
            reject(error);
        });
    });
};
export const createNewPromotion =(values,promotitle,promomessage,selectedStyle,merchant,customer_group_id,discount_id)=>{
  //General Const Stuff

    //TODO fix the merchant name
 
    const promo = new Promotion(
      merchant,
      promotitle,
      "",
      promomessage,
      "Redeem",
      values.datestart[0].format("MM-DD-YYYY"),
      values.datestart[1].format("MM-DD-YYYY"),
      "",
      "",
     values.redemptionlimit,
      "",
      "Offer valid while supplies last.Terms and conditions apply.",
      "YES",
  "promotion",
      "",
      "ACTIVE",
      "",
      "",
      "",
        selectedStyle,
        customer_group_id,
        discount_id
      
    );
    dbset(dbref(database,promoPath(merchant)+promo.promoname),promo);
}


// Link
export const createNewLink = (linkInfo)=>{
  const newLink = linkInfo
  let linkID =  newLink.linkItem.merchantname + "-link-" + generateGUIDWithCharacterCount(5);
  newLink.linkItem.linkID = linkID
  dbset(dbref(database,linkPath(newLink.linkItem.merchantname)+linkID),newLink);

}

export const getMerchantLinks = async (merchant) => {
  return new Promise((resolve,reject) => {
    let tempLinksArray = [];
    const merchantsRef = dbref(database, linkPath(merchant));
    dbOnValue(merchantsRef, (snapshot) => {
      snapshot.forEach((link) => {
        console.log(JSON.stringify(link.val()))
        tempLinksArray.push(link.val());
      });
      resolve(tempLinksArray);
    },reject);

    
  });
  
};