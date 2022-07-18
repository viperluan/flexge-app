import { createSlice } from '@reduxjs/toolkit';

export interface IStudentsData {
  _id: string;
  name: string;
  age: number | string;
  course: string;
  school: string;
}

const INITIAL_STATE: IStudentsData = {
  _id: '',
  age: '',
  course: '',
  name: '',
  school: '',
};

export const selectedStudentSlice = createSlice({
  name: 'selectedStudent',
  initialState: INITIAL_STATE,
  reducers: {
    selectStudent: (state, action) => {
      if (action.type === 'selectedStudent/selectStudent') {
        const { payload } = action;
        return payload;
      }

      return state;
    },
    cleanSelectedStudent: () => {
      return INITIAL_STATE;
    },
  },
});

export const { selectStudent, cleanSelectedStudent } =
  selectedStudentSlice.actions;

export default selectedStudentSlice.reducer;
