Pizza Store Website

A user-friendly pizza store website that allows customers to browse the menu, place orders, and view their cart. The backend is integrated with Node.js and MongoDB to manage orders and store customer data.

Features

Menu Browsing: View a list of available pizzas with details and prices.
Order System: Add pizzas to the cart, specify quantities, and place an order.
User Authentication: Secure sign-up and login system for users to track their orders.
Order Management: Admin panel to view and manage customer orders.
Persistent Data: MongoDB database to store orders and user information.
Responsive UI: Fully responsive design for optimal user experience across devices.

Technologies Used

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
API: RESTful API for handling orders and user management

Installation
Clone the repository:

git clone https://github.com/yourusername/pizza-store-website.git
Navigate to the project directory:

cd pizza-store-website
Install the dependencies:

npm install
Set up environment variables:

Create a .env file in the root of the project and add your MongoDB URI and JWT secret key:
env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the application:


npm start
The app will be running on http://localhost:3000.

Usage

Sign Up: Create a new account to save your order history.
Login: Log in to manage your orders and view your cart.
Browse Menu: Explore various pizza options and add them to your cart.
Order Pizza: Place an order by adding items to your cart and proceeding to checkout.
Admin Panel: View and manage customer orders (for admin users).

License

This project is licensed under the MIT License - see the LICENSE file for details.
