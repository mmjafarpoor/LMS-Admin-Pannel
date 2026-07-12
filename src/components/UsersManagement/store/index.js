// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getUsers } from "../../../core/services/usersManagementApi";

export const getData = createAsyncThunk(
  "usersManagement/getData",
  async (params) => {
    try {
      const response = await getUsers({
      pageNumber: params.page,
      rowOfPage: params.perPage
    });
      // console.log("yoooooooooo");

      return {
        params,
        data: response.data.listUser,
        allData: response.data.listUser,
        total: response.data.totalCount,
      };
    } catch (error) {
      console.log(error);
    }
  },
);

// export const deleteInvoice = createAsyncThunk(
//   "usersManagement/deleteInvoice",
//   async (id, { dispatch, getState }) => {
//     await axios.delete("/apps/invoice/delete", { id });
//     await dispatch(getData(getState().invoice.params));
//     return id;
//   },
// );

export const appInvoiceSlice = createSlice({
  name: "usersManagement",
  initialState: {
    data: [],
    allData: [],
    total: 1,
    params: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.allData = action.payload.allData;
      state.total = action.payload.total;
      state.params = action.payload.params;
    });
  },
});

export default appInvoiceSlice.reducer;
