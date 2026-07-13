// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getTerms } from "../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "courses_terms/getData",
  async () => {
    try {
      const response = await getTerms();
      console.log("data", response.data);
      return {
        allData: response.data,
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const appInvoiceSlice = createSlice({
  name: "courses_terms",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => { 
      console.log(">", action.payload)
      state.allData = action.payload.allData;
    });
  },
});

export default appInvoiceSlice.reducer;
