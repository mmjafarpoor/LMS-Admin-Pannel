// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { getCourses, deleteCourseById, activeCourseById, getCourseDetails } from "../../../../../core/services/coursesApi";

export const getData = createAsyncThunk(
  "courses/getData",
  async (params) => {
    try {
      console.log("yoooooooooo");
      const response = await getCourses({
        pageNumber: params.page,
        rowOfPage: params.perPage
        }
      );
      
      return {
        data: response.data.courseFilterDtos,
        allData: response.data.courseFilterDtos,
        total: response.data.totalCount
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const activeCourse = createAsyncThunk(
  "courses/activeCourse",
  async ({courseId, active}, { rejectWithValue }) => {
    try {
      return await activeCourseById(courseId, active);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId, { rejectWithValue }) => {
    console.log("deleted")
    try {
      const response = await deleteCourseById(courseId, active);
      return courseId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCourseUsers = createAsyncThunk(
  "courses/getCourseUsers",
  async (params) => {
    try {
      const response = await getCourseDetails(params);
      return {
        allStudents: response.data.courseStudent,
        studentsCount: response.data.courseStudent.length,
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const appInvoiceSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    allData: [],
    total: 0,
    allStudents: [],
    studentsCount: 0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getData.fulfilled, (state, action) => { 
      state.data = action.payload.data;
      state.allData = action.payload.allData;
      state.total = action.payload.total;   
    })
    .addCase(activeCourse.fulfilled, (state, action) => {
      const course = state.allData.find(
        item => item.courseId === action.payload
      )
      // console.log("course:", course)
      if (course) {
        course.active = true;
      }
    })
    .addCase(deleteCourse.fulfilled, (state, action) => {
      state.allData = state.allData.filter(
        (course) => course.courseId !== action.payload
      )
    })
    .addCase(getCourseUsers.fulfilled, (state, action) => { 
      state.allStudents = action.payload.allStudents;
      state.studentsCount = action.payload.studentsCount;   
    })
  },
});

export default appInvoiceSlice.reducer;
