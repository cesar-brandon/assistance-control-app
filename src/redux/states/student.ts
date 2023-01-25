import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../models/localstorage";
import { IEmptyStudentState, IStudentState } from "../../models/student";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utilities/localStorage.utility";

const emptyStudent: IEmptyStudentState = {
  students: [],
  selectedStudent: null,
};

export const studentSlice = createSlice({
  name: "student",
  initialState: getLocalStorage(LocalStorageTypes.STUDENT)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.STUDENT) as string)
    : emptyStudent,
  reducers: {
    setStudents: (state, action) => {
      const result = {
        ...state,
        students: action.payload,
      };
      setLocalStorage(LocalStorageTypes.STUDENT, result);
      return result;
    },
    updateStatus: (state, action) => {
      const { id, status } = action.payload;

      const student = state.students.find(
        (student: IStudentState) => student.id === id
      );
      if (student) {
        student.status = status;
      }
      setLocalStorage(LocalStorageTypes.STUDENT, state.students);
      return state;
    },
    selectStudent: (state, action) => {
      const result = {
        ...state,
        selectedStudent: action.payload,
      };

      setLocalStorage(LocalStorageTypes.STUDENT, result);
      return result;
    },
  },
});

export const { setStudents, updateStatus, selectStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
