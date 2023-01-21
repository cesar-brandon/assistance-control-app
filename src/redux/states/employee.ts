import { createSlice } from "@reduxjs/toolkit";
import { IEmployee } from "../../models/employee";
import { LocalStorageTypes } from "../../models/localstorage";
import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "../../utilities/localStorage.utility";

const initialState: IEmployee = {
  id: 0,
  name: "",
  lastname: "",
  dni: "",
  email: "",
  password: "",
};

const employeeSlice = createSlice({
  name: "employee",
  initialState: getLocalStorage(LocalStorageTypes.EMPLOYEE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.EMPLOYEE) as string)
    : initialState,
  reducers: {
    addEmployee: (state, action) => {
      setLocalStorage(LocalStorageTypes.EMPLOYEE, action.payload);
      return action.payload;
    },
    updateEmployee: (state, action) => {
      const result = { ...state, ...action.payload };
      setLocalStorage(LocalStorageTypes.EMPLOYEE, result);
      return result;
    },
    resetEmployee: () => {
      clearLocalStorage(LocalStorageTypes.EMPLOYEE);
      return initialState;
    },
  },
});

export const { addEmployee, updateEmployee, resetEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
