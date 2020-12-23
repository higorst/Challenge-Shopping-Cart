import {
    ADD_CATEGORY,
    REMOVE_CATEGORY
} from '../Types'

const initialState = {
    categories: [],
};

const products = (state: any, action: any) => {
    switch (action.type) {
        case ADD_CATEGORY:
            let index = state.categories.indexOf(action.payload.category)
            if (index > -1) {
                return state ? state : initialState;
            } else {
                return { ...state, categories: [...state.categories, action.payload.category] };
            }
        case REMOVE_CATEGORY:
            index = state.categories.indexOf(action.payload.category)
            if (index > -1) {
                let categories = state.categories.filter((item: any) => item !== action.payload.category)
                return { ...state, categories };
            } else {
                return state ? state : initialState;
            }

        default:
            return state ? state : initialState;
    }
};

export default products;
