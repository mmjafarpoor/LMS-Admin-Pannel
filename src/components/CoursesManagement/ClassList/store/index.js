// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getClasses , editClasses} from "../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "courses_class_list/getData",
  async () => {
    try {
      const response = await getClasses();
      
      return {
        allData: response.data,
      };

    } catch (error) {
      console.log(error);
    }
  },
);

export const updateClasses = createAsyncThunk(
  "courses_class_list/updateClasses",
  async (data, { rejectWithValue }) => {
    try {
      const response = await editClasses(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const appInvoiceSlice = createSlice({
  name: "courses_class_list",
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
