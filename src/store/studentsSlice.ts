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
    loadStudents: (state, action) => {
      if (action.type === 'students/loadStudents') {
        const { payload } = action;
        return payload;
      }

      return state;
    },
  },
});

export const { loadStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
