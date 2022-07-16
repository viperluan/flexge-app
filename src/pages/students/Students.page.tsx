import { Link } from 'react-router-dom';

import styles from './Students.module.scss';

function Students() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Students</h1>

        <div className={styles.searchAndNewContainer}>
          <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="Find by name..." />
            </div>

            <button>
              <img src="icons/glass-icon.svg" alt="Glass icon" />
              <p>Search</p>
            </button>
          </div>

          <Link to="/students/new">
            <img src="icons/plus-icon.svg" alt="Plus icon" />
            <p>New</p>
          </Link>
        </div>
      </header>

      <main>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>School</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Student 1</td>
              <td>13</td>
              <td>C4</td>
              <td>School 1</td>
              <td className={styles.actionsContainer}>
                <button>
                  <img src="icons/edit-icon.svg" alt="Edit button" />
                </button>
                <button>
                  <img src="icons/trash-icon.svg" alt="Trash icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Student 2</td>
              <td>13</td>
              <td>C4</td>
              <td>School 1</td>
              <td className={styles.actionsContainer}>
                <button>
                  <img src="icons/edit-icon.svg" alt="Edit button" />
                </button>
                <button>
                  <img src="icons/trash-icon.svg" alt="Trash icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Student 3</td>
              <td>13</td>
              <td>C4</td>
              <td>School 1</td>
              <td className={styles.actionsContainer}>
                <button>
                  <img src="icons/edit-icon.svg" alt="Edit button" />
                </button>
                <button>
                  <img src="icons/trash-icon.svg" alt="Trash icon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export { Students };
