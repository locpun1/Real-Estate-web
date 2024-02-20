import React from "react";
import styles from "./GetStarted.module.scss";
import classname from "classnames/bind";

const cx = classname.bind(styles);

const GetStarted = () => {
    return (
        <section className={cx("getStarted-wrapper")} id="getStarted">
            <div
                className={cx(
                    "getStarted-container",
                    "paddings",
                    "inner-width"
                    // "flex-center"
                )}
            >
                <div className={cx("getStarted__content", "flex-col-center")}>
                    <h2 className={cx("getStarted-heading")}>
                        Get started with Homyz
                    </h2>
                    <p className={cx("getStarted-des", "secondary-text")}>
                        Subscribe and find super attractive price quotes from
                        us.
                        <br />
                        Find your residence soon
                    </p>
                    <button className={cx("getStarted-btn", "btn")}>
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
