import style from './Card.module.css';

export function Card({ imgSrc, imgAlt, h2, p1, _p2, p3, p4 }) {
  return (
    <>
      <section className={style.card}>
        <div className={style.cardImage}>
          <img
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
        <div className={style.cardText}>
          <h2>{h2}</h2>
          <p className={style.cardTextAndTitle}>{p1}</p>
          {/* <p className={style.cardTextAndTitle}>{p2}</p> */}
          <p className={style.cardTextDesc}>{p3}</p>
          <p className={style.cardTextDesc}>{p4}</p>
        </div>
      </section>
      <hr />
    </>
  );
}
