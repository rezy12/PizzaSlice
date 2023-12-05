// FAQ.js
import React, { useState } from 'react';
import './faq.css'; // Import your CSS file
import '../FAQs/faq.css';
import '../../Pages/FAQs/faq';

const FAQ = () => {
  const [answersVisible, setAnswersVisible] = useState([]);

  const toggleAnswer = (index) => {
    const newAnswersVisible = [...answersVisible];
    newAnswersVisible[index] = !newAnswersVisible[index];
    setAnswersVisible(newAnswersVisible);
  };

  const faqData = [
      { question: 'What are your opening hours?', answer: 'We are open from 11:00 AM to 10:00 PM every day.' },
      { question: 'Do you deliver?', answer: 'Yes, we offer delivery services within a certain radius. Check our delivery area for more details.' },
      { question: 'How can I place an order?', answer: 'You can place an order online through our website or by calling our hotline.' },
      { question: 'What payment methods do you accept?', answer: 'We accept cash, credit cards, and online payment methods.' },
      { question: 'Are your ingredients fresh?', answer: 'Yes, we source the freshest ingredients to ensure the quality of our pizzas.' },
      { question: 'Do you have vegetarian options?', answer: 'Absolutely! We have a variety of delicious vegetarian pizzas to choose from.' },
      { question: 'Can I track my delivery?', answer: 'Yes, you can track the status of your delivery through our online tracking system.' },
      { question: 'Do you have a rewards program?', answer: 'Yes, we offer a rewards program where you can earn points for each purchase and redeem them for discounts.' },
      { question: 'What is your return policy?', answer: 'If you are not satisfied with your order, please contact our customer service within 30 minutes of receiving it.' },
      { question: 'Do you offer catering services?', answer: 'Yes, we provide catering services for events and parties. Contact us for more information.' },
      { question: 'Are your pizzas suitable for kids?', answer: 'Absolutely! We have kid-friendly options, and our pizzas are made with high-quality ingredients.' },
      { question: 'Do you offer vegan cheese?', answer: 'Yes, we have vegan cheese options for our customers who follow a vegan diet.' },
      { question: 'How do I apply a coupon code?', answer: 'You can apply a coupon code during the checkout process on our website or provide it when placing a phone order.' },
      { question: 'Can I order half-and-half pizzas with different toppings?', answer: 'Certainly! You can customize your pizza with different toppings on each half.' },
      { question: 'Is there a minimum order amount for delivery?', answer: 'Yes, we have a minimum order amount for delivery. Check our website for details based on your location.' },
    ];
    
  

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button onClick={() => toggleAnswer(index)} className="faq-question">
            {item.question}
          </button>
          {answersVisible[index] && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
