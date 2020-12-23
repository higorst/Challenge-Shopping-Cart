import {
    LOAD_PRODUCTS,
} from '../Types'

const initialState = {
    products: [],
};

const products = (state: any, action: any) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            // console.log('[REDUCER] reducer products')
            // return Object.assign({}, state, action.payload.products);
            return { ...state, products: action.payload.products };
        default:
            // console.log('[REDUCER] reducer initial state')
            // return Object.assign({}, state);
            return state ? state : initialState;
    }
};

export default products;
