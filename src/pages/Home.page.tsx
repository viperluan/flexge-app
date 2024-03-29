import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import api from '../services/api';
import { postLogin } from '../services/authenticateService';
import { login } from '../store/authenticateSlice';
import styles from './Home.module.scss';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies();
  const { token, emailOnCookies } = cookies;

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(login({ token, emailOnCookies }));
      navigate('/students');
    }
  }, []);

  async function tryLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const { data } = await postLogin({ email, password });
      const { token, status, message } = data;

      if (status === 'Erro') alert(message);

      if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        dispatch(login({ email, token }));
        setCookie('token', token, { path: '/' });
        setCookie('email', email, { path: '/' });

        alert(message);

        navigate('/students');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className={styles.container}>
      <header>
        <img src="images/logo.png" alt="Flexge logo" />
      </header>
      <div className={styles.loginContainer}>
        <p>Sign in with your Flexge account</p>

        <form method="POST" onSubmit={(event) => tryLogin(event)}>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className={styles.actions}>
            <Link to="/forget">Forgot your password?</Link>
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export { Home };
