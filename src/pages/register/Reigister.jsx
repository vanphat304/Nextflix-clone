import clsx from "clsx";
import Background from "../../component/Background";
import styles from "./register.module.scss";
import "../../style/grid.scss";
import Detail from "../../component/Detail";
import Question from "./Question";
import Footer from "../../component/Footer";
import { useState, useRef } from "react";

export default function Reigister() {
  const logo = process.env.PUBLIC_URL + "img/pngwing.com.png";
  const [flag, setFlag] = useState(true);
  const [userRegis, setUserRegis] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserRegis({
      ...userRegis,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ userRegis });
  };

  return (
    <div className={clsx(styles.register)}>
      <div className={clsx(styles.wrapBanner)}>
        <Background
          img={
            "https://assets.nflxext.com/ffe/siteui/vlv3/9737377e-a430-4d13-ad6c-874c54837c49/b320acf8-1419-4de5-bf62-1322be49a408/VN-en-20220111-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          }
        />
        <div className={clsx(styles.header)}>
          <div className={clsx(styles.header__logo)}>
            <img src={logo} alt="" />
          </div>
          <div className={clsx(styles.header__buttons)}>
            <select name="" id="">
              <option value="vietnames">Tiếng việt</option>
              <option value="english">English</option>
            </select>
            <button>Sign In</button>
          </div>
        </div>
        <div className={clsx(styles.register__detail)}>
          <h1 className="detailTitle">Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <div className={clsx(styles.formResgister)}>
            <span>
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>

            {flag ? (
              <div className={clsx(styles.input)}>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  onChange={handleChange}
                />
                <button
                  onClick={() => {
                    setFlag(false);
                  }}
                >
                  Get Started{" "}
                </button>
              </div>
            ) : (
              <form className={clsx(styles.input)}>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                />
                <button onClick={handleRegister}>Started </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Detail
        direct={false}
        image={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        }
        video={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        }
        title={"Enjoy on your TV."}
        text={
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        }
      />
      <Detail
        direct={true}
        image={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        }
        title={"Download your shows to watch offline."}
        text={"Save your favorites easily and always have something to watch."}
      />
      <Detail
        title={"Watch everywhere."}
        text={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        }
      />
      <Detail
        direct={true}
        image={
          "https://occ-0-395-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd "
        }
        title={"Create profiles for kids."}
        text={
          "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        }
      />
      <Detail
        direct={false}
        image={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg "
        }
        title={"Have an Android Phone? Get our new free plan!"}
        text={
          "Watch a selection of new movies and TV shows without adding any payment details!."
        }
      />
      <Question />

      <div className={clsx(styles.formResgister, styles.padBot5)}>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className={clsx(styles.input)}>
          <input type="text" placeholder="Email address" />
          <button>Get Started </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
