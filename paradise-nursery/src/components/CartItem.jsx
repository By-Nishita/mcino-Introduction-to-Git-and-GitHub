import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total number of individual plants across all line items
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Total cost of every item in the cart, considering quantity
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.cost * item.quantity, 0)
      .toFixed(2);
  };

  // Cost for a single line item (unit price * quantity)
  const calculateItemSubtotal = (item) => {
    return (item.cost * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Quantity would drop to zero, so remove the item entirely
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Checkout is coming soon!');
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Your Cart ({totalQuantity} items)</h2>

        {cartItems.length === 0 ? (
          <p className="cart-empty">
            Your cart is empty. Head back to the plant shop to find your next
            favorite plant.
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-price">${item.cost.toFixed(2)} each</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>
                </div>
                <p className="cart-item-subtotal">${calculateItemSubtotal(item)}</p>
                <button className="delete-button" onClick={() => handleRemove(item)}>
                  Delete
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <p>Total items: {totalQuantity}</p>
              <p>Total amount: ${calculateTotalAmount()}</p>
            </div>
          </>
        )}

        <div className="cart-actions">
          <button className="continue-shopping-button" onClick={onContinueShopping}>
            Continue Shopping
          </button>
          {cartItems.length > 0 && (
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
