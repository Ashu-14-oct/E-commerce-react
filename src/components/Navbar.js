import React from 'react';
import { useSelector } from 'react-redux';
import './navbar.css';

const Navbar = () => {
  const cartItemsCount = useSelector(state => state.cart.length);

  return (
    <nav>
      <div className="logo">Ecommerce Website</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart ({cartItemsCount})</a>
      </div>
    </nav>
  );
}

export default Navbar;