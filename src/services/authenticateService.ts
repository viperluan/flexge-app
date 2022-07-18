import api from './api';

interface IUserData {
  email: string;
  password: string;
}

const postLogin = async (user: IUserData) => {
  const response = await api.post('/user/login', user);

  return response;
};

export { postLogin };
