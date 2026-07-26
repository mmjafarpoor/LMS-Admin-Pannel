// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getNews, activeNewsById } from "../../../../core/services/newsApi";

export const getData = createAsyncThunk(
  "news/getData",
  async (params) => {
    try {console.log("yoooooooooo");
      const response = await getNews({
        rowsOfPage: params.rowsOfPage,
        pageNumber: params.page,
      });
      
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

export const activeNews = createAsyncThunk(
  "news/activeNews",
  async ({newsId, active}, { rejectWithValue }) => {
    try {
      return await activeNewsById(newsId, active);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
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
    builder
    .addCase(getData.fulfilled, (state, action) => { 
      state.data = action.payload.data;
      state.allData = action.payload.allData;
      state.total = action.payload.total;   
    })
    .addCase(activeNews.fulfilled, (state, action) => {
      const news = state.allData.find(
        item => item.id === action.payload
      )
      if (news) {
        news.active = true;
      }
    })
  },
});

export default appInvoiceSlice.reducer;
