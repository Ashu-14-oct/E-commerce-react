import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setUrl] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the addProduct action with the entered title and price
    dispatch(addProduct({ title, price, image }));
    setNotification(`${title} added to the products!`);
    setTimeout(() => {
      setNotification('');
    }, 3000);

    // Reset the form inputs
    setTitle('');
    setPrice('');
    setUrl('');
    // navigate('/');
  };

  return (
    <div className="add-product-container">
      {notification && <div className="notification">{notification}</div>}
      <h2>Add Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" className="form-control" value={image} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
