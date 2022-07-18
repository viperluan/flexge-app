/* eslint-disable no-underscore-dangle */
import api from './api';

interface IStudentData {
  _id?: string | number;
  name: string;
  age: number;
  course: string;
  school: string;
}

const getStudents = async () => {
  const response = await api.get('/students');

  return response;
};

const createStudent = async (student: IStudentData) => {
  const response = await api.post('/students', student);

  return response;
};

const editStudent = async (student: IStudentData) => {
  const response = await api.put(`/students/${student._id}`, student);

  return response;
};

export { getStudents, createStudent, editStudent };
