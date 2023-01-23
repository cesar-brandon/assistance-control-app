import { configureStore } from "@reduxjs/toolkit";
import { IAssistanceState } from "../models/assistance";
import assistanceSlice from "./states/assistance";
import studentSlice from "./states/student";

export interface IAppStore {
  assistance: IAssistanceState;
  student: [];
}

export default configureStore<IAppStore>({
  reducer: {
    assistance: assistanceSlice,
    student: studentSlice,
  },
});
