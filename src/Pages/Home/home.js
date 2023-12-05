import React from 'react';
import Navbar from "../../componets/Navbar/navbar";
import "../Home/home.css";
import Delivery from "../../componets/Images/delivery.png";
import Pickup from "../../componets/Images/pickup.png";
import HeaderPizza from "../../componets/Images/headerpizza.png"

 

const home = () => {
  return (
    <>
      <Navbar />

    {/*Header for the description*/}
    <section>
      <div class="section-container">
        
        <div class="left-box">
          <img src={HeaderPizza} alt="Mediterranean Pizza"/>
        </div>

        <div class="right-box">
          <h2>Mediterranean Pizza</h2>
          <p>
            Our Mediterranean Pizza is a delightful combination of fresh ingredients,
            including tomatoes, olives, feta cheese, and a blend of Mediterranean herbs.
            Savor the flavors of the Mediterranean with every bite.
          </p>
          <p class="price">Price: $12.99</p>
        </div>
      </div>
    </section>




      {/* Delivery and pickup*/}
      <section className="pickup-delivery-section">
      <div class="section-container">
          {/*<!-- Left Box (Delivery) -->*/}
          <div class="box">
            <img src={Delivery} alt="Delivery Image"/>
            <h2>Delivery</h2>
            <button>Delivery</button>
          </div>

          {/*<!-- Right Box (Pickup) -->*/}
          <div class="box">
            <img src={Pickup} alt="Pickup Image"/>
            <h2>Pickup</h2>
            <button>Pickup</button>
          </div>
      </div>
      </section>


      {/* Find Us location search */}
      

      <section className="location-section">
        <h1 class ="find-us-title">Find Us Nearby</h1>
        <div className="search-bar">
          <input type="text" id="location-input" placeholder="Enter your location" />
          <button id="search-button">Search</button>
        </div>
        <div id="results">
          {/* Location search results will be displayed here */}
        </div>
      </section>


    
    </>
  )
}

export default home
