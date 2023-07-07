import { ADD_SUBJECT, DELETE_SUBJECT, GET_SUBJECT } from "constants/actionTypes";
import * as api from "api/index.js";

export const getSubjects = () => async (dispatch) => {
    try {
        const { data } = await api.getSubject();
        dispatch({ type: GET_SUBJECT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addSubject = (subject) => async (dispatch) => {
    try {
        const { data } = await api.addSubject(subject);
        dispatch({ type: ADD_SUBJECT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteSubject = (topicCode) => async (dispatch) => {
    try {
      await api.deleteSubject(topicCode);
      dispatch({ type: DELETE_SUBJECT, payload: topicCode });
    } catch (error) {
      console.log(error);
    }
  };