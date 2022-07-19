import { Link } from 'react-router-dom';

import styles from './Error404.module.scss';

function Error404() {
  return (
    <div className={styles.container}>
      <h1>Ops, página não encontrada</h1>
      <Link to="/">
        <button>Voltar à página principal</button>
      </Link>
    </div>
  );
}
export default Error404;
