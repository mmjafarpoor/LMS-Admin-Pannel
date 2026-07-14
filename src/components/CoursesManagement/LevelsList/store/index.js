// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getLevels, createLevel } from "../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "courses_levels/getData",
  async () => {
    try {console.log("yoooooooooo");
      const response = await getLevels();
      
      return {
        allData: response.data,
      };

    } catch (error) {
      console.log(error);
    }
  },
);

export const addLevel = createAsyncThunk(
  "courses_levels/addLevel",
  async (data) => {
    try {
      const response = await createLevel(data);
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

export const appInvoiceSlice = createSlice({
  name: "courses_levels",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getData.fulfilled, (state, action) => { 
      state.allData = action.payload.allData;
    })
    .addCase(addLevel.fulfilled, (state, action) => {
      state.allData.push(action.payload)
    });
  },
});

export default appInvoiceSlice.reducer;
