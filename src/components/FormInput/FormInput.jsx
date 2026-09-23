import styles from "./FormInput.module.css";

export function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  onKeyDown,
  placeholder,
  multiline = false,
  error,
}) {
  return (
    <label className={styles.inputContainer}>
      <span className={styles.inputTitle}>{label}</span>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={error ? styles.error : ""}
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          className={error ? styles.error : ""}
        />
      )}
      <p className={styles.errorParagraph}>{error}</p>
    </label>
  );
}
