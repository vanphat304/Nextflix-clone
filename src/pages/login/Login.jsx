import { Facebook } from "@material-ui/icons";
import Background from "../../component/Background";
import styles from "./login.module.scss";
import { useState } from "react";

function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    console.log("userlogin", userLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__contain}>
        <Background
          img={
            "https://assets.nflxext.com/ffe/siteui/vlv3/9737377e-a430-4d13-ad6c-874c54837c49/b320acf8-1419-4de5-bf62-1322be49a408/VN-en-20220111-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          }
        />
        <div className={styles.login__body}>
          <div className={styles.login__body__content}>
            <h1 className={styles.login__title}>Sign In</h1>
            <input
              name="email"
              className={styles.login__input}
              type="text"
              placeholder="Email or phone number"
              onChange={handleChange}
            />
            <input
              name="password"
              className={styles.login__input}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button onClick={handleLogin} className={styles.login__button}>
              Sign In
            </button>
            <div className={styles.help}>
              <div className={styles.help__remmem}>
                <input id="remem" type="checkbox" />
                <label htmlFor="remem">Remember me</label>
              </div>
              <p>Need help</p>
            </div>
            <div className={styles.login__facebook}>
              <Facebook className={styles.login__icon} />
              <span>Login with Facebook</span>
            </div>
            <p className={styles.login__linkToSigup}>
              New to Netflix? <a href=""> Sign up now.</a>
            </p>
            <span className={styles.login__detail}>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="">Learn more.</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
