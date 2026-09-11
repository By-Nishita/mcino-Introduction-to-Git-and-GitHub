import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  // Air Purifying
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 599,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2bb4",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 399,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Boston Fern",
    price: 449,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1597055181300-df90f3f5d8c4",
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 699,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  },
  {
    id: 6,
    name: "Bamboo Palm",
    price: 649,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },

  // Medicinal Plants
  {
    id: 7,
    name: "Aloe Vera",
    price: 349,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 8,
    name: "Lavender",
    price: 449,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1",
  },
  {
    id: 9,
    name: "Mint Plant",
    price: 299,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1",
  },
  {
    id: 10,
    name: "Rosemary",
    price: 399,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662",
  },
  {
    id: 11,
    name: "Basil",
    price: 299,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733",
  },
  {
    id: 12,
    name: "Thyme",
    price: 279,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
  },

  // Indoor Favorites
  {
    id: 13,
    name: "Money Plant",
    price: 299,
    category: "Indoor Favorites",
    image:
      "https://images.unsplash.com/photo-1620127807580-2c9c0f2b5c47",
  },
  {
    id: 14,
    name: "ZZ Plant",
    price: 699,
    category: "Indoor Favorites",
    image:
      "https://images.unsplash.com/photo-1632207691143-71f3e8b1c5a7",
  },
  {
    id: 15,
    name: "Rubber Plant",
    price: 649,
    category: "Indoor Favorites",
    image:
      "https://images.unsplash.com/photo-1614594573360-3e6e6b5c5b3c",
  },
  {
    id: 16,
    name: "Monstera",
    price: 799,
    category: "Indoor Favorites",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 17,
    name: "Calathea",
    price: 749,
    category: "Indoor Favorites",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 18,
    name: "Philodendron",
    price: 599,
    category: "Indoor Favorites",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  },
];

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick}>
          🌿 Paradise Nursery
        </div>

        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button>Plants</button>
          <button onClick={onCartClick}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

      <header className="products-header">
        <h1>Our Plants</h1>
        <p>
          Bring nature into your home with our beautiful houseplants.
        </p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <div className="plant-info">
                    <h3>{plant.name}</h3>

                    <p className="plant-description">
                      Beautiful and healthy indoor plant perfect for
                      your home.
                    </p>

                    <p className="plant-price">₹{plant.price}</p>

                    <button
                      className="add-cart-button"
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
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