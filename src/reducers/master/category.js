import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    categories: [],
    state: 'idle',
    error: null,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY:
            return {
                ...state,
                categories: action.payload,
            };
        case actionTypes.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
            case actionTypes.DELETE_CATEGORY:
                const updatedCategory = [];
                for (let i = 0; i < state.categories.length; i++) {
                  if (state.categories[i].code !== action.payload) {
                    updatedCategory.push(state.categories[i]);
                  }
                }
                return {
                  ...state,
                  categories: updatedCategory,
                };
        default:
            return state;
    }
}

export default categoryReducer;


