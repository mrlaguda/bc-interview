# Brand Collective - ReactJS App

A simple ReactJS based web application that fetches and displays product information from the Brand Collective Shopify test store using the GraphQL API.

## Features

- Links for "Hydrogen" and "Neon" collections, fetching and displaying the first 10 published products from each collection.
- Filter options to reorder products by name or price.
- Responsive layout for the filter section and product grid.
- Styled with Tailwind CSS.
- Product cards display a "Sold Out" badge for products with no inventory and no general availability.
- Sale prices are displayed in red with the original price crossed out when applicable.
- Product cards contain a hover effect to display a secondary product image (desktop only).

## Requirements

- Node.js (v14.x or later)
- npm

## Setup Instructions

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/mrlaguda/bc-interview.git
   ```
2. Navigate to the project directory:
   ```
   cd bc-interview
   ```
3. Install dependencies using npm:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. To view the application, open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Summary

Created for Brand Collective developer task by Matt Laguda.