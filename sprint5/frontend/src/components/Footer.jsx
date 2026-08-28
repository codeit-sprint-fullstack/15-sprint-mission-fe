import facebookIcon from '../assets/icons/ic_facebook.svg';
import twitterIcon from '../assets/icons/ic_twitter.svg';
import youtubeIcon from '../assets/icons/ic_youtube.svg';
import instagramIcon from '../assets/icons/ic_instagram.svg';
import './Footer.css';

const SNS_LINKS = [
  { icon: facebookIcon, label: 'facebook', url: 'https://facebook.com/' },
  { icon: twitterIcon, label: 'twitter', url: 'https://x.com/' },
  { icon: youtubeIcon, label: 'youtube', url: 'https://youtube.com/' },
  { icon: instagramIcon, label: 'instagram', url: 'https://instagram.com/' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>©codeit - 2024</p>
        <div className="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer__sns">
          {SNS_LINKS.map(({ icon, label, url }) => (
            <a href={url} key={label} aria-label={label} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
