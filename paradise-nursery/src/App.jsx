import { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const goToPlants = () => {
    setPage("plants");
  };

  const goToCart = () => {
    setPage("cart");
  };

  const goToHome = () => {
    setPage("home");
  };

  if (page === "plants") {
    return (
      <ProductList
        onCartClick={goToCart}
        onHomeClick={goToHome}
      />
    );
  }

  if (page === "cart") {
    return <CartItem onContinueShopping={goToPlants} />;
  }

  return (
    <div className="home-page">
      <nav className="home-navbar">
        <div className="navbar-brand">
          🌿 Paradise Nursery
        </div>

        <div className="navbar-links">
          <button onClick={goToHome}>Home</button>
          <button onClick={goToPlants}>Plants</button>
          <button onClick={goToCart}>🛒 Cart</button>
        </div>
      </nav>

      <section className="landing-page">
        <div className="landing-content">
          <p className="welcome-text">
            Welcome to
          </p>

          <h1>Paradise Nursery</h1>

          <h2>
            Bring Nature Into Your Home
          </h2>

          <p className="landing-description">
            Discover beautiful and healthy houseplants
            for every corner of your home. Explore our
            collection and find the perfect plant for you.
          </p>

          <button
            className="get-started-button"
            onClick={goToPlants}
          >
            Get Started
          </button>
        </div>

        <div className="landing-image">
          <img
            src="/src/assets/hero.png"
            alt="Beautiful houseplants"
          />
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

export default App;