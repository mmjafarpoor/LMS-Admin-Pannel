// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getComments, deleteCourseComment, acceptCourseComment } from "../../../core/services/commentsApi";

export const getData = createAsyncThunk(
  "comments/getData",
  async (params) => {
    try {
      const response = await getComments({
        pageNumber: params.page ?? 1,
        rowsOfPage: params.perPage ?? 10,
        accept: params.status ?? ""
      });

      return {
        allData: response.data.comments,
        total: response.data.totalCount,
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const acceptComment = createAsyncThunk(
  "comments/acceptCourseComment",
  async (commentId, { rejectWithValue }) => {
    try {
      const response = await acceptCourseComment(commentId);
      return commentId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteCourseComment",
  async (commentId, { rejectWithValue }) => {
    try {
      const response = await deleteCourseComment(commentId);
      return commentId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const appInvoiceSlice = createSlice({
  name: "comments",
  initialState: {
    allData: [],
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getData.fulfilled, (state, action) => {
      state.allData = action.payload.allData;
      state.total = action.payload.total;
    })
    .addCase(acceptComment.fulfilled, (state, action) => {
      state.allData = state.allData.filter(
        (comment) => comment.commentId !== action.payload
      )
    })
    .addCase(deleteComment.fulfilled, (state, action) => {
      state.allData = state.allData.filter(
        (comment) => comment.commentId !== action.payload
      )
    })
  },
});

export default appInvoiceSlice.reducer;
