import { all, spawn, takeEvery, takeLatest } from "redux-saga/effects";

// SAGAS
import { loadProductsSAGA } from './products'
import { addCategory, removeCategory } from './categories'
import { addItem, deleteItem, updateItem, finishBuy } from './cart'

import { 
  SAGA_LOAD_PRODUCTS,

  SAGA_ADD_CATEGORY, 
  SAGA_REMOVE_CATEGORY,

  SAGA_ADD_ITEM_CART, 
  SAGA_REMOVE_ITEM_CART,
  SAGA_UPDATE_ITEM_CART,
  SAGA_FINISH_BUY
} from './types'

export default function* rootSaga() {
  // console.log('root saga')
  yield all([
    takeLatest(SAGA_LOAD_PRODUCTS, loadProductsSAGA),

    takeEvery(SAGA_ADD_CATEGORY, addCategory),
    takeEvery(SAGA_REMOVE_CATEGORY, removeCategory),

    takeEvery(SAGA_ADD_ITEM_CART, addItem),
    takeEvery(SAGA_REMOVE_ITEM_CART, deleteItem),
    takeEvery(SAGA_UPDATE_ITEM_CART, updateItem),
    takeEvery(SAGA_FINISH_BUY, finishBuy),
  ]);
}
