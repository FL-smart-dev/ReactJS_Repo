import MerchantInfo from "./Constants";

export const promo_redeem_copy = "Redeem";
export const promo_choosemessage_copy = "Select a campaign template.";
export const promo_headline_copy ="Promo Headline"
export const promo_messagebody_copy ="Promotion Message"
export const promo_promolength_copy = "How long should the promo run?"
export const promo_promoredemptions_copy = "How many redemptions of this promo do you want to allow?"

export const merchantName = MerchantInfo.merchantName
export const merchantHandle = MerchantInfo.merchantHandle
export const merchantid = "1"
// export const basePath = 'Merchants/'
export const basePath = (merchantHandle) => 'Merchants/' + merchantHandle;

export const baseRedemptionPath = 'Redemptions/'
export const promoPath = (merchantHandle) => basePath(merchantHandle) + "/promos/";
export const linkPath = (merchantHandle) => basePath(merchantHandle) + "/links/";

export const promoArchive = (merchantHandle) => basePath(merchantHandle) + "/promo-archive/"
export const profileInfoPath = (merchantHandle) => basePath(merchantHandle) + "/info/"
export const redemptionPath = (merchantHandle) => basePath(merchantHandle) + "/redemptions/"
export const redemptionPathMain = baseRedemptionPath 

// Analytics
export const baseAnalyticsPath = (merchantHandle) => basePath(merchantHandle) + "/analytics/"
export const pageAnalyticsPath = (merchantHandle) => baseAnalyticsPath(merchantHandle) + "/"
export const baseAnalyticsRecordsPath = (merchantHandle) => pageAnalyticsPath(merchantHandle) + "/records/"
export const pageAnalyticsAllPages = (page) =>{return `Analytics/records/${page}/`};



//Square POS Info
 export const squarePOSProductionPath = (merchantHandle) => basePath(merchantHandle) + "/pos-info/square/production"

 export const squarePOSSandboxPath = (merchantHandle) => basePath(merchantHandle) + "/pos-info/square/sandbox"

// //export const basePath = (merchantHandle) => {
//   return 'Merchants/'+ merchantHandle};


// Promo Images - Default


export const promo_image_select_header ="Select Image"




// Redemption Screen




//PROMOS

