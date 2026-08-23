const LABEL_CLASS = "font-bold text-[#1F2937] text-[18px]";
const LABEL_DIV_CLASS = "flex flex-col gap-2 mb-6";
const INPUT_ERROR_CLASS = "border-red-500 focus:border-red-500";
const INPUT_CLASS = "border-transparent focus:border-blue-500 focus:bg-white";
const ERROR_MSG_CLASS = "text-red-500 text-xs mt-1";

export default function ProductInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  isTextarea = false,
  rows = 8,
  onKeyDown,
}) {
  return (
    <div className={LABEL_DIV_CLASS}>
      <label className={LABEL_CLASS}>{label}</label>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`w-full bg-gray-50 border rounded-xl p-4 outline-none transition text-sm placeholder:text-gray-400 resize-none ${
            error ? INPUT_ERROR_CLASS : INPUT_CLASS
          }`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={`w-full bg-gray-50 border rounded-xl px-4 py-3 outline-none transition text-sm placeholder:text-gray-400 ${
            error ? INPUT_ERROR_CLASS : INPUT_CLASS
          }`}
        />
      )}
      {error && <span className={ERROR_MSG_CLASS}>{error}</span>}
    </div>
  );
}