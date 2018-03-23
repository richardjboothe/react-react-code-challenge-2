import types from './types';

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
  addEmployer,
  addEmployee
};