// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { createUser, getUsers } from "../../../../core/services/usersManagementApi";

export const getData = createAsyncThunk(
  "users_management/getData",
  async (params) => {
    try {
      console.log(">>>>>>>>>>", params)
      const response = await getUsers({
      pageNumber: params.page ?? 1,
      rowsOfPage: params.perPage ?? 10,
      roleId: params.roleId ?? "",
      isActiveUser: params.isActiveUser ?? ""
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


export const addUser = createAsyncThunk(
  "users_management/addUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createUser(data);
      console.log("response", response.data)
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

export const appInvoiceSlice = createSlice({
  name: "users_management",
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
