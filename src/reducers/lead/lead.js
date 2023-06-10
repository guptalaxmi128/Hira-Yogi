import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    lead: [],
    state: 'idle', // idle, loading, success, error
    error: null
};

export const leadReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LEAD:
            return {
                ...state,
                lead: action.payload.lead
            };
        case actionTypes.GET_LEAD:
            return {
                ...state,
                lead: action.payload
            };
        default:
            return state;
    }
};

export default leadReducer;