import types from './types';

function incrementBy1() {
  return {
    type: types.INCREMENT_NUMBER,
  }
}

function decrementBy1() {
  return {
    type: types.DECREMENT_NUMBER,
  }
}

function resetNumberToZero() {
  return {
    type: types.RESET_TO_ZERO,
  }
}

function addEmployer(info) {
  return {
    type: types.ADD_EMPLOYER, info
  }
}

function addEmployee(info) {
  return {
    type: types.ADD_EMPLOYEE, info
  }
}

export default {
  incrementBy1,
  decrementBy1,
  resetNumberToZero,
  addEmployer,
  addEmployee
};