import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import './App.css';

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <p className="eyebrow">Paradise Nursery</p>
        <h1>Bring nature home.</h1>
        <p>
          Hand-raised houseplants, delivered with a care guide, so your space
          can breathe a little greener.
        </p>
        <button className="get-started-button" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  // 'landing' | 'about' | 'products' | 'cart'
  const [view, setView] = useState('landing');

  if (view === 'landing') {
    return <LandingPage onGetStarted={() => setView('products')} />;
  }

  if (view === 'about') {
    return (
      <>
        <nav className="nav-bar">
          <h2 onClick={() => setView('landing')} style={{ cursor: 'pointer' }}>
            Paradise Nursery
          </h2>
          <div className="nav-icons">
            <span onClick={() => setView('products')} style={{ cursor: 'pointer' }}>
              Plants
            </span>
          </div>
        </nav>
        <AboutUs />
      </>
    );
  }

  // products or cart are both handled inside ProductList,
  // which toggles its own internal cart view.
  return <ProductList onAboutUs={() => setView('about')} />;
}

export default App;
