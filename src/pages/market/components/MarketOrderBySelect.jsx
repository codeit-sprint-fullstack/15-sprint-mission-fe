import ic_arrow_down from "@/assets/ic_arrow_down.svg"
import ic_sort from "@/assets/ic_sort.svg"
import { useState } from "react"
import styles from "./MarketOrderBySelect.module.css"

function MarketOrderBySelect({ options, selected, handleOptionChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectChange = (option) => {
    if (selected.name !== option.name) {
      handleOptionChange(option)
    }
    setIsOpen(false)
  }

  return (
    <div className={styles.container}>
      <button onClick={handleSelect}>
        <span className={styles.text_pc}>{selected.name}</span>
        <img
          className={styles.icn_pc}
          src={ic_arrow_down}
          alt="셀렉트 박스 오픈"
        />
        <img
          className={styles.icn_mobile}
          src={ic_sort}
          alt="셀렉트 박스 오픈"
        />
      </button>
      {isOpen ? (
        <ul>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelectChange(option)}>
              {option.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default MarketOrderBySelect
