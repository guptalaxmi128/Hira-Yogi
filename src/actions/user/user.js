import { ADD_REGISTER_USER,GET_REGISTER_USER } from 'constants/actionTypes';
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
