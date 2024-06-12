const short = require('short-uuid'); 


   export const generateGUID = short(short.constants.flickrBase58, {
    consistentLength: false,
  });
  export const generateGUIDWithCharacterCount=(char)=>{
   return generateGUID.new().substring(0,char);
  }
  // Generate a shortened v4 UUID
  // mhvXdrZT4jP5T8vBxuvm75