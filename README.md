# ProShop eCommerce Platform 

> eCommerce platform built with the MERN stack & Redux.

<img src="./frontend/public/images/screens.png">

It is a full-featured shopping cart Project. See it in action at https://proshop-hje4.onrender.com

This is version of the app uses Redux Toolkit.

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- Database seeder (products & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI`

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5005
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5005)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

ashish@email.com (Customer)
123456

```

