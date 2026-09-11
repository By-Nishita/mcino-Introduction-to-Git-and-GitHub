import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import CartItem from './CartItem';
import '../App.css';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=400&q=80',
        description: 'Removes toxins and thrives on neglect.',
        cost: 15,
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572686025729-4955ba0eba6a?auto=format&fit=crop&w=400&q=80',
        description: 'Fast-growing and pet-friendly.',
        cost: 12,
      },
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&w=400&q=80',
        description: 'Elegant white blooms, filters indoor air.',
        cost: 18,
      },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=400&q=80',
        description: 'Calming fragrance, loves sunlight.',
        cost: 14,
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1567689771587-70c07a68af5d?auto=format&fit=crop&w=400&q=80',
        description: 'Sweet-scented night bloomer.',
        cost: 16,
      },
      {
        name: 'Rosemary',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=400&q=80',
        description: 'Fragrant herb, great for cooking too.',
        cost: 10,
      },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      {
        name: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80',
        description: 'Soothing gel for skin care.',
        cost: 13,
      },
      {
        name: 'Echinacea',
        image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80',
        description: 'Traditional immune-support herb.',
        cost: 11,
      },
      {
        name: 'Calendula',
        image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80',
        description: 'Bright petals used in balms and teas.',
        cost: 9,
      },
    ],
  },
];

function ProductList({ onAboutUs }) {
  const [showCart, setShowCart] = useState(false);
  const [addedItems, setAddedItems] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  if (showCart) {
    return <CartItem onContinueShopping={() => setShowCart(false)} />;
  }

  return (
    <div className="product-page">
      <nav className="nav-bar">
        <h2 onClick={onAboutUs} style={{ cursor: 'pointer' }}>
          Paradise Nursery
        </h2>
        <div className="nav-icons">
          <span onClick={onAboutUs} style={{ cursor: 'pointer' }}>
            About Us
          </span>
          <span onClick={() => setShowCart(true)} style={{ cursor: 'pointer' }}>
            Cart
            <span className="cart-count">{totalItemsInCart}</span>
          </span>
        </div>
      </nav>

      {plantsArray.map((category) => (
        <section className="category-section" key={category.category}>
          <h2>{category.category}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <div className="product-info">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p className="price">${plant.cost}</p>
                  <button
                    disabled={!!addedItems[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
