/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { InputSelect } from '../../components/inputs/InputSelect';
import { InputText } from '../../components/inputs/InputText';
import { createStudent, editStudent } from '../../services/studentsService';
import styles from './NewStudents.module.scss';

const COURSES = ['PRE A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const SCHOOLS = ['School 1', 'School 2', 'School 3', 'School 4', 'School 5'];

function NewStudents() {
  const navigate = useNavigate();
  const selectedStudent = useSelector((state: any) => state.selectedStudent);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('School 1');
  const [school, setSchool] = useState('PRE A1');

  async function postNewStudent() {
    const { data } = await createStudent({
      name,
      age: Number(age),
      course,
      school,
    });

    const { status, message } = data;

    if (status === 'Erro') {
      alert(message);
      return;
    }

    alert('Aluno cadastrado com sucesso');
    navigate('/students');
  }

  async function putStudent() {
    const { data } = await editStudent({
      _id: id,
      name,
      age: Number(age),
      course,
      school,
    });

    const { status, message } = data;

    if (status === 'Erro') {
      alert(message);
      return;
    }

    alert('Aluno alterado com sucesso.');
    navigate('/students');
  }

  async function submitStudent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      if (!isEdit) {
        await postNewStudent();
        return;
      }

      await putStudent();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!selectedStudent._id) {
      setIsEdit(false);
      setId('');
      setName('');
      setAge('');
      setCourse('PRE A1');
      setSchool('School 1');
      return;
    }

    const { _id, name, age, course, school } = selectedStudent;

    setIsEdit(true);
    setId(_id);
    setName(name);
    setAge(age);
    setCourse(course);
    setSchool(school);
  }, []);

  return (
    <div className={styles.container}>
      <Link to="/students">
        <img src="../icons/arrow-back-icon.svg" alt="arrow" />
      </Link>

      <h1>New Student</h1>

      <form method="POST" onSubmit={submitStudent}>
        <div className={styles.studentNameAndAge}>
          <InputText
            id="name"
            type="text"
            label="Name"
            htmlFor="name"
            placeholder="Student name..."
            width="70%"
            value={name}
            setState={setName}
          />
          <InputText
            id="age"
            type="number"
            label="Age"
            htmlFor="age"
            placeholder="Student age..."
            min={0}
            max={120}
            width="30%"
            value={age}
            setState={setAge}
          />
        </div>

        <div className={styles.studentCourseAndSchool}>
          <InputSelect
            label="Course"
            htmlFor="course"
            width="50%"
            options={COURSES}
            setState={setCourse}
          />
          <InputSelect
            label="School"
            htmlFor="school"
            width="50%"
            options={SCHOOLS}
            setState={setSchool}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export { NewStudents };
