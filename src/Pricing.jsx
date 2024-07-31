// src/Pricing.jsx
import React from 'react';
import PricingCard from './PricingCard';
import './Pricing.css';

const plans = [
  {
    name: 'FREE',
    price: '$0/month',
    features: [
      { name: 'Single User', isAvailable: true },
      { name: '50GB Storage', isAvailable: true },
      { name: 'Unlimited Public Projects', isAvailable: true },
      { name: 'Community Access', isAvailable: true },
      { name: 'Unlimited Private Projects', isAvailable: false },
      { name: 'Dedicated Phone Support', isAvailable: false },
      { name: 'Free Subdomain', isAvailable: false },
      { name: 'Monthly Status Reports', isAvailable: false },
    ],
  },
  {
    name: 'PLUS',
    price: '$9/month',
    features: [
      { name: '5 Users', isAvailable: true },
      { name: '50GB Storage', isAvailable: true },
      { name: 'Unlimited Public Projects', isAvailable: true },
      { name: 'Community Access', isAvailable: true },
      { name: 'Unlimited Private Projects', isAvailable: true },
      { name: 'Dedicated Phone Support', isAvailable: true },
      { name: 'Free Subdomain', isAvailable: true },
      { name: 'Monthly Status Reports', isAvailable: false },
    ],
  },
  {
    name: 'PRO',
    price: '$49/month',
    features: [
      { name: 'Unlimited Users', isAvailable: true },
      { name: '50GB Storage', isAvailable: true },
      { name: 'Unlimited Public Projects', isAvailable: true },
      { name: 'Community Access', isAvailable: true },
      { name: 'Unlimited Private Projects', isAvailable: true },
      { name: 'Dedicated Phone Support', isAvailable: true },
      { name: 'Free Subdomain', isAvailable: true },
      { name: 'Monthly Status Reports', isAvailable: true },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="pricing">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default Pricing;
