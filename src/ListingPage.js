import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListingPage.css';

export default function ListingPage() {
  const [formData, setFormData] = useState({
    url: '',
    detailUrl: '',
    title: { shortTitle: '', longTitle: '' },
    price: { mrp: 0, cost: 0 },
    quantity: 1,
    description: '',
    discount: '',
    tagline: '',
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="listing-page">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">DealDone Seller Hub</Link>
            <nav className="desktop-nav">
              <button className="nav-button">Sell</button>
              <button className="nav-button">My DealDone</button>
              <button className="nav-button">Help</button>
            </nav>
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-item" onClick={() => setIsMenuOpen(false)}>Sell</button>
          <button className="mobile-menu-item" onClick={() => setIsMenuOpen(false)}>My DealDone</button>
          <button className="mobile-menu-item" onClick={() => setIsMenuOpen(false)}>Help</button>
        </div>
      )}

      <main className="main-content">
        <h2 className="page-title">List Your Item</h2>
        <form onSubmit={handleSubmit} className="listing-form">
          <div className="form-grid">
            <FormField
              label="URL"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
            />
            <FormField
              label="Detail URL"
              name="detailUrl"
              value={formData.detailUrl}
              onChange={handleInputChange}
            />
            <FormField
              label="Short Title"
              name="title.shortTitle"
              value={formData.title.shortTitle}
              onChange={handleInputChange}
            />
            <FormField
              label="Long Title"
              name="title.longTitle"
              value={formData.title.longTitle}
              onChange={handleInputChange}
            />
            <FormField
              label="MRP"
              name="price.mrp"
              type="number"
              value={formData.price.mrp}
              onChange={handleInputChange}
            />
            <FormField
              label="Cost"
              name="price.cost"
              type="number"
              value={formData.price.cost}
              onChange={handleInputChange}
            />
            <FormField
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleInputChange}
            />
            <FormField
              label="Discount"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Describe your item..."
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <FormField
            label="Tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-button">
            List Item
          </button>
        </form>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Buy</h3>
              <ul>
                <li><a href="#">Registration</a></li>
                <li><a href="#">DealDone Money Back Guarantee</a></li>
                <li><a href="#">Bidding & buying help</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Sell</h3>
              <ul>
                <li><a href="#">Start selling</a></li>
                <li><a href="#">Learn to sell</a></li>
                <li><a href="#">Affiliates</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>About DealDone</h3>
              <ul>
                <li><a href="#">Company info</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Investors</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Help & Contact</h3>
              <ul>
                <li><a href="#">Seller Information Center</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">DealDone Sites</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 DealDone Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FormField({ label, name, type = "text", value, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={`Enter ${label.toLowerCase()}`}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}