export const offers3 = {
  "promotions": [
    {
      "promo_id": "promo001",
      "category": "Morning Buzz",
      "headline": "Jumpstart Your Day!",
      "description": "20% off your total purchase before 10 AM!",
      "recommended_redemptions": 50,
      "discount_type": "20% off",
      "pos_setup_instructions": "Set discount parameters to apply 20% off total between store opening and 10 AM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Morning Buzz\", \"percentage\": \"20\", \"time_constraints\": [\"opening\", \"10 AM\"] } } }"
    },
    {
      "promo_id": "promo002",
      "category": "Happy Hour",
      "headline": "Afternoon Delight!",
      "description": "$1 off your coffee from 2 PM to 4 PM!",
      "recommended_redemptions": 40,
      "discount_type": "$1 off",
      "pos_setup_instructions": "Program a $1 discount on all purchases made between 2 PM and 4 PM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Afternoon Delight\", \"amount\": \"1\", \"time_constraints\": [\"2 PM\", \"4 PM\"] } } }"
    },
    {
      "promo_id": "promo003",
      "category": "Study Break",
      "headline": "Study Smarter, Not Harder!",
      "description": "$5 off your total when you spend $20!",
      "recommended_redemptions": 30,
      "discount_type": "$5 off",
      "pos_setup_instructions": "Set up a discount for $5 off on purchases of $20 or more.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Study Break\", \"amount\": \"5\", \"min_purchase\": \"20\" } } }"
    },
    {
      "promo_id": "promo004",
      "category": "Late Night",
      "headline": "Night Owl Special!",
      "description": "15% off your order after 8 PM!",
      "recommended_redemptions": 35,
      "discount_type": "15% off",
      "pos_setup_instructions": "Implement a 15% discount for purchases made after 8 PM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Night Owl Special\", \"percentage\": \"15\", \"time_constraints\": [\"8 PM\", \"closing\"] } } }"
    },
    {
      "promo_id": "promo005",
      "category": "Weekend Warrior",
      "headline": "Weekend Wake-Up Call!",
      "description": "Buy any drink, get 50% off the second during weekends!",
      "recommended_redemptions": 25,
      "discount_type": "50% off second item",
      "pos_setup_instructions": "Configure BOGO 50% off for drinks purchased on weekends.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Weekend Warrior\", \"type\": \"BOGO\", \"percentage\": \"50\", \"days\": [\"Saturday\", \"Sunday\"] } } }"
    },
    {
      "promo_id": "promo006",
      "category": "Rainy Day",
      "headline": "Chase Away the Rain!",
      "description": "$2 off your total on rainy days!",
      "recommended_redemptions": 20,
      "discount_type": "$2 off",
      "pos_setup_instructions": "Activate a $2 discount automatically when local weather data indicates rain.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Rainy Day\", \"amount\": \"2\", \"weather_based\": true } } }"
    },
    {
      "promo_id": "promo007",
      "category": "Digital Detox",
      "headline": "Unplug to Recharge!",
      "description": "15% off when you leave your phone at the counter!",
      "recommended_redemptions": 10,
      "discount_type": "15% off",
      "pos_setup_instructions": "Set up a 15% discount for customers who agree to leave their phone at the counter while they enjoy their drink.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Digital Detox\", \"percentage\": \"15\" } } }"
    },
    {
      "promo_id": "promo008",
      "category": "Early Bird",
      "headline": "Early Bird Gets the Brew!",
      "description": "20% off your coffee if you're one of the first 10 customers!",
      "recommended_redemptions": 10,
      "discount_type": "20% off",
      "pos_setup_instructions": "Apply a 20% discount to the first 10 purchases of the day.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Early Bird\", \"percentage\": \"20\", \"customer_limit\": \"10\" } } }"
    },
    {
      "promo_id": "promo009",
      "category": "Loyalty Leap",
      "headline": "Loyalty Leap!",
      "description": "Complete 5 purchases, get $5 off your next!",
      "recommended_redemptions": 50,
      "discount_type": "$5 off",
      "pos_setup_instructions": "Track customer purchases and apply a $5 discount after the fifth purchase.",
      "required_square_api_instructions": "{ \"object\": { \"loyalty\": { \"name\": \"Loyalty Leap\", \"purchases_required\": \"5\", \"discount\": \"5\" } } }"
    },
    {
      "promo_id": "promo010",
      "category": "Social Sipper",
      "headline": "Sip & Snap!",
      "description": "Post a photo with our coffee on social media, get $1 off!",
      "recommended_redemptions": 40,
      "discount_type": "$1 off",
      "pos_setup_instructions": "Offer $1 off to customers who show a social media post featuring our product at the counter.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Social Sipper\", \"amount\": \"1\", \"social_media_promotion\": true } } }"
    },
    {
      "promo_id": "promo011",
      "category": "Flash Sale",
      "headline": "Flash Brew Bash!",
      "description": "10% off all drinks during flash hour from 1 PM to 2 PM!",
      "recommended_redemptions": 30,
      "discount_type": "10% off",
      "pos_setup_instructions": "Set up a 10% off all drinks between 1 PM and 2 PM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Flash Brew Bash\", \"percentage\": \"10\", \"time_constraints\": [\"1 PM\", \"2 PM\"] } } }"
    },
    {
      "promo_id": "promo012",
      "category": "Chill Out",
      "headline": "Chill Vibes, Cool Prices!",
      "description": "$1.50 off your total when you order any iced beverage!",
      "recommended_redemptions": 25,
      "discount_type": "$1.50 off",
      "pos_setup_instructions": "Program a $1.50 discount on all iced beverage purchases.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Chill Vibes\", \"amount\": \"1.50\" } } }"
    },
    {
      "promo_id": "promo013",
      "category": "Birthday Brew",
      "headline": "Birthday Brew Bash!",
      "description": "20% off on your birthday!",
      "recommended_redemptions": 50,
      "discount_type": "20% off",
      "pos_setup_instructions": "Configure a 20% birthday discount applicable on customer's birth date.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Birthday Brew\", \"percentage\": \"20\", \"date_constraint\": \"birthday\" } } }"
    },
    {
      "promo_id": "promo014",
      "category": "Treat a Friend",
      "headline": "Coffee on Me!",
      "description": "Bring a friend, get 30% off both your orders!",
      "recommended_redemptions": 40,
      "discount_type": "30% off",
      "pos_setup_instructions": "Offer a 30% discount when two customers order together.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Treat a Friend\", \"percentage\": \"30\", \"condition\": \"dual_purchase\" } } }"
    },
    {
      "promo_id": "promo015",
      "category": "Eco Cup",
      "headline": "Eco Sipper!",
      "description": "$2 off when you bring your own cup!",
      "recommended_redemptions": 35,
      "discount_type": "$2 off",
      "pos_setup_instructions": "Implement a $2 discount for customers who use their own cups.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Eco Cup\", \"amount\": \"2\", \"condition\": \"own_cup\" } } }"
    },
    {
      "promo_id": "promo016",
      "category": "Trivia Time",
      "headline": "Trivia Discount Dash!",
      "description": "Answer a trivia question, win up to 25% off!",
      "recommended_redemptions": 20,
      "discount_type": "Up to 25% off",
      "pos_setup_instructions": "Set a trivia challenge at the counter; discounts based on correct answers.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Trivia Time\", \"percentage\": \"up to 25\", \"condition\": \"trivia_success\" } } }"
    },
    {
      "promo_id": "promo017",
      "category": "Student Saver",
      "headline": "Study Fuel Discount!",
      "description": "Show your student ID, get 15% off!",
      "recommended_redemptions": 50,
      "discount_type": "15% off",
      "pos_setup_instructions": "Provide a 15% discount to customers who present a valid student ID.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Student Saver\", \"percentage\": \"15\", \"condition\": \"student_id\" } } }"
    },
    {
      "promo_id": "promo018",
      "category": "Local Love",
      "headline": "Local's Day Discount!",
      "description": "Locals get 10% off every Wednesday!",
      "recommended_redemptions": 30,
      "discount_type": "10% off",
      "pos_setup_instructions": "Locals receive a 10% discount every Wednesday upon proof of residency.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Local Love\", \"percentage\": \"10\", \"day_constraint\": \"Wednesday\", \"condition\": \"proof_of_residency\" } } }"
    },
    {
      "promo_id": "promo019",
      "category": "Morning Rush",
      "headline": "Beat the Clock!",
      "description": "15% off if you order before 7:30 AM!",
      "recommended_redemptions": 40,
      "discount_type": "15% off",
      "pos_setup_instructions": "Set a 15% discount for orders made before 7:30 AM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Morning Rush\", \"percentage\": \"15\", \"time_constraints\": [\"opening\", \"7:30 AM\"] } } }"
    },
    {
      "promo_id": "promo020",
      "category": "Social Media Star",
      "headline": "Insta Brew Perks!",
      "description": "10% off when you check-in on Instagram at our location!",
      "recommended_redemptions": 25,
      "discount_type": "10% off",
      "pos_setup_instructions": "Offer 10% off to customers who check-in on Instagram at the coffee shop.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Social Media Star\", \"percentage\": \"10\", \"social_media_promotion\": true } } }"
    },
    {
      "promo_id": "promo021",
      "category": "Rainy Day Rewind",
      "headline": "Rainy Day Rewind!",
      "description": "Grab 10% off on any wet day!",
      "recommended_redemptions": 25,
      "discount_type": "10% off",
      "pos_setup_instructions": "Enable a 10% discount automatically when local weather indicates rain.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Rainy Day Rewind\", \"percentage\": \"10\", \"weather_based\": true } } }"
    },
    {
      "promo_id": "promo022",
      "category": "Midweek Motivator",
      "headline": "Hump Day Deal!",
      "description": "15% off every Wednesday to power through the week!",
      "recommended_redemptions": 30,
      "discount_type": "15% off",
      "pos_setup_instructions": "Set a 15% off all purchases every Wednesday.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Midweek Motivator\", \"percentage\": \"15\", \"day_constraint\": \"Wednesday\" } } }"
    },
    {
      "promo_id": "promo023",
      "category": "Early Riser",
      "headline": "First Light Special!",
      "description": "20% off your first morning coffee before 8 AM!",
      "recommended_redemptions": 20,
      "discount_type": "20% off",
      "pos_setup_instructions": "Apply a 20% discount to the first coffee of the day if ordered before 8 AM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Early Riser\", \"percentage\": \"20\", \"time_constraints\": [\"opening\", \"8 AM\"] } } }"
    },
    {
      "promo_id": "promo024",
      "category": "Late Night Sip",
      "headline": "Midnight Mug!",
      "description": "Enjoy 15% off post-9 PM pick-me-ups!",
      "recommended_redemptions": 25,
      "discount_type": "15% off",
      "pos_setup_instructions": "Offer a 15% discount for any purchase made after 9 PM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Late Night Sip\", \"percentage\": \"15\", \"time_constraints\": [\"9 PM\", \"closing\"] } } }"
    },
    {
      "promo_id": "promo025",
      "category": "Weekend Bonus",
      "headline": "Sunny Saturday Saver!",
      "description": "Score 20% off any drink on Saturdays!",
      "recommended_redemptions": 40,
      "discount_type": "20% off",
      "pos_setup_instructions": "Activate a 20% discount on all drinks every Saturday.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Weekend Bonus\", \"percentage\": \"20\", \"days\": [\"Saturday\"] } } }"
    },
    {
      "promo_id": "promo026",
      "category": "Happy Hour Extended",
      "headline": "Twilight Treats!",
      "description": "Grab $1.50 off any beverage from 3 PM to 5 PM!",
      "recommended_redemptions": 30,
      "discount_type": "$1.50 off",
      "pos_setup_instructions": "Set a $1.50 discount on all beverages between 3 PM and 5 PM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Happy Hour Extended\", \"amount\": \"1.50\", \"time_constraints\": [\"3 PM\", \"5 PM\"] } } }"
    },
    {
      "promo_id": "promo027",
      "category": "Check-In Bonus",
      "headline": "Tag Us, Win Big!",
      "description": "Check in on social media, get $2 off instantly!",
      "recommended_redemptions": 25,
      "discount_type": "$2 off",
      "pos_setup_instructions": "Provide a $2 discount to customers who show a check-in at our location on any social media.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Check-In Bonus\", \"amount\": \"2\", \"social_media_promotion\": true } } }"
    },
    {
      "promo_id": "promo028",
      "category": "Eco Bonus",
      "headline": "Green Cup Special!",
      "description": "Bring a reusable cup, get 15% off your order!",
      "recommended_redemptions": 40,
      "discount_type": "15% off",
      "pos_setup_instructions": "Offer a 15% discount for using a reusable cup.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Eco Bonus\", \"percentage\": \"15\", \"condition\": \"reusable_cup\" } } }"
    },
    {
      "promo_id": "promo029",
      "category": "Local Loyalty",
      "headline": "Neighborhood Nectar!",
      "description": "Locals enjoy 10% off every Tuesday!",
      "recommended_redemptions": 35,
      "discount_type": "10% off",
      "pos_setup_instructions": "Provide a 10% discount every Tuesday for local residents.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Local Loyalty\", \"percentage\": \"10\", \"day_constraint\": \"Tuesday\", \"condition\": \"proof_of_residency\" } } }"
    },
    {
      "promo_id": "promo030",
      "category": "Social Share",
      "headline": "Snap, Share, and Save!",
      "description": "Post a pic with our special hashtag, get $1 off!",
      "recommended_redemptions": 50,
      "discount_type": "$1 off",
      "pos_setup_instructions": "Enable a $1 off discount for customers who post a picture with our hashtag.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Social Share\", \"amount\": \"1\", \"social_media_promotion\": true } } }"
    },
    {
      "promo_id": "promo031",
      "category": "Mystery Monday",
      "headline": "Mystery Monday Madness!",
      "description": "Unlock a mystery discount every Monday!",
      "recommended_redemptions": 20,
      "discount_type": "Up to 20% off",
      "pos_setup_instructions": "Set up a random discount between 5% and 20% for purchases made on Mondays.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Mystery Monday\", \"type\": \"random\", \"percentage_range\": [\"5\", \"20\"], \"day_constraint\": \"Monday\" } } }"
    },
    {
      "promo_id": "promo032",
      "category": "Student Night",
      "headline": "Study Hard, Save Harder!",
      "description": "Students get 20% off every Thursday night!",
      "recommended_redemptions": 25,
      "discount_type": "20% off",
      "pos_setup_instructions": "Offer a 20% discount to students with valid ID every Thursday night.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Student Night\", \"percentage\": \"20\", \"day_constraint\": \"Thursday\", \"condition\": \"student_id\" } } }"
    },
    {
      "promo_id": "promo033",
      "category": "Double Stamp Tuesday",
      "headline": "Twice the Perks, Double the Fun!",
      "description": "Earn double loyalty points every Tuesday!",
      "recommended_redemptions": 40,
      "discount_type": "Double points",
      "pos_setup_instructions": "Enable double loyalty points accumulation for purchases made on Tuesdays.",
      "required_square_api_instructions": "{ \"object\": { \"loyalty\": { \"name\": \"Double Stamp Tuesday\", \"factor\": \"2\", \"day_constraint\": \"Tuesday\" } } }"
    },
    {
      "promo_id": "promo034",
      "category": "Weekend Wind Down",
      "headline": "Weekend Wind Down!",
      "description": "Unwind with 15% off all beverages after 6 PM on Sundays!",
      "recommended_redemptions": 30,
      "discount_type": "15% off",
      "pos_setup_instructions": "Program a 15% discount on all beverages purchased after 6 PM on Sundays.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Weekend Wind Down\", \"percentage\": \"15\", \"time_constraints\": [\"6 PM\", \"closing\"], \"day_constraint\": \"Sunday\" } } }"
    },
    {
      "promo_id": "promo035",
      "category": "Early Bird Special",
      "headline": "Catch the Worm!",
      "description": "20% off your purchase if you're one of the first 5 customers in the morning!",
      "recommended_redemptions": 10,
      "discount_type": "20% off",
      "pos_setup_instructions": "Apply a 20% discount to the first 5 purchases each morning.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Early Bird Special\", \"percentage\": \"20\", \"customer_limit\": \"5\" } } }"
    },
    {
      "promo_id": "promo036",
      "category": "Nightcap Special",
      "headline": "Nightcap Nudge!",
      "description": "End your day right with 10% off after 10 PM!",
      "recommended_redemptions": 20,
      "discount_type": "10% off",
      "pos_setup_instructions": "Activate a 10% discount for all orders placed after 10 PM.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Nightcap Special\", \"percentage\": \"10\", \"time_constraints\": [\"10 PM\", \"closing\"] } } }"
    },
    {
      "promo_id": "promo037",
      "category": "Weekday Perk",
      "headline": "Midweek Perk-Up!",
      "description": "Enjoy $2 off any large coffee from Monday to Wednesday!",
      "recommended_redemptions": 50,
      "discount_type": "$2 off",
      "pos_setup_instructions": "Implement a $2 discount on large coffees from Monday to Wednesday.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Weekday Perk\", \"amount\": \"2\", \"days\": [\"Monday\", \"Tuesday\", \"Wednesday\"] } } }"
    },
    {
      "promo_id": "promo038",
      "category": "Digital Detox Day",
      "headline": "Digital Detox Challenge!",
      "description": "Turn off your phone for 30 mins, get 15% off your order!",
      "recommended_redemptions": 15,
      "discount_type": "15% off",
      "pos_setup_instructions": "Offer a 15% discount to customers who turn off their phone for 30 minutes while in the café.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Digital Detox Day\", \"percentage\": \"15\", \"condition\": \"phone_off_30mins\" } } }"
    },
    {
      "promo_id": "promo039",
      "category": "Fresh Start Friday",
      "headline": "Fresh Start Fridays!",
      "description": "Kickstart the weekend with 10% off any smoothie!",
      "recommended_redemptions": 25,
      "discount_type": "10% off",
      "pos_setup_instructions": "Set a 10% discount on all smoothies every Friday.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Fresh Start Friday\", \"percentage\": \"10\", \"day_constraint\": \"Friday\" } } }"
    },
    {
      "promo_id": "promo040",
      "category": "Caffeine Reload",
      "headline": "Caffeine Reload!",
      "description": "Refill your coffee and get 50% off the refill!",
      "recommended_redemptions": 30,
      "discount_type": "50% off refill",
      "pos_setup_instructions": "Offer a 50% discount on coffee refills.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Caffeine Reload\", \"percentage\": \"50\", \"condition\": \"refill\" } } }"
    },
    {
      "promo_id": "promo041",
      "category": "Pajama Party",
      "headline": "Pajama Coffee Run!",
      "description": "Show up in your pajamas, get 15% off!",
      "recommended_redemptions": 20,
      "discount_type": "15% off",
      "pos_setup_instructions": "Offer a 15% discount to customers who visit in pajamas.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Pajama Party\", \"percentage\": \"15\", \"condition\": \"in_pajamas\" } } }"
    },
    {
      "promo_id": "promo042",
      "category": "Sundae Coffee",
      "headline": "Sunday Sundae Funday!",
      "description": "Buy any coffee on Sunday, get a free small sundae!",
      "recommended_redemptions": 25,
      "discount_type": "Free item",
      "pos_setup_instructions": "Configure a promotion to offer a free small sundae with any coffee purchase on Sundays.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Sundae Coffee\", \"type\": \"free_item\", \"item\": \"small sundae\", \"day_constraint\": \"Sunday\" } } }"
    },
    {
      "promo_id": "promo043",
      "category": "After School Special",
      "headline": "After School Espresso!",
      "description": "15% off your drink post-3 PM on weekdays!",
      "recommended_redemptions": 30,
      "discount_type": "15% off",
      "pos_setup_instructions": "Program a 15% discount for purchases made after 3 PM on weekdays.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"After School Special\", \"percentage\": \"15\", \"time_constraints\": [\"3 PM\", \"5 PM\"], \"days\": [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\"] } } }"
    },
    {
      "promo_id": "promo044",
      "category": "Green Monday",
      "headline": "Go Green, Get Green!",
      "description": "Bring any recyclable item, enjoy $1 off your order!",
      "recommended_redemptions": 50,
      "discount_type": "$1 off",
      "pos_setup_instructions": "Offer $1 off to customers who bring a recyclable item.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Green Monday\", \"amount\": \"1\", \"condition\": \"recyclable_item\" } } }"
    },
    {
      "promo_id": "promo045",
      "category": "Tag-a-Friend Tuesday",
      "headline": "Tag-a-Friend, Both Win!",
      "description": "Tag a friend on our promo post, both get 10% off!",
      "recommended_redemptions": 40,
      "discount_type": "10% off",
      "pos_setup_instructions": "Apply a 10% discount for both customers when one tags a friend under our promotional post.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Tag-a-Friend Tuesday\", \"percentage\": \"10\", \"social_media_condition\": \"tag_friend\" } } }"
    },
    {
      "promo_id": "promo046",
      "category": "Feedback Discount",
      "headline": "Your Thoughts, Our Treats!",
      "description": "Give feedback, get $2 off your next coffee!",
      "recommended_redemptions": 35,
      "discount_type": "$2 off",
      "pos_setup_instructions": "Provide a $2 discount to customers who provide feedback through our digital platform.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Feedback Discount\", \"amount\": \"2\", \"condition\": \"feedback_submission\" } } }"
    },
    {
      "promo_id": "promo047",
      "category": "Bulk Brew Benefit",
      "headline": "Bulk Brew, Bulk Save!",
      "description": "Order 4 drinks, get the 5th 50% off!",
      "recommended_redemptions": 50,
      "discount_type": "50% off",
      "pos_setup_instructions": "Configure a discount where buying four drinks results in a 50% discount on the fifth.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Bulk Brew Benefit\", \"type\": \"bulk_purchase\", \"purchase_required\": \"4\", \"percentage\": \"50\" } } }"
    },
    {
      "promo_id": "promo048",
      "category": "Flash Discount Hour",
      "headline": "Flash Brew Hour!",
      "description": "20% off any coffee during our surprise hour!",
      "recommended_redemptions": 20,
      "discount_type": "20% off",
      "pos_setup_instructions": "Activate a 20% discount during a randomly selected hour, announced on social media.",
      "required_square_api_instructions": "{ \"object\": { \"discount\": { \"name\": \"Flash Discount Hour\", \"percentage\": \"20\", \"condition\": \"surprise_hour\" } } }"
    }
  ]
}


