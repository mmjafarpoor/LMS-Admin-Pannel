// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getCoursesPayList } from "../../../../../core/services/coursesApi";

export const getCoursesPayData = createAsyncThunk(
  "courses_pay/getCoursesPayData",
  async () => {
    try {
      const response = await getCoursesPayList();
      console.log("--------", response.data);
      return {
        cousesPayAllData: response.data,
      };
    } catch (error) {
      console.log("error", error);
      
    }
  },
);

export const reservedCoursesSlice = createSlice({
  name: "reserved_courses",
  initialState: {
    cousesPayAllData: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoursesPayData.fulfilled, (state, action) => {
        state.cousesPayAllData = action.payload.cousesPayAllData;
      })
  },
});


export default reservedCoursesSlice.reducer;
