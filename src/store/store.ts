import { configureStore } from '@reduxjs/toolkit';

import authenticateReducer from './authenticateSlice';
import selectedStudentReducer from './selectedStudentSlice';
import studentsReducer from './studentsSlice';

export default configureStore({
  reducer: {
    authenticate: authenticateReducer,
    students: studentsReducer,
    selectedStudent: selectedStudentReducer,
  },
});
