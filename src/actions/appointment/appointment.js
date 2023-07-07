import { ADD_APPOINTMENT } from 'constants/actionTypes';
import * as api from 'api';


export const addAppointmment = (appointment) => async (dispatch) => {
    try {
        console.log(appointment);
        const { data } = await api.addAppointmment(appointment);
        dispatch({ type: ADD_APPOINTMENT, payload: data });
    } catch (error) {
        console.log(error);
    }
};