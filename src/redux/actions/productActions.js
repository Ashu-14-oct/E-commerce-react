// productActions.js
import axios from 'axios';

//product fetch actions
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

//add product actions
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

//product add and delete
export const EDIT_PRODUCT_REQUEST = 'EDIT_PRODUCT_REQUEST';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAILURE = 'EDIT_PRODUCT_FAILURE';
export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

//set order
export const SET_SORT_ORDER = "SET_SORT_ORDER";


//fetch products
export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  };
};

export const fetchProductsSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
};

export const fetchProductsFailure = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsRequest());
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchProductsSuccess(data));
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};



//add products

export const addProduct = (productData) => {
  return (dispatch) => {
    dispatch(addProductRequest());

    // Make the API request to add the product
    axios
      .post('http://localhost:3000/products', productData)
      .then((response) => {
        dispatch(addProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addProductFailure(error.message));
      });
  };
};

const addProductRequest = () => {
  return {
    type: ADD_PRODUCT_REQUEST,
  };
};

const addProductSuccess = (product) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
  };
};

const addProductFailure = (error) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: error,
  };
};

//edit and delete products

//edit
const editProductRequest = () => ({
  type: EDIT_PRODUCT_REQUEST
});

const editProductSuccess = (productId, updatedProduct) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: { productId, updatedProduct }
});

const editProductFailure = (error) => ({
  type: EDIT_PRODUCT_FAILURE,
  payload: error
});

export const editProduct = (productId, updatedProduct) => async (dispatch) => {
  dispatch(editProductRequest());

  try {
    // Make the API request to update the product
    const response = await axios.put(`http://localhost:3000/products/${productId}`, updatedProduct);

    // Dispatch the success action with the updated product data
    dispatch(editProductSuccess(productId, response.data));
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch(editProductFailure(error.message));
  }
};

//delete
const deleteProductRequest = () => ({
  type: DELETE_PRODUCT_REQUEST
});

const deleteProductSuccess = (productId) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: productId
});

const deleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error
});

export const deleteProduct = (productId) => async (dispatch) => {
  dispatch(deleteProductRequest());

  try {
    // Make the API request to delete the product
    await axios.delete(`http://localhost:3000/products/${productId}`);

    // Dispatch the success action with the deleted product ID
    dispatch(deleteProductSuccess(productId));
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch(deleteProductFailure(error.message));
  }
};

//setting order
export const setSortOrder = (sortOrder) => {
  return {
    type: SET_SORT_ORDER,
    payload: sortOrder
  };
};

