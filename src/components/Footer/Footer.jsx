import Image from "next/image";
import facebookIcon from "../../assets/sns-icon/ic_facebook.svg";
import instagramIcon from "../../assets/sns-icon/ic_instagram.svg";
import twitterIcon from "../../assets/sns-icon/ic_twitter.svg";
import youtubeIcon from "../../assets/sns-icon/ic_youtube.svg";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p>@codeit-2024</p>
      <div className={styles.footerNav}>
        <p>Privacy Policy</p>
        <p> FAQ</p>
      </div>
      <div className={styles.snsIconContainer}>
        <Image src={facebookIcon} alt="페이스북_아이콘" />
        <Image src={twitterIcon} alt="트위터_아이콘" />
        <Image src={youtubeIcon} alt="유튜브_아이콘" />
        <Image src={instagramIcon} alt="인스타그램_아이콘" />
      </div>
    </div>
  );
}
