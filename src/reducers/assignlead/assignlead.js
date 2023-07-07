import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    assignlead: [],
    state: 'idle', // idle, loading, success, error
    error: null
};

export const assignLeadReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ASSIGN_LEAD:
            return {
                ...state,
                assignlead: action.payload.assignlead
            };
        // case actionTypes.GET_EMPLOYEE:
        //     return {
        //         ...state,
        //         employee: action.payload,
        //     };
        default:
            return state;
    }
};

export default assignLeadReducer;