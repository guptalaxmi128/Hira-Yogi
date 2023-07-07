import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    subjects: [],
    state: 'idle',
    error: null,
};

const subjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SUBJECT:
            return {
                ...state,
                subjects: action.payload,
            };
        case actionTypes.ADD_SUBJECT:
            return {
                ...state,
                subjects: [...state.subjects, action.payload],
            };
            case actionTypes.DELETE_SUBJECT:
                const updatedSubject = [];
                for (let i = 0; i < state.subjects.length; i++) {
                  if (state.subjects[i].code !== action.payload) {
                    updatedSubject.push(state.subjects[i]);
                  }
                }
                return {
                  ...state,
                  subjects: updatedSubject,
                };
        default:
            return state;
    }
}

export default subjectReducer;