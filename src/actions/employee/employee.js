import { ADD_REGISTER_EMPLOYEE, GET_EMPLOYEE } from 'constants/actionTypes';
import * as api from 'api';


export const addEmployee = (employee) => async (dispatch) => {
    try {
        // console.log(user);
        const { data } = await api.addEmployee(employee);
        dispatch({ type: ADD_REGISTER_EMPLOYEE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getEmployee = () => async (dispatch) => {
  
    try {
        const { data } = await api.getEmployee();
        // console.log(data)
        dispatch({ type: GET_EMPLOYEE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
