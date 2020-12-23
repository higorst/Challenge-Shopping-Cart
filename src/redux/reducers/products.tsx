import {
    LOAD_PRODUCTS,
    LOAD_CATEGORIES
} from '../Types'

const initialState = {
    products: [],
    categories: [],
};

const products = (state: any, action: any) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            // console.log('[REDUCER] reducer products')
            // return Object.assign({}, state, action.payload.products);
            return { ...state, products: action.payload.products };
        case LOAD_CATEGORIES:
            return { ...state, categories: action.payload.categories };
        default:
            // console.log('[REDUCER] reducer initial state')
            // return Object.assign({}, state);
            return state ? state : initialState;
    }
};

export default products;
