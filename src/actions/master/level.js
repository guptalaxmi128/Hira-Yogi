import { ADD_LEVEL, DELETE_LEVEL, GET_LEVEL } from "constants/actionTypes";
import * as api from "api/index.js";

export const getLevels = () => async (dispatch) => {
    try {
        const { data } = await api.getLevel();
        dispatch({ type: GET_LEVEL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addLevel = (level) => async (dispatch) => {
    try {
        const { data } = await api.addLevel(level);
        dispatch({ type: ADD_LEVEL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteLevel = (levelCode) => async (dispatch) => {
    try {
      await api.deleteLevel(levelCode);
      dispatch({ type: DELETE_LEVEL, payload: levelCode });
    } catch (error) {
      console.log(error);
    }
  };