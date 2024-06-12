import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  database,
  dbref,
  dbOnValue,
} from "../../objects/dataobject";
import { promoPath, profileInfoPath } from "../../utils/promo-constants";
import PromoItem from "../promoItem/promoItem";
import BrandingHeader from "../BrandingHeader/BrandingHeader";
import BrandingFooter from "../BrandingFooter/BrandingFooter";
import _ from "lodash";
import styles from "./promolist.module.css";
import MerchantInfo from "../../utils/Constants";
import { setAnalytics, getMerchantLinks } from "../../utils/api.services";
import LinkCarousel from "../../components/LinkCarousel/LinkCarousel";




export function Promolist(trackingId) {
  const routeParams = useParams();
  const [merchantHandle, setMerchantHandle] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [merchantImage, setMerchantImage] = useState("");
  const [premiumMerchant, setPremiumMerchant] = useState(false);
  const [merchantBackgroundColor, setMerchantBackgroundColor] = useState("#FfFfFf");
  const [promoList, setplist] = useState([]);
  const [merchantData, setMerchantData] = useState([]);
  const [sortData, setSortData] = useState("desc");
  const [merchantLinks, setMerchantLinks] = useState([]);
  const [menuVisible,setMenuVisible] =useState(false);
  const [merchantMenu,setMerchantMenu] = useState({});

  const isNotExpired = (expiryDate) => {
    const currentDate = new Date();
    const isExpiredDate = new Date(expiryDate);
    isExpiredDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    return currentDate.getTime() <= isExpiredDate.getTime();
  };

  const getAllPromos = (merchant) => {
    let tempPromoArray = [];
    var merchants = dbref(database, promoPath(merchant));
    dbOnValue(merchants, (snapshot) => {
      console.log(snapshot.val(), "snapshot");
      snapshot.forEach((promo) => {
        const promoData = promo.val();
        if (isNotExpired(promoData.dateend)) {
          tempPromoArray.push(promo.val());
        }
      });
      //sort
      const sortedTemp = _.orderBy(tempPromoArray, ["date_created"], [sortData]);
      setplist(sortedTemp);
    });
  };

  const getMerchantInfo = (merchant) => {
    let tempInfoArray = [];
    var merchantInformation = dbref(database, profileInfoPath(merchant));
    dbOnValue(merchantInformation, (snapshot) => {
      setMerchantMenu(snapshot.val())
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
          case "merchantImage":
            setMerchantImage(infoObject.val());
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
      setMerchantData([merchantData, ...tempInfoArray]);
    });
  };

  useEffect(() => {
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-PQM2MCWJ91";
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PQM2MCWJ91');
    `;
    document.head.appendChild(inlineScript);

    let merchant = routeParams.id;
    MerchantInfo._merchantHandle = merchant;
    document.title = merchant + " - Powered by Cafe";
    setAnalytics({
      page: "landing-page/",
      merchantHandle: merchant,
      userAgent: navigator.userAgent,
      host: window.location.host,
      pathname: window.location.pathname,
      time: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
    getMerchantInfo(merchant);
    getAllPromos(merchant);
    getMerchantLinks(merchant).then((links) => setMerchantLinks(links));

    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(inlineScript);
    };
  }, [routeParams, sortData]);

  return (
    <div
      style={{
        backgroundColor: merchantBackgroundColor,
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "400px",
          padding: "0 8px",
        }}
      >
        <BrandingHeader
          merchantname={merchantName}
          merchanthandle={merchantHandle}
          merchantimage={merchantImage}
          headerrail="true"
          merchantMenu = {merchantMenu}
        />
        
       
        <div className={styles.headerContainer}>
          <div className="h1header">Offers</div>
        </div>
        {promoList.map((item, index) => {
          if (item.promoname && item.style) {
            return (
              <React.Fragment key={item.promoname}>
                <PromoItem
                  trackAnalytics="true"
                  wholepromo={item}
                  promoimageheader={item.style.imagename}
                  promotitle={item.promotitle}
                  promomessage={item.promomessage}
                  promobuttontext={item.promobuttontext}
                  promoprimarycolor={item.style.primarycolor}
                  promoname={item.promoname}
                  promosecondarycolor={item.style.secondarycolor}
                  merchanthandle={item.merchantname}
                  messagecolor={item.style.secondarycolor}
                  disable="false"
                  promotype={item.style.promotype}
                  redemptionLimit={item.redemptionlimit}
                />
                {index === 0 && merchantLinks.length > 0 && (
                  <>
                    <div className="h1header">Links</div>
                    <LinkCarousel merchantLinks={merchantLinks} />
                  </>
                )}
              </React.Fragment>
            );
          } else if (item.promoname) {
            return <></>;
          }
        })}
        <BrandingFooter />
      </div>
    </div>
  );
}

Promolist.propTypes = {};

export default Promolist;
