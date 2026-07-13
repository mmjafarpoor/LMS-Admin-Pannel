// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getClasses } from "../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "courses_class_list/getData",
  async () => {
    try {console.log("yoooooooooo");
      const response = await getClasses();
      
      return {
        allData: response.data,
      };

    } catch (error) {
      console.log(error);
    }
  },
);

export const appInvoiceSlice = createSlice({
  name: "courses_technologies",
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
