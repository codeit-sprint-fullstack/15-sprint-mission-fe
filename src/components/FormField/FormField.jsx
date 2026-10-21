import clsx from "clsx";
import * as styles from "./FormField.css";

export function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  maxLength,
  multiline = false,
  rows = 6,
}) {
  const Field = multiline ? "textarea" : "input";

  return (
    <label className={styles.field} htmlFor={name}>
      <span className={styles.label}>{label}</span>
      <Field
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={multiline ? rows : undefined}
        className={clsx(styles.input, error && styles.error)}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
