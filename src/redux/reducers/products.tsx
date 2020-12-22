import { InitialState } from '@react-navigation/native';
import { LOAD_PRODUCTS } from '../Types'

const initialState = {
    products: [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          },
    ]
};

const products = (state: any, action: any) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            console.log('reducer products')
            // return Object.assign({}, state, action.payload.products);
            return { ...state, products: action.payload.products };
        default:
            console.log('reducer initial state')
            // return Object.assign({}, state);
            return state ? state : initialState;
    }
};

export default products;