import { ADD_ASSIGN_LEAD } from 'constants/actionTypes';
import * as api from 'api';


export const addAssignLead = (assignlead) => async (dispatch) => {
    try {
        // console.log(user);
        const { data } = await api.addAssignLead(assignlead);
        dispatch({ type: ADD_ASSIGN_LEAD, payload: data });
    } catch (error) {
        console.log(error);
    }
};