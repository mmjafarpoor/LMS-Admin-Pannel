// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getCourses } from "../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "courses/getData",
  async (params) => {
    try {console.log("yoooooooooo");
      const response = await getCourses({
        pageNumber: params.page,
        rowOfPage: params.perPage
        }
      );
      
      return {
        data: response.data.courseFilterDtos,
        allData: response.data.courseFilterDtos,
        total: response.data.totalCount
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const appInvoiceSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    allData: [],
    total: 0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => { 
      state.data = action.payload.data;
      state.allData = action.payload.allData;
      state.total = action.payload.total;   
    });
  },
});

export default appInvoiceSlice.reducer;
