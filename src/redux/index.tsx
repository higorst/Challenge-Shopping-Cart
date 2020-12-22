import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from './reducers'
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

// const initialState = {
//   products: [
//       {
//           "id": 1,
//           "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//           "price": 109.95,
//           "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//           "category": "men clothing",
//           "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//         },
//   ]
// };

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;

// const sagaMiddleware = createSagaMiddleware();

// export default function configureStore() {
//   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)
//   );
//   sagaMiddleware.run(rootSaga);
//   return store;
// }