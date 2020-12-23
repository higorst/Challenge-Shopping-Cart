import { call, put } from "redux-saga/effects";

import { ADD_CATEGORY, REMOVE_CATEGORY } from '../Types'

export function* addCategory({ category }: { category: string }) {
    // console.log('saga add category', category)
    yield put({ type: ADD_CATEGORY, payload: { category } })
}

export function* removeCategory({ category }: { category: string }) {
    // console.log('saga remove category')
    yield put({ type: REMOVE_CATEGORY, payload: { category } })
}
