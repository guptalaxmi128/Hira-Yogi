import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    appointment: [],
    state: 'idle', // idle, loading, success, error
    error: null
};

export const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_APPOINTMENT:
            return {
                ...state,
                appointment: action.payload.appointment
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

export default appointmentReducer;