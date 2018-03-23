import types from './types';

function userAction(state, action) {
    // console.log(action.type, types);
    switch (action.type) {
        case types.ADD_EMPLOYEE:
            let employees = [];
            if (!!state.employees) {
                employees = [...state.employees]
            }
            employees = [...employees, action.info];
            state = { ...state, employees };
            break;
        case types.ADD_EMPLOYER:
            let employers = [];
            if (!!state.employers) {
                employers = [...state.employers]
            }
            employers = [...employers, action.info];
            state = { ...state, employers };
            break;
        case types.FETCH_EMPLOYEES:
            return state.employees;
            break;
        default:
            state.employees = [];
            state.employers = [];
            break;
    }
    return {
        ...state
    }
}

function addEmployee(state, action) {
    return {
        ...state
    }
}

export default function companies(state = {}, action) {
    return userAction(state, action)
}