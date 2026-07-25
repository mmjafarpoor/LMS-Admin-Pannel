// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getTimeLine, createTimeLine, editTimeLineStatus } from "../../../core/services/TimeLineApi";

export const getData = createAsyncThunk(
  "time_line/getData",
  async () => {
    try {
      const response = await getTimeLine();
      console.log("response", response.data)
      return {
        allData: response.data
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const addTimeLine = createAsyncThunk(
  "time_line/addTimeLine",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createTimeLine(data);
      console.log(data)
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTimeLineStatus = createAsyncThunk(
  "time_line/updateStatus",
  async ({id, active}, { rejectWithValue }) => {
    try {
      return await editTimeLineStatus(id, active);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const appInvoiceSlice = createSlice({
  name: "time_line",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.
    addCase(getData.fulfilled, (state, action) => { 
      state.allData = action.payload.allData;
    })
    // .addCase(addTimeLine.fulfilled, (state, action) => {
    //   state.allData.push(action.payload)
    // })
    .addCase(updateTimeLineStatus.fulfilled, (state, action) => {
      const course = state.allData.find(
        item => item.id === action.payload
      )
      // console.log("course:", course)
      if (course) {
        course.active = true;
      }
    })
  },
});

export default appInvoiceSlice.reducer;
