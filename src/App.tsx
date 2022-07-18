import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

import { AppRoutes } from './Routes';
import { login } from './store/authenticateSlice';

function App() {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies();
  const { token, email } = cookies;

  useEffect(() => {
    if (token) {
      dispatch(login({ token, email }));
    }
  }, []);

  return <AppRoutes />;
}

export default App;
