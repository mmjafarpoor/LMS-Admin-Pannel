// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getUserDetails } from "../../../../core/services/usersManagementApi";

export const getUserData = createAsyncThunk(
  "user_details/getUserData",
  async (params) => {
    try {
      const response = await getUserDetails(params);
      console.log("response:", response.data);
      
      return {
        allData: response.data,
      };
    } catch (error) {
      console.log(error);
    }
  },
);


export const appInvoiceSlice = createSlice({
  name: "user_details",
  initialState: {
    allData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.allData = action.payload.allData;
    });
  },
});

export default appInvoiceSlice.reducer;
