import { ADD_LEAD, GET_LEAD } from "constants/actionTypes";
import * as api from "api/index.js";

export const getLead = (query) => async (dispatch) => {
    try {
      const { data } = await api.getLead(query); 
      // console.log(data);
      dispatch({ type: GET_LEAD, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const addLead = (lead) => async (dispatch) => {
    try {
        const { data } = await api.addLead(lead);
        dispatch({ type: ADD_LEAD, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
