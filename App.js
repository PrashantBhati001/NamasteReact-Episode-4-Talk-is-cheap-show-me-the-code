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
                <img className="logo" src="https://img.freepik.com/premium-vector/hat-chef-logo-vector-illustration-design_598213-1794.jpg" alt="Image not found" />
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

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)