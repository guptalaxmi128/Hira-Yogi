import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    user: [],
    deletedUser:[],
    state: 'idle', // idle, loading, success, error
    error: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_REGISTER_USER:
            case actionTypes.RESTORE_USER:
            return {
                ...state,
                user: action.payload.user
            };
        case actionTypes.GET_REGISTER_USER:
            return {
                ...state,
                user: action.payload,
            };
            case actionTypes.GET_DELETE_USER:
                return {
                    ...state,
                    deletedUser: action.payload,
                };
            case actionTypes.DELETE_REGISTER_USER:
                const updatedUser = [];
                for (let i = 0; i < state.user.length; i++) {
                  if (state.user[i].code !== action.payload) {
                    updatedUser.push(state.user[i]);
                  }
                }
                return {
                  ...state,
                  user: updatedUser,
                };
        default:
            return state;
    }
};

export default userReducer;