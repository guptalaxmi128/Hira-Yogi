import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    lead: [],
    state: 'idle', // idle, loading, success, error
    error: null
};

export const leadFromReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LEAD_FORM_USER:
            return {
                ...state,
                lead: action.payload.lead
            };
        // case actionTypes.GET_REGISTER_USER:
        //     return {
        //         ...state,
        //         user: action.payload,
        //     };
        default:
            return state;
    }
};

export default leadFromReducer;