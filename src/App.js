import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import ProductPage from './components/ProductPage';
import CartComponent from './components/CartComponent';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/products" element={<AddProduct  />} />
            <Route path="/cart" element={<CartComponent  />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
