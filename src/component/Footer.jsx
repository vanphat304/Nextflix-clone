import React from "react";
import clsx from "clsx";
import styles from "./footer.module.scss";
import { Language } from "@material-ui/icons";
import Background from "./Background";

function Footer() {
  return (
    <div className={clsx(styles.footer)}>
      <div className={clsx(styles.footer__content)}>
        <a className={clsx(styles.footer__content__title)}>
          Questions? Contact us.
        </a>
        <div className={clsx(styles.footer__content__items)}>
          <div className={clsx(styles.footerItem)}>
            <a href="">FAQ</a>
            <a href="">Investor Relations</a>
            <a href="">Privacy</a>
            <a href="">Speed Test</a>
          </div>
          <div className={clsx(styles.footerItem)}>
            <a href="">Help Center</a>
            <a href="">Jobs</a>
            <a href="">Cookie Preferences</a>
            <a href="">Legal Notices</a>
          </div>
          <div className={clsx(styles.footerItem)}>
            <a href="">Account</a>
            <a href="">Ways to Watch</a>
            <a href="">Corporate Information</a>
            <a href="">Only on Netflix</a>
          </div>
          <div className={clsx(styles.footerItem)}>
            <a href="">Media Center</a>
            <a href="">Terms of Use</a>
            <a href="">Contact Us</a>
          </div>
        </div>

        <div className={clsx(styles.button)}>
          <select name="" id="">
            <option value="vietnames">Tiếng việt</option>
            <option value="english">English</option>
          </select>
          <Language className={clsx(styles.button__icon)} />
        </div>

        <span className={clsx(styles.footer__banner)}>Netflix Vietnam</span>
      </div>
    </div>
  );
}

export default Footer;
