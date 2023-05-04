import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    data: []
  },
  reducers: {
    Root: (state, action) => {
        state.data.push(action.payload);
    }
  }
})

export const rootSliceAction = rootSlice.actions
export const rootSliceReducer =rootSlice.reducer