export const offers2 = {
  "promotions": [
    {
      "promo_id": "promo012",
      "category": "Weekday Special",
      "item_category": "Hot Chocolate",
      "headline": "Chocolate Cheer Wednesdays",
      "description": "Buy one hot chocolate, get one free every Wednesday.",
      "activity": "Redeem",
      "recommended_redemptions": 20,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Chocolate Cheer Wednesdays\", \"type\": \"BOGO\", \"valid_on_weekdays\": [3]}}"
    },
    {
      "promo_id": "promo013",
      "category": "Flash Sale",
      "item_category": "Any Drink",
      "headline": "Twilight Hour Deal",
      "description": "30% off on all drinks after 6 PM.",
      "activity": "Purchase",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Twilight Hour Deal\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"30\", \"valid_from_time\": \"18:00\"}}"
    },
    {
      "promo_id": "promo014",
      "category": "Referral Bonus",
      "item_category": "All Items",
      "headline": "Refer-a-Friend Fiesta",
      "description": "Get a free drink when you refer a friend who makes a purchase.",
      "activity": "Refer",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\": \"/v2/referrals\", \"method\": \"POST\", \"data\": {\"name\": \"Refer-a-Friend Fiesta\", \"type\": \"FREE_ITEM\", \"item\": \"Any Drink\", \"referral_required\": true}}"
    },
    {
      "promo_id": "promo015",
      "category": "Loyalty Perk",
      "item_category": "Pastries",
      "headline": "Pastry Points Bonanza",
      "description": "Double loyalty points on all pastry purchases.",
      "activity": "Purchase",
      "recommended_redemptions": 50,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"Pastry Points Bonanza\", \"type\": \"DOUBLE_POINTS\", \"valid_for\": \"Pastries\"}}"
    },
    {
      "promo_id": "promo016",
      "category": "Birthday Special",
      "item_category": "Any Item",
      "headline": "Birthday Bash Bonus",
      "description": "20% off your entire order on your birthday.",
      "activity": "Redeem",
      "recommended_redemptions": 20,
      "squarestring": "{\"endpoint\": \"/v2/customers\", \"method\": \"POST\", \"data\": {\"name\": \"Birthday Bash Bonus\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"20\", \"valid_on_birthday\": true}}"
    },
    {
      "promo_id": "promo017",
      "category": "Holiday Offer",
      "item_category": "Seasonal Special",
      "headline": "Festive Flavor Feast",
      "description": "Special discounts on all seasonal drinks.",
      "activity": "Purchase",
      "recommended_redemptions": 25,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Festive Flavor Feast\", \"type\": \"SEASONAL\", \"valid_for\": \"Seasonal Specials\"}}"
    },
    {
      "promo_id": "promo018",
      "category": "Exclusive Offer",
      "item_category": "Signature Drink",
      "headline": "Signature Sip Steal",
      "description": "Our signature drink at a special price, this week only.",
      "activity": "Purchase",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Signature Sip Steal\", \"type\": \"FIXED_PRICE\", \"valid_for_week\": true, \"item\": \"Signature Drink\"}}"
    },
    {
      "promo_id": "promo019",
      "category": "Cash Back",
      "item_category": "All Beverages",
      "headline": "Beverage Bonanza Back",
      "description": "15% cash back on beverage purchases over $10.",
      "activity": "Redeem",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"Beverage Bonanza Back\", \"type\": \"CASH_BACK\", \"percentage\": \"15\", \"min_purchase\": 1000}}"
    },
    {
      "promo_id": "promo020",
      "category": "Seasonal Sale",
      "item_category": "All Items",
      "headline": "Spring Fling Flavors",
      "description": "Celebrate spring with 25% off on all items.",
      "activity": "Purchase",
      "recommended_redemptions": 35,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Spring Fling Flavors\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"25\", \"seasonal_validity\": \"spring\"}}"
    },
    {
      "promo_id": "promo006",
      "category": "Happy Hour",
      "item_category": "Pastries",
      "headline": "Pastry Party Time",
      "description": "All pastries 50% off from 2-4 PM daily.",
      "activity": "Purchase",
      "recommended_redemptions": 35,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Pastry Party Time\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"50\", \"valid_time_range\": {\"start_time\": \"14:00\", \"end_time\": \"16:00\"}}}"
    },
    {
      "promo_id": "promo007",
      "category": "Bulk Order",
      "item_category": "Coffee",
      "headline": "Coffee Jumbo Deal",
      "description": "10% off on orders of 5 or more coffees.",
      "activity": "Purchase",
      "recommended_redemptions": 20,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Coffee Jumbo Deal\", \"type\": \"VOLUME_DISCOUNT\", \"percentage\": \"10\", \"min_quantity\": 5}}"
    },
    {
      "promo_id": "promo008",
      "category": "Cash Back",
      "item_category": "All Items",
      "headline": "Weekend Wallet Booster",
      "description": "15% cash back on all purchases over $10 every weekend.",
      "activity": "Redeem",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"Weekend Wallet Booster\", \"type\": \"CASH_BACK\", \"percentage\": \"15\", \"min_purchase_amount\": 1000, \"valid_on_weekdays\": [6, 7]}}"
    },
    {
      "promo_id": "promo009",
      "category": "New Arrivals",
      "item_category": "Seasonal Drinks",
      "headline": "Seasonal Sip Sensation",
      "description": "Try our new seasonal drink with 20% off.",
      "activity": "Purchase",
      "recommended_redemptions": 25,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Seasonal Sip Sensation\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"20\", \"applies_to_new_seasonal_drinks\": true}}"
    },
    {
      "promo_id": "promo010",
      "category": "Morning Offer",
      "item_category": "Espresso",
      "headline": "Early Bird Espresso",
      "description": "25% off on all espressos before 10 AM.",
      "activity": "Purchase",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Early Bird Espresso\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"25\", \"valid_until_time\": \"10:00\"}}"
    },
    {
      "promo_id": "promo011",
      "category": "Loyalty Bonus",
      "item_category": "All Drinks",
      "headline": "Loyalty Leap",
      "description": "Triple points on all drinks every Tuesday.",
      "activity": "Participate",
      "recommended_redemptions": 50,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"Loyalty Leap\", \"type\": \"TRIPLE_POINTS\", \"valid_on_weekdays\": [2]}}"
    },
    {
      "promo_id": "promo001",
      "category": "Drink Discount",
      "item_category": "Espresso",
      "headline": "Espresso Explosion",
      "description": "Half-price espresso shots every Monday.",
      "activity": "Redeem",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Espresso Explosion\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"50\", \"valid_on_weekdays\": [1]}}"
    },
    {
      "promo_id": "promo002",
      "category": "Repeat Business",
      "item_category": "Latte",
      "headline": "Latte Lover's Week",
      "description": "Buy 4 lattes, get the 5th free.",
      "activity": "Purchase",
      "recommended_redemptions": 25,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Latte Lover's Week\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"100\", \"quantity_to_buy\": 4, \"quantity_for_free\": 1}}"
    },
    {
      "promo_id": "promo003",
      "category": "Cash Back",
      "item_category": "Cold Brew",
      "headline": "Cold Brew Cash Back",
      "description": "Get 10% cash back on all Cold Brew purchases.",
      "activity": "Redeem",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"Cold Brew Cash Back\", \"type\": \"CASH_BACK\", \"percentage\": \"10\"}}"
    },
    {
      "promo_id": "promo004",
      "category": "Student Discount",
      "item_category": "Americano",
      "headline": "Study Break Special",
      "description": "20% off Americanos for students every Wednesday.",
      "activity": "Redeem",
      "recommended_redemptions": 50,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Study Break Special\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"20\", \"valid_on_weekdays\": [3], \"requires_student_id\": true}}"
    },
    {
      "promo_id": "promo005",
      "category": "Weekend Special",
      "item_category": "Frappuccino",
      "headline": "Frappuccino Frenzy",
      "description": "Buy one Frappuccino, get one 50% off every weekend.",
      "activity": "Purchase",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Frappuccino Frenzy\", \"type\": \"BOGO_PERCENTAGE\", \"percentage_off\": \"50\", \"valid_on_weekdays\": [6, 7]}}"
    }, {
      "promo_id": "promo12345",
      "category": "Foot Traffic",
      "item_category": "Espresso",
      "headline": "Espresso Blast Monday!",
      "description": "50% off on all Espresso drinks every Monday.",
      "activity": "Redeem",
      "recommended_redemptions": 20,
      "squarestring": "{\"endpoint\":\"/v2/catalog/discounts\",\"method\":\"POST\",\"data\":{\"name\":\"Espresso Blast Monday\",\"type\":\"FIXED_PERCENTAGE\",\"percentage\":\"50\",\"valid_on_weekdays\":[1]}}"
    },
    {
      "promo_id": "promo23456",
      "category": "Repeat Business",
      "item_category": "Latte",
      "headline": "Latte Art Challenge",
      "description": "Submit your latte art to win weekly prizes.",
      "activity": "Participate",
      "recommended_redemptions": 15,
      "squarestring": "{\"endpoint\":\"/v2/catalog/discounts\",\"method\":\"POST\",\"data\":{\"name\":\"Latte Art Challenge\",\"type\":\"VARIABLE_PERCENTAGE\",\"percentage_based_on_submission\"}}"
    },
    {
      "promo_id": "promo34567",
      "category": "Average Order Size",
      "item_category": "Cold Brew",
      "headline": "Cold Brew Combo Deal",
      "description": "Buy a Cold Brew and get a pastry for 50% off.",
      "activity": "Purchase",
      "recommended_redemptions": 25,
      "squarestring": "{\"endpoint\":\"/v2/catalog/discounts\",\"method\":\"POST\",\"data\":{\"name\":\"Cold Brew Combo Deal\",\"type\":\"FIXED_PERCENTAGE\",\"percentage\":\"50\",\"applies_to\":[\"Cold Brew\",\"Pastry\"]}}"
    },
    {
      "promo_id": "promo45678",
      "category": "Foot Traffic",
      "item_category": "Americano",
      "headline": "Wednesday Americano Rush",
      "description": "Buy one Americano, get the second at half price every Wednesday.",
      "activity": "Purchase",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\":\"/v2/catalog/discounts\",\"method\":\"POST\",\"data\":{\"name\":\"Wednesday Americano Rush\",\"type\":\"BOGO_HALF_PRICE\",\"valid_on_weekdays\":[3]}}"
    },
    {
      "promo_id": "promo56789",
      "category": "Repeat Business",
      "item_category": "Any Drink",
      "headline": "Flavor Shot Fridays",
      "description": "Free flavor shot in any drink every Friday.",
      "activity": "Redeem",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\":\"/v2/catalog/modifiers\",\"method\":\"POST\",\"data\":{\"name\":\"Flavor Shot Friday\",\"type\":\"FREE_MODIFIER\",\"valid_on_weekdays\":[5]}}"
    },
    {
      "promo_id": "promo67890",
      "category": "Average Order Size",
      "item_category": "Pastries",
      "headline": "Sweet Sip & Snack",
      "description": "Special price for coffee and cookie combo: only $5.",
      "activity": "Purchase",
      "recommended_redemptions": 50,
      "squarestring": "{\"endpoint\":\"/v2/catalog/discounts\",\"method\":\"POST\",\"data\":{\"name\":\"Sweet Sip & Snack\",\"type\":\"COMBO_PRICE\",\"price\":\"5\",\"applies_to\":[\"Coffee\",\"Cookie\"]}}"
    },
    {
      "promo_id": "promo78901",
      "category": "Foot Traffic",
      "item_category": "Coffee",
      "headline": "Weekend Wake-Up",
      "description": "30% off all coffee drinks during weekends.",
      "activity": "Purchase",
      "recommended_redemptions": 35,
      "squarestring": "{\"endpoint\":\"/v2/catalog/discounts\",\"method\":\"POST\",\"data\":{\"name\":\"Weekend Wake-Up\",\"type\":\"FIXED_PERCENTAGE\",\"percentage\":\"30\",\"valid_on_weekdays\":[6,7]}}"
    },
    {
      "promo_id": "promo89012",
      "category": "Repeat Business",
      "item_category": "Latte",
      "headline": "Latte Loyalty Loop",
      "description": "Double loyalty points on all Latte purchases.",
      "activity": "Participate",
      "recommended_redemptions": 25,
      "squarestring": "{\"endpoint\":\"/v2/loyalty\",\"method\":\"POST\",\"data\":{\"name\":\"Latte Loyalty Loop\",\"type\":\"DOUBLE_POINTS\",\"applies_to\":[\"Latte\"]}}"
    },
    {
      "promo_id": "promo90123",
      "category": "Average Order Size",
      "item_category": "Cold Brew",
      "headline": "Frosty Cold Brew Frenzy",
      "description": "Cold Brews at a steal - only $3 each.",
      "activity": "Purchase",
      "recommended_redemptions": 45,
      "squarestring": "{\"endpoint\":\"/v2/catalog/discounts\",\"method\":\"POST\",\"data\":{\"name\":\"Frosty Cold Brew Frenzy\",\"type\":\"FIXED_PRICE\",\"price\":\"3\",\"applies_to\":[\"Cold Brew\"]}}"
    },
    {
      "promo_id": "promo01234",
      "category": "Diverse Attraction",
      "item_category": "Any Drink",
      "headline": "First-Timer's Welcome Brew",
      "description": "First-time visitors get 20% off their first order.",
      "activity": "Redeem",
      "recommended_redemptions": 20,
      "squarestring": "{\"endpoint\":\"/v2/customers\",\"method\":\"POST\",\"data\":{\"name\":\"First-Timer's Welcome Brew\",\"type\":\"FIRST_TIME_DISCOUNT\",\"percentage\":\"20\"}}"
    },
    {
      "promo_id": "promo021",
      "category": "Midweek Motivation",
      "item_category": "Tea",
      "headline": "Tea Time Tuesday Treat",
      "description": "All teas at 20% off every Tuesday.",
      "activity": "Redeem",
      "recommended_redemptions": 25,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Tea Time Tuesday Treat\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"20\", \"valid_on_weekdays\": [2]}}"
    },
    {
      "promo_id": "promo022",
      "category": "Cash Back",
      "item_category": "Any Item",
      "headline": "Weekday Wallet Win",
      "description": "Earn 5% cash back on all purchases made on weekdays.",
      "activity": "Redeem",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"Weekday Wallet Win\", \"type\": \"CASH_BACK\", \"percentage\": \"5\", \"valid_on_weekdays\": [1, 2, 3, 4, 5]}}"
    },
    {
      "promo_id": "promo023",
      "category": "Happy Hour",
      "item_category": "Iced Beverages",
      "headline": "Iced Delight Discount",
      "description": "50% off on all iced beverages from 3-5 PM.",
      "activity": "Purchase",
      "recommended_redemptions": 20,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Iced Delight Discount\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"50\", \"valid_time_range\": {\"start_time\": \"15:00\", \"end_time\": \"17:00\"}}}"
    },
    {
      "promo_id": "promo024",
      "category": "Birthday Bonus",
      "item_category": "All Items",
      "headline": "Birthday Bash Blowout",
      "description": "30% off your order on your birthday.",
      "activity": "Redeem",
      "recommended_redemptions": 15,
      "squarestring": "{\"endpoint\": \"/v2/customers\", \"method\": \"POST\", \"data\": {\"name\": \"Birthday Bash Blowout\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"30\", \"valid_on_birthday\": true}}"
    },
    {
      "promo_id": "promo025",
      "category": "Student Special",
      "item_category": "Coffee",
      "headline": "Student Study Saver",
      "description": "15% off coffee for students all day.",
      "activity": "Redeem",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Student Study Saver\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"15\", \"requires_student_id\": true}}"
    },
    {
      "promo_id": "promo026",
      "category": "Early Bird",
      "item_category": "Breakfast Combo",
      "headline": "Morning Munch Madness",
      "description": "25% off on any breakfast combo before 9 AM.",
      "activity": "Purchase",
      "recommended_redemptions": 50,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Morning Munch Madness\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"25\", \"valid_until_time\": \"09:00\"}}"
    },
    {
      "promo_id": "promo027",
      "category": "Seasonal Special",
      "item_category": "Seasonal Drinks",
      "headline": "Autumn Aroma Affair",
      "description": "Try our new autumn specials with 15% off.",
      "activity": "Purchase",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Autumn Aroma Affair\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"15\", \"applies_to_seasonal_drinks\": true}}"
    },
    {
      "promo_id": "promo028",
      "category": "Referral",
      "item_category": "Any Drink",
      "headline": "Sip and Share Success",
      "description": "Refer a friend and both get a 20% discount.",
      "activity": "Refer",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\": \"/v2/referrals\", \"method\": \"POST\", \"data\": {\"name\": \"Sip and Share Success\", \"type\": \"REFER_A_FRIEND\", \"discount_percentage\": \"20\"}}"
    },
    {
      "promo_id": "promo029",
      "category": "Exclusive",
      "item_category": "Limited Edition",
      "headline": "Limited Edition Luxuries",
      "description": "Exclusive 10% off on our limited edition brews.",
      "activity": "Purchase",
      "recommended_redemptions": 25,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Limited Edition Luxuries\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"10\", \"applies_to_limited_edition_items\": true}}"
    },
    {
      "promo_id": "promo030",
      "category": "Happy Hour",
      "item_category": "Iced Tea",
      "headline": "Icy Tea Twilight",
      "description": "50% off on all iced teas from 5-7 PM.",
      "activity": "Purchase",
      "recommended_redemptions": 35,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Icy Tea Twilight\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"50\", \"valid_time_range\": {\"start_time\": \"17:00\", \"end_time\": \"19:00\"}}}"
    },
    {
      "promo_id": "promo031",
      "category": "Lunch Deal",
      "item_category": "Sandwich & Coffee",
      "headline": "Lunchtime Coffee Combo",
      "description": "Buy any sandwich and get a coffee at half price.",
      "activity": "Purchase",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Lunchtime Coffee Combo\", \"type\": \"HALF_PRICE\", \"applies_to_combination\": [\"Sandwich\", \"Coffee\"]}}"
    },
    {
      "promo_id": "promo032",
      "category": "Evening Special",
      "item_category": "Desserts",
      "headline": "Sweet Evening Delight",
      "description": "20% off on all desserts after 6 PM.",
      "activity": "Purchase",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Sweet Evening Delight\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"20\", \"valid_from_time\": \"18:00\"}}"
    },
    {
      "promo_id": "promo033",
      "category": "Weekend Special",
      "item_category": "Frappuccino",
      "headline": "Weekend Frappe Fiesta",
      "description": "Buy one Frappuccino, get a second at 50% off every weekend.",
      "activity": "Purchase",
      "recommended_redemptions": 35,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Weekend Frappe Fiesta\", \"type\": \"BOGO_PERCENTAGE\", \"percentage_off\": \"50\", \"valid_on_weekdays\": [6, 7]}}"
    },
    {
      "promo_id": "promo034",
      "category": "New Customer",
      "item_category": "Any Drink",
      "headline": "First-Timer's Fantastic Offer",
      "description": "New customers get 30% off their first drink.",
      "activity": "Redeem",
      "recommended_redemptions": 25,
      "squarestring": "{\"endpoint\": \"/v2/customers\", \"method\": \"POST\", \"data\": {\"name\": \"First-Timer's Fantastic Offer\", \"type\": \"FIRST_TIME_DISCOUNT\", \"percentage\": \"30\"}}"
    },
    {
      "promo_id": "promo035",
      "category": "Cash Back",
      "item_category": "All Beverages",
      "headline": "Beverage Bonanza",
      "description": "Earn 10% cash back on all beverage orders over $15.",
      "activity": "Redeem",
      "recommended_redemptions": 50,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"Beverage Bonanza\", \"type\": \"CASH_BACK\", \"percentage\": \"10\", \"min_purchase\": 1500}}"
    },
    {
      "promo_id": "promo036",
      "category": "Happy Hour",
      "item_category": "Smoothies",
      "headline": "Smoothie Sunset Sale",
      "description": "30% off all smoothies after 5 PM.",
      "activity": "Purchase",
      "recommended_redemptions": 20,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Smoothie Sunset Sale\", \"type\": \"FIXED_PERCENTAGE\", \"percentage\": \"30\", \"valid_from_time\": \"17:00\"}}"
    },
    {
      "promo_id": "promo037",
      "category": "Bulk Order",
      "item_category": "Bakery Items",
      "headline": "Bakery Bulk Bonanza",
      "description": "10% off for orders of 6 or more bakery items.",
      "activity": "Purchase",
      "recommended_redemptions": 30,
      "squarestring": "{\"endpoint\": \"/v2/catalog/discounts\", \"method\": \"POST\", \"data\": {\"name\": \"Bakery Bulk Bonanza\", \"type\": \"VOLUME_DISCOUNT\", \"percentage\": \"10\", \"min_quantity\": 6}}"
    },
    {
      "promo_id": "promo038",
      "category": "Exclusive Event",
      "item_category": "Specialty Drinks",
      "headline": "VIP Drink Day",
      "description": "Exclusive drinks available only for loyalty members on Fridays.",
      "activity": "Purchase",
      "recommended_redemptions": 50,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"VIP Drink Day\", \"type\": \"EXCLUSIVE\", \"valid_on_weekdays\": [5], \"loyalty_member_required\": true}}"
    },
    {
      "promo_id": "promo039",
      "category": "Referral",
      "item_category": "Any Item",
      "headline": "Refer for Rewards",
      "description": "Refer a friend, and both enjoy a free pastry.",
      "activity": "Refer",
      "recommended_redemptions": 40,
      "squarestring": "{\"endpoint\": \"/v2/referrals\", \"method\": \"POST\", \"data\": {\"name\": \"Refer for Rewards\", \"type\": \"REFER_A_FRIEND\", \"reward_item\": \"Pastry\"}}"
    },
    {
      "promo_id": "promo040",
      "category": "Cash Back",
      "item_category": "All Items",
      "headline": "Total Purchase Payback",
      "description": "Get 5% cash back on your total bill this weekend.",
      "activity": "Redeem",
      "recommended_redemptions": 35,
      "squarestring": "{\"endpoint\": \"/v2/loyalty\", \"method\": \"POST\", \"data\": {\"name\": \"Total Purchase Payback\", \"type\": \"CASH_BACK\", \"percentage\": \"5\", \"valid_on_weekdays\": [6, 7]}}"
    }

  ]}


