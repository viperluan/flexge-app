/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

export interface IStudentsData {
  _id: string;
  name: string;
  age: number;
  course: string;
  school: string;
}

const INITIAL_STATE: IStudentsData[] = [];

export const studentsSlice = createSlice({
  name: 'students',
  initialState: INITIAL_STATE,
  reducers: {
    fetchStudentsList: (state, action) => {
      const { payload } = action;

      return payload;
    },
    deleteOneStudent: (state, action) => {
      const { payload } = action;

      const filteredStudents = state.filter(({ _id }) => _id !== payload._id);

      return filteredStudents;
    },
  },
});

export const { fetchStudentsList, deleteOneStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
