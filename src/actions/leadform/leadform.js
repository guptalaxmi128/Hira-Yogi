import { ADD_LEAD_FORM_USER } from 'constants/actionTypes';
import * as api from 'api';


export const addLeadform = (user) => async (dispatch) => {
    try {
        console.log(user);
        const { data } = await api.addLeadform(user);
        dispatch({ type: ADD_LEAD_FORM_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};