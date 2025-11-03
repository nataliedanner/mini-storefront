# Coding Challenge 4: Mini-Storefront

## Project Setup & Structure
React app set up with all required files and components. These include Catalog.jsx, ProductList.jsx, ProductCard.jsx, CategoryFilter.jsx, PriceFilter.jsx, CartSummary.jsx, and StatusMessage.jsx. The app runs using npm install and npm run dev.

## Components + JSX + Keys
All components are set up using JSX files to display the storefront. The cards are shown using a list with their product ID as they key. 

## Props + Lifting State
Parent to child callbacks are used for components like the Price and Category filters. These filters are stored in Catalog.jsx.

## State + Controlled Inputs
useState is used to render the components like the Cateogory and Price filters.

## Effects + Cleanup
Products are fetched in Catalog.jsx, and the inventory is updated when products are added to the cart.

## UX + Conditional Rendering
Loading, error, and empty results shown on the page when applicable.