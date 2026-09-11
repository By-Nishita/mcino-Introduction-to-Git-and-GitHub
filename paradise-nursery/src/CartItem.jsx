import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <nav className="navbar">
          <div className="navbar-brand">🌿 Paradise Nursery</div>

          <div className="navbar-links">
            <button onClick={onContinueShopping}>Home</button>
            <button onClick={onContinueShopping}>Plants</button>
            <button>🛒 Cart (0)</button>
          </div>
        </nav>

        <div className="empty-cart">
          <h1>Your Shopping Cart</h1>
          <p>Your cart is currently empty.</p>

          <button
            className="continue-shopping-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>

        <div className="navbar-links">
          <button onClick={onContinueShopping}>Home</button>
          <button onClick={onContinueShopping}>Plants</button>
          <button>
            🛒 Cart (
            {cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )}
            )
          </button>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h2>{item.name}</h2>

                <p>Unit Price: ₹{item.price}</p>

                <p>
                  Item Total: ₹{item.price * item.quantity}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                    disabled={item.quantity === 1}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Total Amount: ₹{totalAmount}</h2>

          <button
            className="checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>

          <button
            className="continue-shopping-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;