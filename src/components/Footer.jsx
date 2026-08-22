import style from '../styles/Footer.module.css';
import facebook from '../assets/ic_facebook.png'
import twitter from '../assets/ic_twitter.png'
import youtube from '../assets/ic_youtube.png'
import instagram from '../assets/ic_instagram.png'



export default function Footer() {
  return (
    <div className={style.footerOutbox}>
      <footer className={style.footer}>
        <div className={style.footerLeft}>
          <span>&copy;codeit - 2024</span>
        </div>
        <div className={style.footerCenter}>
          <a href="./privacy.html">Privacy Policy</a>
          <a href="./faq.html">FAQ</a>
        </div>
        <div className={style.footerRight}>
          <a href="">
            <img src={facebook} alt="페이스북 아이콘" />
          </a>
          <a href="">
            <img src={twitter} alt="트위터 아이콘" />
          </a>
          <a href="">
            <img src={youtube} alt="유튜브 아이콘" />
          </a>
          <a href="">
            <img src={instagram} alt="인스타그램 아이콘" />
          </a>
        </div>
      </footer>
    </div>
  );
}
