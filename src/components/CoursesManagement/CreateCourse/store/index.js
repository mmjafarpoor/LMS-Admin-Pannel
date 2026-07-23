// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getCreateCourse, createCourse } from "../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "create_course/getData",
  async () => {
    try {
      const response = await getCreateCourse();
      console.log("response:", response.data);
      
      return {
        allData: response.data,
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const addCourse = createAsyncThunk(
  "create_course/addCourse",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createCourse(data);
      console.log("data: ", data)
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)


export const appInvoiceSlice = createSlice({
  name: "create_course",
  initialState: {
    allData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.allData = action.payload.allData;
    });
  },
});

export default appInvoiceSlice.reducer;
