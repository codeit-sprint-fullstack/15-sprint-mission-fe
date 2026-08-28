import { useState } from 'react';
import arrowDownIcon from '../assets/icons/ic_arrow_down.svg';
import sortIcon from '../assets/icons/ic_sort.svg';
import './SortDropDown.css';


// 미션5 요구사항: 좋아요순 정렬 기능은 제외
const OPTIONS = [{ label: '최신순', value: 'recent' }];


export default function SortDropdown({ orderBy, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const current = OPTIONS.find((option) => option.value === orderBy) ?? OPTIONS[0];

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="sort-dropdown">
      <button
        type="button"
        className="sort-dropdown__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        
       <span className="sort-dropdown__label">{current.label}</span>
        <img src={arrowDownIcon} alt="" className="sort-dropdown__arrow sort-dropdown__arrow--desktop" />
        <img src={sortIcon} alt="정렬" className="sort-dropdown__arrow sort-dropdown__arrow--mobile" />
      </button>

      {isOpen && (
        <ul className="sort-dropdown__menu">
          {OPTIONS.map((option) => (
            <li key={option.value}>
              <button type="button" onClick={() => handleSelect(option.value)}>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
