import landingPage from '../../assets/Img_home_top.png';
import { Link } from 'react-router';
import style from './Header.module.css';

export function Header() {
  return (
    <div className={style.outer}>
    <header>
      <div className={style.inner}>
        <div className={style.textAndButton}>
          <h1>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h1>
          <Link to="items" className={style.button}>구경하러 가기</Link>
        </div>
        <div className="image">
          <img src={landingPage} alt="가방을 든 판다 그림" />
        </div>
      </div>
    </header>
  </div>
  );
}
