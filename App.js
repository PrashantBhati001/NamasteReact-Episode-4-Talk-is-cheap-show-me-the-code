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


const RestaurantCard=()=>{
    return (
        <div className="res-card">
            <img className="card-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6" alt="Image not found" />
            <h2>Megana Foods</h2>
            <h4>Biryani</h4>
            <h4>4.5 stars</h4>
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
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
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