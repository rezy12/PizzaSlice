// Location.js
import React from 'react';
import NavBar from '../../componets/Navbar/navbar';
import "../Location/location";
import "../../Pages/Location/location.css";

const Location = () => {
  return (
    <>

      
    <NavBar />

    <div>
      <h1>Our Locations</h1>

      <p>Exciting news! Pizza Paradise is thrilled to announce that we are expanding our presence to bring the joy of delicious pizzas to even more locations. Soon, you can savor our mouthwatering pizzas in states such as California, North & South Dakota, New York, Florida, and Illinois. Stay tuned for updates as we continue to grow and serve pizza lovers across the country!
</p>

      <div className="location-box">
        <h2>Location 1 - Texas</h2>
        <p>123 Main Street, Houston, TX 77001</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      <div className="location-box">
        <h2>Location 2 - Texas</h2>
        <p>456 Oak Avenue, Dallas, TX 75202</p>
        <p>Phone: (234) 567-8901</p>
      </div>

      <div className="location-box">
        <h2>Location 3 - Texas</h2>
        <p>789 Pine Street, Austin, TX 73301</p>
        <p>Phone: (345) 678-9012</p>
      </div>

      <div className="location-box">
        <h2>Location 4 - New York</h2>
        <p>101 Broadway, New York, NY 10001</p>
        <p>Phone: (456) 789-0123</p>
      </div>

      <div className="location-box">
        <h2>Location 5 - New York</h2>
        <p>202 Park Avenue, Brooklyn, NY 11201</p>
        <p>Phone: (567) 890-1234</p>
      </div>
    </div>
        
        
    
    </>
  );
};

export default Location;
