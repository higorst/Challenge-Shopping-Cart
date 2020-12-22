import { call, put } from "redux-saga/effects";

import api from '../../services/api';

import { loadProducts } from '../Actions'

import { LOAD_PRODUCTS } from '../Types'

export function* loadProductsSAGA() {
  console.log('call api get')
  const response = yield call(api.get, '/products/');

  // yield put(loadProducts(response.data));

  yield put({type: LOAD_PRODUCTS, payload: { products: response.data} })
}
