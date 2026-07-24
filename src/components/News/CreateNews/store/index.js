// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getNewsCategories, createNews } from "../../../../core/services/newsApi";

export const getData = createAsyncThunk(
  "create_news/getData",
  async () => {
    try {
      const response = await getNewsCategories();
      console.log("response:", response.data);
      
      return {
        allData: response.data,
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const addNews = createAsyncThunk(
  "create_news/addNews",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createNews(data);
      console.log("data: ", data)
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)


export const appInvoiceSlice = createSlice({
  name: "create_news",
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
