import styles from './InputSelect.module.scss';

interface IInputSelectProps {
  label: string;
  htmlFor: string;
  width: string | number;
  options: string[];
  setState?: React.Dispatch<React.SetStateAction<string>>;
}

function InputSelect({
  htmlFor,
  label,
  width,
  options,
  setState,
}: IInputSelectProps) {
  return (
    <div className="container" style={{ width }}>
      <label htmlFor={htmlFor}>{label}</label>
      <div className={styles.inputContainer}>
        <select
          onChange={(event) => {
            const { value } = event.target;

            if (setState) setState(value);
          }}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export { InputSelect };
