
export const getMerchantInfo = (merchant) => {
    if (!merchant) {
      return Promise.reject(new Error("Merchant handle is null"));
    }
  
    return new Promise((resolve, reject) => {
      let tempInfoArray = [];
      const merchantInformation = dbref(database, basePath(merchant) + "/info/");
      dbOnValue(merchantInformation, (snapshot) => {
        snapshot.forEach((infoObject) => {
          switch (infoObject.key) {
            case "merchantHandle":
              setMerchantHandle(infoObject.val());
              break;
            case "merchantName":
              setMerchantName(infoObject.val());
              break;
            case "squareProductionKey":
              getLocations(infoObject.val());
              break;
            case "premium":
              setPremiumMerchant(infoObject.val());
              if (infoObject.val() === true) {
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
  
        setMerchantData((prevData) => [...prevData, ...tempInfoArray]);
        resolve();
      });
    });
  };