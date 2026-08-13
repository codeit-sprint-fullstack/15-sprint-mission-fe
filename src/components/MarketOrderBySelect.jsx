import { useState } from "react"
import ic_arrow_down from "../assets/ic_arrow_down.svg"
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
        {selected.name}
        <img src={ic_arrow_down} alt="셀렉트 박스 오픈" />
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
