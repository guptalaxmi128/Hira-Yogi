import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    employee: [],
    state: 'idle', // idle, loading, success, error
    error: null
};

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_REGISTER_EMPLOYEE:
            return {
                ...state,
                employee: action.payload.employee
            };
        case actionTypes.GET_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
            };
        default:
            return state;
    }
};

export default employeeReducer;