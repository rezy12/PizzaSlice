import React from 'react';
import "../Contact/contact.css";


const contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions, suggestions, or just want to say hello? We'd love to
        hear from you! Feel free to reach out using the contact information
        below.
      </p>
      <div className="contact-details">
        <p>Email: info@pizzaparadise.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Pizza Street, Cityville, State 12345</p>
      </div>
    </div>
  );
};

export default contact;
