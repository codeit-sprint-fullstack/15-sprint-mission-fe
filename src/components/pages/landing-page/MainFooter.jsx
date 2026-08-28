import landingPageBottom from '../../../assets/Img_home_bottom.png';
import style from './MainFooter.module.css';

export function MainFooter() {
  return (
    <div class={style.outer}>
      <div class={style.footer}>
        <div class={style.inner}>
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
          <img
            src={landingPageBottom}
            alt="판다 캐릭터 둘이 만나 인사하는 이미지"
          />
        </div>
      </div>
    </div>
  );
}
