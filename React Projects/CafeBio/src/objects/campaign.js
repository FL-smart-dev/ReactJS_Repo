const short = require('short-uuid'); 


   const translator = short(short.constants.flickrBase58, {
    consistentLength: false,
  });
  // Generate a shortened v4 UUID
  // mhvXdrZT4jP5T8vBxuvm75

export class  Campaign{

    constructor(
      datestart,
      dateend,
      campaignname = "",
      merchantname,
      creationtimestamp="",
      daystorun,
      timezone,
      frequency,
      message,
      segment,
      type
        ){
            // const translator = short(short.constants.flickrBase58, {
            //     consistentLength: false,
            //   });
            const todaysDate = new Date();
            this.datestart=datestart
            this.dateend=dateend
            this.campaignname=merchantname + "-" +  translator.new()
            this.merchantname =merchantname
            this.creationtimestamp= todaysDate.getMonth()+1 +"/"+ todaysDate.getDate() + "/"+ todaysDate.getFullYear()
            this.daystorun = daystorun
            this.timezone = timezone
            this.frequency=frequency
            this.message=message
            this.segment=segment
            this.type=type

    }
    

}