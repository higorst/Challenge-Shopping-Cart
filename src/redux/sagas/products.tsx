import { call, put } from "redux-saga/effects";

import api from '../../services/api';

import { LOAD_PRODUCTS, LOAD_CATEGORIES } from '../Types'

function findCategories(products: any[]){
  let categories: string[] = []
  for(const product of products){
      if (!categories.some(item => item === product.category)){
          categories.push(product.category)
      }
  }
  return categories
}

export function* loadProductsSAGA() {
  // console.log('call api get')
  const response = yield call(api.get, '/products/');

  yield put({type: LOAD_PRODUCTS, payload: { products: response.data} })

  yield put({type: LOAD_CATEGORIES, payload: { categories: findCategories(response.data)} })
}
