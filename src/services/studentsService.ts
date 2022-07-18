import api from './api';

const getStudents = async () => {
  const response = await api.get('/students');

  return response;
};

export { getStudents };
