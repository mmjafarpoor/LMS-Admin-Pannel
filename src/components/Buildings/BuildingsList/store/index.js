// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getBuildings, createBuilding } from "../../../../core/services/buildingsApi";

export const getData = createAsyncThunk(
  "buildings/getData",
  async () => {
    try {
      const response = await getBuildings();
      
      return {
        allData: response.data
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const addBuilding = createAsyncThunk(
  "buildings/addBuilding",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createDepartment(data);
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

export const appInvoiceSlice = createSlice({
  name: "buildings",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.
    addCase(getData.fulfilled, (state, action) => { 
      state.allData = action.payload.allData;
    })
    // .addCase(addBuilding.fulfilled, (state, action) => {
    //   state.allData.push(action.payload)
    // }); 
  },
});

export default appInvoiceSlice.reducer;
