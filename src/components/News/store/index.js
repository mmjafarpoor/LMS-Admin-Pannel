// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getNews } from "../../../core/services/newsApi";

export const getData = createAsyncThunk(
  "news/getData",
  async () => {
    try {console.log("yoooooooooo");
      const response = await getNews();
      
      return {
        data: response.data.news,
        allData: response.data.news,
        total: response.data.totalCount
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const appInvoiceSlice = createSlice({
  name: "news",
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
