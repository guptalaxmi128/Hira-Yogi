import { ADD_REGISTER_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEE,RESTORE_EMPLOYEE,GET_DELETE_EMPLOYEE } from 'constants/actionTypes';
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
        console.log(data)
        dispatch({ type: GET_EMPLOYEE, payload: data });
    } catch (error) {
        console.log(error);
    }
};


export const deleteEmployee = (employeesCode) => async (dispatch) => {
    try {
      await api.deleteEmployee(employeesCode);
      dispatch({ type: DELETE_EMPLOYEE, payload: employeesCode });
    } catch (error) {
      console.log(error);
    }
  };

  export const restoreEmployee = (employeesCode) => async (dispatch) => {
    try {
      await api.restoreEmployee(employeesCode);
      dispatch({ type: RESTORE_EMPLOYEE, payload: employeesCode });
    } catch (error) {
      console.log(error);
    }
  };

  export const getDeleteEmployee = () => async (dispatch) => {
  
    try {
        const { data } = await api.getDeleteEmployee();
        console.log(data)
        dispatch({ type: GET_DELETE_EMPLOYEE, payload: data });
    } catch (error) {
        console.log(error);
    }
};