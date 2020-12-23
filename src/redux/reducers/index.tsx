import { combineReducers } from 'redux';

// REDUCERS
import products from './products';
import categories from './categories';

 const rootReducer = combineReducers({
   products,
   categories,
 });

 export default rootReducer;
