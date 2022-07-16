import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

function Home() {
  return (
    <main className={styles.container}>
      <header>
        <img src="images/logo.png" alt="Flexge logo" />
      </header>
      <div className={styles.loginContainer}>
        <p>Sign in with your Flexge account</p>

        <form
          method="POST"
          onSubmit={(event) => {
            event.preventDefault();
            const actualLocation = window.location.origin;
            window.location.assign(`${actualLocation}/students`);
          }}
        >
          <div className={styles.inputContainer}>
            <input type="email" placeholder="E-mail" required />
          </div>
          <div className={styles.inputContainer}>
            <input type="password" placeholder="Password" required />
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
