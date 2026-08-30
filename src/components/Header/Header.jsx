import { useNavigate } from "react-router-dom";
import mainIcon from "../../assets/mainIcon.svg";
import styles from "./Header.module.css";

export function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.mainNavContainer}>
        <div className={styles.mainTitle}>
          <img
            className={styles.desktopTabletOnly}
            src={mainIcon}
            alt="메인_아이콘"
          />
          <h2 onClick={handleClick}>판다마켓</h2>
        </div>
        <h3>자유게시판</h3>
        <h3>중고마켓</h3>
      </div>
      <button className={styles.loginButton}>로그인</button>
    </div>
  );
}
