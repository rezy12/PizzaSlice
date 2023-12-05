import React from 'react';

import '../Menu/menu.css';

const menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-buttons">
        <button onClick={() => scrollToSection('coupons')}>Coupons</button>
        <button onClick={() => scrollToSection('desserts')}>Desserts</button>
        <button onClick={() => scrollToSection('pizza')}>Pizza</button>
      </div>

      <section id="coupons" className="menu-section">
        <h2>Coupons</h2>
        {renderMenuItems('Coupon')}
      </section>

      <section id="desserts" className="menu-section">
        <h2>Desserts</h2>
        {renderMenuItems('Dessert')}
      </section>

      <section id="pizza" className="menu-section">
        <h2>Pizza</h2>
        {renderMenuItems('Pizza')}
      </section>
    </div>
  );
};

const renderMenuItems = (category) => {
  const items = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <div className="menu-items">
      {items.map((item) => (
        <div key={item} className="menu-item">
          <img src={`images/${category}${item}.jpg`} alt={`${category} ${item}`} />
          <span>{`${category} ${item}`}</span>
        </div>
      ))}
    </div>
  );
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default menu;

