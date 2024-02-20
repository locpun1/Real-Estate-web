import React from "react";
import styles from "./Footer.module.scss";
import classname from "classnames/bind";
import logo2 from "../../assets/images/logo2.png";

const cx = classname.bind(styles);

const Footer = () => {
    return (
        <section className={cx("footer-wrapper")}>
            <div
                className={cx(
                    "footer-container",
                    "paddings",
                    "inner-width",
                    "flex-center"
                )}
            >
                {/* left side */}
                <div className={cx("footer__left", "flex-col-start")}>
                    <img
                        src={logo2}
                        alt="logo2"
                        className={cx("footer__left-logo")}
                    />
                    <p className={cx("footer__left-text", "secondary-text")}>
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </p>
                </div>

                {/* right side */}
                <div className={cx("footer__right", "flex-col-start")}>
                    <h2 className={cx("footer__right-heading", "primary-text")}>
                        Information
                    </h2>
                    <p
                        className={cx(
                            "footer__right-location",
                            "secondary-text"
                        )}
                    >
                        145 New York, FL 5467, USA
                    </p>
                    <ul className={cx("footer__menu-list", "flex-center")}>
                        <li className={cx("footer__menu-item")}>
                            <a
                                href="#"
                                className={cx("footer__menu-item-link")}
                            >
                                Property
                            </a>
                        </li>
                        <li className={cx("footer__menu-item")}>
                            <a
                                href="#"
                                className={cx("footer__menu-item-link")}
                            >
                                Services
                            </a>
                        </li>
                        <li className={cx("footer__menu-item")}>
                            <a
                                href="#"
                                className={cx("footer__menu-item-link")}
                            >
                                Product
                            </a>
                        </li>
                        <li className={cx("footer__menu-item")}>
                            <a
                                href="#"
                                className={cx("footer__menu-item-link")}
                            >
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
