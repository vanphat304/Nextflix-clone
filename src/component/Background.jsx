import clsx from "clsx";
import styles from "./background.module.scss";
import { useEffect, useRef, useState } from "react";
import { Replay, VolumeOff, VolumeUp } from "@material-ui/icons";

const Background = ({ img, flag }) => {
  const style = clsx(styles.background);
  const vidRef = useRef();
  const buttonRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const [buttonState, setButtonState] = useState("mute");

  const linkVideo =
    "https://imdb-video.media-imdb.com/vi3139420185/1434659607842-pgv4ql-1625577549833.mp4?Expires=1642819854&Signature=HSR1kq~DOfl4OPbWAMijZo1H4Vp5OLQhkSiqqqInmLLi6HX~iBkpP2rBuHONJI2kWUVu-0ANJIFtyxk7752D2lOB8P38SFghnbmZ~czyNeJc7wkjJTRiOgDaXnuVxllcBfGXU3cmUrur~aUcKBFoWQ9mw9YsfNaKc1EZJpjUS7ZZLUc14ak~XzAnWuVimInPC9oo7hFIcrOmOorVufhAC5SxBLIHVZFMUIwoENmoNaMuL5oZzJ6XmSMvxkFx2k6L4ht~SFCwRuNDf54qgGoXZrkOfGV-O2hVcpIxJtXkWK1r3NqnYO49c7LVTu2P6FV2wb~UsgNjycDwvE~a7Z1tKw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";
  useEffect(() => {
    setTimeout(() => {
      setPlayVideo(true);
    }, 2000);
  }, []);

  const renderButton = () => {
    switch (buttonState) {
      case "mute":
        return <VolumeOff />;
      case "unmute":
        return <VolumeUp />;
      default:
        return <Replay />;
    }
  };

  const handleChangeButton = () => {
    if (!playVideo) {
      setPlayVideo(true);
      setButtonState("mute");
      // vidRef.current.load();
    } else if (vidRef.current.muted && vidRef.current) {
      setButtonState("unmute");
      vidRef.current.muted = false;
    } else if (!vidRef.current.muted && vidRef.current) {
      setButtonState("mute");
      vidRef.current.muted = "true";
    }
  };

  return (
    <>
      <div className={style}>
        {/* <img src={img} alt="background" /> */}

        {!playVideo ? (
          <img src={img} alt="background" />
        ) : (
          <video
            onEnded={() => {
              setPlayVideo(false);
              setButtonState("reload");
            }}
            ref={vidRef}
            playsInline
            muted
            autoPlay
          >
            <source src={linkVideo} type="video/mp4" />
          </video>
        )}
        {/* {flag && <div className={clsx(styles.overlay)}></div>} */}

        <button
          className={styles.buttonControls}
          ref={buttonRef}
          onClick={() => {
            handleChangeButton();
          }}
          // style={{ display: "none" }}
        >
          {renderButton()}
        </button>
      </div>
    </>
  );
};

export default Background;
