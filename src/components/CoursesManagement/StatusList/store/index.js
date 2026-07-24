// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getStatus, createStatus , editStatus} from "../../../../core/services/coursesApi";


export const getData = createAsyncThunk(
  "courses_status/getData",
  async () => {
    try {
      const response = await getStatus();
      
      return {
        allData: response.data,
      };

    } catch (error) {
      console.log(error);
    }
  },
);

export const addStatus = createAsyncThunk(
  "courses_status/addStatus",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createStatus(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateStatus = createAsyncThunk(
  "courses_status/updateStatus",
  async (data, { rejectWithValue }) => {
    try {
      const response = await editStatus(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const appInvoiceSlice = createSlice({
  name: "courses_status",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => { 
        state.allData = action.payload.allData;
      })
      .addCase(addStatus.fulfilled, (state, action) => {
        state.allData.push(action.payload)
      });
  },
});

export default appInvoiceSlice.reducer;
