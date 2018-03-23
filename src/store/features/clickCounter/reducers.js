import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
  number: 0,
  employee: {},
  employer: {},
};

const incrementNumberHandler = (state, payload) => {
  const number = state.number + 1
  return {
    ...state,
    number
  }
};

const decrementNumberHandler = (state, payload) => {
  const number = state.number - 1
  return {
    ...state,
    number
  }
};

const resetNumberHandler = (state, payload) => {
  return {
    ...state,
    number: 0
  }
}

const addEmployerHandler = (state, action) => {
  console.log('Employer state', state);
  console.log('Employer action', action);
  return {
    ...state,
    number: 0
  }
}

const addEmployeeHandler = (state, action) => {
  console.log('Employee state', state);
  console.log('Employee pay', action);
  return {
    ...state,
    number: 0
  }
}

const actionMap = {
  [types.INCREMENT_NUMBER]: incrementNumberHandler,
  [types.DECREMENT_NUMBER]: decrementNumberHandler,
  [types.RESET_TO_ZERO]: resetNumberHandler,
  [types.ADD_EMPLOYER]: addEmployerHandler,
  [types.ADD_EMPLOYEE]: addEmployeeHandler
};

export default createDefaultReducer(actionMap, initialState)