import {
  ArrowDropDown,
  ArrowDropUp,
  Notifications,
  Search,
} from "@material-ui/icons";
import styles from "./header.module.scss";
import clsx from "clsx";
import { useState } from "react";

function Header() {
  const logo = process.env.PUBLIC_URL + "img/pngwing.com.png";
  const [backgroundheader, setBackgroundheader] = useState(false);
  window.onscroll = () => {
    setBackgroundheader(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div
      className={clsx(styles.header, {
        [styles.headerScroll]: backgroundheader,
      })}
    >
      <div className={clsx(styles.headerLeftWrap)}>
        <div className={clsx(styles.header__logo)}>
          <img src={logo} alt="logo" />
        </div>
        <div className={clsx(styles.header__navigation)}>
          <ul className={clsx(styles.header__navigation__list)}>
            <li>
              <a className={clsx(styles.active)} href="">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="">Phim T.hình</a>
            </li>
            <li>
              <a href="">Phim</a>
            </li>
            <li>
              <a href="">Mới & Phổ biến</a>
            </li>
            <li>
              <a href="">Danh Sách Của Tôi</a>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.header__naviMobile)}>
          <p>Duyệt tìm</p>
          <ul className={clsx(styles.mobileList)}>
            <li>
              <a className={clsx(styles.active)} href="">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="">Phim T.hình</a>
            </li>
            <li>
              <a href="">Phim</a>
            </li>
            <li>
              <a href="">Mới & Phổ biến</a>
            </li>
            <li>
              <a href="">Danh Sách Của Tôi</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={clsx(styles.headerRightWrap)}>
        <input id="inputSearch" type="checkbox" style={{ display: "none" }} />
        <label htmlFor="inputSearch" className={clsx(styles.icon)}>
          <Search />
        </label>
        <div className={clsx(styles.header__search)}>
          <label htmlFor="inputSearch" className={clsx(styles.header__icon)}>
            <Search />
          </label>
          <input
            autoFocus
            id="inputSearch"
            type="text"
            placeholder="Phim ,Diễn Viên , Thể Loại ..."
          />
        </div>
        <div className={clsx(styles.header__notifi)}>
          <Notifications />
          <ul id="customScroll" className={clsx(styles.header__notiList)}>
            <li className={clsx(styles.notiListItem)}>
              <img
                src="https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABalOB956OYCiwuk6u3nBhPriwlWURtnp4_To6dljABKK1S7-Hi0w36OWUvzlMiUWamc5QqFDiz-o8p2GRVzk-js.jpg?r=55e"
                alt=""
              />
              <div className={clsx(styles.notifiText)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                porro?
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li className={clsx(styles.notiListItem)}>
              <img
                src="https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABalOB956OYCiwuk6u3nBhPriwlWURtnp4_To6dljABKK1S7-Hi0w36OWUvzlMiUWamc5QqFDiz-o8p2GRVzk-js.jpg?r=55e"
                alt=""
              />
              <div className={clsx(styles.notifiText)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                porro?
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li className={clsx(styles.notiListItem)}>
              <img
                src="https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABalOB956OYCiwuk6u3nBhPriwlWURtnp4_To6dljABKK1S7-Hi0w36OWUvzlMiUWamc5QqFDiz-o8p2GRVzk-js.jpg?r=55e"
                alt=""
              />
              <div className={clsx(styles.notifiText)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                porro?
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li className={clsx(styles.notiListItem)}>
              <img
                src="https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABalOB956OYCiwuk6u3nBhPriwlWURtnp4_To6dljABKK1S7-Hi0w36OWUvzlMiUWamc5QqFDiz-o8p2GRVzk-js.jpg?r=55e"
                alt=""
              />
              <div className={clsx(styles.notifiText)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                porro?
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li className={clsx(styles.notiListItem)}>
              <img
                src="https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABalOB956OYCiwuk6u3nBhPriwlWURtnp4_To6dljABKK1S7-Hi0w36OWUvzlMiUWamc5QqFDiz-o8p2GRVzk-js.jpg?r=55e"
                alt=""
              />
              <div className={clsx(styles.notifiText)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                porro?
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.header__account)}>
          <img
            src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdBRbOWVhLZCyKhJt6E-CgDUiuZODIRXKHiSz7c-twoA0YaMWDX54E0dyu3KhA9XZm61tK6piiwpFeOHkDVeJZ0.png?r=a86"
            alt=""
          />
          <ArrowDropDown className={clsx(styles.header__account__Icon)} />
          {/* <ArrowDropUp /> */}
          <div className={clsx(styles.header__account__action)}>
            <ul className={clsx(styles.accountList)}>
              <li className={clsx(styles.accountList__item)}>
                <div className={clsx(styles.imgAccount)}>
                  <img
                    src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdBRbOWVhLZCyKhJt6E-CgDUiuZODIRXKHiSz7c-twoA0YaMWDX54E0dyu3KhA9XZm61tK6piiwpFeOHkDVeJZ0.png?r=a86"
                    alt=""
                  />
                  <span>phatdeptrai</span>
                </div>
              </li>
              <li className={clsx(styles.accountList__item)}>
                <div className={clsx(styles.imgAccount)}>
                  <img
                    src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdBRbOWVhLZCyKhJt6E-CgDUiuZODIRXKHiSz7c-twoA0YaMWDX54E0dyu3KhA9XZm61tK6piiwpFeOHkDVeJZ0.png?r=a86"
                    alt=""
                  />
                  <span>phat</span>
                </div>
              </li>
              <li className={clsx(styles.accountList__item)}>
                <div className={clsx(styles.imgAccount)}>
                  <img
                    src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdBRbOWVhLZCyKhJt6E-CgDUiuZODIRXKHiSz7c-twoA0YaMWDX54E0dyu3KhA9XZm61tK6piiwpFeOHkDVeJZ0.png?r=a86"
                    alt=""
                  />
                  <span>van</span>
                </div>
              </li>
              <li className={clsx(styles.accountList__item)}>
                <div className={clsx(styles.imgAccount)}>
                  <img
                    src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdBRbOWVhLZCyKhJt6E-CgDUiuZODIRXKHiSz7c-twoA0YaMWDX54E0dyu3KhA9XZm61tK6piiwpFeOHkDVeJZ0.png?r=a86"
                    alt=""
                  />
                  <span>nguyen</span>
                </div>
              </li>
            </ul>
            <ul className={clsx(styles.accountAction)}>
              <li>
                <a href="">tài khoản</a>
              </li>
              <li>
                <a href="">trung tâm trợ giúp</a>
              </li>
              <li>
                <a href="">đăng xuất khỏi nextflix</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
