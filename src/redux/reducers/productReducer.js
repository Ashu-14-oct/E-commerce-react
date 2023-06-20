import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  SET_SORT_ORDER,
} from '../actions/productActions';

const initialState = {
  products: [],
  loading: false,
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
    case ADD_PRODUCT_REQUEST:
    case EDIT_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };
    case ADD_PRODUCT_SUCCESS: 
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
        error: null
      };
    case EDIT_PRODUCT_SUCCESS:
      const updatedProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      return {
        ...state,
        products: updatedProducts,
        loading: false,
        error: null
      };
    case DELETE_PRODUCT_SUCCESS:
      const filteredProducts = state.products.filter(product => product.id !== action.payload);
      return {
        ...state,
        products: filteredProducts,
        loading: false,
        error: null
      };
    case FETCH_PRODUCTS_FAILURE:
    case ADD_PRODUCT_FAILURE:
    case EDIT_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SET_SORT_ORDER:
      return {
          ...state,
          sortOrder: action.payload
      };
      
    default:
      return state;
  }
};

export default productReducer;
