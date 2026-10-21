import Image from "next/image";
import * as styles from "./Footer.css.js";

const SNS_LINKS = [
  {
    icon: "/assets/icons/ic_facebook.svg",
    label: "facebook",
    url: "https://facebook.com/",
  },
  {
    icon: "/assets/icons/ic_twitter.svg",
    label: "twitter",
    url: "https://x.com/",
  },
  {
    icon: "/assets/icons/ic_youtube.svg",
    label: "youtube",
    url: "https://youtube.com/",
  },
  {
    icon: "/assets/icons/ic_instagram.svg",
    label: "instagram",
    url: "https://instagram.com/",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>©codeit - 2024</p>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
        <div className={styles.sns}>
          {SNS_LINKS.map(({ icon, label, url }) => (
            <a
              href={url}
              key={label}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.snsLink}
            >
              <Image src={icon} alt="" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
