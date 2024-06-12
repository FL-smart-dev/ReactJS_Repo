const PromoItem = {
    create: (item) => ({
      key: item.promoname,
      promoimageheader: item.style.stylename,
      promotitle: item.promotitle,
      promomessage: item.promomessage,
      promobuttontext: item.promobuttontext,
      promobackgroundcolor: item.style.backgroundcolor,
      promotitlecolor: item.style.textcolor,
      messagecolor: item.style.textcolor,
      disable: false,
      merchanthandle: item.merchantname,
      promoname: item.promoname
    })
  };
  
  export default PromoItem;
  