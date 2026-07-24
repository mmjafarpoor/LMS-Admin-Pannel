// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getTechnologies, createTechnology , editTechnology} from "../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "courses_technologies/getData",
  async () => {
    try {
      const response = await getTechnologies();
      
      return {
        allData: response.data,
      };

    } catch (error) {
      console.log(error);
    }
  },
);

export const addTechnology = createAsyncThunk(
  "courses_technologies/addTechnology",
  async (data) => {
    try {
      const response = await createTechnology(data);
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTechnology = createAsyncThunk(
  "courses_technologies/updateTechnology",
  async (data, { rejectWithValue }) => {
    try {
      const response = await editTechnology(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const appInvoiceSlice = createSlice({
  name: "courses_technologies",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => { 
        state.allData = action.payload.allData;
      })
      .addCase(addTechnology.fulfilled, (state, action) => {
        state.allData.push(action.payload)
      });

  },
});

export default appInvoiceSlice.reducer;
