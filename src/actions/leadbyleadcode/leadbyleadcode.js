import {
    GET_LEAD_BY_LEAD_CODE_REQUEST,
    GET_LEAD_BY_LEAD_CODE_SUCCESS,
    GET_LEAD_BY_LEAD_CODE_FAILURE,
    UPDATE_LEAD_FAILURE,
    UPDATE_LEAD_SUCCESS,
    UPDATE_LEAD_REQUEST,
    DELETE_LEAD_FAILURE,
    DELETE_LEAD_SUCCESS,
    DELETE_LEAD_REQUEST,
    RESTORE_LEAD_FAILURE,
    RESTORE_LEAD_SUCCESS,
    RESTORE_LEAD_REQUEST
} from 'constants/actionTypes';
import * as api from 'api';

export const getLeadByLeadCode = (leadCode) => {
    return (dispatch) => {
        dispatch({ type: GET_LEAD_BY_LEAD_CODE_REQUEST });

        return api
            .getLeadByLeadCode(leadCode)
            .then((response) => {
                const data = response.data;
                dispatch({
                    type: GET_LEAD_BY_LEAD_CODE_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_LEAD_BY_LEAD_CODE_FAILURE,
                    payload: error.message
                });
            });
    };
};

export const updateLead = (updatedData) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_LEAD_REQUEST });

        return api
            .updateLead(updatedData)
            .then((response) => {
                const data = response.data;
                dispatch({
                    type: UPDATE_LEAD_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_LEAD_FAILURE,
                    payload: error.message
                });
            });
    };
};

export const deleteLead = (leadCode) => {
  return (dispatch) => {
    dispatch({ type: DELETE_LEAD_REQUEST });

    return api
      .deleteLead(leadCode)
      .then((response) => {
        const data = response.data;
        dispatch({
          type: DELETE_LEAD_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_LEAD_FAILURE,
          payload: error.message,
        });
      });
  };
};


export const restoreLead = (leadCode) => {
    return (dispatch) => {
      dispatch({ type: RESTORE_LEAD_REQUEST });
  
      return api
        .restoreLead(leadCode) 
        .then((response) => {
          const data = response.data;
          dispatch({
            type: RESTORE_LEAD_SUCCESS,
            payload: data,
          });
        })
        .catch((error) => {
          dispatch({
            type: RESTORE_LEAD_FAILURE,
            payload: error.message,
          });
        });
    };
  };

 

  
  
  
  
  
  







