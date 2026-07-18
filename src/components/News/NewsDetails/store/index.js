// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getNewsDetails } from "../../../../core/services/newsApi";

export const getData = createAsyncThunk(
  "news_details/getData",
  async (params) => {
    try {
      const response = await getNewsDetails(params);
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
  name: "news_details",
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
