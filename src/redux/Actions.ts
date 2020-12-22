import {
    LOAD_PRODUCTS
} from './Types';

export const loadProducts = (products: any) => ({
    type: LOAD_PRODUCTS,
    payload: { products },
});