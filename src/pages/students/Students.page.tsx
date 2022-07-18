import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { deleteStudent, getStudents } from '../../services/studentsService';
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

  function editStudent(student: any) {
    dispatch(selectStudent(student));
    navigate('/students/new');
  }

  async function tryDeleteStudent(student: any) {
    try {
      dispatch(deleteOneStudent(student));
      const { status } = await deleteStudent(student);

      if (status === 204) alert('Aluno deletado com sucesso.');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!user.token) {
      navigate('/');
      return;
    }

    async function callGetStudents() {
      const response = await getStudents();

      return response;
    }

    callGetStudents().then(({ data }) =>
      dispatch(fetchStudentsList(data.students))
    );
  }, []);

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
