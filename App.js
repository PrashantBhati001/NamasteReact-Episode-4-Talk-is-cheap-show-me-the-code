import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Searchbar
 * -Restaurant Container
 *    -Restaurant Card
 * 
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 * 
 */
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-photo/3d-style-burger-app-icon-game-design-logo-graphic-generative-ai_159242-29252.jpg" alt="Image not found" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )

}

const resList=[
    {
    info: {
    id: "779080",
    name: "CORE",
    cloudinaryImageId: "e7468acefa15820c19fa4a35cb326f6a",
    locality: "Hunasamaranhalli",
    areaName: "Yelahanka",
    costForTwo: "₹2200 for two",
    cuisines: [
    "Indian",
    "Oriental"
    ],
    parentId: "450458",
    avgRatingString: "4.3",
    promoted: true,
    adTrackingId: "cid=10085254~p=1~eid=0000018c-e890-febd-0a2e-feae003b0173~srvts=1704708865725~45826",
    sla: {
    deliveryTime: 43,
    lastMileTravel: 3.8,
    serviceability: "SERVICEABLE",
    slaString: "43 mins",
    lastMileTravelString: "3.8 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-01-08 22:30:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹100"
    },
    loyaltyDiscoverPresentationInfo: {
    logoCtx: {
    text: "BENEFITS",
    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
    },
    freedelMessage: "FREE DELIVERY"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: { }
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=779080",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "794964",
    name: "Team Way Caf'E",
    cloudinaryImageId: "1d25ffc8583f719421b6d9e0b242a02d",
    locality: "Baba Nagar",
    areaName: "Yelahanka",
    costForTwo: "₹300 for two",
    cuisines: [
    "Cafe",
    "Beverages"
    ],
    parentId: "475257",
    avgRatingString: "3.7",
    promoted: true,
    adTrackingId: "cid=10404778~p=2~eid=0000018c-e890-febd-0a2e-feaf003b0257~srvts=1704708865725~45826",
    sla: {
    deliveryTime: 30,
    lastMileTravel: 6,
    serviceability: "SERVICEABLE",
    slaString: "30 mins",
    lastMileTravelString: "6.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-01-08 23:45:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textExtendedBadges: { },
    textBased: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹100"
    },
    loyaltyDiscoverPresentationInfo: {
    logoCtx: {
    text: "BENEFITS",
    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
    },
    freedelMessage: "FREE DELIVERY"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: { }
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=794964",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "232435",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "Betthalusur",
    areaName: "Chikkajala",
    costForTwo: "₹350 for two",
    cuisines: [
    "Burgers",
    "American"
    ],
    avgRating: 4.3,
    parentId: "166",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
    sla: {
    deliveryTime: 26,
    lastMileTravel: 3,
    serviceability: "SERVICEABLE",
    slaString: "26 mins",
    lastMileTravelString: "3.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-01-09 03:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹129"
    },
    loyaltyDiscoverPresentationInfo: {
    logoCtx: {
    text: "BENEFITS",
    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
    },
    freedelMessage: "FREE DELIVERY"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=232435",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "458206",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Bagalur Main Road",
    areaName: "Yelahanka",
    costForTwo: "₹400 for two",
    cuisines: [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    avgRating: 4.1,
    parentId: "547",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
    deliveryTime: 26,
    lastMileTravel: 5.9,
    serviceability: "SERVICEABLE",
    slaString: "26 mins",
    lastMileTravelString: "5.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-01-09 00:59:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "20% OFF",
    subHeader: "UPTO ₹50"
    },
    loyaltyDiscoverPresentationInfo: {
    logoCtx: {
    text: "BENEFITS",
    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
    },
    freedelMessage: "FREE DELIVERY"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=458206",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    }]

const RestaurantCard=(props)=>{

    console.log(props)

    const {resData}=props
    const{name,cloudinaryImageId,costForTwo,cuisines,avgRatingString,sla}=resData?.info//optional chaining
    


    return (
        <div className="res-card">
            <img className="card-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Image not found" />
            <h2>{name}</h2>
            <h4>{sla.deliveryTime} mins</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body=()=>{
    return (
        <div className="body">
            <div className="Search">
                <p>Search bar</p>
            </div>
            <div className="res-container">
                {resList.map((restaurant)=><RestaurantCard  key={restaurant.info.id} resData={restaurant}/>)}
            </div>

        </div>
    )
}

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)



//Config driven UI
//THE UI we are viewing is based on the data we are receiving from backend.


//Always use key in list as it affects the performance.If you dont use keys then react will give warning in the console
// and also it will render all the components as it is not  able to distinguish between the components.
// You can also use index as keys but that is not advisable.

