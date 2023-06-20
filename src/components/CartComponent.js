import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import './cartcomponent.css';

const CartComponent = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (!cartItems || cartItems.length === 0) {
    return <div className="empty-cart-message">Your cart is empty right now!</div>;
  }


  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li className="cart-item" key={item.id}>
            <img className="cart-image" src={item.image} alt={item.title} />
            <div className="cart-info">
              <span>{item.title}</span>
              <span>Rs.{item.price}</span>
            </div>
            <div className="cart-button-container">
              <button className="cart-button" onClick={() => handleRemoveFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
