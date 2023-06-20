# E-commerce

This is a simple product management system built with React and Redux. It allows users to manage products, including viewing, adding, editing, and deleting products, as well as adding products to the cart.

## Features

- View a list of products with their details, including title, price, and image.
- Sort products by price in ascending or descending order.
- Edit product details, including the title and price.
- Delete products from the system.
- Add products to the cart.
- Display notifications for successful cart additions and product edits.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A state management library for JavaScript applications.
- React Redux: Official React bindings for Redux.
- Redux Thunk: A middleware for Redux that allows handling asynchronous actions.
- HTML and CSS: Markup and styling of the application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/Ashu-14-oct/E-commerce-react.git`
2. Navigate to the project directory: `cd E-commerce-react`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser at `http://localhost:3001`

## Usage

- Upon opening the application, you will see a list of products displayed on the screen.
- You can click the "Sort by Price" button to sort the products by price in ascending or descending order.
- To edit a product, click the "Edit" button next to the desired product and enter the new title and price in the prompted dialog.
- To delete a product, click the "Delete" button next to the desired product.
- To add a product to the cart, click the "Add to Cart" button next to the desired product.
  
Please note that this project uses a fake API powered by `json-server` to simulate server-side interactions. The fake API server runs on `http://localhost:3000` by default. You can modify the fake API data by editing the `db.json` file in the project's root directory.
