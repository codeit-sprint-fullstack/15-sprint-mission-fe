import { useState } from 'react';
import styles from './SortProducts.module.css';

export function SortProducts({ sort }) {
  const [selected, setSelected] = useState('recent');
  const options = [
    { name: '최신순', value: 'recent' },
    { name: '좋아요순', value: 'favorite' },
  ];
  const handleChange = (e) => {
    console.log('[SortProducts]정렬기준은: ', e.target.value);
    setSelected(e.target.value);
    sort(e.target.value);
  };
  return (
    <div>
      <select
        value={selected}
        onChange={handleChange}
        className={styles.selectStyle}
      >
        {options.map((option) => (
          <option
            key={option.name}
            value={option.value}
            className={styles.optionStyle}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
