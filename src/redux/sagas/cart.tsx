import { call, put } from "redux-saga/effects";

import { 
    ADD_ITEM_CART, 
    REMOVE_ITEM_CART,
    UPDATE_ITEM_CART,
} from '../Types'

interface ProductInterface {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    amount: number
}

export function* addItem({ item }: { item: ProductInterface }) {
    yield put({ type: ADD_ITEM_CART, payload: { item } })
}
export function* deleteItem({ item }: { item: ProductInterface }) {
    yield put({ type: REMOVE_ITEM_CART, payload: { item } })
}
export function* updateItem({ item }: { item: ProductInterface }) {
    yield put({ type: UPDATE_ITEM_CART, payload: { item } })
}