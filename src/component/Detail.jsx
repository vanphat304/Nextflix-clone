import clsx from "clsx";
import styles from "./detail.module.scss";
const Detail = ({ image, video, direct, title, text }) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.direct]: direct,
        [styles.justify]: !image,
      })}
    >
      <div className={clsx(styles.detail)}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={clsx(styles.image)}>
        <img
          className={video && clsx(styles.imageLocaVideo)}
          src={image}
          alt=""
        />
        {video && (
          <video autoPlay playsInline muted loop>
            <source src={video} />
          </video>
        )}
      </div>
    </div>
  );
};

export default Detail;
