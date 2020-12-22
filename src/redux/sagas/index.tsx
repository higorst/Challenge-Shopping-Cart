import { all, spawn, takeEvery, takeLatest } from "redux-saga/effects";

import { loadProductsSAGA } from './products'

import { SAGA_LOAD_PRODUCTS } from './types'

export default function* rootSaga() {
  console.log('root saga')
  yield all([
    takeLatest(SAGA_LOAD_PRODUCTS, loadProductsSAGA)
  ]);
}
