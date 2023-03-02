import React from "react";
import ReactDOM from "react-dom/client"

const Footer = () => {
    return(
      <>
     <h1>Footer</h1>
     </>
     );
}
const Header = () => {
    return(  
    <>
  <div className="logo">
        <img src="https://www.shutterstock.com/image-vector/food-restaurant-logo-isolated-on-600w-1497786356.jpg" alt="error"  />
    </div>
    <div className="navbar">
    <ul className="nav_items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>
    </>
    )
}

const Applayout = () => {
   return( 
   <>
        <Header/>
        <Body/>
        <Footer/>
    </>
    )
}

const RestaurantList = [
    {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "397397",
            "name": "Pawri Kitchen",
            "uuid": "9b7fa6cf-9422-4f5f-b3d4-eb90837d70d8",
            "city": "5",
            "area": "Powai",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "oysfyvgakmgehrhzfg0a",
            "cuisines": [
              "Indian",
              "Continental",
              "Pastas"
            ],
            "tags": [
              
            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
              "restaurant": "pawri-kitchen-powai-powai",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "Pawri Kitchen, Unit 5, A wing , Ground Floor, Shiv Om Apartments, Chandivali Rd, near ICICI Bank, Yadav Nagar, Chandivali, Powai, Mumbai, Maharashtra 400072, India",
            "locality": "Shiv Om Apartments",
            "parentId": 252532,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "10% off",
              "shortDescriptionList": [
                {
                  "meta": "10% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹40 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "10% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹40 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "397397",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 1.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "20435",
            "name": "Krishnaa Leela",
            "uuid": "e69e482c-3adc-4e5e-87b2-99a875864dbc",
            "city": "5",
            "area": "Chembur",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "hasrbn2swmttlb6wmowx",
            "cuisines": [
              "Street Food",
              "North Indian",
              "Chinese",
              "Beverages",
              "South Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 48,
            "minDeliveryTime": 48,
            "maxDeliveryTime": 48,
            "slaString": "48 MINS",
            "lastMileTravel": 9,
            "slugs": {
              "restaurant": "krishnaa-leela-chembur-naka-chembur-chembur",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "Diwan Niketan, ST road, Chembur naka,Next to akbarallys,Mumbai",
            "locality": "Chembur Naka, Chembur",
            "parentId": 121034,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "10% off",
              "shortDescriptionList": [
                {
                  "meta": "10% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹40 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "10% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹40 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6059024~p=19~eid=00000186-a028-e2b6-0031-372f00ae134e",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "9 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "20435",
              "deliveryTime": 48,
              "minDeliveryTime": 48,
              "maxDeliveryTime": 48,
              "lastMileTravel": 9,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 500,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "667066",
            "name": "Chaatwich",
            "uuid": "f34adc24-6cb0-49a5-a36f-ef85c396897e",
            "city": "5",
            "area": "Powai",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "5c63d2b772133774707ee3841b5ec3f0",
            "cuisines": [
              "Fast Food",
              "Pizzas",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "chaatwich-powai-powai",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "haatwich, Shop No:G 19, Chandivali Narayan Plaza Premises, ff Saki Vihar Road Sakinaka,Chandivali,Andheri East, Chandivali (w),",
            "locality": "Andheri East",
            "parentId": 5500,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "20% off",
              "shortDescriptionList": [
                {
                  "meta": "20% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off up to ₹50 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "20% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off up to ₹50 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "667066",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": true
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "32840",
            "name": "Aamchi mumbai snacks",
            "uuid": "d8eefd56-2518-44e2-897d-d875ac376a4a",
            "city": "5",
            "area": "Chandivali",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "avvl0xd8gxp73phpl9jb",
            "cuisines": [
              "Snacks"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "aamchi-mumbai-snacks-chandivali-powai",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "Maheshwari hotel,Near universal Business park,Chandivali, Andheri East",
            "locality": "Chandivali",
            "parentId": 25775,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "FLAT100 off",
              "shortDescriptionList": [
                {
                  "meta": "FLAT100 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT100 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹100 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT100 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "32840",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 50,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "342309",
            "name": "Breakfast Bistro",
            "uuid": "b22257b0-0d47-47f7-ad98-860e7e9120fa",
            "city": "5",
            "area": "Powai",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "tcw3k4qs6fh7wx2zsgje",
            "cuisines": [
              "American",
              "European",
              "Continental"
            ],
            "tags": [
              
            ],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 3.9000000953674316,
            "slugs": {
              "restaurant": "breakfast-bistro-powai-powai",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "121, 1st Floor, Powai Plaza, Near Hiranandani Gardens, Powai, Mumbai 400076",
            "locality": "Powai Plaza",
            "parentId": 11903,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "30% off",
              "shortDescriptionList": [
                {
                  "meta": "30% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹75 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "30% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹75 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6021830~p=22~eid=00000186-a028-e2b6-0031-373000ae1662",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3.9 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "342309",
              "deliveryTime": 32,
              "minDeliveryTime": 32,
              "maxDeliveryTime": 32,
              "lastMileTravel": 3.9000000953674316,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 50,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "481833",
            "name": "Peppy Parathas & Rolls By Chai Point",
            "uuid": "a73c1076-2dbe-4f68-a7b0-7db70e4557e3",
            "city": "5",
            "area": "Powai",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "ivrhbr9isywj97xpbhby",
            "cuisines": [
              "Bakery",
              "Combo",
              "Beverages",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "South Indian",
              "Punjabi"
            ],
            "tags": [
              
            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 1.100000023841858,
            "slugs": {
              "restaurant": "peppy-paratha-opp-nirali-hospital-marol-sakinaka",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "Budhia Jadhav Wadi, LXC-B1/1 Jaihind Association, Saki Vihar Rd, opp. Nirali Hospital, Mumbai, Maharashtra 400072",
            "locality": "opp. Nirali Hospital",
            "parentId": 289265,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.1 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "481833",
              "deliveryTime": 32,
              "minDeliveryTime": 32,
              "maxDeliveryTime": 32,
              "lastMileTravel": 1.100000023841858,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "96619",
            "name": "Sudarshan Veg Restaurant",
            "uuid": "69736257-e6b9-49d3-8854-fac24c8445ae",
            "city": "5",
            "area": "Saki Naka",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "b1tk2j0gimil2m05bziz",
            "cuisines": [
              "Indian",
              "Chinese",
              "South Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 70000,
            "costForTwoString": "₹700 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 1.899999976158142,
            "slugs": {
              "restaurant": "sudarshan-veg-restaurant-sakinaka-marol-sakinaka",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "Sakinaka Junction, AK Road, Sakinaka, Mumbai",
            "locality": "Sakinaka",
            "parentId": 196392,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "FREE DELIVERY",
              "shortDescriptionList": [
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "",
              "shortDescriptionList": [
                {
                  "meta": "Free Delivery",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.8 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "96619",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 1.899999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "411280",
            "name": "Blue Tokai Coffee Roasters",
            "uuid": "b162909f-baf1-42cf-a698-80d95ee5670f",
            "city": "5",
            "area": "Powai",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "jl845pj0lmhehxyij7gp",
            "cuisines": [
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 4.599999904632568,
            "slugs": {
              "restaurant": "blue-tokai-coffee-roasters-powai-powai",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "Kailash industrial complex, C/22, Ground floor, Building 2, Near Hiranandani Gardens, Vikhroli, Mumbai",
            "locality": "Near Hiranandani Gardens",
            "parentId": 2682,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "20% off",
              "shortDescriptionList": [
                {
                  "meta": "20% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off up to ₹50 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "20% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off up to ₹50 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5918660~p=25~eid=00000186-a028-e2b6-0031-373100ae1957",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "4.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "411280",
              "deliveryTime": 32,
              "minDeliveryTime": 32,
              "maxDeliveryTime": 32,
              "lastMileTravel": 4.599999904632568,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.5",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "354871",
            "name": "The Healthy Farm Juice Center",
            "uuid": "c5a2da92-cdfb-472b-b226-ffa080aad2d8",
            "city": "5",
            "area": "Powai",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "zmjszvgjbkazabzrv0fv",
            "cuisines": [
              "Juices",
              "Salads",
              "Beverages",
              "Healthy Food",
              "Cafe"
            ],
            "tags": [
              
            ],
            "costForTwo": 18000,
            "costForTwoString": "₹180 FOR TWO",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "slaString": "37 MINS",
            "lastMileTravel": 1.899999976158142,
            "slugs": {
              "restaurant": "the-healthy-farm-powai-powai",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "GROUND FLOOR, 10, K.K COMPOUND, opposite of Shahi Mega Structure, YADAV NAGAR,, KHERANI ROAD, SAKINAKA KURLA, SAINATH DAIRY, MUMBAI, Mumbai Suburban, Maharashtra, 400072",
            "locality": "Yadav Nagar",
            "parentId": 209489,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "30% off",
              "shortDescriptionList": [
                {
                  "meta": "30% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹75 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "30% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹75 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.8 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "354871",
              "deliveryTime": 37,
              "minDeliveryTime": 37,
              "maxDeliveryTime": 37,
              "lastMileTravel": 1.899999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "10772",
            "name": "Pishu's",
            "uuid": "84ca5692-94a5-461d-8d4e-46afd46bd028",
            "city": "5",
            "area": "powai",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "lrmhyptkdgtkd1nuyhd3",
            "cuisines": [
              "Beverages",
              "Healthy Food",
              "Juices"
            ],
            "tags": [
              
            ],
            "costForTwo": 55000,
            "costForTwoString": "₹550 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "pishus-near-iscon-temple-juhu",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "G-18, CHANDIVALI NARAYAN PLAZA PREM CHS LTD, NARAYAN PLAZA, OPP. SAKI VIHAR ROAD, KURLA WEST, MUMBAI",
            "locality": "Narayan Plaza",
            "parentId": 1268,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "10772",
              "deliveryTime": 32,
              "minDeliveryTime": 32,
              "maxDeliveryTime": 32,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },
      {
        "cardType": "restaurant",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "442259",
            "name": "Southern Breakfast",
            "uuid": "d2f9f15e-c990-496d-b691-e36649dd3880",
            "city": "5",
            "area": "Sakinaka",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "uqadx5h7x70yvoawizol",
            "cuisines": [
              "Snacks",
              "Healthy Food",
              "South Indian",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 14000,
            "costForTwoString": "₹140 FOR TWO",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "slaString": "37 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "southern-breakfast-powai-powai",
              "city": "mumbai"
            },
            "cityState": "5",
            "address": "Gala no. A8, Usmaniya Compound, Aslam Compound, Shree Nagar, Opp. Micro Labs, Saki Vihar Road, Sakinaka, Andheri East, Mumbai - 400072",
            "locality": "Saki Vihar Road",
            "parentId": 316785,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "FREE DELIVERY",
              "shortDescriptionList": [
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "",
              "shortDescriptionList": [
                {
                  "meta": "Free Delivery",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "442259",
              "deliveryTime": 37,
              "minDeliveryTime": 37,
              "maxDeliveryTime": 37,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 20,
            "new": false
          },
          "subtype": "basic"
        },
        "parentWidget": false
      },  
    ]

const RestaurantCard = ({cloudinaryImageId,name,area,totalRatings,address}) => {
    // console.log(props);
     
    return (
        <div className="card">
            <img alt="err" className="card_img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h1>{name}</h1>
            <h2>{area}</h2>
            <h3>{totalRatings} stars</h3>
            <h3>{address} </h3>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="restaurantcard-list">
        {RestaurantList.map((value)=> {
            return <RestaurantCard {...value?.data?.data}/>
          })
        }


    <RestaurantCard restaurant{...RestaurantList[1]?.data?.data} />
    <RestaurantCard restaurant{...RestaurantList[3]?.data?.data} />
    <RestaurantCard restaurant{...RestaurantList[6]?.data?.data} />

    </div>
    ) ;
};
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);