import Image from "next/image";

import profileImg from "../../assets/ic_profile.png";
import * as styles from "./AuthorInfo.css.js";

const profiles = {
  list: { size: 24 },
  detail: {
    size: 40,
  },
  comment: {
    size: 32,
  },
};

export default function AuthorInfo({ name, date, dateTime, variant = "list" }) {
  const profile = profiles[variant];

  return (
    <div className={styles.container[variant]}>
      {profile && (
        <span className={styles.profile[variant]} aria-hidden="true">
          <Image
            src={profileImg}
            alt=""
            className={styles.profileImage}
            width={profile.size}
            height={profile.size}
          />
        </span>
      )}
      <div className={styles.text[variant]}>
        <span className={styles.name}>{name}</span>
        <time className={styles.date} dateTime={dateTime}>
          {date}
        </time>
      </div>
    </div>
  );
}
