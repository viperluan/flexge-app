import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  deleteStudent,
  getStudents,
  getStudentsByName,
} from '../../services/studentsService';
import {
  cleanSelectedStudent,
  selectStudent,
} from '../../store/selectedStudentSlice';
import {
  IStudentsData,
  fetchStudentsList,
  deleteOneStudent,
} from '../../store/studentsSlice';
import styles from './Students.module.scss';

function Students() {
  const user = useSelector((state: any) => state.authenticate);
  const students: IStudentsData[] = useSelector((state: any) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputName, setInputName] = useState('');
  const [firstFetch, setFirstFetch] = useState(true);

  async function callGetStudents() {
    const { data } = await getStudents();

    dispatch(fetchStudentsList(data.students));
  }

  async function findByName(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const { data } = await getStudentsByName(inputName);
      const { students } = data;

      dispatch(fetchStudentsList(students));
    } catch (error) {
      console.log(error);
    }
  }

  function editStudent(student: any) {
    dispatch(selectStudent(student));
    navigate('/students/new');
  }

  async function tryDeleteStudent(student: any) {
    try {
      const { status } = await deleteStudent(student);

      if (status === 204) {
        alert('Aluno deletado com sucesso.');
        dispatch(deleteOneStudent(student));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user.token && firstFetch) {
      callGetStudents();
      setFirstFetch(false);
    } else if (user.token && !inputName) {
      callGetStudents();
    }
  }, [user, inputName]);

  return (
    <div className={styles.container}>
      <header>
        <h1>Students</h1>

        <div className={styles.searchAndNewContainer}>
          <form
            method="POST"
            onSubmit={findByName}
            className={styles.searchContainer}
          >
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Find by name..."
                value={inputName}
                onChange={(event) => setInputName(event.target.value)}
              />
            </div>

            <button type="submit">
              <img src="icons/glass-icon.svg" alt="Glass icon" />
              <p>Search</p>
            </button>
          </form>

          <Link
            to="/students/new"
            onClick={() => dispatch(cleanSelectedStudent())}
          >
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
            {students.map((student) => {
              const { _id, age, course, name, school } = student;

              return (
                <tr key={_id}>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{course}</td>
                  <td>{school}</td>
                  <td className={styles.actionsContainer}>
                    <button onClick={() => editStudent(student)}>
                      <img src="icons/edit-icon.svg" alt="Edit button" />
                    </button>
                    <button onClick={() => tryDeleteStudent(student)}>
                      <img src="icons/trash-icon.svg" alt="Trash icon" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export { Students };
