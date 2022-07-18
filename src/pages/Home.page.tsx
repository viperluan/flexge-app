import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { postLogin } from '../services/authenticateService';
import { login } from '../store/authenticateSlice';
import styles from './Home.module.scss';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function tryLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const { data } = await postLogin({ email, password });
      const { token } = data;

      if (token) {
        axios.defaults.headers.common.Authorization = token;
        dispatch(login({ email, password, token }));
        navigate('/students');
      }
    } catch (error) {
      alert(error);
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
