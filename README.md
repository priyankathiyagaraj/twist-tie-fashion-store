# Trendy Fashion Accessories Online Retail Startup

## Brand Name

**twist_.tie**

---

# Project Overview

**Trendy Fashion Accessories Online Retail Startup** is a modern full-stack e-commerce web application developed as a **BCA Mini Project**. The application provides a professional online shopping platform for handmade fashion accessories such as scrunchies, bracelets, hair clips, catch clips, hair bands, and other trendy accessories.

This project replaces traditional Instagram-based ordering with a secure, user-friendly, and responsive online shopping experience.

---

# Objectives

* Develop a professional online shopping platform.
* Provide secure user authentication.
* Enable customers to browse products easily.
* Implement shopping cart and wishlist functionality.
* Integrate secure online payment.
* Build an admin dashboard for product and order management.
* Create a responsive website for all devices.

---

# Features

## User Features

* User Registration
* User Login
* Email Verification
* Password Reset
* Product Search
* Category Filter
* Price Filter
* Product Details
* Shopping Cart
* Wishlist
* Checkout
* Razorpay Payment
* Cash on Delivery
* Order History
* User Dashboard
* Newsletter Subscription
* Contact Form
* Responsive Design
* Dark Mode Toggle
* Toast Notifications

---

## Admin Features

* Secure Admin Login
* Dashboard Analytics
* Add Products
* Edit Products
* Delete Products
* Upload Product Images
* Manage Orders
* Update Order Status
* Manage Customers
* View Revenue
* Newsletter Management

---

# Technologies Used

## Frontend

* HTML5
* Tailwind CSS
* JavaScript (ES6)
* Font Awesome
* Google Fonts

---

## Backend

* Firebase Authentication
* Firebase Realtime Database
* Firebase Storage

---

## Payment Gateway

* Razorpay
* Cash on Delivery

---

## Hosting

* GitHub Pages
* Firebase Hosting

---

## Version Control

* Git
* GitHub

---

# Project Structure

```
fashion-accessories-store/

│
├── index.html
├── products.html
├── product-details.html
├── cart.html
├── checkout.html
├── login.html
├── register.html
├── dashboard.html
├── profile.html
├── wishlist.html
├── orders.html
├── about.html
├── contact.html
├── 404.html
│
├── admin/
│   ├── dashboard.html
│   ├── products.html
│   ├── orders.html
│   ├── customers.html
│   ├── add-product.html
│   └── edit-product.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── firebase-config.js
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── cart.js
│   │   ├── checkout.js
│   │   ├── dashboard.js
│   │   ├── wishlist.js
│   │   ├── newsletter.js
│   │   ├── admin.js
│   │   ├── validation.js
│   │   └── animations.js
│   │
│   ├── images/
│   └── icons/
│
├── firebase.json
├── README.md
└── .gitignore
```

---

# Database Structure

### users

* userId
* name
* email
* phone
* address
* profileImage
* createdAt

### products

* productId
* name
* description
* category
* price
* discount
* stock
* rating
* featured
* images
* createdAt

### cart

* cartId
* userId
* productId
* quantity

### wishlist

* wishlistId
* userId
* productId

### orders

* orderId
* userId
* products
* address
* paymentMethod
* paymentStatus
* orderStatus
* totalAmount
* orderedDate

### newsletter

* subscriberId
* email
* createdAt

### contact

* messageId
* name
* email
* phone
* subject
* message
* createdAt

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/fashion-accessories-store.git
```

---

## Open Project

```bash
cd fashion-accessories-store
```

---

## Install Firebase

1. Create a Firebase project.
2. Enable Authentication.
3. Enable Realtime Database.
4. Enable Storage.
5. Copy Firebase configuration into `firebase-config.js`.

---

## Run the Project

Open `index.html` using a Live Server extension in Visual Studio Code.

---

# Firebase Services

* Authentication
* Realtime Database
* Storage

---

# Payment Methods

* Razorpay
* Cash on Delivery

---

# Responsive Support

* Desktop
* Laptop
* Tablet
* Mobile

---

# Security Features

* Firebase Authentication
* Protected Routes
* Email Verification
* Password Reset
* Firebase Security Rules
* Input Validation

---

# Future Enhancements

* Product Reviews
* AI Product Recommendations
* Order Tracking
* Coupon System
* Inventory Management
* Multi-language Support
* Push Notifications
* PWA Support
* Sales Reports
* Admin Analytics Dashboard

---

# Learning Outcomes

This project demonstrates practical knowledge of:

* Frontend Web Development
* Responsive UI Design
* Firebase Authentication
* Realtime Database Management
* Cloud Storage
* Payment Gateway Integration
* CRUD Operations
* User Authentication
* Software Architecture
* E-commerce Development
* Version Control with Git and GitHub

---

# Developed By

**Priyanka Tyagaraj**

Master of Computer Applications (MCA)

KCG College of Technology

Academic Project

---

# License

This project is developed for educational purposes as part of an academic mini project.

