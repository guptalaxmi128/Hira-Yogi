import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    levels: [],
    state: 'idle',
    error: null,
};

const levelReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LEVEL:
            return {
                ...state,
                levels: action.payload,
            };
        case actionTypes.ADD_LEVEL:
            return {
                ...state,
                levels: [...state.levels, action.payload],
            };
            case actionTypes.DELETE_LEVEL:
                const updatedLevel = [];
                for (let i = 0; i < state.levels.length; i++) {
                  if (state.levels[i].code !== action.payload) {
                    updatedLevel.push(state.levels[i]);
                  }
                }
                return {
                  ...state,
                  levels: updatedLevel,
                };
        default:
            return state;
    }
}

export default levelReducer;