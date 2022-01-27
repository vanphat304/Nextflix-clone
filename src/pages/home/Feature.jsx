import styles from "./feature.module.scss";
import Background from "../../component/Background";
import clsx from "clsx";
import { InfoOutlined, PlayArrowSharp } from "@material-ui/icons";
function Feature() {
  return (
    <div className={styles.feature}>
      <Background
        img={
          "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYpNKXd6aAEq0H6okfvFZ97Iaa8fNSzUbmSJoE1H7aS2UZSm-BKC_rRLEG9JzbyjumtTzlyAvy8cl-L31D8kBjumtyoO.webp?r=d34"
        }
        flag={true}
      />
      <div className={styles.feature__detail}>
        <div className={styles.feature__detail__img}>
          <img
            src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJfA_82nCbwuq1O9HcRhuOJ5CjCqB_eHLL_Sr8JiSci9OSLOJ5duO5hTylCX9hhZ-JgbXIdSGzppcUjdxcefhGA-LCuZuZ6S3xEJDgI4jZ936Cs8UDgYeLdbJmKcJImzFPzjD64w5mc8ZhQJ9MQndL5ILtc_7hHkyoxBOT-FwPjZg.webp?r=0a8"
            alt=""
          />
        </div>
        <p>
          Lãnh chúa, chiến binh và chính khách tranh giành quyền lực tối cao
          trong phim hư cấu dựa trên các video game ăn khách và "Romance of the
          Three Kingdoms
        </p>
        <div className={styles.feature__detail__buttons}>
          <button className={clsx(styles.feature__button, styles.buttonPlay)}>
            <PlayArrowSharp
              className={clsx(styles.buttonIcon, styles.Iconplay)}
            />
            Phát
          </button>

          <button className={clsx(styles.feature__button, styles.buttonDetail)}>
            <InfoOutlined
              className={clsx(styles.buttonIcon, styles.Icondetail)}
            />
            Thông tin khác
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
