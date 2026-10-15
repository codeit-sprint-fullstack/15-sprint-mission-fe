import icFacebook from '@/assets/landing/ic_facebook.svg';
import icInstagram from '@/assets/landing/ic_instagram.svg';
import icTwitter from '@/assets/landing/ic_twitter.svg';
import icYoutube from '@/assets/landing/ic_youtube.svg';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './Footer.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p className={styles.contentLeft}>©codeit - 2024</p>
        <div className={styles.contentCenter}>
          <Link className={styles.policy} href={'/'}>
            Privacy Policy
          </Link>
          <Link className={styles.faq} href={'/'}>
            FAQ
          </Link>
        </div>
        <div className={styles.contentRight}>
          <Link href={'https://facebook.com'}>
            <Image src={icFacebook} alt="페이스북 아이콘" />
          </Link>
          <Link href={'https://twitter.com'}>
            <Image src={icTwitter} alt="트위터 아이콘" />
          </Link>
          <Link href={'https://youtube.com'}>
            <Image src={icYoutube} alt="유튜브 아이콘" />
          </Link>
          <Link href={'https://instagram.com'}>
            <Image src={icInstagram} alt="인스타그램 아이콘" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
