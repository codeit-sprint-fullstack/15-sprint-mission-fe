import { useEffect } from "react"
import BestProducts from "../../components/BestProducts"
import SellProducts from "../../components/SellProducts"
import styles from "./Market.module.css"

function Market() {
  useEffect(() => {}, [])
  return (
    <article className={styles.container}>
      <BestProducts />
      <SellProducts />
    </article>
  )
}

export default Market
