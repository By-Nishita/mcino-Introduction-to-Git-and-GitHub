# Paradise Nursery

Paradise Nursery is a React single-page application for an online houseplant
shop. It was built as a front-end development capstone project and
demonstrates component-based UI design, state management with Redux Toolkit,
and a full add-to-cart / checkout shopping flow.

## Project Name

**Paradise Nursery**

## Features

- **Landing page** with the company name, a brief introduction, and a
  "Get Started" button that takes the visitor into the plant catalog.
- **About Us page** describing the company's story and mission.
- **Product listing page** that organizes plants into categories (Air
  Purifying, Aromatic, Medicinal), each with an image, description, price,
  and an "Add to Cart" button.
- **Shopping cart page** that lists every item added to the cart, lets the
  user increase/decrease quantity or delete an item, and shows a running
  total cost and item count.
- **Redux Toolkit** cart slice (`CartSlice.jsx`) with `addItem`,
  `removeItem`, and `updateQuantity` reducers shared across components via
  `react-redux`.

## Tech Stack

- React 18 (Vite)
- Redux Toolkit + React-Redux
- Plain CSS (no UI framework)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your
browser.

## Project Structure

```
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── App.css
    ├── components/
    │   ├── AboutUs.jsx
    │   ├── ProductList.jsx
    │   ├── ProductList.css
    │   ├── CartItem.jsx
    │   └── CartItem.css
    └── redux/
        ├── store.js
        └── CartSlice.jsx
```
