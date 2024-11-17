import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();

  const handleStartSelling = () => {
    navigate('/list-item');
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">DealDone Seller Hub</div>
          <ul>
            <li><a href="#sell">Sell Online</a></li>
            <li><a href="#fees">Fees and Commission</a></li>
            <li><a href="#grow">Grow</a></li>
            <li><a href="#learn">Learn</a></li>
            <li><a href="#About">Shop</a></li> 
          </ul>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="start-selling-btn" onClick={handleStartSelling}>Start Selling</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Sell Online with DealsDone</h1>
          <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/Desktop_sell.webp" alt="Sellers" className="hero-image" />
        </section>
        <section className="features">
          <div className="feature-card">
            <i className="icon users-icon"></i>
            <p>45 crore+ DealsDone customers</p>
          </div>
          <div className="feature-card">
            <i className="icon payments-icon"></i>
            <p>7* days secure & regular payments</p>
          </div>
          <div className="feature-card">
            <i className="icon cost-icon"></i>
            <p>Low cost of doing business</p>
          </div>
          <div className="feature-card">
            <i className="icon support-icon"></i>
            <p>One click Seller Support</p>
          </div>
          <div className="feature-card">
            <i className="icon events-icon"></i>
            <p>Access to The Big Billion Days & more</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 DealsDone Seller Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;