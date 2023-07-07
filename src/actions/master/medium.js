import { ADD_MEDIUM, DELETE_MEDIUM, GET_MEDIUM } from "constants/actionTypes";
import * as api from "api/index.js";

export const getMediums = () => async (dispatch) => {
    try {
        const { data } = await api.getMedium();
        dispatch({ type: GET_MEDIUM, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addMedium = (medium) => async (dispatch) => {
    try {
        const { data } = await api.addMedium(medium);
        dispatch({ type: ADD_MEDIUM, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMedium = (mediumCode) => async (dispatch) => {
    try {
      await api.deleteMedium(mediumCode);
      dispatch({ type: DELETE_MEDIUM, payload: mediumCode });
    } catch (error) {
      console.log(error);
    }
  };