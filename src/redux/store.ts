import { configureStore } from "@reduxjs/toolkit";
import { IEmployee } from "../models/employee";
import employeeSlice from "./states/employee";

export interface AppStore {
  employee: IEmployee;
}

export default configureStore<AppStore>({
  reducer: {
    employee: employeeSlice,
  },
});
