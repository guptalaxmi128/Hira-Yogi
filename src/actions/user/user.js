import { ADD_REGISTER_USER,GET_REGISTER_USER,DELETE_REGISTER_USER, GET_DELETE_USER, RESTORE_USER } from 'constants/actionTypes';
import * as api from 'api';


export const addUser = (user) => async (dispatch) => {
    try {
        // console.log(user);
        const { data } = await api.addUser(user);
        dispatch({ type: ADD_REGISTER_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getUser = () => async (dispatch) => {
  
    try {
        const { data } = await api.getUser();
        // console.log(data)
        dispatch({ type: GET_REGISTER_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};


export const deleteUser = (userCode) => async (dispatch) => {
    try {
      await api.deleteUser(userCode);
      dispatch({ type: DELETE_REGISTER_USER, payload: userCode });
    } catch (error) {
      console.log(error);
    }
  };

  export const getDeleteUser = () => async (dispatch) => {
  
    try {
        const { data } = await api.getDeleteUser();
        console.log(data)
        dispatch({ type: GET_DELETE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const restoreUser = (userCode) => async (dispatch) => {
    try {
      await api.restoreUser(userCode);
      dispatch({ type: RESTORE_USER, payload: userCode });
    } catch (error) {
      console.log(error);
    }
  };