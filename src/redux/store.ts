import { configureStore } from "@reduxjs/toolkit";
import { IAssistanceState } from "../models/assistance";
import { IEmptyStudentState } from "../models/student";
import assistanceSlice from "./states/assistance";
import studentSlice from "./states/student";

export interface IAppStore {
  assistance: IAssistanceState;
  student: IEmptyStudentState;
}

export default configureStore<IAppStore>({
  reducer: {
    assistance: assistanceSlice,
    student: studentSlice,
  },
});
