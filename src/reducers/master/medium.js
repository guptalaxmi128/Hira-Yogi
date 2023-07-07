import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    mediums: [],
    state: 'idle',
    error: null,
};

const mediumReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MEDIUM:
            return {
                ...state,
                mediums: action.payload,
            };
        case actionTypes.ADD_MEDIUM:
            return {
                ...state,
                mediums: [...state.mediums, action.payload],
            };
            case actionTypes.DELETE_MEDIUM:
                const updatedMedium = [];
                for (let i = 0; i < state.mediums.length; i++) {
                  if (state.mediums[i].code !== action.payload) {
                    updatedMedium.push(state.mediums[i]);
                  }
                }
                return {
                  ...state,
                  mediums: updatedMedium,
                };
        default:
            return state;
    }
}

export default mediumReducer;