// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getReservedCourses, getCourseGroupList, acceptCourseReserve, deleteCourseReserveById,  } from "../../../../../core/services/coursesApi";

export const getReservedData = createAsyncThunk(
  "reserved_courses/getReservedData",
  async () => {
    try {
      console.log("yoooooooooo");
      const response = await getReservedCourses();
      
      return {
        reservedAllData: response.data,
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const getCourseGroupData = createAsyncThunk(
  "reserved_courses/getCourseGroupData",
  async () => {
    try {
      const response = await getCourseGroupList();
      console.log("--------", response.data);
      return {
        courseGroupAllData: response.data,
      };
    } catch (error) {
      console.log("error", error);
      
    }
  },
);

export const addCourseReserve = createAsyncThunk(
  "reserved_courses/addCourseReserve",
  async (data, { rejectWithValue }) => {
    console.log(data)
    try {
      const response = await acceptCourseReserve(data);
      console.log("data: ", data)
      return response.data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
)

export const deleteCourseReserve = createAsyncThunk(
  "reserved_courses/deleteCourseReserve",
  async (id, { rejectWithValue }) => {
    
    try {
      const response = await deleteCourseReserveById(id);
      console.log("deleted", id)
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const reservedCoursesSlice = createSlice({
  name: "reserved_courses",
  initialState: {
    reservedAllData: [],
    courseGroupAllData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservedData.fulfilled, (state, action) => {
        state.reservedAllData = action.payload.reservedAllData;
      })
      .addCase(deleteCourseReserve.fulfilled, (state, action) => {
        state.reservedAllData = state.reservedAllData.filter(
          (course) => course.id !== action.payload
        );
      })
      .addCase(getCourseGroupData.fulfilled, (state, action) => {
        state.courseGroupAllData = action.payload.courseGroupAllData;
      });
  },
});

// export const courseGroupSlice = createSlice({
//   name: "course_group",
//   initialState: {
//     courseGroupAllData: [],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getCourseGroupData.fulfilled, (state, action) => {
//       state.courseGroupAllData = action.payload.courseGroupAllData;
//     });
//   },
// });

// export const reservedCoursesReducer = reservedCoursesSlice.reducer;
// export const courseGroupReducer = courseGroupSlice.reducer;
export default reservedCoursesSlice.reducer;
