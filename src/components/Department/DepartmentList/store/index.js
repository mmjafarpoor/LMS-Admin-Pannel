// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getDepartments, createDepartment , editDepartment } from "../../../../core/services/departmentApi";

export const getData = createAsyncThunk(
  "department/getData",
  async () => {
    try {
      const response = await getDepartments();
      
      return {
        allData: response.data,
      };

    } catch (error) {
      console.log(error);
    }
  },
);

export const addDepartment = createAsyncThunk(
  "department/addDepartment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createDepartment(data);
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateDepartment = createAsyncThunk(
  "department/updateDepartment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await editDepartment(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const appInvoiceSlice = createSlice({
  name: "department",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => { 
        state.allData = action.payload.allData;
      })
      // .addCase(addDepartment.fulfilled, (state, action) => {
      //   state.allData.push(action.payload)
      // });

  },
});

export default appInvoiceSlice.reducer;
