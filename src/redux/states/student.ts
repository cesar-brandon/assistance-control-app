import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../models/localstorage";
import { IStudentState } from "../../models/student";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utilities/localStorage.utility";

const emptyStudent: IStudentState[] = [];

export const studentSlice = createSlice({
  name: "student",
  initialState: getLocalStorage(LocalStorageTypes.STUDENT)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.STUDENT) as string)
    : emptyStudent,
  reducers: {
    setStudent: (state, action) => {
      setLocalStorage(LocalStorageTypes.STUDENT, state);
      return action.payload;
    },
    updateStatus: (state, action) => {
      const { id, status } = action.payload;

      const student = state.find((student: IStudentState) => student.id === id);
      if (student) {
        student.status = status;
      }
      setLocalStorage(LocalStorageTypes.STUDENT, state);
      return state;
    },
  },
});

export const { setStudent, updateStatus } = studentSlice.actions;
export default studentSlice.reducer;
