import styles from './MarketHeader.module.css';

export function MarketHeader() {
  return (
    <header>
      <div className={styles.title}>
        <img
          className={styles.marketLogo}
          src="./src/assets/Property 1=lg.png"
          alt="판다마켓로고"
        />
        <div className={styles.marketCategory}>
        <p>
          자유게시판
        </p>
        <p>
          중고마켓
        </p>
        </div>

        <a className={styles.goLogin} href="/login">
          로그인
        </a>
      </div>
    </header>
  );
}
