import React from "react";
import styles from "./Contact.module.scss";
import classname from "classnames/bind";
import contactImg from "../../assets/images/contact.jpg";

import { MdCall } from "react-icons/md";
import {
    BsFillChatDotsFill,
    BsFillChatSquareFill,
    BsFillCameraVideoFill,
} from "react-icons/bs";

const cx = classname.bind(styles);

const Contact = () => {
    return (
        <section className={cx("contact-wrapper")} id="contact">
            <div
                className={cx(
                    "contact-container",
                    "paddings",
                    "inner-width",
                    "flex-center"
                )}
            >
                {/* left side */}
                <div className={cx("contact__left", "flex-col-start")}>
                    <p className={cx("contact__left-text", "orange-text")}>
                        Our Contact Us
                    </p>
                    <h2 className={cx("contact__left-heading", "primary-text")}>
                        Easy to contact us
                    </h2>
                    <p className={cx("contact__left-des", "secondary-text")}>
                        We always ready to help by providijng the best services
                        for you. We beleive a good blace to live can make your
                        life better
                    </p>

                    <div className={cx("contact__modes", "flex-col-start")}>
                        <div className={cx("flex-start", "row")}>
                            <div
                                className={cx(
                                    "flex-col-center",
                                    "contact__mode-item"
                                )}
                            >
                                <div
                                    className={cx(
                                        "flex-start",
                                        "contact__mode-item-heading"
                                    )}
                                >
                                    <div
                                        className={cx(
                                            "flex-center",
                                            "contact__icon"
                                        )}
                                    >
                                        <MdCall size={25} />
                                    </div>
                                    <div
                                        className={cx(
                                            "flex-col-start",
                                            "contact-detail"
                                        )}
                                    >
                                        <span>Call</span>
                                        <span className={cx("secondary-text")}>
                                            021 123 145 14
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={cx(
                                        "flex-center",
                                        "btn",
                                        "contact-btn"
                                    )}
                                >
                                    Call now
                                </div>
                            </div>
                            <div
                                className={cx(
                                    "flex-col-center",
                                    "contact__mode-item"
                                )}
                            >
                                <div
                                    className={cx(
                                        "flex-start",
                                        "contact__mode-item-heading"
                                    )}
                                >
                                    <div
                                        className={cx(
                                            "flex-center",
                                            "contact__icon"
                                        )}
                                    >
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div
                                        className={cx(
                                            "flex-col-start",
                                            "contact-detail"
                                        )}
                                    >
                                        <span>Chat</span>
                                        <span className={cx("secondary-text")}>
                                            021 123 145 14
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={cx(
                                        "flex-center",
                                        "btn",
                                        "contact-btn"
                                    )}
                                >
                                    Chat now
                                </div>
                            </div>
                        </div>

                        <div className={cx("flex-start", "row")}>
                            <div
                                className={cx(
                                    "flex-col-center",
                                    "contact__mode-item"
                                )}
                            >
                                <div
                                    className={cx(
                                        "flex-start",
                                        "contact__mode-item-heading"
                                    )}
                                >
                                    <div
                                        className={cx(
                                            "flex-center",
                                            "contact__icon"
                                        )}
                                    >
                                        <BsFillCameraVideoFill size={25} />
                                    </div>
                                    <div
                                        className={cx(
                                            "flex-col-start",
                                            "contact-detail"
                                        )}
                                    >
                                        <span>Video Call</span>
                                        <span className={cx("secondary-text")}>
                                            021 123 145 14
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={cx(
                                        "flex-center",
                                        "btn",
                                        "contact-btn"
                                    )}
                                >
                                    Video Call now
                                </div>
                            </div>
                            <div
                                className={cx(
                                    "flex-col-center",
                                    "contact__mode-item"
                                )}
                            >
                                <div
                                    className={cx(
                                        "flex-start",
                                        "contact__mode-item-heading"
                                    )}
                                >
                                    <div
                                        className={cx(
                                            "flex-center",
                                            "contact__icon"
                                        )}
                                    >
                                        <BsFillChatSquareFill size={25} />
                                    </div>
                                    <div
                                        className={cx(
                                            "flex-col-start",
                                            "contact-detail"
                                        )}
                                    >
                                        <span>Message</span>
                                        <span className={cx("secondary-text")}>
                                            021 123 145 14
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={cx(
                                        "flex-center",
                                        "btn",
                                        "contact-btn"
                                    )}
                                >
                                    Message now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className={cx("contact__right", "flex-end")}>
                    <div className={cx("contact__img-container")}>
                        <img
                            src={contactImg}
                            alt="contact-img"
                            className={cx("contact__img")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
