// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getTerms, createTerm } from "../../../../core/services/coursesApi";

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

export const addTerm = createAsyncThunk(
  "courses_terms/addTerm",
  async (data) => {
    try {
      const response = await createTerm(data);
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

export const appInvoiceSlice = createSlice({
  name: "courses_terms",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getData.fulfilled, (state, action) => { 
      console.log(">", action.payload)
      state.allData = action.payload.allData;
    })
    .addCase(addTerm.fulfilled, (state, action) => {
      state.allData.push(action.payload)
    });
  },
});

export default appInvoiceSlice.reducer;
