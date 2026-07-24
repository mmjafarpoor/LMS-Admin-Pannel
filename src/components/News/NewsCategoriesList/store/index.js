// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getNewsCategories , editNewsCategories} from "../../../../core/services/newsApi";

export const getData = createAsyncThunk(
  "news_categories/getData",
  async () => {
    try {
      const response = await getNewsCategories();
      
      return {
        allData: response.data,
      };

    } catch (error) {
      console.log(error);
    }
  },
);

export const updateNewsCategories = createAsyncThunk(
  "news_categories/NewsCategories",
  async (data, { rejectWithValue }) => {
    try {
      const response = await editNewsCategories(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const appInvoiceSlice = createSlice({
  name: "news_categories",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => { 
      state.allData = action.payload.allData;
    });
  },
});

export default appInvoiceSlice.reducer;
