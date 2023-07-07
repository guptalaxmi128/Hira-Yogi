import * as actionTypes from "constants/actionTypes";

const initialState = {
    languages: [],
    state: "idle",
    error: null,
};

export default function languageReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_LANGUAGE:
            return {
                ...state,
                languages: action.payload,
            };
        case actionTypes.ADD_LANGUAGE:
            return {
                ...state,
                languages: [...state.languages, action.payload],
            };
            case actionTypes.DELETE_LANGUAGE:
                const updatedLanguage = [];
                for (let i = 0; i < state.languages.length; i++) {
                  if (state.languages[i].code !== action.payload) {
                    updatedLanguage.push(state.languages[i]);
                  }
                }
                return {
                  ...state,
                  languages: updatedLanguage,
                };
        default:
            return state;
    }
}

    