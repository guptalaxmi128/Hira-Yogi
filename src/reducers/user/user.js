import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    user: [],
    state: 'idle', // idle, loading, success, error
    error: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_REGISTER_USER:
            return {
                ...state,
                user: action.payload.user
            };
        case actionTypes.GET_REGISTER_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;