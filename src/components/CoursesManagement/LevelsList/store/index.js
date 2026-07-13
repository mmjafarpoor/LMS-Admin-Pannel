// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getLevels } from "../../../../core/services/coursesApi";

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

export const appInvoiceSlice = createSlice({
  name: "courses_levels",
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
