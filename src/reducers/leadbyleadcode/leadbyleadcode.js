import * as actionTypes from '../../constants/actionTypes';
  
  const initialState = {
    userlead: null,
    isLoading: false,
    error: null,
  };
  
  const leadByLeadCodeReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_LEAD_BY_LEAD_CODE_REQUEST:
        case actionTypes.UPDATE_LEAD_REQUEST:
          case actionTypes.DELETE_LEAD_REQUEST:
            case actionTypes.RESTORE_LEAD_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case actionTypes.GET_LEAD_BY_LEAD_CODE_SUCCESS:
        case actionTypes.UPDATE_LEAD_SUCCESS:
          case actionTypes.RESTORE_LEAD_SUCCESS:
        return {
          ...state,
          userlead: action.payload,
          isLoading: false,
          error: null,
        };
      case actionTypes.GET_LEAD_BY_LEAD_CODE_FAILURE:
        case actionTypes.UPDATE_LEAD_FAILURE:
          case actionTypes.RESTORE_LEAD_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
        case actionTypes.DELETE_LEAD_SUCCESS: 
        return {
          ...state,
          userlead: null, 
          isLoading: false,
          error: null,
        };
      case actionTypes.DELETE_LEAD_FAILURE: 
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default leadByLeadCodeReducer ;
  