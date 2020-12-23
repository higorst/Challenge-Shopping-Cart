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
                // console.log('[REDUCER] already exists', action.payload.category)
                return state ? state : initialState;
            } else {
                // console.log('[REDUCER] add', action.payload.category)
                return { ...state, categories: [...state.categories, action.payload.category] };
            }
        case REMOVE_CATEGORY:
            index = state.categories.indexOf(action.payload.category)
            if (index > -1) {
                console.log('[REDUCER] remove',index, action.payload.category)
                return { ...state, categories: state.categories.splice(index + 1, 1) };
            } else {
                return state ? state : initialState;
            }

        default:
            return state ? state : initialState;
    }
};

export default products;
