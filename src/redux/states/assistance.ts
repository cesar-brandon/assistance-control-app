import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../models/localstorage";
import { getLocalStorage } from "../../utilities/localStorage.utility";

const emptyAssistance = {
  currentAssistance: null,
};

export const assistanceSlice = createSlice({
  name: "assistance",
  initialState: getLocalStorage(LocalStorageTypes.ASSISTANCE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.ASSISTANCE) as string)
    : emptyAssistance,
  reducers: {
    setAssistance: (state, action) => {
      const currentAssistance = state.currentAssistance || [];
      const result = {
        currentAssistance: [...currentAssistance, action.payload],
      };

      return result;
    },
  },
});

export const { setAssistance } = assistanceSlice.actions;
export default assistanceSlice.reducer;
