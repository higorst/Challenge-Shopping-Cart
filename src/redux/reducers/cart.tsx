import {
    ADD_ITEM_CART,
    REMOVE_ITEM_CART,
    UPDATE_ITEM_CART,
    FINISH_BUY,
} from '../Types'

const initialState = {
    items: [],
    amount: 0,
};

const cart = (state: any, action: any) => {
    switch (action.type) {
        case ADD_ITEM_CART:
            let index = state.items.map(function (item: any) { return item.id; }).indexOf(action.payload.item.id);
            if (index > -1) {
                return state ? state : initialState;
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload.item],
                    amount: state.amount ? state.amount + 1 : 1
                };
            }
        case REMOVE_ITEM_CART:
            index = state.items.map(function (item: any) { return item.id; }).indexOf(action.payload.item.id);
            if (index > -1) {
                let items = state.items.filter((item: any) => item.id !== action.payload.item.id)
                return {
                    ...state,
                    items,
                    amount: state.amount - 1
                };
            } else {
                return state ? state : initialState;
            }

        case UPDATE_ITEM_CART:
            index = state.items.map(function (item: any) { return item.id; }).indexOf(action.payload.item.id);
            if (index > -1) {
                let items = state.items.filter((item: any) => {
                    if(item.id === action.payload.item.id){
                        item.amount = action.payload.item.amount
                    }
                    return item
                })
                return {
                    ...state,
                    items,
                };
            } else {
                return state ? state : initialState;
            }
        case FINISH_BUY:
            return initialState
        default:
            return state ? state : initialState;
    }
};

export default cart;
