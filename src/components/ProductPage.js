import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, editProduct, deleteProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { setSortOrder } from '../redux/actions/productActions';

import './productpage.css';

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const sortOrder = useSelector(state => state.products.sortOrder);

  //noti
  const [notification, setNotification] = useState('');
  const [Dnotification, setDNotification] = useState('');
  const [Enotification, setENotification] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (productId) => {
    // Find the product by its productId
    const productToEdit = products.find((product) => product.id === productId);
 
    // Prompt the user to enter a new title
    const newTitle = prompt('Enter new title:', productToEdit.title);
  
    // Prompt the user to enter a new price
    const newPrice = prompt('Enter new price:', productToEdit.price);
  
    // If the user cancels the prompt, do nothing
    if (newTitle === null || newPrice === null) {
      return;
    }
  
    // Convert the new price to a number
    const newPriceNumber = Number(newPrice);
  
    // Validate the new price
    if (isNaN(newPriceNumber)) {
      alert('Invalid price. Please enter a valid number.');
      return;
    }
  
    // Create the updated product object
    const updatedProduct = { ...productToEdit, title: newTitle, price: newPriceNumber };
  
    // Dispatch the editProduct action
    dispatch(editProduct(productId, updatedProduct))
    .then(() => {
      dispatch(fetchProducts());
      setENotification(`${productToEdit.title} edited successfully!`);
      setTimeout(() => {
        setENotification('');
      }, 3000);
    });
  };
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    setDNotification(`Product deleted successfully!`);
    setTimeout(() => {
      setDNotification('');
    }, 3000);
  };

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId));
    setNotification(`${productId.title} added to cart!`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleSortByPrice = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(setSortOrder(newSortOrder));
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
  

  return (
    <div className="container">
      {notification && <div className="notification">{notification}</div>}
      {Dnotification && <div className="notification">{Dnotification}</div>}
      {Enotification && <div className="notification">{Enotification}</div>}
      <div className="sort-container">
        <button className="sort-button" onClick={handleSortByPrice}>Sort by Price</button>
      </div>
      {sortedProducts.map(product => (
        <div className="product" key={product.id}>
          <img className="product-image" src={product.image} alt={product.title} />
          <div className="product-info">
            <div className="product-title">{product.title}</div>
            <div>Rs.{product.price}</div>
          </div>
          <div className="product-buttons">
            <button className="product-edit-button" onClick={() => handleEdit(product.id)}>
              Edit
            </button>
            <button className="product-delete-button" onClick={() => handleDelete(product.id)}>
              Delete
            </button>
            <button className="product-cart-button" onClick={() => addToCartHandler(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;