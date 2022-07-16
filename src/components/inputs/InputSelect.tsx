import styles from './InputSelect.module.scss';

interface IInputSelectProps {
  label: string;
  htmlFor: string;
  width: string | number;
  options: string[];
}

function InputSelect({ htmlFor, label, width, options }: IInputSelectProps) {
  return (
    <div className="container" style={{ width }}>
      <label htmlFor={htmlFor}>{label}</label>
      <div className={styles.inputContainer}>
        <select>
          {options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export { InputSelect };
