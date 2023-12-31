import { ADD_CATEGORY, GET_CATEGORY ,DELETE_CATEGORY} from "constants/actionTypes";
import * as api from "api/index.js";

export const getCategories = () => async (dispatch) => {
    try {
        const { data } = await api.getCategory();
        dispatch({ type: GET_CATEGORY, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addCategory = (category) => async (dispatch) => {
    try {
        const { data } = await api.addCategory(category);
        dispatch({ type: ADD_CATEGORY, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCategory = (categoryCode) => async (dispatch) => {
    try {
      await api.deleteCategory(categoryCode);
      dispatch({ type: DELETE_CATEGORY, payload: categoryCode });
    } catch (error) {
      console.log(error);
    }
  };