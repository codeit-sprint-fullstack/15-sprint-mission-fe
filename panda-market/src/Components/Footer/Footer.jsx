import './Footer.css';
import facebook from '../../assets/ic_facebook.svg';
import twitter from '../../assets/ic_twitter.svg';
import youtube from '../../assets/ic_youtube.svg';
import instagram from '../../assets/ic_instagram.svg';

export const Footer = () => {
  return (
    <footer>
      <div className="copyright">©codeit - 2024</div>
      <div className="policy">
        <a href="/15-sprint-mission-fe/pages/privacy.html">Privacy Policy</a>
        <a href="/15-sprint-mission-fe/pages/fag.html">FAQ</a>
      </div>
      <div className="sns">
        <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
          <img src={facebook} alt="" />
        </a>
        <a href="https://x.com/?lang=ko" target="_blank">
          <img src={twitter} alt="" />
        </a>
        <a
          href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
          target="_blank"
        >
          <img src={youtube} alt="" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="" />
        </a>
      </div>
    </footer>
  );
};
