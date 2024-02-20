import React from "react";
import styles from "./General.module.scss";
import classname from "classnames/bind";

import heroImg from "../../assets/images/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const cx = classname.bind(styles);

const General = () => {
    return (
        <section className={cx("general-wrapper")}>
            <div
                className={cx(
                    "general-container",
                    "paddings",
                    "flex-center",
                    "inner-width"
                )}
            >
                {/* Left side */}
                <div className={cx("general__left", "flex-col-start")}>
                    <div className={cx("general__left-title")}>
                        <span className={cx("orange-circle")} />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "sharing",
                            }}
                        >
                            Discover <br />
                            Most Suitable <br />
                            Property
                        </motion.h1>
                    </div>
                    <motion.div
                        className={cx("general__left-des", "secondary-text")}
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "sharing",
                        }}
                    >
                        <p>
                            Find a variety of properties that suit you very
                            easilty
                        </p>
                        <p>
                            Forget all difficulties in finding a residence for
                            you
                        </p>
                    </motion.div>
                    <div
                        className={cx("genral__left-search-bar", "flex-center")}
                    >
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" className={cx("search-input")} />
                        <button className={cx("btn")}>Search</button>
                    </div>
                    <div className={cx("general__left-stats", "flex-center")}>
                        <div className={cx("stat__item", "flex-col-center")}>
                            <span className={cx("stat__item-number")}>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span
                                className={cx(
                                    "stat__item-name",
                                    "secondary-text"
                                )}
                            >
                                Premium Product
                            </span>
                        </div>
                        <div className={cx("stat__item", "flex-col-center")}>
                            <span className={cx("stat__item-number")}>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span
                                className={cx(
                                    "stat__item-name",
                                    "secondary-text"
                                )}
                            >
                                Happy Customer
                            </span>
                        </div>
                        <div className={cx("stat__item", "flex-col-center")}>
                            <span className={cx("stat__item-number")}>
                                <CountUp start={3} end={28} duration={4} />
                                <span>+</span>
                            </span>
                            <span
                                className={cx(
                                    "stat__item-name",
                                    "secondary-text"
                                )}
                            >
                                Awards Winning
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className={cx("general__right", "flex-center")}>
                    <motion.div
                        className={cx("general__img-container")}
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "sharing",
                        }}
                    >
                        <img src={heroImg} alt="" className={cx("hero-img")} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default General;
