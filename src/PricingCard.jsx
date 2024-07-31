// src/PricingCard.jsx
import React from 'react';
import './PricingCard.css';

const PricingCard = ({ plan }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{plan.name}</h3>
        <h4>{plan.price}</h4>
      </div>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.isAvailable ? '' : 'text-muted'}>
            {feature.isAvailable ? '✔️' : '❌'} {feature.name}
          </li>
        ))}
      </ul>
      <button className="btn">Button</button>
    </div>
  );
};

export default PricingCard;
