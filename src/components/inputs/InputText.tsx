import styles from './InputText.module.scss';

interface IInputTextProps {
  id: string;
  type: string;
  label: string;
  htmlFor: string;
  placeholder?: string;
  disabled?: boolean;
  max?: number;
  min?: number;
  value?: string | number;
  width?: string | number;
}

function InputText({
  id,
  label,
  type,
  placeholder,
  htmlFor,
  disabled,
  max,
  min,
  value,
  width,
}: IInputTextProps) {
  return (
    <div className={styles.container} style={{ width }}>
      <label htmlFor={htmlFor}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          value={value}
          max={max}
          min={min}
        />
      </div>
    </div>
  );
}

export { InputText };
