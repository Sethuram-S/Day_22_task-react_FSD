# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Pricing Component

This repository contains a React component named `Pricing
` that renders a pricing table with three plans: FREE, PLUS, and PRO. Each plan is represented by a `PricingCard` component, which is imported from another file.

## Importing Dependencies

The code starts by importing the necessary dependencies:

```javascript
import React from 'react';
import PricingCard from './PricingCard';
import './Pricing.css';

```
- `React` is the main library for building user interfaces.
- `PricingCard` is a custom component that represents a single pricing plan.
- `./Pricing.css` is a CSS file that styles the pricing table.

## Defining Plans

The code defines an array of plans, where each plan is an object with the following properties:

```javascript
const plans = [
  {
    name: 'FREE',
    price: '$0/month',
    features: [
      { name: 'Single User', isAvailable: true },
      { name: '50GB Storage', isAvailable: true },
      // ...
    ],
  },
  // ...
];

```

- `name`: the name of the plan (e.g., FREE, PLUS, PRO).
- `price`: the price of the plan (e.g., $0/month, $9/month).
- `features`: an array of features, where each feature is an object with name and isAvailable properties.

## Rendering Pricing Table

The `Pricing` component renders a `div` element with a class of `pricing`, which contains a map of `PricingCard` components:

```javascript
const Pricing = () => {
  return (
    <div className="pricing">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

```
- The `map` function iterates over the plans array and returns a PricingCard component for each plan.
- The `key` prop is set to the index of the plan in the array, which helps React keep track of the components.
- The `plan` prop is passed to the PricingCard component, which will render the plan's details.

## Exporting Component

Finally, the `Pricing` component is exported as the default export:

```javascript
export default Pricing;
```
This allows other components to import and use the `Pricing` component.

## Example Usage

Here is an example of how to use the Pricing component in a React application:

```javascript
import React from 'react';
import Pricing from './Pricing';

const App = () => {
  return (
    <div>
      <h1>Our Pricing Plans</h1>
      <Pricing />
    </div>
  );
};

export default App;

```
## Styling

The `Pricing.css` file contains the styles for the `Pricing` component. Ensure you have appropriate styles defined to make the pricing table visually appealing.

```javascript
.pricing {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

```