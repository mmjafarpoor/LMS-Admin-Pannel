// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getCourseDetails } from "../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "course_details/getData",
  async (params) => {
    try {
      const response = await getCourseDetails(params);
      console.log("response:", response.data);
      
      return {
        allData: response.data,
      };
    } catch (error) {
      console.log(error);
    }
  },
);


export const appInvoiceSlice = createSlice({
  name: "course_details",
  initialState: {
    allData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.allData = action.payload.allData;
    });
  },
});

export default appInvoiceSlice.reducer;
