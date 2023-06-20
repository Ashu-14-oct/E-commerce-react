import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCart = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    case REMOVE_FROM_CART:
      const filteredCart = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return filteredCart;
    default:
      return state;
  }
};

export default cartReducer;