///DEALS

export const offers1 = {
  "promotions": [
    {
      "promo_id": "12345678-90ab-cdef-ghij-klmnopqrstuv",
      "category": "Drink Discount",
      "type": "Exact Quantity",
      "item_category": "Iced Coffee",
      "headline": "Iced coffee for the squad!",
      "description": "Buy 5 iced coffees and get 2 free.",
      "activity": "Activate",
      "image_header": {
        "description": "A busy cafe scene with people drinking and enjoying coffee, some doing work on laptops, some listening to music on their airpods."
      },
      "recommended_redemptions": 15,
      "frequency": "Ongoing"
    },
    {
      "promo_id": "23456789-0abc-defg-hijk-lmnopqrstuvw",
      "category": "Drink Discount",
      "type": "Minimum Purchase Quantity",
      "item_category": "Espresso Drinks",
      "headline": "Double shot, double reward!",
      "description": "Buy 3 espresso drinks and get 1 free.",
      "activity": "Activate",
      "image_header": {
        "description": "A vibrant cafe scene with people sipping espresso drinks and chatting with friends."
      },
      "recommended_redemptions": 10,
      "frequency": "Monthly"
    },
    {
      "promo_id": "34567890-abcd-efgh-ijkl-mnopqrstuvwxyz",
      "category": "Drink Discount",
      "type": "Buy One, Get One",
      "item_category": "Fruit Smoothies",
      "headline": "Sip on some savings!",
      "description": "Buy 1 fruit smoothie, get 1 50% off.",
      "activity": "Redeem",
      "image_header": {
        "description": "A cheerful cafe scene with people enjoying fruit smoothies on a sunny day."
      },
      "recommended_redemptions": 20,
      "frequency": "Weekly"
    },
    {
      "promo_id": "45678901-bcde-fghi-jklm-nopqrstuvwx",
      "category": "Drink Discount",
      "type": "Minimum Spend",
      "item_category": "Latte Drinks",
      "headline": "Lattes for less!",
      "description": "Spend $25 on latte drinks and get 20% off.",
      "activity": "Start",
      "image_header": {
        "description": "A cozy cafe scene with people sipping lattes and reading books by the fireplace."
      },
      "recommended_redemptions": 8,
      "frequency": "Monthly"
    },
    {
      "promo_id": "56789012-cdef-ghij-klmn-opqrstuvwxy",
      "category": "Drink Discount",
      "type": "Limited Time",
      "item_category": "Frappe Drinks",
      "headline": "Beat the heat with our frappes!",
      "description": "Get 25% off frappe drinks from 12-3pm every weekday.",
      "activity": "Activate",
      "image_header": {
        "description": "A lively cafe scene with people sipping colorful frappes and taking selfies."
      },
      "recommended_redemptions": 12,
      "frequency": "Weekly"
    },
{
      "promo_id": "67890123-defg-hijk-lmno-pqrstuvwxyza",
      "category": "Drink Discount",
      "type": "Exact Quantity",
      "item_category": "Cold Brew",
      "headline": "Brew-tiful mornings!",
      "description": "Buy 3 cold brews and get 1 free.",
      "activity": "Activate",
      "image_header": {
        "description": "A chic cafe scene with people sipping cold brews and reading newspapers."
      },
      "recommended_redemptions": 10,
      "frequency": "Weekly"
    },
    {
      "promo_id": "78901234-efgh-ijkl-mnop-qrstuvwxyzab",
      "category": "Drink Discount",
      "type": "Minimum Purchase Quantity",
      "item_category": "Matcha Lattes",
      "headline": "Matcha-mazing deals!",
      "description": "Buy 2 matcha lattes and get 1 50% off.",
      "activity": "Activate",
      "image_header": {
        "description": "A calming cafe scene with people sipping matcha lattes and doing yoga poses."
      },
      "recommended_redemptions": 15,
      "frequency": "Monthly"
    },
    {
      "promo_id": "89012345-fghi-jklm-nopq-rstuvwxyzabcde",
      "category": "Drink Discount",
      "type": "Buy One, Get One",
      "item_category": "Iced Tea",
      "headline": "Refresh your day!",
      "description": "Buy 1 iced tea, get 1 free.",
      "activity": "Redeem",
      "image_header": {
        "description": "A breezy cafe scene with people sipping iced tea and playing board games."
      },
      "recommended_redemptions": 20,
      "frequency": "Weekly"
    },
    {
      "promo_id": "90123456-ghij-klmn-opqr-stuvwxyzabcdef",
      "category": "Drink Discount",
      "type": "Minimum Spend",
      "item_category": "Mocha Drinks",
      "headline": "Mocha your day better!",
      "description": "Spend $20 on mocha drinks and get 15% off.",
      "activity": "Start",
      "image_header": {
        "description": "A cozy cafe scene with people sipping mocha drinks and playing chess by the fireplace."
      },
      "recommended_redemptions": 8,
      "frequency": "Monthly"
    },
    {
      "promo_id": "01234567-hijk-lmno-pqrs-tuvwxyzabcdefg",
      "category": "Drink Discount",
      "type": "Limited Time",
      "item_category": "Frappe Drinks",
      "headline": "Beat the heat with our frappes!",
      "description": "Get 50% off frappe drinks from 4-6pm every weekday.",
      "activity": "Activate",
      "image_header": {
        "description": "A lively cafe scene with people sipping colorful frappes and playing music."
      },
      "recommended_redemptions": 12,
      "frequency": "Weekly"
    },
    {
      "promo_id": "12345678-ijkl-mnop-qrst-uvwxyzabcdefgh",
      "category": "Drink Discount",
      "type": "Exact Quantity",
      "item_category": "Nitro Cold Brew",
      "headline": "Get your caffeine fix!",
  "description": "Buy 5 nitro cold brews and get 1 free.",
  "activity": "Activate",
  "image_header": {
    "description": "A modern cafe scene with people sipping nitro cold brews and working on their laptops."
  },
  "recommended_redemptions": 10,
  "frequency": "Bi-weekly"
},
{
  "promo_id": "23456789-jklm-nopq-rstu-vwxyzabcdefghi",
  "category": "Drink Discount",
  "type": "Minimum Purchase Quantity",
  "item_category": "Chai Tea Latte",
  "headline": "Chai up your day!",
  "description": "Buy 3 chai tea lattes and get 1 free.",
  "activity": "Activate",
  "image_header": {
    "description": "A cozy cafe scene with people sipping chai tea lattes and reading books by the window."
  },
  "recommended_redemptions": 15,
  "frequency": "Monthly"
},
{
  "promo_id": "34567890-klmn-opqr-stuv-wxyzabcdefghijklmnop",
  "category": "Drink Discount",
  "type": "Buy One, Get One",
  "item_category": "Iced Coffee",
  "headline": "Coffee o'clock!",
  "description": "Buy 1 iced coffee, get 1 50% off.",
  "activity": "Redeem",
  "image_header": {
    "description": "A lively cafe scene with people sipping iced coffee and chatting with friends."
  },
  "recommended_redemptions": 20,
  "frequency": "Weekly"
},
{
  "promo_id": "45678901-lmno-pqrs-tuvw-xyzabcdefghijklmnopq",
  "category": "Drink Discount",
  "type": "Minimum Spend",
  "item_category": "Caramel Macchiato",
  "headline": "Get your daily dose of caramel!",
  "description": "Spend $15 on caramel macchiatos and get 10% off.",
  "activity": "Start",
  "image_header": {
    "description": "A chic cafe scene with people sipping caramel macchiatos and taking selfies."
  },
  "recommended_redemptions": 8,
  "frequency": "Monthly"
},
{
  "promo_id": "56789012-mnop-qrst-uvwxy-zabcdefghijklmnopqr",
  "category": "Drink Discount",
  "type": "Limited Time",
  "item_category": "Pumpkin Spice Latte",
  "headline": "Fall in love with our PSL!",
  "description": "Get $1 off pumpkin spice lattes every weekend in October.",
  "activity": "Activate",
  "image_header": {
    "description": "A cozy cafe scene with people sipping pumpkin spice lattes and carving pumpkins."
  },
  "recommended_redemptions": 12,
  "frequency": "Yearly"
},
{
  "promo_id": "67890123-nopq-rstu-vwxyz-abcdefghijklmnopqrs",
  "category": "Drink Discount",
  "type": "Exact Quantity",
  "item_category": "Espresso Shots",
  "headline": "Wake up and smell the espresso!",
  "description": "Buy 6 espresso shots and get 2 free.",
  "activity": "Activate",
  "image_header": {
    "description": "A busy cafe scene with people sipping espresso shots and taking shots of espresso."
  },
    "redemptions": 10,
  "frequency": "Weekly"
},
{
  "promo_id": "78901234-opqr-stuv-wxyz-abcdefghijklmnopqrst",
  "category": "Drink Discount",
  "type": "Minimum Spend",
  "item_category": "Matcha Latte",
  "headline": "Matcha made in heaven!",
  "description": "Spend $20 on matcha lattes and get 15% off.",
  "activity": "Start",
  "image_header": {
    "description": "A serene cafe scene with people sipping matcha lattes and practicing yoga."
  },
  "recommended_redemptions": 8,
  "frequency": "Monthly"
},
{
  "promo_id": "89012345-pqrs-tuvw-xyzabcdefghijklmnopqrstuv",
  "category": "Drink Discount",
  "type": "Exact Quantity",
  "item_category": "Cappuccino",
  "headline": "Cappu-ccino time!",
  "description": "Buy 4 cappuccinos and get 1 free.",
  "activity": "Activate",
  "image_header": {
    "description": "A charming cafe scene with people sipping cappuccinos and reading newspapers."
  },
  "recommended_redemptions": 10,
  "frequency": "Bi-weekly"
},
{
  "promo_id": "90123456-qrst-uvwxy-zabcdefghijklmnopqrstuvwx",
  "category": "Drink Discount",
  "type": "Buy One, Get One",
  "item_category": "Hot Chocolate",
  "headline": "Warm up with hot cocoa!",
  "description": "Buy 1 hot chocolate, get 1 50% off.",
  "activity": "Redeem",
  "image_header": {
    "description": "A cozy cafe scene with people sipping hot chocolate and snuggling by the fireplace."
  },
  "recommended_redemptions": 15,
  "frequency": "Monthly"
},
{
  "promo_id": "01234567-rstu-vwxyz-abcdefghijklmnopqrstuvwxy",
  "category": "Drink Discount",
  "type": "Minimum Purchase Quantity",
  "item_category": "Latte",
  "headline": "Latte love!",
  "description": "Buy 3 lattes and get 1 free.",
  "activity": "Activate",
  "image_header": {
    "description": "A trendy cafe scene with people sipping lattes and taking pictures for Instagram."
  },
  "recommended_redemptions": 12,
  "frequency": "Weekly"
},
{
  "promo_id": "12345678-tuvw-xyzabcdefghijklmnopqrstuvwxyza",
  "category": "Drink Discount",
  "type": "Minimum Spend",
  "item_category": "Americano",
  "headline": "Wake up and smell the Americano!",
  "description": "Spend $10 on Americanos and get 5% off.",
  "activity": "Start",
  "image_header": {
    "description": "A hip cafe scene with people sipping Americanos and playing board games."
  },
  "recommended_redemptions": 8,
  "frequency": "Monthly"
},
{
  "promo_id": "23456789-uvwxy-zabcdefghijklmnopqrstuvwxyzaa",
  "category": "Drink Discount",
  "type": "Exact Quantity",
  "item_category": "Caramel Macchiato",
  "headline": "Get your caramel fix!",
  "description": "Buy 5 caramel macchiatos and get 1 free.",
"activity": "Activate",
"image_header": {
"description": "A chic cafe scene with people sipping caramel macchiatos and chatting with friends."
},
"recommended_redemptions": 10,
"frequency": "Bi-weekly"
},
{
"promo_id": "34567890-vwxy-zabcdefghijklmnopqrstuvwxyzaab",
"category": "Drink Discount",
"type": "Buy One, Get One",
"item_category": "Iced Coffee",
"headline": "Stay cool with iced coffee!",
"description": "Buy 1 iced coffee, get 1 free.",
"activity": "Redeem",
"image_header": {
"description": "A refreshing cafe scene with people sipping iced coffee and lounging in the sun."
},
"recommended_redemptions": 15,
"frequency": "Monthly"
},
{
"promo_id": "45678901-wxyz-abcdefghijklmnopqrstuvwxyzaabc",
"category": "Drink Discount",
"type": "Minimum Purchase Quantity",
"item_category": "Mocha",
"headline": "Get your chocolate fix!",
"description": "Buy 3 mochas and get 1 free.",
"activity": "Activate",
"image_header": {
"description": "A cozy cafe scene with people sipping mochas and reading books by the fireplace."
},
"recommended_redemptions": 12,
"frequency": "Weekly"
},
{
"promo_id": "56789012-xyzabcdefghijklmnopqrstuvwxyzaabcd",
"category": "Drink Discount",
"type": "Minimum Spend",
"item_category": "Espresso",
"headline": "Wake up and smell the espresso!",
"description": "Spend $15 on espresso drinks and get 10% off.",
"activity": "Start",
"image_header": {
"description": "A sophisticated cafe scene with people sipping espresso and discussing art."
},
"recommended_redemptions": 8,
"frequency": "Monthly"
},
{
"promo_id": "67890123-abcdefghijklmnopqrstuvwxyzaabcde",
"category": "Drink Discount",
"type": "Exact Quantity",
"item_category": "Chai Latte",
"headline": "Get your chai fix!",
"description": "Buy 4 chai lattes and get 1 free.",
"activity": "Activate",
"image_header": {
"description": "A colorful cafe scene with people sipping chai lattes and playing card games."
},
"recommended_redemptions": 10,
"frequency": "Bi-weekly"
},
{
"promo_id": "78901234-qrstuvwxyzabcdefghijklmnopqrstuvwx",
"category": "Drink Discount",
"type": "Buy One, Get One",
"item_category": "Tea Latte",
"headline": "Warm up with tea lattes!",
"description": "Buy 1 tea latte, get 1 50% off.",
"activity": "Redeem",
"image_header": {
"description": "A cozy cafe scene with people sipping tea lattes and reading books."
},
"recommended_redemptions": 15,
"frequency": "Monthly"
},
{
"promo_id": "89012345-rstuvwxyzabcdefghijklmnopqrstuvw",
"category": "Drink Discount",
"type": "Minimum Purchase Quantity",
"item_category": "Cappuccino",
"headline": "Wake up with cappuccino!",
"description": "Buy 2 cappuccinos and get 1 free.",
"activity": "Activate",
"image_header": {
"description": "A sophisticated cafe scene with people sipping cappuccinos and discussing business."
},
"recommended_redemptions": 12,
"frequency": "Weekly"
},
{
"promo_id": "90123456-stuvwxyzabcdefghijklmnopqrstuvwx",
"category": "Drink Discount",
"type": "Minimum Spend",
"item_category": "Latte",
"headline": "Indulge in lattes!",
"description": "Spend $20 on lattes and get 15% off.",
"activity": "Start",
"image_header": {
"description": "A vibrant cafe scene with people sipping lattes and listening to music on their headphones."
},
"recommended_redemptions": 8,
"frequency": "Monthly"
},
{
"promo_id": "01234567-tuvwxyzabcdefghijklmnopqrstuvw",
"category": "Drink Discount",
"type": "Exact Quantity",
"item_category": "Frappuccino",
"headline": "Stay cool with frappuccinos!",
"description": "Buy 3 frappuccinos and get 1 free.",
"activity": "Activate",
"image_header": {
"description": "A fun cafe scene with people sipping frappuccinos and taking selfies with friends."
},
"recommended_redemptions": 10,
"frequency": "Bi-weekly"
},
{
"promo_id": "12345678-uvwxyzabcdefghijklmnopqrstuvwx",
"category": "Drink Discount",
"type": "Buy One, Get One",
"item_category": "Cold Brew",
"headline": "Stay awake with cold brew!",
"description": "Buy 1 cold brew, get 1 free.",
"activity": "Redeem",
"image_header": {
"description": "A hip cafe scene with people sipping cold brew and playing board games."
},
"recommended_redemptions": 15,
"frequency": "Monthly"
},
{
"promo_id": "23456789-vwxyzabcdefghijklmnopqrstuvwxy",
"category": "Drink Discount",
"type": "Minimum Purchase Quantity",
"item_category": "Nitro Cold Brew",
"headline": "Stay awake with nitro cold brew!",
"description": "Buy 2 nitro cold brews and get 1 free.",
"activity": "Activate",
"image_header": {
"description": "A modern cafe scene with people sipping nitro cold brews and working on their laptops."
},
"recommended_redemptions": 12,
"frequency": "Weekly"
},
{
"promo_id": "34567890-wxyzabcdefghijklmnopqrstuvwxyza",
"category": "Drink Discount",
"type": "Minimum Spend",
"item_category": "Iced Tea",
"headline": "Stay refreshed with iced tea!",
"description": "Spend $10 on iced tea and get 10% off.",
"activity": "Start",
"image_header": {
"description": "A sunny cafe scene with people sipping iced tea and enjoying the outdoors."
},
"recommended_redemptions": 8,
"frequency": "Monthly"
},
{
"promo_id":"45678901-xyzabcdefghijklmnopqrstuvwxyzaa",
"category": "Drink Discount",
"type": "Buy One, Get One",
"item_category": "Chai Latte",
"headline": "Satisfy your sweet tooth with chai lattes!",
"description": "Buy 1 chai latte, get 1 free.",
"activity": "Redeem",
"image_header": {
"description": "A cozy cafe scene with people sipping chai lattes and reading books by the fireplace."
},
"recommended_redemptions": 15,
"frequency": "Monthly"
},
{
"promo_id": "56789012-yzabcdefghijklmnopqrstuvwxyzaab",
"category": "Food Discount",
"type": "Minimum Spend",
"item_category": "Pastry",
"headline": "Treat yourself to pastries!",
"description": "Spend $15 on pastries and get 20% off.",
"activity": "Start",
"image_header": {
"description": "A charming cafe scene with people enjoying pastries and chatting with friends."
},
"recommended_redemptions": 8,
"frequency": "Monthly"
},
{
"promo_id": "67890123-zabcdefghijklmnopqrstuvwxyzaabc",
"category": "Food Discount",
"type": "Exact Quantity",
"item_category": "Bagel",
"headline": "Start your day with bagels!",
"description": "Buy 4 bagels and get 1 free.",
"activity": "Activate",
"image_header": {
"description": "A warm cafe scene with people enjoying bagels and catching up with friends."
},
"recommended_redemptions": 10,
"frequency": "Bi-weekly"
},
{
"promo_id": "78901234-abcdefghijklmnopqrstuvwxyzaabcd",
"category": "Food Discount",
"type": "Minimum Purchase Quantity",
"item_category": "Croissant",
"headline": "Savor the flaky goodness of croissants!",
"description": "Buy 3 croissants and get 1 free.",
"activity": "Activate",
"image_header": {
"description": "A delightful cafe scene with people savoring croissants and enjoying a sunny day."
},
"recommended_redemptions": 12,
"frequency": "Weekly"
},
{
"promo_id": "89012345-bcdefghijklmnopqrstuvwxyzabcdefghijkl",
"category": "Food Discount",
"type": "Buy One, Get One",
"item_category": "Sandwich",
"headline": "Grab a sandwich for lunch!",
"description": "Buy 1 sandwich, get 1 free.",
"activity": "Redeem",
"image_header": {
"description": "A bustling cafe scene with people enjoying sandwiches and catching up with coworkers."
},
"recommended_redemptions": 15,
"frequency": "Monthly"
}











  ]
}
