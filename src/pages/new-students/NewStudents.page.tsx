import { InputSelect } from '../../components/inputs/InputSelect';
import { InputText } from '../../components/inputs/InputText';
import styles from './NewStudents.module.scss';

const courses = ['PRE A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const schools = ['School 1', 'School 2', 'School 3', 'School 4', 'School 5'];

function NewStudents() {
  return (
    <div className={styles.container}>
      <h1>New Student</h1>

      <div className={styles.studentNameAndAge}>
        <InputText
          id="name"
          type="text"
          label="Name"
          htmlFor="name"
          placeholder="Student name..."
          width="70%"
        />
        <InputText
          id="age"
          type="number"
          label="Age"
          htmlFor="age"
          placeholder="Student name..."
          min={0}
          max={120}
          width="30%"
        />
      </div>

      <div className={styles.studentCourseAndSchool}>
        <InputSelect
          label="Course"
          htmlFor="course"
          width="50%"
          options={courses}
        />
        <InputSelect
          label="School"
          htmlFor="school"
          width="50%"
          options={schools}
        />
      </div>

      <button>Save</button>
    </div>
  );
}

export { NewStudents };
