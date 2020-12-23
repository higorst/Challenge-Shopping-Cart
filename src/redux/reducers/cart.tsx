import {
    ADD_ITEM_CART, 
    REMOVE_ITEM_CART,
    UPDATE_ITEM_CART,
} from '../Types'

const initialState = {
    items: [],
    amount: 0,
};

const cart = (state: any, action: any) => {
    switch (action.type) {
        case ADD_ITEM_CART:
            let index = state.items.map(function(item: any) {return item.id; }).indexOf(action.payload.item.id);
            if (index > -1) {
                return state ? state : initialState;
            } else {
                console.log('add item on cart', index)
                return { 
                    ...state, 
                    items: [...state.items, action.payload.item],
                    amount: state.amount ? state.amount + 1 : 1
                };
            }
        case REMOVE_ITEM_CART:
            index = state.items.map(function(item: any) {return item.id; }).indexOf(action.payload.item.id);
            if (index > -1) {
                return { 
                    ...state, 
                    items: state.items.splice(index + 1, 1),
                    amount: state.amount - 1
                };
            } else {
                return state ? state : initialState;
            }

        default:
            return state ? state : initialState;
    }
};

export default cart;
