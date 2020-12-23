import { all, spawn, takeEvery, takeLatest } from "redux-saga/effects";

// SAGAS
import { loadProductsSAGA } from './products'
import { addCategory, removeCategory } from './categories'

import { 
  SAGA_ADD_CATEGORY, 
  SAGA_REMOVE_CATEGORY,
  SAGA_LOAD_PRODUCTS 
} from './types'

export default function* rootSaga() {
  // console.log('root saga')
  yield all([
    takeLatest(SAGA_LOAD_PRODUCTS, loadProductsSAGA),
    takeEvery(SAGA_ADD_CATEGORY, addCategory),
    takeEvery(SAGA_REMOVE_CATEGORY,  removeCategory)
  ]);
}
