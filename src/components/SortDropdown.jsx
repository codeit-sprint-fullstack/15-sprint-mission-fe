import { useState } from "react";
import downArrow from "../assets/downArrow.svg";

const SORT_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "likes", label: "좋아요순" },
];

function SortDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const selected =
    SORT_OPTIONS.find((option) => option.value === value) ?? SORT_OPTIONS[0];

  const handleSelect = (option) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-[130px] h-[42px] pt-3 pr-5 pb-3 pl-5 rounded-xl border border-[#E5E7EB] bg-white flex items-center justify-between"
      >
        <span className="text-base text-[#111827]">{selected.label}</span>
        <img src={downArrow} alt="드롭다운 화살표" className="w-4 h-2" />
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-1 w-[130px] bg-white border border-[#E5E7EB] rounded-xl shadow-md z-10 overflow-hidden">
          {SORT_OPTIONS.map((option, index) => (
            <li key={option.value}>
              <button
                onClick={() => handleSelect(option)}
                className={`w-full text-center py-3 text-base hover:bg-gray-50 ${
                  index !== SORT_OPTIONS.length - 1
                    ? "border-b border-[#E5E7EB]"
                    : ""
                } ${option.value === selected.value ? "font-bold text-[#111827]" : "text-[#111827]"}`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
