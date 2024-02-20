import React, { useState } from "react";
import styles from "./Header.module.scss";
import classname from "classnames/bind";
import logo from "../../assets/images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler2 from "react-outside-click-handler";

const cx = classname.bind(styles);

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" };
        }
    };

    return (
        <section className={cx("header-wrapper")}>
            <div
                className={cx(
                    "header-container",
                    "flex-center",
                    "paddings",
                    "inner-width"
                )}
            >
                <img src={logo} alt="logo" className={cx("header-logo")} />
                <OutsideClickHandler2
                    onOutsideClick={() => setMenuOpened(false)}
                >
                    <nav className={cx("navbar")}>
                        <ul
                            className={cx("navbar__list", "flex-center")}
                            style={getMenuStyles(menuOpened)}
                        >
                            <li className={cx("navbar__item")}>
                                <a
                                    href="#residencies"
                                    className={cx("navbar__item-link")}
                                >
                                    Residencies
                                </a>
                            </li>
                            <li className={cx("navbar__item")}>
                                <a
                                    href="#value"
                                    className={cx("navbar__item-link")}
                                >
                                    Our Value
                                </a>
                            </li>
                            <li className={cx("navbar__item")}>
                                <a
                                    href="#contact"
                                    className={cx("navbar__item-link")}
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li className={cx("navbar__item")}>
                                <a
                                    href="#getStarted"
                                    className={cx("navbar__item-link")}
                                >
                                    Get Started
                                </a>
                            </li>
                            <button className={cx("btn", "btn-contact")}>
                                Contact
                            </button>
                        </ul>
                    </nav>
                </OutsideClickHandler2>

                <div
                    className={cx("menu-icon")}
                    onClick={() =>
                        setMenuOpened((prev) => {
                            console.log(prev);
                            const value = !prev;
                            console.log("curent:", value);
                            return value;
                        })
                    }
                >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
};

export default Header;
