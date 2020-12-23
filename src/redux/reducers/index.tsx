import { combineReducers } from 'redux';

// REDUCERS
import products from './products';
import categories from './categories';
import cart from './cart'

 const rootReducer = combineReducers({
   products,
   categories,
   cart,
 });

 export default rootReducer;
