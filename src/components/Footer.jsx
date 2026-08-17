import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="codeit">@codeit - 2024</p>
      <div className="p_q">
        <span>Privacy</span>
        <span>FAQ</span>
      </div>

      <div className="icon">
        <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
          <img src="/image/ic_facebook.png" />
        </a>
        <a href="https://x.com/?lang=ko" target="_blank">
          <img src="/image/ic_twitter.png" />
        </a>
        <a
          href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
          target="_blank"
        >
          <img src="/image/ic_youtube.png" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="/image/ic_instagram.png" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
